import React from 'react';

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
            <p className="text-gray-600 mb-8">Oops! The page you're looking for does not exist.</p>
            <img
                src="https://img.freepik.com/free-vector/tiny-people-examining-operating-system-error-warning-web-page-isolated-flat-illustration_74855-11104.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=ais"
                alt="Error 404"
                className="w-64 h-64 mb-8"
            />
            <a
                href="/"
                className="text-rose-500 hover:underline"
            >
                Back to Home
            </a>
        </div>
    );
};

export default ErrorPage;
