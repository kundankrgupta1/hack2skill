import { useEffect, useState } from "react";

const Multitype = () => {
	const [text, setText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [loopNum, setLoopNum] = useState(0);
	const [delta, setDelta] = useState(200);
	const period = 2000;

	useEffect(() => {
		const words = ["Consequate", "fermentum", "interger"];
		const handleTyping = () => {
			const i = loopNum % words.length;
			const fullTxt = words[i];
			setText((prevText) =>
				isDeleting ? fullTxt.substring(0, prevText.length - 1) : fullTxt.substring(0, prevText.length + 1)
			);
			let newDelta = isDeleting ? delta / 2 : 200 - Math.random() * 100;
			if (!isDeleting && text === fullTxt) {
				newDelta = period;
				setIsDeleting(true);
			} else if (isDeleting && text === "") {
				setIsDeleting(false);
				setLoopNum(loopNum + 1);
				newDelta = 500;
			}

			setDelta(newDelta);
		};

		const timer = setTimeout(handleTyping, delta);

		return () => clearTimeout(timer);
	}, [text, isDeleting, delta, loopNum]);

	return (
		<>
			<h1>cursus interger</h1>
			<h1>consequate {text}</h1>
		</>
	)
}

export default Multitype