<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';
	import type {Snippet} from 'svelte';

	/**
	 * A component to control popovers
	 */
	interface Props {
		/** Function to call when clicked */
		onclick: () => void;
		/** Button attributes */
		attrs?: SvelteHTMLElements['button'];
		/** Children to render */
		children?: Snippet;
	}

	const {onclick, attrs, children}: Props = $props();
</script>

<button type="button" {onclick} {...attrs} class="popover_target {attrs?.class || ''}">
	{#if children}
		{@render children()}
	{/if}
</button>
