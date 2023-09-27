'use client';
import React, { useEffect, useState } from 'react';
import Button from './lib/buttons';
import Image from 'next/image';
import Link from 'next/link';
import NavbarTop from './NavbarTop';
import { usePathname } from 'next/navigation';

const Navbar = () => {
	const pathname = usePathname();
	const navigation = [
		{ name: 'Menu', href: '/menu' },
		{ name: 'Offers', href: '/offers' },
		{ name: 'Gallery', href: '/gallery' },
		{ name: 'Reviews', href: '/reviews' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' },
	];
	const [isSticky, setIsSticky] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setIsSticky(true);
		} else {
			setIsSticky(false);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={`flex flex-col w-full z-50 fixed`}>
			<NavbarTop />
			<nav
				className={`flex flex-row font-inter h-20 bg-[#11202DA6] justify-between px-24 ${
					isSticky ? 'sticky top-0 ' : ''
				}`}
			>
				<Link href={'/'} className="cursor-pointer self-center">
					<Image
						src={'/assets/logo.svg'}
						width={165}
						height={43}
						alt={'Pimlico Tandoori'}
					/>
				</Link>
				<div className="flex flex-row justify-between gap-8">
					<ul className="flex flex-row self-center gap-9 text-[14px] text-white pt-4">
						{navigation.map((navigationItem, index) => {
							return (
								<Link
									href={navigationItem.href}
									key={index}
									className="cursor-pointer"
								>
									<li
										className={`${
											pathname.includes(navigationItem.href)
												? ' border-b-2 border-Primary-900 text-Primary-900 pb-4'
												: ''
										}`}
									>
										{navigationItem.name}
									</li>
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
			</nav>
		</div>
	);
};

export default Navbar;
