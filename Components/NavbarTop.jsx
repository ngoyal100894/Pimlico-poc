import Image from 'next/image';
import React from 'react';

const NavbarTop = () => {
	return (
		<div className="flex flex-row justify-between pl-44 pr-24 h-12">
			<div className="flex flex-row gap-8">
				<div className="flex flex-row gap-2 items-center">
					<Image
						className="self-center"
						src={'/assets/map-icon.svg'}
						width={20}
						height={20}
						alt={'Pimlico Tandoori'}
					/>
					<span className="text-white text-inter text-[16px]">
						38 Moreton Street, SW1V 2PB{' '}
					</span>
				</div>
				<div className="flex flex-row gap-2 items-center">
					<Image
						className="self-center"
						src={'/assets/phone-icon.svg'}
						width={20}
						height={20}
						alt={'Pimlico Tandoori'}
					/>
					<span className="text-white text-inter text-[16px]">
						0207 834 3375
					</span>
				</div>
			</div>
			<div className="flex flex-row gap-10">
				<div className="flex flex-row"></div>
				<div className="flex flex-row gap-4">
					<Image
						className="self-center"
						src={'/assets/fb-icon.svg'}
						width={16}
						height={16}
						alt={'facebook page'}
					/>
					<Image
						className="self-center"
						src={'/assets/tripadvisor-icon.svg'}
						width={16}
						height={16}
						alt={'facebook page'}
					/>

					<Image
						className="self-center"
						src={'/assets/yelp-icon.svg'}
						width={16}
						height={16}
						alt={'facebook page'}
					/>
					<Image
						className="self-center"
						src={'/assets/google-icon.svg'}
						width={16}
						height={16}
						alt={'facebook page'}
					/>
					<Image
						className="self-center"
						src={'/assets/yell-icon.svg'}
						width={16}
						height={16}
						alt={'facebook page'}
					/>
				</div>
				<div className="flex flex-row gap-2">
					<Image
						className="self-center"
						src={'/assets/flag.svg'}
						width={24}
						height={16}
						alt={'facebook page'}
					/>
					<Image
						className="self-center"
						src={'/assets/drop-arrow-white.svg'}
						width={20}
						height={20}
						alt={'facebook page'}
					/>
				</div>
			</div>
		</div>
	);
};

export default NavbarTop;
