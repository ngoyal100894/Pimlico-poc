import React from 'react';

const HeroSection = ({ imageSRC, heading }) => {
	const imageUrl = `/assets/${imageSRC}`;
	console.log(imageUrl);
	return (
		<div
			className={`h-[701px] w-full flex items-center justify-center bg-cover bg-center relative bg-[url('/assets/reviews-hero.png')] `}
		>
			<h1 className="text-center text-white text-[80px] font-bebas font-normal">
				{heading}
			</h1>
		</div>
	);
};

export default HeroSection;
