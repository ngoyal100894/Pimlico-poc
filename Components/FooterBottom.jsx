import Image from 'next/image';
import React from 'react';

const FooterBottom = () => {
	return (
		<div className=" bg-[#E6E8EC] px-24 py-5 flex flex-row justify-between items-center">
			<div className="flex flex-row gap-3 self-center">
				<Image
					className="self-center"
					src={'/assets/Visa.svg'}
					width={30}
					height={20}
					alt={'Payment method Visa'}
				/>
				<Image
					className="self-center"
					src={'/assets/MasterCard.svg'}
					width={30}
					height={20}
					alt={'Payment method MasterCard'}
				/>

				<Image
					className="self-center"
					src={'/assets/Paypal.svg'}
					width={30}
					height={20}
					alt={'Payment method Paypal'}
				/>
				<Image
					className="self-center"
					src={'/assets/GooglePay.svg'}
					width={30}
					height={20}
					alt={'Payment method GooglePay'}
				/>
				<Image
					className="self-center"
					src={'/assets/ApplePay.svg'}
					width={30}
					height={20}
					alt={'Payment method ApplePay'}
				/>
				<Image
					className="self-center"
					src={'/assets/Amex.svg'}
					width={30}
					height={20}
					alt={'Payment method Amex'}
				/>
			</div>
			<span className="self-center text-[#061C3D] text-sm font-inter">
				Copyright © 2023 Pimlico Tandoori
			</span>
			<div className="self-center flex flex-row gap-2">
				<span className="text-[#061C3D] text-sm font-inter self-center ">
					Powered by
				</span>
				<Image
					className="self-center"
					src={'/assets/logo.png'}
					width={72}
					height={21}
					alt={'facebook page'}
				/>
			</div>
		</div>
	);
};

export default FooterBottom;
