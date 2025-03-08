<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';
	import type {Snippet} from 'svelte';
	import {scale} from 'svelte/transition';
	import {GLYPH_CHECK, GLYPH_CANCEL} from '$lib/glyphs.js';
	import {type BasicPosition} from '$lib/position_helpers.js';

	/**
	 * A button that shows confirm/cancel buttons when clicked
	 */
	interface Props {
		/** Callback when confirmed */
		onconfirm: () => void;
		/** Callback when cancelled (optional) */
		oncancel?: () => void;
		/** Attributes for the main button */
		attrs?: SvelteHTMLElements['button'];
		/** Position hint using CSS classes */
		position?: BasicPosition;
		/** Custom implementation for confirm button */
		confirm_button?: Snippet;
		/** Custom implementation for cancel button */
		cancel_button?: Snippet;
		/** Attributes for confirm button */
		confirm_attrs?: SvelteHTMLElements['button'];
		/** Attributes for cancel button */
		cancel_attrs?: SvelteHTMLElements['button'];
		/** Children to render in the main button */
		children?: Snippet;
		/** Close when clicking outside (default true) */
		close_on_outside_click?: boolean;
		/** Background color class for popover (set to null for transparent) */
		popover_bg?: string | null;
	}

	const {
		onconfirm,
		oncancel,
		attrs = {},
		position = 'left',
		confirm_button,
		cancel_button,
		confirm_attrs = {},
		cancel_attrs = {},
		children,
		close_on_outside_click = true,
		popover_bg = 'bg_3',
	}: Props = $props();

	let active = $state(false);

	// Hide action buttons when the button is disabled
	$effect.pre(() => {
		if (attrs?.disabled) {
			active = false;
		}
	});

	const handle_cancel = () => {
		active = false;
		if (oncancel) oncancel();
	};

	const handle_confirm = () => {
		active = false;
		onconfirm();
	};

	const toggle = () => {
		if (attrs?.disabled) return;
		active = !active;
	};

	// Handle outside clicks
	const handle_document_click = (e: MouseEvent) => {
		if (!active || !close_on_outside_click) return;

		const wrapper = document.querySelector('.confirm_cancel_button_wrapper');
		if (!wrapper) return;

		if (wrapper.contains(e.target as Node)) {
			return;
		}

		active = false;
	};
</script>

<svelte:document onclick={handle_document_click} />

<div class="confirm_cancel_button_wrapper">
	<button type="button" onclick={toggle} class:active {...attrs}>
		{#if children}
			{@render children()}
		{/if}
	</button>

	{#if active}
		<div
			class="action_popover position_{position} {popover_bg || ''}"
			in:scale={{duration: 150}}
			out:scale={{duration: 150}}
		>
			<div class="action_buttons">
				<button
					type="button"
					class="cancel_button icon_button"
					onclick={handle_cancel}
					{...cancel_attrs}
				>
					{#if cancel_button}
						{@render cancel_button()}
					{:else}
						<div class="icon">{GLYPH_CANCEL}</div>
					{/if}
				</button>

				<button
					type="button"
					class="confirm_button icon_button color_h bg_h_1"
					onclick={handle_confirm}
					{...confirm_attrs}
				>
					{#if confirm_button}
						{@render confirm_button()}
					{:else}
						<div class="icon">{GLYPH_CHECK}</div>
					{/if}
				</button>
			</div>
		</div>
	{/if}
</div>

<style>
	.confirm_cancel_button_wrapper {
		position: relative;
		display: inline-flex;
	}

	.action_popover {
		position: absolute;
		padding: var(--space_xs2);
		z-index: 10;
	}

	.position_left {
		left: calc(-1 * var(--input_height) - 50px);
		top: 50%;
		transform: translateY(-50%);
	}

	.position_right {
		right: calc(-1 * var(--input_height) - 50px);
		top: 50%;
		transform: translateY(-50%);
	}

	.position_top {
		top: calc(-1 * var(--input_height));
		left: 50%;
		transform: translateX(-50%);
	}

	.position_bottom {
		bottom: calc(-1 * var(--input_height));
		left: 50%;
		transform: translateX(-50%);
	}

	.action_buttons {
		display: flex;
		gap: var(--space_xs);
	}

	.icon {
		transform-origin: center;
		transition: transform var(--duration_1);
	}

	button:hover:not(:disabled) .icon {
		transform: scale(1.1);
	}

	button:active:not(:disabled) .icon {
		transform: scale(0.95);
	}
</style>
