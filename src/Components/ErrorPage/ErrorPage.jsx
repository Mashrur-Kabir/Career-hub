import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen bg-gray-100 transition-opacity duration-700 ${
        fadeIn ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Oops! Page not found</h2>
      <p className="text-lg text-gray-600 mb-8 text-center">
        The page you&apos;re looking for doesn&apos;t exist or an error occurred. <br /> Please check the URL or go back to the homepage.
      </p>
      <Link
        to="/"
        className="px-6 py-2 text-white bg-pink-500 rounded-md hover:bg-rose-600 transition-colors duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
