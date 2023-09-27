import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FooterMenu = () => {
	return (
		<div className="bg-white flex flex-col ">
			<div className="px-24 py-5 flex flex-row justify-between items-center border-b-[1px]">
				<div className="self-center flex flex-row gap-2">
					<Image
						className="self-center"
						src={'/assets/flag.svg'}
						width={24}
						height={16}
						alt={'facebook page'}
					/>
					<span className="text-[#061C3D] text-sm font-inter self-center ">
						United Kingdom
					</span>
					<Image
						className="self-center"
						src={'/assets/drop-arrow-black.svg'}
						width={20}
						height={20}
						alt={'facebook page'}
					/>
				</div>
				<div className="flex flex-row gap-3 self-center">
					<Image
						className="self-center"
						src={'/assets/tripadvisor-filled.svg'}
						width={40}
						height={40}
						alt={'social media'}
					/>
					<Image
						className="self-center"
						src={'/assets/fb-filled.svg'}
						width={40}
						height={40}
						alt={'social media'}
					/>

					<Image
						className="self-center"
						src={'/assets/yelp-filled.svg'}
						width={40}
						height={40}
						alt={'social media'}
					/>
					<Image
						className="self-center"
						src={'/assets/google-filled.svg'}
						width={40}
						height={40}
						alt={'social media'}
					/>
					<Image
						className="self-center"
						src={'/assets/yell-filled.svg'}
						width={40}
						height={40}
						alt={'social media'}
					/>
				</div>
			</div>
			<div className="flex flex-row justify-around px-24 py-5">
				<div className="flex flex-col gap-4 max-w-xs">
					<Link href={'/'} className="cursor-pointer ">
						<Image
							src={'/assets/logo-black.svg'}
							width={165}
							height={43}
							alt={'Pimlico Tandoori'}
						/>
					</Link>
					<p className="text-[#061C3D] text-[14px] font-sans">
						Cusine’s takes pride in the way that we can furnish our new and
						faithful clients with extraordinary tasting Indian-roused
						nourishment that is not normal for that some other Indian eateries
						you visit.
					</p>
					<div className="flex flex-row gap-2 text-[#42526B] text-[14px]">
						<span>Privacy Policy</span>
						<span>.</span>
						<span>Terms & Conditions</span>
						<span>.</span>
						<span>Sitemap</span>
					</div>
				</div>
				<div className="flex flex-col gap-6 max-w-xs">
					<h2 className="text-black text-[14px] font-medium font-lexend">
						Quick Links
					</h2>
					<div className="flex flex-col text-[#42526B] gap-1 text-[12px]">
						<div className="flex flex-row ">
							<span className="p-2 w-28">About us</span>
							<span className="p-2 w-28">Contact us</span>
						</div>
						<div className="flex flex-row ">
							<span className="p-2 w-28">Our Menu</span>
							<span className="p-2 w-28">Order Now</span>
						</div>
						<div className="flex flex-row ">
							<span className="p-2 w-28">Book a table</span>
							<span className="p-2 w-28">Offers</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col max-w-xs">
					<span className="font-medium text-black text-sm font-lexend">
						Download the app
					</span>
					<span className="text-xs text-[#344054] mt-1 font-normal font-inter">
						Get 20% off your first order
					</span>
					<Image
						src={'/assets/qr code.png'}
						width={330}
						height={180}
						alt={'Pimlico Tandoori'}
						className="mt-2 -ml-1"
					/>
				</div>
				<div className="flex flex-col gap-5">
					<Image
						src={'/assets/hygeine.png'}
						width={149}
						height={64}
						alt={'Pimlico Tandoori'}
						className="mt-2 -ml-1"
					/>
					<Image
						src={'/assets/img-hygeine.png'}
						width={193}
						height={97}
						alt={'Pimlico Tandoori'}
						className="mt-2 -ml-1"
					/>
				</div>
			</div>
		</div>
	);
};

export default FooterMenu;
