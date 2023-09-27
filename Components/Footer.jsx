import React from 'react';
import FooterBottom from './FooterBottom';
import FooterMenu from './FooterMenu';
import FooterSignUp from './FooterSignUp';

const Footer = () => {
	return (
		<div className="flex flex-col">
			<FooterSignUp />
			<FooterMenu />
			<FooterBottom />
		</div>
	);
};

export default Footer;
