<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import Confirm_Button from '$lib/Confirm_Button.svelte';
	import Tome_Content from '@ryanatkn/fuz/Tome_Content.svelte';
	import Tome_Link from '@ryanatkn/fuz/Tome_Link.svelte';
	import {get_tome_by_name} from '@ryanatkn/fuz/tome.js';
	import {GLYPH_REMOVE} from '$lib/glyphs.js';

	const tome = get_tome_by_name('confirm_button');

	const demo_action = () => {
		alert('Action triggered!');
	};
</script>

<Tome_Content {tome}>
	<h1 class="size_xl mb_md">Confirm Button</h1>

	<p class="mb_md">
		Confirm Button displays a confirmation step before executing an action, helping prevent
		accidental clicks on destructive operations.
	</p>

	<div class="import_example p_sm bg_2 radius_sm mb_lg">
		<Code content="import Confirm_Button from '$lib/Confirm_Button.svelte';" />
	</div>

	<section class="mb_xl">
		<h2 class="size_lg mb_md">Examples</h2>

		<div class="example_grid">
			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Basic Usage</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
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

			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Icon Button</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
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

			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">With Custom Background</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
					<div class="confirm_wrapper">
						<Confirm_Button onclick={demo_action} position="bottom" popover_bg="bg_c_1">
							Delete with Custom Background
						</Confirm_Button>
					</div>
				</div>

				<Code
					content={`<Confirm_Button 
  onclick={delete_action} 
  position="bottom"
  popover_bg="bg_c_1"
>
  Delete with Custom Background
</Confirm_Button>`}
				/>
			</div>

			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Non-Dismissible</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
					<div class="confirm_wrapper">
						<Confirm_Button onclick={demo_action} close_on_outside_click={false} position="left">
							Persistent Confirm
						</Confirm_Button>
					</div>
				</div>

				<Code
					content={`<Confirm_Button 
  onclick={delete_action}
  close_on_outside_click={false}
  position="left"
>
  Persistent Confirm
</Confirm_Button>`}
				/>
			</div>

			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Transparent Background</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
					<div class="confirm_wrapper">
						<Confirm_Button onclick={demo_action} position="right" popover_bg={null}>
							No Background
						</Confirm_Button>
					</div>
				</div>

				<Code
					content={`<Confirm_Button 
  onclick={delete_action}
  position="right"
  popover_bg={null}
>
  No Background
</Confirm_Button>`}
				/>
			</div>

			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Dynamic Children</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
					<div class="confirm_wrapper">
						<Confirm_Button onclick={demo_action} position="top">
							{#snippet children(confirming)}
								<span class={confirming ? 'color_c' : ''}>
									{confirming ? 'Confirm Delete?' : 'Delete Item'}
								</span>
							{/snippet}
						</Confirm_Button>
					</div>
				</div>

				<Code
					content={`<Confirm_Button onclick={delete_action} position="top">
  {#snippet children(confirming)}
    <span class={confirming ? 'color_c' : ''}>
      {confirming ? 'Confirm Delete?' : 'Delete Item'}
    </span>
  {/snippet}
</Confirm_Button>`}
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
						<td>onclick</td>
						<td>() => void</td>
						<td>required</td>
						<td>Function called when confirmed</td>
					</tr>
					<tr>
						<td>attrs</td>
						<td>SvelteHTMLElements['button']</td>
						<td>{'{}'}</td>
						<td>HTML attributes for the main button</td>
					</tr>
					<tr>
						<td>confirm_button_attrs</td>
						<td>SvelteHTMLElements['button']</td>
						<td>{'{}'}</td>
						<td>HTML attributes for the confirmation button</td>
					</tr>
					<tr>
						<td>children</td>
						<td>Snippet{'<'}[confirming: boolean]></td>
						<td>undefined</td>
						<td>Content to render inside the main button with confirming state</td>
					</tr>
					<tr>
						<td>position</td>
						<td>BasicPosition</td>
						<td>'left'</td>
						<td>Position of the confirmation button ('top', 'right', 'bottom', 'left')</td>
					</tr>
					<tr>
						<td>close_on_outside_click</td>
						<td>boolean</td>
						<td>true</td>
						<td>Whether to close confirmation when clicking outside</td>
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

		<h3 class="mb_sm">Event Propagation Fix</h3>
		<p class="mb_md">
			To prevent issues with button clicks bubbling up and immediately closing the confirmation
			popover, wrap the component in a container div:
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

		<h3 class="mb_sm">Related Components</h3>
		<p class="mb_xs">
			For actions that need both confirm and cancel options, use the
			<Tome_Link name="confirm_cancel_button" /> component instead.
		</p>
		<p>
			This component is built on core positioning utilities provided by
			<Tome_Link name="positioned_element" />.
		</p>
	</section>

	<section class="mb_xl">
		<h2 class="size_lg mb_md">Accessibility</h2>

		<p class="mb_md">The Confirm Button component implements these accessibility features:</p>

		<ul>
			<li>Can be dismissed with the Escape key</li>
			<li>Maintains focus management</li>
			<li>
				The <code>pressed</code> class is added when in confirming state for visual feedback
			</li>
			<li>Works with keyboard navigation</li>
		</ul>

		<div class="bg_2 p_md radius_sm mt_md">
			<h3 class="size_sm mb_xs">Accessibility Recommendations</h3>
			<ul class="mb_0">
				<li>Use descriptive text that clearly indicates the action being confirmed</li>
				<li>Consider using ARIA attributes when using icon-only buttons</li>
				<li>
					For destructive actions, use appropriate visual styling (e.g., red colors) for the
					confirmation step
				</li>
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

	.confirm_wrapper {
		display: inline-flex;
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
