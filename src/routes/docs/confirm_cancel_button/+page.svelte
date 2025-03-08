<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import Confirm_Cancel_Button from '$lib/Confirm_Cancel_Button.svelte';
	import Tome_Content from '@ryanatkn/fuz/Tome_Content.svelte';
	import Tome_Link from '@ryanatkn/fuz/Tome_Link.svelte';
	import {get_tome_by_name} from '@ryanatkn/fuz/tome.js';
	import {GLYPH_REMOVE, GLYPH_CHECK, GLYPH_CANCEL} from '$lib/glyphs.js';

	const tome = get_tome_by_name('confirm_cancel_button');

	const demo_action = () => {
		alert('Action confirmed!');
	};

	const demo_cancel = () => {
		alert('Action cancelled!');
	};
</script>

<Tome_Content {tome}>
	<h1 class="size_xl mb_md">Confirm/Cancel Button</h1>

	<p class="mb_md">
		The Confirm/Cancel Button component provides both confirm and cancel options before executing an
		action, giving users a chance to reconsider before proceeding with potentially destructive
		operations.
	</p>

	<div class="import_example p_sm bg_2 radius_sm mb_lg">
		<Code content="import Confirm_Cancel_Button from '$lib/Confirm_Cancel_Button.svelte';" />
	</div>

	<section class="mb_xl">
		<h2 class="size_lg mb_md">Examples</h2>

		<div class="example_grid">
			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Basic Usage</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
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

			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Icon Button</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
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

			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Custom Button Icons</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
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

			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Non-Dismissible</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
					<Confirm_Cancel_Button
						onconfirm={demo_action}
						oncancel={() => console.log('Cancelled')}
						close_on_outside_click={false}
						position="left"
					>
						Persistent Options
					</Confirm_Cancel_Button>
				</div>

				<Code
					content={`<Confirm_Cancel_Button
  onconfirm={delete_action}
  oncancel={() => console.log('Cancelled')}
  close_on_outside_click={false}
  position="left"
>
  Persistent Options
</Confirm_Cancel_Button>`}
				/>
			</div>

			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Custom Background</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
					<Confirm_Cancel_Button
						onconfirm={demo_action}
						oncancel={() => console.log('Cancelled')}
						position="right"
						popover_bg="bg_h_1"
					>
						Custom Background
					</Confirm_Cancel_Button>
				</div>

				<Code
					content={`<Confirm_Cancel_Button
  onconfirm={delete_action}
  oncancel={() => console.log('Cancelled')}
  position="right"
  popover_bg="bg_h_1"
>
  Custom Background
</Confirm_Cancel_Button>`}
				/>
			</div>

			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Transparent Background</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
					<Confirm_Cancel_Button
						onconfirm={demo_action}
						oncancel={() => console.log('Cancelled')}
						position="bottom"
						popover_bg={null}
					>
						No Background
					</Confirm_Cancel_Button>
				</div>

				<Code
					content={`<Confirm_Cancel_Button
  onconfirm={delete_action}
  oncancel={() => console.log('Cancelled')}
  position="bottom"
  popover_bg={null}
>
  No Background
</Confirm_Cancel_Button>`}
				/>
			</div>
		</div>
	</section>

	<section class="mb_xl">
		<h2 class="size_lg mb_md">Props</h2>

		<div class="table_wrapper">
			<table class="w_100">
				<thead>
					<tr>
						<th>Prop</th>
						<th>Type</th>
						<th>Default</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>onconfirm</td>
						<td>() => void</td>
						<td>required</td>
						<td>Function called when confirmed</td>
					</tr>
					<tr>
						<td>oncancel</td>
						<td>() => void</td>
						<td>undefined</td>
						<td>Optional function called when cancelled</td>
					</tr>
					<tr>
						<td>attrs</td>
						<td>SvelteHTMLElements['button']</td>
						<td>{'{}'}</td>
						<td>HTML attributes for the main button</td>
					</tr>
					<tr>
						<td>position</td>
						<td>BasicPosition</td>
						<td>'left'</td>
						<td>Position of the action buttons ('top', 'right', 'bottom', 'left')</td>
					</tr>
					<tr>
						<td>confirm_button</td>
						<td>Snippet</td>
						<td>undefined</td>
						<td>Custom content for confirm button (replaces default)</td>
					</tr>
					<tr>
						<td>cancel_button</td>
						<td>Snippet</td>
						<td>undefined</td>
						<td>Custom content for cancel button (replaces default)</td>
					</tr>
					<tr>
						<td>confirm_attrs</td>
						<td>SvelteHTMLElements['button']</td>
						<td>{'{}'}</td>
						<td>HTML attributes for confirm button</td>
					</tr>
					<tr>
						<td>cancel_attrs</td>
						<td>SvelteHTMLElements['button']</td>
						<td>{'{}'}</td>
						<td>HTML attributes for cancel button</td>
					</tr>
					<tr>
						<td>children</td>
						<td>Snippet</td>
						<td>undefined</td>
						<td>Content to render in the main button</td>
					</tr>
					<tr>
						<td>close_on_outside_click</td>
						<td>boolean</td>
						<td>true</td>
						<td>Whether to close buttons when clicking outside</td>
					</tr>
					<tr>
						<td>popover_bg</td>
						<td>string | null</td>
						<td>'bg_3'</td>
						<td>Background color class or null for transparent</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>

	<section class="mb_xl">
		<h2 class="size_lg mb_md">Usage Notes</h2>

		<p class="mb_md">
			The Confirm/Cancel Button offers more functionality than <Tome_Link name="confirm_button" />,
			providing explicit options for both confirming and cancelling. It's ideal for actions where
			users should consciously make a choice rather than just confirm.
		</p>

		<h3 class="mb_sm">When to Use</h3>
		<ul class="mb_md">
			<li>For destructive operations that need explicit confirmation</li>
			<li>When the cancel action needs its own callback</li>
			<li>When users benefit from seeing both options simultaneously</li>
			<li>For interfaces that need to match the mental model of "yes/no" choices</li>
		</ul>

		<p>
			This component is built on core positioning utilities provided by
			<Tome_Link name="positioned_element" />.
		</p>
	</section>

	<section class="mb_xl">
		<h2 class="size_lg mb_md">Accessibility</h2>

		<p class="mb_md">
			The Confirm/Cancel Button component implements these accessibility features:
		</p>

		<ul>
			<li>Can be dismissed with the Escape key</li>
			<li>Provides visual distinction between confirm and cancel actions</li>
			<li>Maintains focus management</li>
			<li>Buttons have adequate size for touch targets</li>
		</ul>

		<div class="bg_2 p_md radius_sm mt_md">
			<h3 class="size_sm mb_xs">Best Practices</h3>
			<ul class="mb_0">
				<li>Position the control where it won't overlap with essential UI elements</li>
				<li>Use colors consistently (e.g., green for confirm, red for destructive actions)</li>
				<li>Provide clear labels when using custom button content</li>
				<li>Consider increasing the touch target size for mobile interfaces</li>
			</ul>
		</div>
	</section>
</Tome_Content>

<style>
	.example_grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: var(--space_md);
	}

	.example_demo {
		border: 1px dashed var(--border_color_1);
		border-radius: var(--radius_xs);
		min-height: 60px;
	}

	.table_wrapper {
		overflow-x: auto;
	}

	table {
		border-collapse: collapse;
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
