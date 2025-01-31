```javascript
import {unstable_getServerSession} from "next-auth/next";
import {authOptions} from "../pages/api/auth/[...nextauth]"; // Ensure correct path

export default async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  // Add some logging to see the session object
  console.log('Session:', session);
  return {
    props: {session},
  };
}
```