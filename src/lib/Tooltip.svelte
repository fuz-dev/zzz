<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';
	import type {Snippet} from 'svelte';
	import {fade} from 'svelte/transition';

	const ID = $props.id();

	/**
	 * Simple tooltip component following W3C a11y patterns
	 */
	interface Props {
		/** Text to display in the tooltip */
		text: string;
		/** Position hint using CSS classes */
		position?: 'left' | 'right' | 'top' | 'bottom';
		/** Delay before showing the tooltip (ms) */
		delay?: number;
		/** Attributes for tooltip container */
		tooltip_attrs?: SvelteHTMLElements['div'];
		/** Children to render inside the tooltip trigger */
		children?: Snippet;
		/** ID for the tooltip (auto-generated if not provided) */
		id?: string;
	}

	const {
		text,
		position = 'top',
		delay = 80, // TODO import from Moss when it has duration constants
		tooltip_attrs,
		children,
		id = ID,
	}: Props = $props();

	let show_tooltip = $state(false);
	let timeout: ReturnType<typeof setTimeout> | undefined;

	const show = () => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			show_tooltip = true;
		}, delay);
	};

	const hide = () => {
		clearTimeout(timeout);
		show_tooltip = false;
	};

	const handle_keydown = (event: KeyboardEvent) => {
		if (event.key === 'Escape' && show_tooltip) {
			hide();
		}
	};
</script>

<div class="tooltip_wrapper">
	<!-- Add role="button" to fix ARIA warning -->
	<span
		role="button"
		tabindex="0"
		aria-describedby={show_tooltip ? id : undefined}
		onmouseenter={show}
		onmouseleave={hide}
		onfocus={show}
		onblur={hide}
		onkeydown={handle_keydown}
	>
		{#if children}
			{@render children()}
		{/if}
	</span>

	{#if show_tooltip}
		<div
			{id}
			role="tooltip"
			class="tooltip position_{position} size_xs bg_1 radius_xs"
			transition:fade={{duration: 100}}
			{...tooltip_attrs}
		>
			{text}
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
