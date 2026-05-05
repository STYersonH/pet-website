import { useState } from "react";

import BlogCard from "./BlogCard";

function Blog() {
	const [count, setCount] = useState(0);

	const blogData = [
		{
			image: "/images/img-1.png",
			title: "Are you having trouble finding the right dog?",
		},
		{
			image: "/images/img-2.png",
			title: "Is your dog aggresive towards your kids?",
		},
		{
			image: "/images/img-3.png",
			title: "Looking for someone to train your dog?",
		},
		{
			image: "/images/img-4.png",
			title: "Choose the most stylist and durable products for your dog.",
		},
	];

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
					{blogData.map((item, index) => (
						<BlogCard key={index} image={item.image} title={item.title} />
					))}

					{/* <BlogCard image={blogData[0].image} title={blogData[0].title} />
					<BlogCard image={blogData[1].image} title={blogData[1].title} />
					<BlogCard image={blogData[2].image} title={blogData[2].title} />
					<BlogCard image={blogData[3].image} title={blogData[3].title} /> */}
				</div>
			</section>
		</>
	);
}

export default Blog;
