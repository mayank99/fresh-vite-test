import { fresh } from "@fresh/plugin-vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [fresh({
		serverEntry: "src/entry.server.ts",
		clientEntry: "src/entry.client.ts",
		routeDir: "src/pages",
		islandsDir: "src/islands",
	})],
});
