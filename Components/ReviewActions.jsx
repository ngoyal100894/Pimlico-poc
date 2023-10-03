'use client';
import React from 'react';
import Button from './lib/buttons';

const ReviewActions = () => {
	return (
		<div className="flex flex-row self-center gap-3">
			<Button type="secondary" onClick={() => {}} className="py-2">
				Book a Table
			</Button>
			<Button type="primary" onClick={() => {}} className="py-1">
				Order Now
			</Button>
		</div>
	);
};

export default ReviewActions;
