'use client';
import React, { useState } from 'react';
import Button from './lib/buttons';
import Input from './lib/Input';

const FooterSignUp = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	return (
		<div className="flex flex-row justify-between px-24 py-6 bg-[#FFF3E6]">
			<span className="text-[#061C3D] text-[16px] w-96 text-center self-center">
				Never miss an offer - sign up for our promos plus enjoy <b>20% off</b>{' '}
				your first order
			</span>
			<div className="flex flex-col gap-1">
				<div className="flex flex-row gap-3">
					<Input
						placeholder="First name"
						value={firstName}
						setValue={setFirstName}
					/>
					<Input
						placeholder="Last name"
						value={lastName}
						setValue={setLastName}
					/>
					<Input placeholder="Email" value={email} setValue={setEmail} />
					<Button type="success" className="h-10">
						Sign up now
					</Button>
				</div>
				<span className="text-[8px] text-[#838E9E] self-end mr-1">
					Read our <u>privacy policy</u>
				</span>
			</div>
		</div>
	);
};

export default FooterSignUp;
