export default {
  // NOTE: For nextjs apps, instead of BASE_URL, consider using NEXT_PUBLIC_VERCEL_URL
  // https://vercel.com/docs/concepts/projects/environment-variables#system-environment-variables
  baseUrl: process.env.BASE_URL ?? "http://localhost:3000",
  dbUrl: process.env.MONGO_DB ?? "mongodb://localhost:27017/cat-adoption",
  pages: {
    index: "/",
    ssr: "/ssr",
    login: "/login",
    app: {
      home: "/app",
    },
    adopt: "/adopt",
    admin: "/admin",
  },
  api: {
    example: "/api/example",
    user: {
      signUp: "/api/user/sign-up",
      login: "/api/user/login",
      logout: "/api/user/logout",
      getCurrent: "/api/user/get-current",
      adopt: "/api/adopt",
      adoption: "/api/adoption",
    },
  },
};
