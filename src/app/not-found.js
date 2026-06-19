import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-dvh bg-white text-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2">Page not found</p>
      <Link className="mt-4 text-pink-500" href="/">
        Go Home
      </Link>
    </main>
  );
}
