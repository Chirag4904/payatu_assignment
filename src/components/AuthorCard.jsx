import React, { useState } from "react";
import ReplyCard from "./ReplyCard";
import "./AuthorCard.css";
import { Icon } from "@iconify/react";

const AuthorCard = ({ data }) => {
	const [isOpen, setIsOpen] = useState(true);
	const { author, replies, text } = data;
	function handleClick(e) {
		setIsOpen(!isOpen);
	}
	return (
		<div className="app">
			<div className="line" onClick={handleClick}></div>
			<div className="main-wrapper">
				<div className="author-wrapper">
					<button onClick={handleClick}>
						<Icon icon="material-symbols:expand-content" color="blue" />
					</button>
					<img src={author.avatar} alt="" />
					<div className="author-name">{author.name}</div>
				</div>
				<div className="text">{text}</div>
			</div>

			{isOpen && (
				<div style={{ marginLeft: "15px" }}>
					{replies?.map((reply, i) => {
						return <ReplyCard key={i} reply={reply} />;
					})}
				</div>
			)}
		</div>
	);
};

export default AuthorCard;
