import { define } from "../utils.ts";

export default define.page(({ Component, state }) => {
	const { title } = state;

	return (
		<html lang="en">
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>{title}</title>
				<style>@layer base, components, page;</style>
				<meta name="color-scheme" content="dark light" />
				<meta property="og:title" content={title} />
			</head>
			<body>
				<Component />
			</body>
		</html>
	);
});
