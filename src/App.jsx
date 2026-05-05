import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<section className="w-full flex flex-col justify-center items-center gap-[30px]">
				<div className="flex flex-col justify-center items-center">
					<h2 className=" font-poppins text-[36px] font-bold capitalize">
						blog section
					</h2>
					<p className="font-poppins text-[18px] font-[400]">
						Desctiprion of blog{" "}
					</p>
				</div>
				{/* cards */}
				<div className="flex gap-[33px]">
					<div className="w-[267px] h-[375.906px] flex flex-col gap-[20px] rounded-[20px] shadow-lg ">
						<img src="/images/img-1.png" alt="img 1" />
						<p className="px-[20px]">
							Are you having trouble finding the right dog?
						</p>
					</div>
					<div className="w-[267px] h-[375.906px]  flex flex-col gap-[20px] rounded-[20px] shadow-lg">
						<img
							src="/images/img-2.png"
							alt="img 2"
							className="rounded-[20px]"
						/>
						<p className="px-[20px]">
							Is your dog aggresive towards your kids?
						</p>
					</div>
					<div className="w-[267px] h-[375.906px]  flex flex-col gap-[20px] rounded-[20px] shadow-lg">
						<img
							src="/images/img-3.png"
							alt="img 3"
							className="rounded-[20px]"
						/>
						<p className="px-[20px]">Looking for someone to train your dog?</p>
					</div>
					<div className="w-[267px] h-[375.906px]  flex flex-col gap-[20px] rounded-[20px] shadow-lg">
						<img
							src="/images/img-4.png"
							alt="img 4"
							className="rounded-[20px]"
						/>
						<p className="px-[20px]">
							Choose the most stylist and durable products for your dog.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default App;
