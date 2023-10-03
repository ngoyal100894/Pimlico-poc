'use client';
import React from 'react';
import Button from '../lib/buttons';
import Image from 'next/image';

const ReviewTabs = ({ tabIndex = 0, setTabIndex }) => {
	console.log(tabIndex);
	return (
		<div className="bg-[#E6E8EC] flex flex-col gap-11 rounded-md pb-11">
			<div className="flex flex-row gap-14 text-[061C3D] text-sm pt-6 border-b-[1px] border-gray-300">
				<div
					className={`font-sans ml-6 items-center flex flex-row cursor-pointer pb-5 ${
						tabIndex === 0
							? 'border-b-2 border-Primary-900 text-Primary-900 font-semibold'
							: ''
					}`}
					onClick={() => {
						setTabIndex(0);
					}}
				>
					<span>All Reviews (4.5)</span>
				</div>
				<div
					className={`flex flex-row gap-2 items-center cursor-pointer  pb-5 ${
						tabIndex === 1
							? 'border-b-2 border-Primary-900 text-Primary-900 font-semibold '
							: ''
					}`}
					onClick={() => {
						setTabIndex(1);
					}}
				>
					<Image
						className="self-center"
						src={'/assets/google-rounded.svg'}
						width={28}
						height={28}
						alt={'facebook page'}
					/>
					<span>Google (4.6)</span>
				</div>
				<div
					className={`flex flex-row gap-2 items-center cursor-pointer  pb-5 ${
						tabIndex === 2
							? 'border-b-2 border-Primary-900 text-Primary-900 font-semibold '
							: ''
					}`}
					onClick={() => {
						setTabIndex(2);
					}}
				>
					<Image
						className="self-center"
						src={'/assets/fb-rounded.svg'}
						width={28}
						height={28}
						alt={'facebook page'}
					/>
					<span>Facebook (4.6)</span>
				</div>
				<div
					className={`flex flex-row gap-2 items-center cursor-pointer  pb-5 ${
						tabIndex === 3
							? 'border-b-2 border-Primary-900 text-Primary-900 font-semibold '
							: ''
					}`}
					onClick={() => {
						setTabIndex(3);
					}}
				>
					<Image
						className="self-center"
						src={'/assets/tripadvisor-rounded.svg'}
						width={28}
						height={28}
						alt={'facebook page'}
					/>
					<span>Tripadvisor (4.6)</span>
				</div>
				<div
					className={`flex flex-row gap-2 items-center cursor-pointer  pb-5 ${
						tabIndex === 4
							? 'border-b-2 border-Primary-900 text-Primary-900 font-semibold '
							: ''
					}`}
					onClick={() => {
						setTabIndex(4);
					}}
				>
					<Image
						className="self-center"
						src={'/assets/yelp-rounded.svg'}
						width={28}
						height={28}
						alt={'facebook page'}
					/>
					<span>Yelp (3.5)</span>
				</div>
				<div
					className={`flex flex-row gap-2 items-center cursor-pointer  pb-5 ${
						tabIndex === 5
							? 'border-b-2 border-Primary-900 text-Primary-900 font-semibold '
							: ''
					}`}
					onClick={() => {
						setTabIndex(5);
					}}
				>
					<Image
						className="self-center"
						src={'/assets/yell-rounded.svg'}
						width={28}
						height={28}
						alt={'facebook page'}
					/>
					<span>Yell (3.5)</span>
				</div>
			</div>
			<div className="flex flex-row justify-between px-6 items-center">
				<div className="flex flex-col gap-7">
					<h2 className="font-semibold text-2xl">Overall Rating</h2>
					<div className="flex flex-row gap-2 items-center">
						<h2 className="font-semibold text-2xl">4.0</h2>
						<Image
							className="self-center"
							src={'/assets/stars.svg'}
							width={100}
							height={15}
							alt={'facebook page'}
						/>
						<span className="text-[#B3B3B3] text-sm">736 reviews</span>
					</div>
				</div>
				<Button className="text-base px-5" type="primary" onClick={() => {}}>
					Write a review
				</Button>
			</div>
		</div>
	);
};

export default ReviewTabs;
