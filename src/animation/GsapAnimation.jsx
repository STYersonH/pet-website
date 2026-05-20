import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const GsapAnimation = () => {
	useGSAP(() => {
		// Estado inicial
		gsap.set(".caja", {
			x: -500,
			backgroundColor: "blue",
		});

		// Animación 1 : Tweens
		gsap.to(".caja", {
			x: 500,
			backgroundColor: "red",
			duration: 3,
			ease: "power4.inOut",
		});
		// Animación 2 : Tweens
		gsap.to(".caja", {
			y: 1000,
			backgroundColor: "green",
			delay: 3,
		});
	});

	// overflow-hidden para que la pantall no se desborde cuando la caja se mueva
	return (
		<div className="w-screen h-screen bg-stone-900 flex justify-center items-center overflow-hidden">
			<div className="flex justify-center items-center size-30 rounded-md bg-blue-500 caja"></div>
		</div>
	);
};

export default GsapAnimation;
