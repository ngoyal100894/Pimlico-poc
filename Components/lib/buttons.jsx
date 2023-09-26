//Button type: primary | secondary
//Button className(tailwing classes): p-4 | p-2.5 | p-1.5 (padding is need)
export default function Button({
	children,
	type = 'primary',
	className = '',
	onClick,
}) {
	return (
		<>
			{type === 'primary' ? (
				<div className="relative">
					<button
						onClick={(e) => {
							onClick === null || onClick === void 0 ? void 0 : onClick(e);
						}}
						className={`flex  flex-row items-center rounded-md px-5 py-4 font-semibold bg-Primary-900  text-white text-xs  ${className} `}
					>
						<span className="flex  flex-row items-center">{children}</span>
					</button>
				</div>
			) : null}
			{type === 'outline' ? (
				<div className="relative">
					<button
						onClick={(e) => {
							onClick === null || onClick === void 0 ? void 0 : onClick(e);
						}}
						className={`border-1 flex cursor-pointer flex-row items-center rounded-md border bg-transparent p-2.5 tex-sm font-semibold border-Primary-500  text-Primary-500 hover:border-Primary-400 hover:text-Primary-400 active:border-Primary-600 active:text-Primary-600 ${className}`}
					>
						<span className="flex flex-row items-center">{children}</span>
					</button>
				</div>
			) : null}
			{type === 'secondary' ? (
				<button
					onClick={(e) => {
						onClick === null || onClick === void 0 ? void 0 : onClick(e);
					}}
					className={`flex flex-row items-center rounded-md tex-sm font-semibold bg-Secondary-900 text-white text-xs p-4 ${className}`}
				>
					{children}
				</button>
			) : null}
		</>
	);
}
