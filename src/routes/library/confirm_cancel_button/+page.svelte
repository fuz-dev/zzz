<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import Confirm_Cancel_Button from '$lib/Confirm_Cancel_Button.svelte';
	import Tome_Content from '@ryanatkn/fuz/Tome_Content.svelte';
	import Tome_Section from '@ryanatkn/fuz/Tome_Section.svelte';
	import Tome_Section_Header from '@ryanatkn/fuz/Tome_Section_Header.svelte';
	import Tome_Link from '@ryanatkn/fuz/Tome_Link.svelte';
	import {get_tome_by_name} from '@ryanatkn/fuz/tome.js';
	import {GLYPH_REMOVE, GLYPH_CHECK, GLYPH_CANCEL} from '$lib/glyphs.js';
	import Props_Table from '$lib/Props_Table.svelte';
	import type {Prop_Definition} from '$lib/svelte_helpers.js';

	const tome = get_tome_by_name('confirm_cancel_button');

	const demo_action = () => {
		alert('Action confirmed!');
	};

	const demo_cancel = () => {
		alert('Action cancelled!');
	};

	// Props data for the Confirm_Cancel_Button component
	const confirm_cancel_button_props: Array<Prop_Definition> = [
		{
			name: 'onconfirm',
			type: '() => void',
			default_value: 'required',
			description: 'Function called when confirmed',
		},
		{
			name: 'oncancel',
			type: '() => void',
			default_value: 'undefined',
			description: 'Optional cancel callback',
		},
		{
			name: 'attrs',
			type: "SvelteHTMLElements['button']",
			default_value: '{}',
			description: 'HTML attributes for button',
		},
		{
			name: 'position',
			type: 'BasicPosition',
			default_value: "'left'",
			description: 'Position of action buttons',
		},
		{
			name: 'confirm_button',
			type: 'Snippet',
			default_value: 'undefined',
			description: 'Custom confirm button content',
		},
		{
			name: 'cancel_button',
			type: 'Snippet',
			default_value: 'undefined',
			description: 'Custom cancel button content',
		},
		{
			name: 'confirm_attrs',
			type: "SvelteHTMLElements['button']",
			default_value: '{}',
			description: 'HTML attributes for confirm button',
		},
		{
			name: 'cancel_attrs',
			type: "SvelteHTMLElements['button']",
			default_value: '{}',
			description: 'HTML attributes for cancel button',
		},
		{
			name: 'children',
			type: 'Snippet',
			default_value: 'undefined',
			description: 'Content for main button',
		},
		{
			name: 'close_on_outside_click',
			type: 'boolean',
			default_value: 'true',
			description: 'Close when clicking outside',
		},
		{
			name: 'popover_bg',
			type: 'string | null',
			default_value: "'bg_3'",
			description: 'Background class or null',
		},
	];
</script>

<Tome_Content {tome}>
	<h1>Confirm/Cancel Button</h1>

	<p>
		The Confirm/Cancel Button provides both confirm and cancel options before executing an action,
		giving users a chance to reconsider before proceeding with potentially destructive operations.
	</p>

	<div class="import_example p_sm bg_2 radius_sm mb_md">
		<Code content="import Confirm_Cancel_Button from '$lib/Confirm_Cancel_Button.svelte';" />
	</div>

	<Tome_Section>
		<Tome_Section_Header text="Examples" />

		<div class="example_grid">
			<div class="example p_sm bg_2 radius_sm">
				<h3 class="size_sm">Basic Usage</h3>
				<div class="example_demo mb_sm">
					<Confirm_Cancel_Button
						onconfirm={demo_action}
						oncancel={() => console.log('Cancelled')}
						position="right"
					>
						Delete Item
					</Confirm_Cancel_Button>
				</div>
				<Code
					content={`<Confirm_Cancel_Button 
  onconfirm={delete_action}
  oncancel={() => console.log('Cancelled')}
  position="right"
>
  Delete Item
</Confirm_Cancel_Button>`}
				/>
			</div>

			<div class="example p_sm bg_2 radius_sm">
				<h3 class="size_sm">Icon Button</h3>
				<div class="example_demo mb_sm">
					<Confirm_Cancel_Button
						onconfirm={demo_action}
						attrs={{class: 'plain icon_button'}}
						position="top"
					>
						{GLYPH_REMOVE}
					</Confirm_Cancel_Button>
				</div>
				<Code
					content={`<Confirm_Cancel_Button 
  onconfirm={delete_action}
  attrs={{class: 'plain icon_button'}}
  position="top"
>
  {GLYPH_REMOVE}
</Confirm_Cancel_Button>`}
				/>
			</div>

			<div class="example p_sm bg_2 radius_sm">
				<h3 class="size_sm">Custom Buttons</h3>
				<div class="example_demo mb_sm">
					<Confirm_Cancel_Button onconfirm={demo_action} oncancel={demo_cancel} position="bottom">
						{#snippet confirm_button()}
							<span class="color_h">{GLYPH_CHECK} Yes</span>
						{/snippet}

						{#snippet cancel_button()}
							<span class="color_c">{GLYPH_CANCEL} No</span>
						{/snippet}

						Custom Buttons
					</Confirm_Cancel_Button>
				</div>
				<Code
					content={`<Confirm_Cancel_Button
  onconfirm={delete_action}
  oncancel={cancel_action}
  position="bottom"
>
  {#snippet confirm_button()}
    <span class="color_h">{GLYPH_CHECK} Yes</span>
  {/snippet}

  {#snippet cancel_button()}
    <span class="color_c">{GLYPH_CANCEL} No</span>
  {/snippet}

  Custom Buttons
</Confirm_Cancel_Button>`}
				/>
			</div>

			<div class="example p_sm bg_2 radius_sm">
				<h3 class="size_sm">Custom Background</h3>
				<div class="example_demo mb_sm">
					<Confirm_Cancel_Button onconfirm={demo_action} position="left" popover_bg="bg_h_1">
						Styled Buttons
					</Confirm_Cancel_Button>
				</div>
				<Code
					content={`<Confirm_Cancel_Button
  onconfirm={delete_action}
  position="left"
  popover_bg="bg_h_1"
>
  Styled Buttons
</Confirm_Cancel_Button>`}
				/>
			</div>
		</div>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Props" />

		<Props_Table props={confirm_cancel_button_props} />
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="When to Use" />

		<p>
			The Confirm/Cancel Button offers more functionality than <Tome_Link name="confirm_button" />,
			providing explicit options for both confirming and cancelling.
		</p>

		<ul class="mb_sm">
			<li>For destructive operations that need explicit confirmation</li>
			<li>When the cancel action needs its own callback</li>
			<li>When users benefit from seeing both options simultaneously</li>
			<li>For interfaces that need a "yes/no" choice pattern</li>
		</ul>

		<p>
			This component is built on core positioning utilities provided by
			<Tome_Link name="positioned_element" />.
		</p>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Accessibility" />

		<p>The Confirm/Cancel Button implements these accessibility features:</p>
		<ul>
			<li>Can be dismissed with the Escape key</li>
			<li>Visually distinguishes between confirm and cancel actions</li>
			<li>Maintains focus management</li>
			<li>Provides adequate touch target sizes</li>
		</ul>

		<div class="bg_2 p_sm radius_sm mt_sm">
			<h4 class="size_sm mb_xs">Best Practices</h4>
			<ul class="mb_0">
				<li>Position where it won't overlap important UI elements</li>
				<li>Use consistent colors (green for confirm, red for destructive actions)</li>
				<li>Provide clear labels for custom button content</li>
				<li>Consider larger touch targets for mobile interfaces</li>
			</ul>
		</div>
	</Tome_Section>
</Tome_Content>

<style>
	.example_grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(var(--width_sm), 1fr));
		gap: var(--space_md);
	}

	.example_demo {
		border: 1px dashed var(--border_color_1);
		border-radius: var(--radius_xs);
		min-height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: var(--space_sm);
	}

	.table_wrapper {
		overflow-x: auto;
	}

	table {
		border-collapse: collapse;
		font-size: var(--size_sm);
	}

	th,
	td {
		padding: var(--space_xs);
		text-align: left;
		border-bottom: 1px solid var(--border_color_1);
	}

	th {
		font-weight: 600;
		background-color: var(--bg_color_2);
	}
</style>
