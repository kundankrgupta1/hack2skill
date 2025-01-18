import { IoMdArrowDropdown } from "react-icons/io"

const Navbar = () => {
	return (
		<div className="mx-4 md:mx-24 px-6 mt-14 bg-white py-1 rounded-full flex items-center justify-between">
			<div className="basis-2/4 flex justify-end items-center">
				<img src="./logo.png" alt="" />
			</div>
			<div className="flex items-center justify-center gap-2">
				<img src="./flag.png" alt="flag" className="w-7" />
				<IoMdArrowDropdown />
			</div>
		</div>
	)
}

export default Navbar;