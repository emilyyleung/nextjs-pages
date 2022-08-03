# NextJS deployed on Github Pages

## Features:

- TailwindCSS
- NextJS project setup for Github Pages deployment - https://www.youtube.com/watch?v=dalXCXCIPHM
- Github deploy workflow file referenced from - https://github.com/marketplace/actions/deploy-to-github-pages
- Syntax highlighting - https://mxd.codes/articles/syntax-highlighting-with-prism-and-next-js

## Note:

- `.env` file is using NextJS's way of exposing environment variables - by adding "NEXT_PUBLIC\_" at the beginning of the name to then be accessible in the browser without setting them on server
- Replace `/nextjs-pages` with your repository name

## Guide

1. Run `npm run build` to test success on build
2. Run `npm run export` to test success on export to `out` folder
3. Push changes to `main` branch in order for deployment to run
