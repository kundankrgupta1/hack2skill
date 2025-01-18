import { FaArrowRightLong } from "react-icons/fa6";
import "./Button.css";
const Button = ({icon_style,text, style}) => {
	return (
		<button
			className={`py-4 px-10 rounded-full w-fit flex items-center justify-center gap-8 font-bold text-2xl ${style}`}
		>
			{text}
			<span className={`${icon_style}`} ><FaArrowRightLong /></span>
		</button>
	)
}

export default Button;
