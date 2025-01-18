import "../App.css";
import Button from "./Button";
const CompanyTwo = () => {
	return (

		<div className="skew-bg relative bg-[#F9B800] px-4 md:px-28 flex flex-col-reverse md:flex-row m-auto items-center justify-between gap-8 pb-44 md:pb-36">
			<div className="basis-2/4 flex flex-col gap-16 md:pr-44">
				<h1 className="flex items-center flex-wrap text-2xl md:text-4xl font-bold capitalize">
					Phasellus a vitae iaculis magna eleifend pulvinar velit odio
				</h1>
				<div className="flex flex-col gap-2">
					<h3 className="font-bold underline">Vulputate et vulputate suspendisse natoque!</h3>
					<p>Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis vulputate et vulputate suspendisse natoque id tellus consectetur pulvinar et.</p>
				</div>
				<Button
					text={"learn more"}
					icon={"./icon.svg"}
					style={"text-white bg-black hover:shadow-[9px_9px] hover:border-2 hover:border-white hover:shadow-white"}
				/>
			</div>
			<div className="basis-2/4 flex items-center justify-center">
				<img src="./DrawKit Vector Illustration-2.png" alt="" />
			</div>
		</div>

	)
}

export default CompanyTwo;