import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Blog from "./components/Blog";
import Start from "./animation/Start";
import GsapAnimation from "./animation/GsapAnimation";
import GsapTimeline from "./animation/GsapTimeline";
import GsapScrollTrigger from "./animation/GsapScrollTrigger";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			{/* <Blog /> */}
			{/* <Start /> */}
			{/* <GsapAnimation /> */}
			{/* <GsapTimeline /> */}
			<GsapScrollTrigger />
		</>
	);
}

export default App;
