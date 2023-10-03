import Image from 'next/image';
import React from 'react';

const CarouselCard = ({
	name = 'Laura Richards',
	platform = 'google',
	review = 'I recently dined at Pimlico Tandoori and was disappointed with my experience. The food was mediocre and lacked flavor. The service was slow and inattentive. The atmosphere was uninviting and lacked character. I did not enjoy any of the dishes I tried and found the portions to be small for the price. Overall, I would not recommend this restaurant.',
	date = 'May 7',
}) => {
	return (
		<div className="px-5 py-6 border-[1px] rounded-md font-inter flex flex-col gap-5">
			<div className="py-3 border-b-[1px] flex flex-row justify-between">
				<div className="flex flex-row gap-3">
					<Image
						className="self-center"
						src={'/assets/Avatar.svg'}
						width={58}
						height={58}
						alt={'facebook page'}
					/>
					<div className="flex flex-col gap-1">
						<span className="font-semibold text-[16px]">{name}</span>
						<span className="text-[#838E9E] text-sm">{date}</span>
					</div>
				</div>
				<div className="w-8 h-8 rounded-sm p-1 bg-[#CDD2D8] self-center z-0">
					<Image
						className="self-center"
						src={'/assets/fb-rounded.svg'}
						height={24}
						width={24}
						alt={'facebook page'}
					/>
				</div>
			</div>
			<div>
				<Image
					className="self-center"
					src={'/assets/stars.svg'}
					width={100}
					height={15}
					alt={'facebook page'}
				/>
			</div>
			<div className="max-h-24 text-[14px] text-[#42526B] font-normal  overflow-scroll">
				{review}
			</div>
		</div>
	);
};

export default CarouselCard;
