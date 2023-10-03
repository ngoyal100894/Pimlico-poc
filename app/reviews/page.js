import React from 'react';
import ReviewSection from '/Components/ReviewSection';
import HeroSection from '/Components/molecules/HeroSection';

const Reviews = () => {
	return (
		<div className="top-0">
			<HeroSection heading="What our customers say" />
			<ReviewSection />
		</div>
	);
};

export default Reviews;
