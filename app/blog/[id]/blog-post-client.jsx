'use client';

import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import './blog-post.css';

export default function BlogPostClient({ initialPost, id }) {
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        if (id) {
            const repoName = 'blog-posts';
            const filePath = `${id}.md`;
            const url = `https://api.github.com/repos/marsianjohncarter/${repoName}/contents/${filePath}`;

            fetch(url, {
                headers: {
                    Accept: 'application/vnd.github.raw',
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(
                            `Error fetching file: ${response.statusText}`
                        );
                    }
                    return response.text();
                })
                .then((text) => {
                    setMarkdownContent(text);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, [id]);

    // Sanitize and render markdown content
    const unsafeHtmlContent = marked(markdownContent);
    const safeHtmlContent = DOMPurify.sanitize(unsafeHtmlContent);

    if (!initialPost) {
        return <div>Loading...</div>;
    }

    return (
        <div id="blog" className="max-w-3xl lg:mx-auto mx-10">
            <div className="flex justify-center mb-8 overflow-hidden">
                <Image
                    src={initialPost.imageUrl}
                    alt={initialPost.title}
                    width={600}
                    height={400}
                    className="rounded-3xl shadow-sm aspect-3/2  hover:scale-105 transition-all duration-100 ease-linear"
                />
            </div>
            <div className="grid grid-cols-2 mb-20">
                <span className="flex items-center space-x-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-pen-tool mr-2"
                    >
                        <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
                        <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
                        <path d="m2.3 2.3 7.286 7.286" />
                        <circle cx="11" cy="11" r="2" />
                    </svg>
                    {initialPost.author}
                </span>
                <span>{initialPost.date}</span>
            </div>
            <div
                dangerouslySetInnerHTML={{ __html: safeHtmlContent }}
                className="text-black dark:text-white"
            />
        </div>
    );
}
