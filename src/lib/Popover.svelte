<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';
	import type {Snippet} from 'svelte';
	import {scale} from 'svelte/transition';
	import {type BasicPosition} from '$lib/position_helpers.js';

	/**
	 * A popover component that shows content when a trigger element is clicked
	 */
	interface Props {
		/** Whether the popover is open */
		open?: boolean;
		/** Position hint using CSS classes */
		position?: BasicPosition;
		/** Attributes for the popover container */
		popover_attrs?: SvelteHTMLElements['div'];
		/** Function to call when popover should close */
		onchange?: (open: boolean) => void;
		/** Custom trigger element */
		trigger: Snippet<[open: boolean, toggle: () => void]>;
		/** Content to render inside the popover */
		children: Snippet<[{is_open: boolean; toggle: () => void}]>;
		/** Background color class for popover (set to null for transparent) */
		bg?: string | null;
	}

	const {
		open: initial_open = false,
		position = 'bottom',
		popover_attrs = {},
		onchange,
		trigger,
		children,
		bg = 'bg_3',
	}: Props = $props();

	// Track the initial open value separately to avoid race conditions
	let previous_initial_open = initial_open;
	let is_open = $state(initial_open);

	// Only sync with external open prop when IT changes, not when our internal state changes
	// TODO BLOCK $effect.pre?
	$effect(() => {
		// Only update is_open if the initial_open prop changed from previous value
		if (previous_initial_open !== initial_open) {
			is_open = initial_open;
			previous_initial_open = initial_open;
		}
	});

	const toggle = (): void => {
		is_open = !is_open;

		// Notify parent of change
		if (onchange) onchange(is_open);
	};

	// Close when clicking outside
	const handle_document_click = (e: MouseEvent) => {
		// If not open, or if clicking inside wrapper, do nothing
		if (!is_open) return;

		// Get popover and trigger elements
		const wrapper_el = document.querySelector('.popover_wrapper');
		if (!wrapper_el) return;

		// Check if click is inside our component
		if (wrapper_el.contains(e.target as Node)) {
			return;
		}

		// Close the popover
		is_open = false;
		if (onchange) onchange(false);
	};

	// Close on escape key
	const handle_keydown = (e: KeyboardEvent): void => {
		if (e.key === 'Escape' && is_open) {
			is_open = false;
			if (onchange) onchange(false);
		}
	};

	// Expose open/close/toggle methods to parent components
	export const controls = {
		open: (): void => {
			is_open = true;
			if (onchange) onchange(true);
		},
		close: (): void => {
			is_open = false;
			if (onchange) onchange(false);
		},
		toggle,
	};
</script>

<!-- Use svelte:document to handle document events -->
<svelte:document onclick={handle_document_click} onkeydown={handle_keydown} />

<div class="popover_wrapper">
	<!-- Trigger element -->
	<div class="popover_trigger">
		{@render trigger(is_open, toggle)}
	</div>

	<!-- Popover content -->
	{#if is_open}
		<div
			class="popover position_{position} {bg || ''}"
			{...popover_attrs}
			transition:scale={{duration: 150}}
			onclick={(e) => e.stopPropagation()}
		>
			{@render children({is_open, toggle})}
		</div>
	{/if}
</div>

<style>
	.popover_wrapper {
		position: relative;
		display: inline-flex;
	}

	.popover_trigger {
		display: inline-flex;
	}

	.popover {
		position: absolute;
		min-width: 120px;
		border: 1px solid var(--border_color_1);
		border-radius: var(--radius_md);
		box-shadow: var(--shadow_md);
		padding: var(--space_sm);
		z-index: 100;
	}

	.position_left {
		right: calc(100% + 5px);
		top: 0;
	}

	.position_right {
		left: calc(100% + 5px);
		top: 0;
	}

	.position_top {
		bottom: calc(100% + 5px);
		left: 0;
	}

	.position_bottom {
		top: calc(100% + 5px);
		left: 0;
	}
</style>
