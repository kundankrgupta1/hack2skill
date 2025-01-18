import Button from "./Button"
import Multitype from "./Multitype"
const Hero = () => {
	const data = [
		{ img: "./check_circle.png", text: "cursur interger" },
		{ img: "./check_circle.png", text: "interger consequate" },
		{ img: "./check_circle.png", text: "telles euisomed pellentesque" },
		{ img: "./check_circle.png", text: "consequate fermentum" },
		{ img: "./check_circle.png", text: "cursur interger" },
		{ img: "./check_circle.png", text: "interger consequate" },
	]
	return (
		<div className="skew-bg-hero relative px-4 md:px-28 flex flex-col-reverse md:flex-row items-center justify-center gap-8 pb-48 md:pb-32">
			<div className="basis-2/4 flex flex-col gap-10">
				<div className="flex flex-col gap-2">
					<p className="font-bold uppercase text-[#F9B800] text-lg md:text-2xl">risus praesent vulputate.</p>
					<div className="font-bold text-2xl md:text-5xl capitalize flex flex-col gap-2">
						<Multitype />
					</div>
				</div>
				<div className="flex gap-2 flex-wrap">
					{data.map((item, index) => (
						<div
							key={index}
							className="w-fit bg-white rounded-full font-medium px-4 py-2 flex items-center justify-start gap-2 capitalize">
							<img src={item.img} alt="check" />
							<p>{item.text}</p>
						</div>
					))}
				</div>
				<Button
					text={"learn more"}
					icon_style={"text-grey-800"}
					style={"text-gray-800 bg-yellow-400 hover:shadow-[9px_9px] hover:border-2 hover:border-black hover:shadow-black"}
				/>
			</div>
			<div className="basis-2/4 flex items-center justify-center">
				<img src="./DrawKit Vector Illustration-1.png" alt="" className="w-72 md:w-full" />
			</div>
		</div>
	)
}

export default Hero