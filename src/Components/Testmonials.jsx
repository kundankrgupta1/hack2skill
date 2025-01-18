import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io"

const Testmonials = () => {
	return (
		<div className="mt-4 md:mt-0 mx-auto md:w-[1200px] w-[340px] bg-white p-4 md:p-16 md:flex justify-between items-center gap-8 rounded-3xl hover:bg-hover-bg hover:bg-cover hover:bg-center hover:bg-opacity-100">
			<div>
				<img src="./Rectangle 4200.png" alt="" className="rounded-full" />
			</div>
			<div className="flex flex-col gap-4">
				<h1 className="font-bold md:text-2xl">What our customers thought?</h1>
				<div className="flex flex-col gap-4">
					<p className="font-medium text-md">Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis.</p>
					<p>Holly Davidson</p>
				</div>
				<div className="flex justify-start items-center gap-4">
					<IoMdArrowBack />
					<IoMdArrowForward />
				</div>
			</div>
		</div>
	)
}

export default Testmonials