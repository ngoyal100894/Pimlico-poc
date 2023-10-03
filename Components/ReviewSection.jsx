import Image from 'next/image';
import React from 'react';
import ReviewTypeTabs from './molecules/reviewTypeTabs';
import ReviewActions from './ReviewActions';
import ReviewsCarousel from './ReviewsCarousel';

const ReviewSection = () => {
	return (
		<>
			<section className="h-screen w-full bg-white text-black py-14 px-14 flex flex-col gap-11 font-inter">
				<ReviewTypeTabs />
				<ReviewsCarousel />
				<ReviewActions />
			</section>
			<section className="h-[455px] bg-[#F5F6F7] py-12 px-72 flex flex-col">
				<div className="w-5/12 flex flex-col gap-10 self-center  ">
					<span className="font-bebas text-[36px] text-[#061C3D] self-center">
						OPENING HOURS
					</span>
					<div className="flex flex-col">
						<span className="text-black self-center text-lg">
							Monday - Sunday
						</span>
						<hr className="my-4" />
						<div className="flex flex-col self-center text-black font-inter text-lg w-full gap-4">
							<div className="flex flex-row justify-between">
								<span>Lunch</span>
								<span>12:00 - 14:30</span>
							</div>
							<div className="flex flex-row justify-between">
								<span>Dinner</span>
								<span>17:00 - 23:30</span>
							</div>
						</div>
					</div>
				</div>
				<hr className="my-6" />
				<div className="w-5/12 text-black flex flex-row justify-stretch self-center text-base gap-6">
					<div className="flex flex-col gap-2">
						<Image
							className="self-center"
							src={'/assets/bag.svg'}
							width={32}
							height={32}
							alt={'facebook page'}
						/>
						<span className="self-center text-center">Collection Takeout</span>
					</div>
					<div className="flex flex-col gap-2 mt-1">
						<Image
							className="self-center"
							src={'/assets/delivery.svg'}
							width={32}
							height={32}
							alt={'facebook page'}
						/>
						<span className="self-center text-center">Delivery</span>
					</div>
					<div className="flex flex-col gap-2 mt-2">
						<Image
							className="self-center"
							src={'/assets/dine.svg'}
							width={32}
							height={32}
							alt={'facebook page'}
						/>
						<span className="self-center text-center">Dine-in pre order</span>
					</div>
					<div className="flex flex-col gap-2">
						<Image
							className="self-center"
							src={'/assets/calendar.svg'}
							width={32}
							height={32}
							alt={'facebook page'}
						/>
						<span className="self-center text-center">Book Table</span>
					</div>
				</div>
			</section>
		</>
	);
};

export default ReviewSection;
