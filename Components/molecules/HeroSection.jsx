import React from 'react';

const HeroSection = ({ heading }) => {
	return (
		<div
			className={`h-[600px] w-full flex items-center justify-center bg-cover bg-center relative bg-[url('/assets/reviews-hero.png')] `}
		>
			<h1 className="text-center text-white text-[60px] font-bebas font-normal">
				{heading}
			</h1>
		</div>
	);
};

export default HeroSection;
