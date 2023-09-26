'use client';
import React from 'react';

const page = () => {
	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<h1 className="text-3xl font-bold text-gray-700">404 - Page Not Found</h1>
			<p className="text-gray-500">
				The page you are looking for does not exist.
			</p>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				onClick={() => router.push('/')}
			>
				Go Home
			</button>
		</div>
	);
};

export default page;
