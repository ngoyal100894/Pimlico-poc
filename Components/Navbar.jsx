'use client';
import React from 'react';
import Button from './lib/buttons';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
	const navigation = [
		{ name: 'Menu', href: '/menu' },
		{ name: 'Offers', href: '/offers' },
		{ name: 'Gallery', href: '/gallery' },
		{ name: 'Reviews', href: '/reviews' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' },
	];

	return (
		<div className="flex flex-row px-24 w-full font-inter h-24 bg-[#11202DA6] justify-between">
			<Image
				className="self-center"
				src={'/assets/logo.svg'}
				width={165}
				height={43}
				alt={'Pimlico Tandoori'}
			/>
			<div className="flex flex-row justify-between gap-8">
				<ul className="flex flex-row self-center gap-9 text-[14px] text-white">
					{navigation.map((navigationItem, index) => {
						return (
							<Link href={navigationItem.href} key={index}>
								<li>{navigationItem.name}</li>
							</Link>
						);
					})}
				</ul>
				<div className="flex flex-row self-center gap-3">
					<Button type="secondary" onClick={() => {}}>
						Book a Table
					</Button>
					<Button type="primary" onClick={() => {}}>
						Order Now
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
