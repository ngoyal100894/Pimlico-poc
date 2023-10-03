import React from 'react';
import CarouselCard from './CarouselCard';
import Slider from 'react-slick';

const ReviewsCarousel = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
	};
	return (
		<Slider {...settings}>
			<CarouselCard />
			<CarouselCard />
			<CarouselCard />
			<CarouselCard />
			<CarouselCard />
			<CarouselCard />
			<CarouselCard />
		</Slider>
	);
};

export default ReviewsCarousel;
