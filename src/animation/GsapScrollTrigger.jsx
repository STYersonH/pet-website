import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
	useGSAP(() => {
		gsap.set("box-1", { backgroundColor: "blue" });

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".container-box",
				pin: true,
				start: "top 0px",
				end: "400%",
				markers: true,
				scrub: true,
			},
		});

		tl.to(".box-blue", {
			x: -200,
			y: -200,
			duration: 1,
		});
		tl.to(".box-red", {
			x: 200,
			y: 200,
			duration: 1,
		});
		tl.to(".box-green", {
			x: -200,
			y: 200,
			duration: 1,
		});
		tl.to(".box-yellow", {
			x: 200,
			y: -200,
			duration: 1,
		});
	});

	return (
		<>
			<div className="w-screen h-screen bg-black"></div>
			<div className="relative w-screen h-screen bg-stone-900 overflow-hidden container-box">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-50 rounded-md bg-blue-500 box-blue"></div>
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-50 rounded-md bg-red-500 box-red"></div>
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-50 rounded-md bg-green-500 box-green"></div>
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-50 rounded-md bg-yellow-500 box-yellow"></div>
			</div>
			<div className="w-screen h-screen bg-black"></div>
		</>
	);
};

export default GsapScrollTrigger;
