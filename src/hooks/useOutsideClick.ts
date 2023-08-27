import { useEffect, useRef } from "react";

const useOutsideClick = (callback: () => void) => {
	const ref = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event: any) => {
			if (ref.current) {
				if (!(ref.current as any).contains(event.target)) {
					// console.log("Clicking outside:", event.target);
					callback();
				} else if (event.target.id === "searchEvent") {
					// console.log("Clicking searchEvent");
				} else {
					// console.log("Clicking outside:", event.target);
				}
			}
		};

		const onPressEscape = (event: any) => {
			if (event.which === 27) {
				callback();
			}
			// console.log(event.which, event.key);
		};

		document.addEventListener("click", handleClickOutside, true);
		document.addEventListener("keydown", onPressEscape, true);

		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, []);

	return ref;
};

export default useOutsideClick;
