<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';
	import type {Snippet} from 'svelte';
	import {scale} from 'svelte/transition';
	import {GLYPH_REMOVE} from '$lib/glyphs.js';

	interface Props {
		/** Callback when confirmed */
		onclick: () => void;
		/** Attributes for the main button */
		attrs?: SvelteHTMLElements['button'];
		/** Attributes for the confirmation button */
		confirm_button_attrs?: SvelteHTMLElements['button'];
		/** Children to render inside the main button */
		children?: Snippet<[confirming: boolean]>;
		/** Position hint using CSS classes */
		position?: 'left' | 'right' | 'top' | 'bottom';
	}

	const {onclick, children, attrs, confirm_button_attrs, position = 'right'}: Props = $props();

	let confirming = $state(false);
	const toggle = () => {
		if (attrs?.disabled) return;
		confirming = !confirming;
	};

	// Hide confirmation when button is disabled
	$effect.pre(() => {
		if (attrs?.disabled) {
			confirming = false;
		}
	});

	const handle_confirm = () => {
		confirming = false;
		onclick();
	};

	const c = $derived(attrs?.class);

	const handle_toggle = () => {
		toggle();
	};
</script>

<div class="confirm_button_wrapper">
	<button
		type="button"
		onclick={handle_toggle}
		class:confirming
		{...attrs}
		class:plain={!children && !confirming && !c?.includes('plain')}
		class:icon_button={!children && !c?.includes('icon_button')}
		class="{c} {!children &&
		confirming &&
		!c?.includes(c?.includes('compact') ? 'size_xs' : 'size_sm')
			? c?.includes('compact')
				? 'size_xs'
				: 'size_sm'
			: ''}"
	>
		{#if children}{@render children(confirming)}{:else}{GLYPH_REMOVE}{/if}
	</button>

	{#if confirming}
		<div class="confirm_popover position_{position}">
			<button
				type="button"
				class="color_c icon_button bg_c_1"
				onclick={handle_confirm}
				{...confirm_button_attrs}
				in:scale={{duration: 80}}
				out:scale={{duration: 200}}
			>
				<div class="icon">{GLYPH_REMOVE}</div>
			</button>
		</div>
	{/if}
</div>

<style>
	.confirm_button_wrapper {
		position: relative;
		display: inline-flex;
	}

	.confirm_popover {
		position: absolute;
		padding: var(--space_xs2);
		z-index: 10;
	}

	.position_left {
		left: calc(-1 * var(--input_height));
		top: 50%;
		transform: translateY(-50%);
		transform-origin: right;
	}

	.position_right {
		right: calc(-1 * var(--input_height));
		top: 50%;
		transform: translateY(-50%);
		transform-origin: left;
	}

	.position_top {
		top: calc(-1 * var(--input_height));
		left: 50%;
		transform: translateX(-50%);
		transform-origin: bottom;
	}

	.position_bottom {
		bottom: calc(-1 * var(--input_height));
		left: 50%;
		transform: translateX(-50%);
		transform-origin: top;
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
