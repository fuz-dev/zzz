<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';
	import type {Snippet} from 'svelte';
	import {fade} from 'svelte/transition';
	import {type BasicPosition} from '$lib/position_helpers.js';

	const ID = $props.id();

	/**
	 * Simple tooltip component following W3C a11y patterns
	 * @see https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/
	 */
	interface Props {
		/** Position hint using CSS classes */
		position?: BasicPosition;
		/** Delay before showing the tooltip (ms) */
		delay?: number;
		/** Attributes for tooltip container */
		tooltip_attrs?: SvelteHTMLElements['div'];
		/** Children to render inside the tooltip trigger */
		children?: Snippet;
		/** ID for the tooltip (auto-generated if not provided) */
		id?: string;
		/** Content to render inside the tooltip */
		content: Snippet;
		/** Background color class for tooltip (set to null for transparent) */
		bg?: string | null;
	}

	const {
		position = 'top',
		delay = 80, // TODO import from Moss when it has duration constants
		tooltip_attrs = {},
		children,
		id = ID,
		content,
		bg = 'bg_3',
	}: Props = $props();

	let show_tooltip = $state(false);
	let timeout: ReturnType<typeof setTimeout> | undefined;
	let hover_on_trigger = $state(false);
	let hover_on_tooltip = $state(false);

	$effect(() => {
		show_tooltip = hover_on_trigger || hover_on_tooltip;
	});

	const show = () => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			hover_on_trigger = true;
		}, delay);
	};

	const hide_trigger = () => {
		clearTimeout(timeout);
		hover_on_trigger = false;
	};

	const handle_tooltip_mouse_enter = () => {
		hover_on_tooltip = true;
	};

	const handle_tooltip_mouse_leave = () => {
		hover_on_tooltip = false;
	};

	const handle_keydown = (event: KeyboardEvent) => {
		if (event.key === 'Escape' && show_tooltip) {
			hide_trigger();
			hover_on_tooltip = false;
		}
	};
</script>

<svelte:document onkeydown={handle_keydown} />

<div class="tooltip_wrapper">
	<span
		role="button"
		tabindex="0"
		aria-describedby={show_tooltip ? id : undefined}
		onmouseenter={show}
		onmouseleave={hide_trigger}
		onfocus={show}
		onblur={hide_trigger}
	>
		{#if children}
			{@render children()}
		{/if}
	</span>

	{#if show_tooltip}
		<div
			{id}
			role="tooltip"
			class="tooltip position_{position} size_xs radius_xs {bg || ''}"
			transition:fade={{duration: 100}}
			onmouseenter={handle_tooltip_mouse_enter}
			onmouseleave={handle_tooltip_mouse_leave}
			{...tooltip_attrs}
		>
			{@render content()}
		</div>
	{/if}
</div>

<style>
	.tooltip_wrapper {
		position: relative;
		display: inline-flex;
	}

	/* Make the span act as a transparent wrapper, not affecting layout */
	.tooltip_wrapper > span {
		display: inline-flex;
		cursor: inherit;
	}

	.tooltip {
		position: absolute;
		padding: var(--space_xs3) var(--space_xs);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		white-space: pre-wrap;
		text-align: center;
		max-width: 250px;
		z-index: 1000;
	}

	.position_left {
		left: -8px;
		top: 50%;
		transform: translate(-100%, -50%);
	}

	.position_right {
		right: -8px;
		top: 50%;
		transform: translate(100%, -50%);
	}

	.position_top {
		top: -8px;
		left: 50%;
		transform: translate(-50%, -100%);
	}

	.position_bottom {
		bottom: -8px;
		left: 50%;
		transform: translate(-50%, 100%);
	}
</style>
