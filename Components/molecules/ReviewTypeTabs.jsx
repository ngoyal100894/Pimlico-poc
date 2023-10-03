'use client';
import React from 'react';
import Button from '../lib/buttons';

const ReviewTypeTabs = () => {
	return (
		<div className="bg-[#E6E8EC] flex flex-col gap-11 px-3 rounded-sm pb-11">
			<div className="flex flex-row gap-14 text-[061C3D] text-sm py-6 border-b-2">
				<div className="flex flex-row font-sans">
					<span>All Reviews (4.5)</span>
				</div>
				<div className="flex flex-row">
					<span>Google (4.6)</span>
				</div>
				<div className="flex flex-row">
					<span>Facebook (4.6)</span>
				</div>
				<div className="flex flex-row">
					<span>Tripadvisor (4.6)</span>
				</div>
				<div className="flex flex-row">
					<span>Yelp (3.5)</span>
				</div>
				<div className="flex flex-row">
					<span>Yell (3.5)</span>
				</div>
			</div>
			<div className="flex flex-row justify-between">
				<div></div>
				<Button type="primary" onClick={() => {}}>
					Write a reviews
				</Button>
			</div>
		</div>
	);
};

export default ReviewTypeTabs;
