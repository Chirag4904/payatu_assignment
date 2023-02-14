import AuthorCard from "./AuthorCard";
const ReplyCard = ({ reply }) => {
	return (
		<div>
			<AuthorCard data={reply} />
		</div>
	);
};

export default ReplyCard;
