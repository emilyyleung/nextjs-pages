import Head from 'next/head';
import { useEffect } from 'react';
import prism from 'prismjs';
import 'prismjs/components/prism-python';

const BlogPage = ({ children, meta, maxWidth = 'max-w-3xl' }) => {
  useEffect(() => {
    prism.highlightAll();
  }, [children]);
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="px-4 bg-slate-50 dark:bg-slate-900 ">
        <div className="py-40 mx-auto">
          <h1 className="text-6xl text-center font-extrabold text-slate-900 dark:text-slate-100">
            {meta.title || 'Missing title'}
          </h1>
          <div
            className={`mt-16 mx-auto ${maxWidth} prose prose-cyan prose-slate dark:prose-invert`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
