# Next.js Auth Codebase Documentation

## Overview

This project implements authentication in a Next.js app using [NextAuth.js](https://next-auth.js.org/) with GitHub as the provider. The codebase is structured to separate authentication logic, UI components, and route protection.

---

## File Structure & Responsibilities

- **src/auth/auth.ts**

  - Sets up NextAuth with the GitHub provider.
  - Exports `handlers` for API routes, and utility functions: `signIn`, `signOut`, and `auth` for session management.

- **src/auth/auth.action.ts**

  - Defines server actions for login (`Login`) and logout (`LogOut`).
  - Uses NextAuth's `signIn` and `signOut` functions, redirecting users after each action.

- **src/app/api/auth/[...nextauth]/route.ts**

  - API route for NextAuth authentication endpoints.
  - Exposes `GET` and `POST` handlers from NextAuth for authentication callbacks.

- **src/components/SignInButton.tsx**

  - Client component rendering a button to trigger GitHub login via the `Login` action.

- **src/components/SignOutButton.tsx**

  - Client component rendering a button to trigger logout via the `LogOut` action.

- **src/app/page.tsx**

  - Home page displaying the `SignInButton`.

- **src/app/userinfo/page.tsx**

  - Protected page that displays authenticated user info (name, email, avatar) and a sign-out button.
  - Fetches the session using the `auth` utility.

- **src/middleware.ts**

  - Middleware to protect routes listed in `protectedRoutes` (e.g., `/userinfo`).
  - Redirects unauthenticated users to the sign-in page.

- **src/app/layout.tsx**

  - Root layout applying global fonts and styles.

- **src/app/globals.css**
  - Global CSS, imports Tailwind, and sets up color/font variables for light/dark mode.

---

## Authentication/Login Flow

1. **User visits the home page** (`/`):

   - Sees a "Github Login" button rendered by `SignInButton`.

2. **User clicks the login button**:

   - `SignInButton` calls the `Login` server action, which invokes NextAuth's `signIn` with GitHub as the provider.
   - User is redirected to GitHub to authenticate.

3. **GitHub authentication**:

   - After successful login, GitHub redirects the user back to the app (handled by NextAuth's API route).
   - The session is established and stored (usually in a cookie).

4. **Accessing a protected route** (`/userinfo`):

   - The `middleware.ts` checks if the user is authenticated using the `auth` utility.
   - If not authenticated, the user is redirected to the sign-in page.
   - If authenticated, the `userinfo/page.tsx` fetches the session and displays user info.

5. **User clicks the sign-out button**:
   - `SignOutButton` calls the `LogOut` server action, which invokes NextAuth's `signOut` and redirects to the home page.

---

## Notes

- **Session Management**: The `auth` utility from NextAuth is used both in middleware and in server components to check authentication status and fetch user info.
- **Route Protection**: Only routes listed in `protectedRoutes` in `middleware.ts` are protected by default.
- **Styling**: Tailwind CSS is used for utility-first styling, with custom variables for color and font.

---

## Extending Functionality

- To protect more routes, add their paths to the `protectedRoutes` array in `middleware.ts`.
- To add more authentication providers, update the `providers` array in `auth.ts`.

---

For more details, see the source code in each file.
