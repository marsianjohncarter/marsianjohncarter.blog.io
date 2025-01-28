'use client';

import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './styles.css';

export default function CreateBlog() {
    const supabase = createClient();
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            imageUrl: '',
            author: '',
            id: '',
            date: '',
            readingTime: 0,
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Title is required'),
            description: Yup.string().required('Description is required'),
            imageUrl: Yup.string().url('Invalid URL').required('Image URL is required'),
            author: Yup.string().required('Author is required'),
            id: Yup.string().required('ID is required'),
            date: Yup.date().required('Date is required'),
            readingTime: Yup.number().min(0, 'Reading time must be at least 0').required('Reading time is required'),
        }),
        onSubmit: async (values) => {
            const { title, description, imageUrl, author, id, date, readingTime } = values;

            try {
                await supabase.from('blogposts').insert([{ title, description, imageUrl, author, date, readingTime, id, views: 0 }]);
                // Ensure router.push happens after the async operation completes
                router.push('/blog');
            } catch (error) {
                console.error('Error creating blog post:', error);
            }
        },
    });

    return (
        <div className="max-w-2xl mx-auto p-4 text-black dark:text-white pb-40">
            <h1 className="text-2xl font-bold mb-4">Create New Blog Post</h1>
            <form onSubmit={formik.handleSubmit}>
                {Object.keys(formik.initialValues).map((key) => (
                    <div className="mb-4" key={key}>
                        <label htmlFor={key} className="block mb-2 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                        <input
                            type={key === 'readingTime' ? 'number' : key === 'date' ? 'date' : 'text'}
                            id={key}
                            {...formik.getFieldProps(key)}
                            className="w-full p-2 border rounded"
                            required
                        />
                        {formik.touched[key] && formik.errors[key] ? (
                            <div className="text-red-500 text-sm">{formik.errors[key]}</div>
                        ) : null}
                    </div>
                ))}
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Create Post
                </button>
            </form>
        </div>
    );
}

