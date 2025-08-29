import { signal } from "@preact/signals";
import styles from "./Counter.module.css";

export default function Counter() {
	const count = signal(0);

	return (
		<div class={styles.Counter}>
			<button type="button" onClick={() => count.value--}>-</button>
			<output class={styles.Count}>{count}</output>
			<button type="button" onClick={() => count.value++}>+</button>
		</div>
	);
}
