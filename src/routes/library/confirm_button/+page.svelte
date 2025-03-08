<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import Confirm_Button from '$lib/Confirm_Button.svelte';
	import Tome_Content from '@ryanatkn/fuz/Tome_Content.svelte';
	import Tome_Section from '@ryanatkn/fuz/Tome_Section.svelte';
	import Tome_Section_Header from '@ryanatkn/fuz/Tome_Section_Header.svelte';
	import Tome_Link from '@ryanatkn/fuz/Tome_Link.svelte';
	import {get_tome_by_name} from '@ryanatkn/fuz/tome.js';
	import {GLYPH_REMOVE} from '$lib/glyphs.js';
	import Props_Table from '$lib/Props_Table.svelte';
	import type {Prop_Definition} from '$lib/svelte_helpers.js';

	const tome = get_tome_by_name('confirm_button');

	const demo_action = () => {
		alert('Action triggered!');
	};

	// Props data for the Confirm_Button component
	const confirm_button_props: Array<Prop_Definition> = [
		{
			name: 'onclick',
			type: '() => void',
			default_value: 'required',
			description: 'Function called when confirmed',
		},
		{
			name: 'attrs',
			type: "SvelteHTMLElements['button']",
			default_value: '{}',
			description: 'HTML attributes for button',
		},
		{
			name: 'confirm_button_attrs',
			type: "SvelteHTMLElements['button']",
			default_value: '{}',
			description: 'HTML attributes for confirmation button',
		},
		{
			name: 'children',
			type: 'Snippet<[confirming: boolean]>',
			default_value: 'undefined',
			description: 'Content with confirming state',
		},
		{
			name: 'position',
			type: 'BasicPosition',
			default_value: "'left'",
			description: 'Position of the confirmation',
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
	<h1>Confirm Button</h1>

	<p>
		Confirm Button displays a confirmation step before executing an action, helping prevent
		accidental clicks on destructive operations.
	</p>

	<div class="import_example p_sm bg_2 radius_sm mb_md">
		<Code content="import Confirm_Button from '$lib/Confirm_Button.svelte';" />
	</div>

	<Tome_Section>
		<Tome_Section_Header text="Examples" />

		<div class="example_grid">
			<div class="example p_sm bg_2 radius_sm">
				<h3 class="size_sm">Basic Usage</h3>
				<div class="example_demo mb_sm">
					<div class="confirm_wrapper">
						<Confirm_Button onclick={demo_action} position="right">Delete Item</Confirm_Button>
					</div>
				</div>
				<Code
					content={`<Confirm_Button 
  onclick={delete_action} 
  position="right"
>
  Delete Item
</Confirm_Button>`}
				/>
			</div>

			<div class="example p_sm bg_2 radius_sm">
				<h3 class="size_sm">Icon Button</h3>
				<div class="example_demo mb_sm">
					<div class="confirm_wrapper">
						<Confirm_Button
							onclick={demo_action}
							attrs={{class: 'plain icon_button'}}
							position="top"
						>
							{GLYPH_REMOVE}
						</Confirm_Button>
					</div>
				</div>
				<Code
					content={`<Confirm_Button 
  onclick={delete_action}
  attrs={{class: 'plain icon_button'}}
  position="top"
>
  {GLYPH_REMOVE}
</Confirm_Button>`}
				/>
			</div>

			<div class="example p_sm bg_2 radius_sm">
				<h3 class="size_sm">Custom Background</h3>
				<div class="example_demo mb_sm">
					<div class="confirm_wrapper">
						<Confirm_Button onclick={demo_action} position="bottom" popover_bg="bg_c_1">
							Custom Background
						</Confirm_Button>
					</div>
				</div>
				<Code
					content={`<Confirm_Button 
  onclick={delete_action} 
  position="bottom"
  popover_bg="bg_c_1"
>
  Custom Background
</Confirm_Button>`}
				/>
			</div>

			<div class="example p_sm bg_2 radius_sm">
				<h3 class="size_sm">Dynamic Content</h3>
				<div class="example_demo mb_sm">
					<div class="confirm_wrapper">
						<Confirm_Button onclick={demo_action} position="left">
							{#snippet children(confirming)}
								<span class={confirming ? 'color_c' : ''}>
									{confirming ? 'Confirm?' : 'Delete'}
								</span>
							{/snippet}
						</Confirm_Button>
					</div>
				</div>
				<Code
					content={`<Confirm_Button onclick={delete_action} position="left">
  {#snippet children(confirming)}
    <span class={confirming ? 'color_c' : ''}>
      {confirming ? 'Confirm?' : 'Delete'}
    </span>
  {/snippet}
</Confirm_Button>`}
				/>
			</div>
		</div>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Props" />

		<Props_Table props={confirm_button_props} />
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Usage Notes" />

		<h3 class="size_sm mb_xs">Event Propagation Fix</h3>
		<p class="mb_sm">
			To prevent issues with button clicks bubbling up and closing the confirmation, wrap the
			component in a container:
		</p>

		<Code
			content={`<div class="confirm_wrapper">
  <Confirm_Button onclick={action}>Delete</Confirm_Button>
</div>

<style>
  .confirm_wrapper {
    display: inline-flex;
  }
</style>`}
		/>

		<h3 class="mt_md size_sm mb_xs">Related Components</h3>
		<p>
			For actions needing both confirm and cancel options, use <Tome_Link
				name="confirm_cancel_button"
			/>. This component is built on <Tome_Link name="positioned_element" />.
		</p>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Accessibility" />

		<p>The Confirm Button component implements these accessibility features:</p>
		<ul>
			<li>Can be dismissed with the Escape key</li>
			<li>Maintains focus management</li>
			<li>The <code>pressed</code> class adds visual feedback when confirming</li>
			<li>Works with keyboard navigation</li>
		</ul>

		<div class="bg_2 p_sm radius_sm mt_sm">
			<h4 class="size_sm mb_xs">Accessibility Tips</h4>
			<ul class="mb_0">
				<li>Use descriptive text that clearly indicates the action</li>
				<li>Add ARIA attributes to icon-only buttons</li>
				<li>Use appropriate styling for destructive actions</li>
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

	.confirm_wrapper {
		display: inline-flex;
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

	code {
		font-family: var(--font_mono);
		font-size: 0.9em;
	}
</style>
