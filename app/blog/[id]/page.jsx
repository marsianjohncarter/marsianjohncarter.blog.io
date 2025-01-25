'use client';

import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getPost } from '@/lib/supabaseClient';
import Highlight from 'react-highlight';

import './blog-post.css';

// TODO: Highlight code blocks
// const customRenderer = new marked.Renderer();

// customRenderer.code = (code) => {
//     console.log(code)
//   // Ensure code.lang exists, default to "plaintext" if not provided
//   const langClass = code.lang ? code.lang : 'plaintext';

//   // Use code.text to access the raw content of the code block
//   return <Highlight class={`language-${langClass}`}>{code.text}</Highlight>;
// };

// // Configure marked with the custom renderer
// marked.setOptions({
//   renderer: customRenderer,
//   gfm: true, // Enables GitHub Flavored Markdown
//   breaks: true, // Line breaks as <br>
// });

// const customRenderer = new marked.Renderer();

// customRenderer.code = (code) => {
//   // Use the language provided in the 'lang' property or default to 'plaintext'
//   const langClass = code.lang ? `language-${code.lang}` : 'language-plaintext';

//   // Return the Highlight component with the raw text
//   return (
//     <Highlight className={langClass}>
//       {code.text}
//     </Highlight>
//   );
// };

// // Configure marked with the custom renderer
// marked.setOptions({
//   renderer: customRenderer,
//   gfm: true, // Enables GitHub Flavored Markdown
//   breaks: true, // Line breaks as <br>
// });

export default function BlogPost() {
    const pathname = usePathname();
    const id = pathname.split('/').pop();

    const post = getPost(id);

    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        if (id) {
            const repoName = 'blog-posts';
            const filePath = `${id}.md`;
            const url = `https://api.github.com/repos/marsianjohncarter/${repoName}/contents/${filePath}`; // Make sure to define the URL for fetching the markdown content.

            fetch(url, {
                headers: {
                    Accept: 'application/vnd.github.raw',
                    // 'Authorization': 'Bearer YOUR_GITHUB_TOKEN' // Uncomment and replace with your token if needed
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Error fetching file: ${response.statusText}`);
                    }
                    return response.text();
                })
                .then((text) => {
                    setMarkdownContent(text);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        } else {
            console.log('No id provided');
        }
    }, [id]);



    // Sanitize and render markdown content
    const unsafeHtmlContent = marked(markdownContent);
    const safeHtmlContent = DOMPurify.sanitize(unsafeHtmlContent);

    return (
        <div id="blog" className="pt-20 p-10 lg:pl-96 lg:pr-96 md:pl-28 md:pr-28">
            <Image
                src={post.imageUrl}
                alt={post.title}
                width={600}
                height={400}
                className="rounded-md shadow-sm aspect-3/2 border dark:border-gray-700"
            />
            <div className="grid grid-cols-2  mb-20">
                <span>
                    {post.author}
                </span>
                <span>
                    {post.date}
                </span>
            </div>
            <div
                dangerouslySetInnerHTML={{ __html: safeHtmlContent }}
                className="text-black dark:text-white"
            />
        </div>
    );
}
