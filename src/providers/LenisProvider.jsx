import { useEffect } from "react";
import gsap from "gsap";
import { ReactLenis, useLenis } from "lenis/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

function LenisGsapSync() {
	const lenis = useLenis(ScrollTrigger.update);

	useEffect(() => {
		if (!lenis) return;

		const update = (time) => {
			lenis.raf(time * 1000);
		};

		gsap.ticker.add(update);
		gsap.ticker.lagSmoothing(0);

		return () => gsap.ticker.remove(update);
	}, [lenis]);

	return null;
}

export default function LenisProvider({ children }) {
	return (
		<ReactLenis
			root
			options={{
				autoRaf: false,
				duration: 1.2,
				easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
				smoothWheel: true,
			}}
		>
			<LenisGsapSync />
			{children}
		</ReactLenis>
	);
}
