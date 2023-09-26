import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Pilmico POC Wabsite',
	description: 'Best food in UK',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Navbar />
			<body className={inter.className}>{children}</body>
			<Footer />
		</html>
	);
}
