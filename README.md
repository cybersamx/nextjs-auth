# Next.js Auth

A simple, clean starter web app project with Next.js, React, and Bootstrap.

# Setup

1. Go to <https://generate-secret.vercel.app/32> to generate a secret for NextAuth.js.

1. Create a `.env` file.

   ```shell
   $ cp .env.example
   $ vi .env  # Enter the secret you created from the previous step as NEXTAUTH_SECRET
   ```

1. Run the app and go to <http://localhost:3000>

   ```shell
   $ npm install
   $ npm run dev
   ```

## References

* [Next.js: Building your application](https://nextjs.org/docs/getting-started/installation)
* [Github: nextjs-mysql-auth-starter](https://github.com/vercel/nextjs-mysql-auth-starter)
* [NextAuth.js](https://next-auth.js.org/)
