// const mdx = require('@mdx-js/mdx');
const dynamic = require('next/dynamic');
const mdx = dynamic(() => import('@mdx-js/mdx'));

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  transform: {
    mdx: (content) => mdx.sync(content),
  },
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
