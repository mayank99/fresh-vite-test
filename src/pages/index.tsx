import { page } from "fresh";
import Counter from "../islands/Counter.tsx";
import { define } from "../utils.ts";

const immutable = "public, s-maxage=31536000, immutable"; // cache static assets

export const handler = define.handlers({
	GET: ({ state }) => {
		state.title = `counter.`; // for <head>

		return page({}, {
			headers: {
				"Cache-Control": immutable,
			},
		});
	},
});

export default define.page(() => (
	<main>
		<h1>counter.</h1>
		<Counter />
	</main>
));
