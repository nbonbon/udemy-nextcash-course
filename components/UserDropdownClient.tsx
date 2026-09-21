"use client";

import UserDropdown from "../app/user-dropdown";

/**
 * This wrapper exists because Clerk’s <Show> component is a Server Component.
 *
 * In Next.js App Router, Server Components cannot provide the client-side
 * router context required by `useRouter()`. Even though `UserDropdown` is
 * marked `"use client"`, placing it directly inside <Show> causes Next.js
 * to render it in a server-only boundary where the router is not mounted.
 *
 * That leads to the runtime error:
 *   "NextRouter was not mounted"
 *
 * By introducing this wrapper (a true Client Component), we create a proper
 * client boundary *inside* the <Show> block. Next.js can then mount the
 * router normally, and `useRouter()` inside UserDropdown works as expected.
 *
 * In short:
 *   <Show> = server-only
 *   UserDropdown = client-only
 *   This wrapper = safe client boundary between them
 */

export default function UserDropdownClient() {
  return <UserDropdown />;
}
