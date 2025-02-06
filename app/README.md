1. The app is created by the command:

```bash
npx create-next-app@latest
```

The installation procedures are as follows:

```bash
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like your code inside a `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to use Turbopack for `next dev`?  No / Yes
Would you like to customize the import alias (`@/*` by default)? No / Yes
What import alias would you like configured? @/*
```

2. Next.js require following depedencies

```bash
npm install next@latest react@latest react-dom@latest
```

3. The Next.js commands can be invoked with ```$npm``` and following keys:

```bash
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

4. The ```layout.tsx``` in ```/app``` contains the entrypoint of the Next.js applicaiton. The variable ```children``` refers the code in the page.tsx file. If there some new paths created in ```/app``` then they'll construct the route for navigation from the root as the filesystem.

5. The path ```public``` is for Static assets whereas the pictures in the path can be directly sourced.



