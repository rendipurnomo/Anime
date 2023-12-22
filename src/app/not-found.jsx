'use client';

import { useRouter } from "next/navigation";

const NotFound = () => {

  const router = useRouter();
  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };
  return (
    <div className="flex flex-col min-h-[calc(100vh-110px)] items-center justify-center">
      <h1 className="text-3xl font-bold">Not Found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
      <p className="text-lg">Please check the URL and try again.</p>
      <p className="text-lg">
        If you believe this is an error, please contact our support team.
      </p>
      <p className="text-lg">Thank you for your patience.</p>
      <button
        onClick={handleBack}
        className="bg-yellow-600 rounded-md text-white px-4 py-2">
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
