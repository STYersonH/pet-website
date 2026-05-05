// rafce

import React from "react";

const BlogCard = ({ image, title }) => {
	return (
		<div className="w-[267px] h-[375.906px] flex flex-col gap-[20px] rounded-[20px] shadow-lg ">
			<img src={image} alt="img 1" />
			<p className="px-[20px]">{title}</p>
		</div>
	);
};

export default BlogCard;
