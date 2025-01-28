'use client';

import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { useFormik } from 'formik';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
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
        <div className="max-w-2xl mx-auto p-4 space-y-6">
            <h1 className="text-2xl font-bold">Create New Blog Post</h1>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
                {Object.keys(formik.initialValues).map((key) => (
                    <div key={key} className="space-y-2">
                        <label htmlFor={key} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize">
                            {key.replace(/([A-Z])/g, ' $1')}
                        </label>
                        <Input
                            type={key === 'readingTime' ? 'number' : key === 'date' ? 'date' : 'text'}
                            id={key}
                            {...formik.getFieldProps(key)}
                            className={`${formik.touched[key] && formik.errors[key] ? 'border-red-500' : ''} dark:text-white`}
                        />
                        {formik.touched[key] && formik.errors[key] ? (
                            <p className="text-sm font-medium text-red-500">
                                {formik.errors[key]}
                            </p>
                        ) : null}
                    </div>
                ))}
                <Button type="submit" className="w-full">
                    Create Post
                </Button>
            </form>
        </div>
    );
}

