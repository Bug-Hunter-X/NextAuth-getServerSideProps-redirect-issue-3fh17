# NextAuth getServerSideProps Redirect Issue

This repository demonstrates a bug encountered when using `unstable_getServerSession` within `getServerSideProps` in Next.js with NextAuth.js.  Even when a user is authenticated, the code redirects to the login page.

## Bug Description

The provided code snippet attempts to check for user authentication using `unstable_getServerSession`. If the session is null, it redirects to the `/login` page. However, it consistently redirects to login, even for authenticated users.

## Solution

A possible solution involves ensuring the correct path to your `authOptions` is used and ensuring your NextAuth configuration is correctly set up.  The correct functioning of `unstable_getServerSession` depends on these configurations being in place.

## How to reproduce
1. Clone this repository.
2. Install dependencies: `npm install`
3. Run Next.js development server: `npm run dev`
4. Attempt to access the protected route; observe the redirect behavior.

## Potential Causes:
* **Incorrect `authOptions` path:** Double-check the path to your `authOptions` in `getServerSideProps`.
* **Missing or incorrect NextAuth configuration:** Verify the configuration in your `pages/api/auth/[...nextauth].js` file.
* **Caching issues:** Try clearing your browser cache and cookies.