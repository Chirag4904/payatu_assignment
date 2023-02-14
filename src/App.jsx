import AuthorCard from "./components/AuthorCard";
import { data } from "./data/data";
console.log(data);
function App() {
	return (
		<div>
			<AuthorCard data={data} />
		</div>
	);
}

export default App;
