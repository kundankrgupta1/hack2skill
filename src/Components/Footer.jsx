import Button from "./Button"

const Footer = () => {
	return (
		<div className="flex flex-col gap-4 px-4 md:px-28">
			<div className="md:flex justify-between items-center">
				<h1 className="mb-8 font-bold text-4xl md:text-2xl">Vulputate et pulvinar ethre Suspendisse tellus consecteur</h1>
				<Button
					text={"learn more"}
					icon_style={"text-gray-800"}
					style={"text-gray-800 bg-[#F9B800] hover:shadow-[9px_9px] hover:border-2 hover:border-black hover:shadow-black"}
				/>
			</div>
			<div className="my-8 md:flex justify-between items-center border-t-2 pt-8 border-gray-400">
				<p>Copyright © 2022 Lorem Ipsum.</p>
				<p>Privacy Policy | Terms and Conditions</p>
			</div>
		</div>
	)
}

export default Footer