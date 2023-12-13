"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex h-full flex-col items-center justify-center text-red-700">
      <h2 className="text-3xl font-bold text-center">Oops! Something went wrong!</h2>
      <h3 className='text-xl text-center'>{error.message}</h3>
      <p className='text-center'>Please try again or contact support if the problem persists.</p>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}