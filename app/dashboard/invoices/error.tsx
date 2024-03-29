'use client';

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (

    <main className="flex h-full flex-col items-center justify-center">

      <h2 className="text-center">Algo falló</h2>
      <button className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hove:bg-blue-400" onClick={() => reset()}>
        Try again
      </button>
    </main>
  )

}
