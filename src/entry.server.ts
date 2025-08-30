import { App, staticFiles, trailingSlashes } from "@fresh/core";
import type { State } from "./utils.ts";

export const app = new App<State>()
	.use(staticFiles())
	.use(trailingSlashes("never"))
	.fsRoutes();

if (import.meta.main) {
	await app.listen();
}
