import Button from "./Button"
import "../App.css"
import Testmonials from "./Testmonials"
const Company = () => {
	return (
		<div className="relative w-full">
			<div className="skew-bg-company relative px-4 bg-black md:px-28 md:flex items-center justify-between gap-8 pb-[700px] md:pb-[600px]">
				<div className="basis-2/4 md:px-28 flex flex-col gap-8">
					<p className="md:font-thin text-yellow-500 text-xl font-medium md:text-sm">Quisque porttitor vitae vel amet neque scelerisque mattis. Consectetur nibh velit magna consectetur leo.</p>
					<h1 className="text-white font-bold text-4xl md:text-3xl">Cursus Integer Conseq Aliquam Tristique.</h1>
					<Button />
				</div>
				<div className="mt-4 md:mt-0 basis-2/4 md:flex gap-4 justify-center items-center">
					<div>
						<div className="bg-white rounded-3xl p-10 md:p-6 flex flex-col gap-8 border-2 border-white
							hover:bg-black hover:text-white hover:border-2 hover:border-white
						">
							<img src="./Icon-Images (1).png" alt="" className="w-10" />
							<h1 className="font-bold text-7xl md:text-4xl">1<span className="text-yellow-500">.</span></h1>
							<p className="font-bold text-4xl">phasellus Vite</p>
							<div className="flex flex-col text-xl">
								<p className="font-bold">Quiseqe</p>
								<p>Porttitor Vitae Vel Amet</p>
							</div>
						</div>
						<div className="mt-4 bg-[#F9B800] rounded-3xl p-10 md:p-6 flex flex-col gap-8 border-2 border-[#F9B800] hover:bg-black hover:text-white hover:border-2 hover:border-white">
							<img src="./Icon-Images (2).png" alt="" className="w-10" />
							<h1 className="font-bold text-7xl md:text-4xl">2<span className="text-white">.</span></h1>
							<p className="font-bold text-4xl">phasellus Vite</p>
							<div className="flex flex-col text-xl">
								<p className="font-bold">Quiseqe</p>
								<p>Porttitor Vitae Vel Amet</p>
							</div>
						</div>
					</div>
					<div className="mt-4 md:mt-20">
						<div className="mt-4 bg-[#F9B800] rounded-3xl p-10 md:p-6 flex flex-col gap-8 border-2 border-[#F9B800] hover:bg-black hover:text-white hover:border-2 hover:border-white">
							<img src="./Icon-Images.png" alt="" className="w-10" />
							<h1 className="font-bold text-7xl md:text-4xl">3<span className="text-white">.</span></h1>
							<p className="font-bold text-4xl">phasellus Vite</p>
							<div className="flex flex-col text-xl">
								<p className="font-bold">Quiseqe</p>
								<p>Porttitor Vitae Vel Amet</p>
							</div>
						</div>
						<div className="mt-4 bg-white rounded-3xl p-10 md:p-6 flex flex-col gap-8 border-2 border-white
							hover:bg-black hover:text-white hover:border-2 hover:border-white">
							<img src="./Icon-Images (3).png" alt="" className="w-10" />
							<h1 className="font-bold text-7xl md:text-4xl">4<span className="text-yellow-500">.</span></h1>
							<p className="font-bold text-4xl">phasellus Vite</p>
							<div className="flex flex-col text-xl">
								<p className="font-bold">Quiseqe</p>
								<p>Porttitor Vitae Vel Amet</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute top-[85%] md:top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
				<Testmonials />
			</div>
		</div>
	)
}

export default Company