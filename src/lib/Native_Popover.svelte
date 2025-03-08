<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';
	import type {Snippet} from 'svelte';

	/**
	 * A native popover component that uses the browser's built-in popover API
	 */
	interface Props {
		/** ID for the popover element */
		id?: string;
		/** The popover state (auto, manual) */
		mode?: 'auto' | 'manual';
		/** Attributes for the popover container */
		attrs?: SvelteHTMLElements['div'];
		/** Whether to show the popover initially */
		open?: boolean;
		/** Callback when popover state changes */
		onchange?: (open: boolean) => void;
		/** Content to render inside the popover */
		children?: Snippet;
	}

	const {id, mode = 'auto', attrs, open = false, onchange, children}: Props = $props();

	// Create a bindable state for open to let parent components control it
	let is_open = $state(open);

	// Expose property for parent components
	$effect(() => {
		if (open !== is_open) {
			is_open = open;
		}
	});

	// Export open state change for parent components
	$effect(() => {
		if (onchange && is_open !== open) {
			onchange(is_open);
		}
	});

	let popover_el: HTMLElement;

	$effect(() => {
		if (is_open && popover_el) {
			popover_el.showPopover();
		} else if (!is_open && popover_el && popover_el.matches(':popover-open')) {
			popover_el.hidePopover();
		}
	});

	const handle_toggle = (e: Event) => {
		const is_open_now = (e.target as HTMLElement).matches(':popover-open');
		is_open = is_open_now;
	};
</script>

<div
	bind:this={popover_el}
	popover={mode}
	{id}
	ontoggle={handle_toggle}
	{...attrs}
	class="native_popover {attrs?.class || ''}"
>
	{#if children}
		{@render children()}
	{/if}
</div>

<style>
	.native_popover {
		padding: var(--space_sm);
		border-radius: var(--radius_md);
		background: var(--bg_color);
		border: 1px solid var(--border_color_1);
		box-shadow: var(--shadow_md);
		width: max-content;
		max-width: 500px;
	}
</style>
