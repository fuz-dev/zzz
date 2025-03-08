<script lang="ts">
	import {scale} from 'svelte/transition';
	import type {SvelteHTMLElements} from 'svelte/elements';
	import type {Snippet} from 'svelte';
	import {type Position, type Alignment, get_position_style} from '$lib/position_helpers.js';

	/**
	 * General component for positioning elements relative to a trigger element
	 */
	interface Props {
		/** Whether to show the positioned element */
		show: boolean;
		/** Position of the element relative to its container */
		anchor?: Position;
		/** Alignment along the specified anchor edge */
		align?: Alignment;
		/** Distance from the anchor (CSS value) */
		offset?: string;
		/** Animation duration in ms */
		duration?: number;
		/** The element to position (defaults to a div if not provided) */
		element_attrs?: SvelteHTMLElements['div'];
		/** External styling */
		class?: string;
		/** Allow the positioned element to receive pointer events */
		pointer_events?: boolean;
		/** Content to render as the positioned element */
		children?: Snippet;
		/** Trigger element content */
		trigger?: Snippet;
	}

	const {
		show = false,
		anchor = 'right',
		align = 'center',
		offset,
		duration = 120,
		element_attrs,
		class: class_name = '',
		pointer_events = true,
		children,
		trigger,
	}: Props = $props();

	// Get the position style string using the helper function
	const position_style = $derived(get_position_style(anchor, align, offset));
</script>

<div class="positioned_element_wrapper">
	{#if trigger}
		{@render trigger()}
	{/if}

	{#if show}
		<div class="positioned_container pointer_events_none">
			<div
				{...element_attrs}
				class="positioned_element {class_name} {pointer_events
					? 'pointer_events_auto'
					: 'pointer_events_none'}"
				style={position_style}
				transition:scale={{duration}}
			>
				{#if children}
					{@render children()}
				{/if}
			</div>
		</div>
	{/if}
</div>

<style>
	.positioned_element_wrapper {
		position: relative;
		display: inline-flex;
	}

	.positioned_container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 10;
	}

	.positioned_element {
		position: absolute;
		z-index: 10;
	}
</style>
