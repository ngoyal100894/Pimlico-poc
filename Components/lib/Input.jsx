'use client';
import React from 'react';

const Input = ({ placeholder, className, value, setValue }) => {
	const handleChange = (event) => {
		setValue(event.target.value);
	};
	return (
		<input
			className={`bg-white border-[1px] border-[#E6E8EC] py-1 px-2 rounded-md ${className} text-black text-xs h-10`}
			placeholder={placeholder}
			onChange={handleChange}
			value={value}
		/>
	);
};

export default Input;
