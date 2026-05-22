import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const GsapTimeline = () => {
	useGSAP(() => {
		// Estado inicial
		gsap.set(".blue", {
			x: -500,
		});
		gsap.set(".green", {
			x: -500,
		});
		gsap.set(".red", {
			x: -500,
		});
		gsap.set(".titulo", {
			opacity: 0,
		});

		const tl = gsap.timeline();
		tl.to(".blue", {
			x: 500,
			delay: 1,
			duration: 2,
			ease: "power4.inOut",
		});
		tl.to(
			".green",
			{
				x: 500,
				duration: 2,
				ease: "power4.inOut",
			},
			"<+=0.5",
		);
		tl.to(
			".red",
			{
				x: 500,
				duration: 2,
				ease: "power4.inOut",
			},
			"<",
		);
		tl.to([".blue", ".green", ".red"], {
			y: 300,
			duration: 2,
			ease: "power4.inOut",
		});
		tl.to(".titulo", {
			opacity: 1,
			scale: 1.5,
		});
	});

	// overflow-hidden para que la pantall no se desborde cuando la caja se mueva
	return (
		<div className="w-screen h-screen bg-stone-900 flex justify-center items-center overflow-hidden relative ">
			<div className="flex flex-col gap-4">
				<div className="flex justify-center items-center size-30 rounded-md bg-blue-500 blue"></div>
				<div className="flex justify-center items-center size-30 rounded-md bg-green-500 green"></div>
				<div className="flex justify-center items-center size-30 rounded-md bg-red-500 red"></div>
			</div>
			{/* TITULO */}
			<div className="absolute text-7xl text-white font-bold titulo">
				<h1>Gsap Timeline</h1>
			</div>
		</div>
	);
};

export default GsapTimeline;
