<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import Positioned_Element from '$lib/Positioned_Element.svelte';
	import Tome_Content from '@ryanatkn/fuz/Tome_Content.svelte';
	import Tome_Section from '@ryanatkn/fuz/Tome_Section.svelte';
	import Tome_Section_Header from '@ryanatkn/fuz/Tome_Section_Header.svelte';
	import Tome_Link from '@ryanatkn/fuz/Tome_Link.svelte';
	import {get_tome_by_name} from '@ryanatkn/fuz/tome.js';

	const tome = get_tome_by_name('positioned_element');

	// Demo state
	let show_example_1 = $state(false);
	let show_example_2 = $state(false);
	let show_example_3 = $state(false);
	let show_example_4 = $state(false);
	let show_example_5 = $state(false);
	let show_example_6 = $state(false);
</script>

<Tome_Content {tome}>
	<h1>Positioned Element</h1>

	<p>
		The Positioned Element component is a low-level utility for positioning elements relative to a
		trigger element. It serves as the foundation for higher-level components like
		<Tome_Link name="tooltip" /> and <Tome_Link name="popover" />.
	</p>

	<div class="import_example p_sm bg_2 radius_sm mb_md">
		<Code content="import Positioned_Element from '$lib/Positioned_Element.svelte';" />
	</div>

	<Tome_Section>
		<Tome_Section_Header text="Examples" />

		<div class="example_grid">
			<div class="example p_sm bg_2 radius_sm">
				<h3 class="size_sm">Basic Right Positioning</h3>
				<div class="example_demo mb_sm">
					<div>
						<button type="button" class="plain" onclick={() => (show_example_1 = !show_example_1)}>
							Toggle Right {show_example_1 ? '▲' : '▼'}
						</button>

						<Positioned_Element show={show_example_1} position="right">
							{#snippet children()}
								<div class="p_sm bg_3 radius_sm">Content positioned to the right</div>
							{/snippet}
						</Positioned_Element>
					</div>
				</div>

				<Code
					content={`<button type="button" class="plain" onclick={() => (show = !show)}>
  Toggle Right {show ? '▲' : '▼'}
</button>

<Positioned_Element show={show} position="right">
  {#snippet children()}
    <div class="p_sm bg_3 radius_sm">
      Content positioned to the right
    </div>
  {/snippet}
</Positioned_Element>`}
				/>
			</div>

			<div class="example p_sm bg_2 radius_sm">
				<h3 class="size_sm">Bottom with Custom Background</h3>
				<div class="example_demo mb_sm">
					<div>
						<button type="button" class="plain" onclick={() => (show_example_2 = !show_example_2)}>
							Toggle Bottom {show_example_2 ? '▲' : '▼'}
						</button>

						<Positioned_Element show={show_example_2} position="bottom" bg="bg_h_1">
							{#snippet children()}
								<div class="p_sm radius_sm">
									<span class="color_h">Custom background</span>
								</div>
							{/snippet}
						</Positioned_Element>
					</div>
				</div>

				<Code
					content={`<button type="button" class="plain" onclick={() => (show = !show)}>
  Toggle Bottom {show ? '▲' : '▼'}
</button>

<Positioned_Element show={show} position="bottom" bg="bg_h_1">
  {#snippet children()}
    <div class="p_sm radius_sm">
      <span class="color_h">Custom background</span>
    </div>
  {/snippet}
</Positioned_Element>`}
				/>
			</div>

			<div class="example p_sm bg_2 radius_sm">
				<h3 class="size_sm">Left with Custom Alignment</h3>
				<div class="example_demo mb_sm">
					<div>
						<button type="button" class="plain" onclick={() => (show_example_3 = !show_example_3)}>
							Toggle Left {show_example_3 ? '▲' : '▼'}
						</button>

						<Positioned_Element
							show={show_example_3}
							position="left"
							align="start"
							duration={200}
							offset="20px"
						>
							{#snippet children()}
								<div class="p_sm bg_3 radius_sm">
									<span>Start-aligned content</span>
								</div>
							{/snippet}
						</Positioned_Element>
					</div>
				</div>

				<Code
					content={`<button type="button" class="plain" onclick={() => (show = !show)}>
  Toggle Left {show ? '▲' : '▼'}
</button>

<Positioned_Element 
  show={show} 
  position="left"
  align="start"
  duration={200}
  offset="20px"
>
  {#snippet children()}
    <div class="p_sm bg_3 radius_sm">
      <span>Start-aligned content</span>
    </div>
  {/snippet}
</Positioned_Element>`}
				/>
			</div>

			<div class="example p_sm bg_2 radius_sm">
				<h3 class="size_sm">Center Position</h3>
				<div class="example_demo mb_sm">
					<div>
						<button type="button" class="plain" onclick={() => (show_example_5 = !show_example_5)}>
							Toggle Center {show_example_5 ? '▲' : '▼'}
						</button>

						<Positioned_Element show={show_example_5} position="center" bg={null}>
							{#snippet children()}
								<div class="p_sm bg_e_1 radius_sm">
									<span>Centered content</span>
								</div>
							{/snippet}
						</Positioned_Element>
					</div>
				</div>

				<Code
					content={`<button type="button" class="plain" onclick={() => (show = !show)}>
  Toggle Center {show ? '▲' : '▼'}
</button>

<Positioned_Element show={show} position="center" bg={null}>
  {#snippet children()}
    <div class="p_sm bg_e_1 radius_sm">
      <span>Centered content</span>
    </div>
  {/snippet}
</Positioned_Element>`}
				/>
			</div>

			<div class="example p_sm bg_2 radius_sm">
				<h3 class="size_sm">Overlay Position</h3>
				<div class="example_demo mb_sm">
					<div class="position_relative w_100 h_100">
						<button type="button" class="plain" onclick={() => (show_example_6 = !show_example_6)}>
							Toggle Overlay {show_example_6 ? '▲' : '▼'}
						</button>

						<Positioned_Element show={show_example_6} position="overlay" bg="bg_2">
							{#snippet children()}
								<div class="p_sm flex flex_column justify_content_center align_items_center h_100">
									<span class="mb_xs">Overlay content</span>
									<button type="button" class="plain" onclick={() => (show_example_6 = false)}>
										Close
									</button>
								</div>
							{/snippet}
						</Positioned_Element>
					</div>
				</div>

				<Code
					content={`<div class="position_relative w_100 h_100">
  <button type="button" class="plain" onclick={() => (show = !show)}>
    Toggle Overlay {show ? '▲' : '▼'}
  </button>

  <Positioned_Element show={show} position="overlay" bg="bg_2">
    {#snippet children()}
      <div class="p_sm flex flex_column justify_content_center align_items_center h_100">
        <span class="mb_xs">Overlay content</span>
        <button type="button" class="plain" onclick={() => (show = false)}>Close</button>
      </div>
    {/snippet}
  </Positioned_Element>
</div>`}
				/>
			</div>
		</div>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Props" />

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
						<td>show</td>
						<td>boolean</td>
						<td>false</td>
						<td>Whether to show the element</td>
					</tr>
					<tr>
						<td>position</td>
						<td>Position</td>
						<td>'right'</td>
						<td>Position relative to container</td>
					</tr>
					<tr>
						<td>align</td>
						<td>Alignment</td>
						<td>'center'</td>
						<td>Alignment along the edge</td>
					</tr>
					<tr>
						<td>offset</td>
						<td>string</td>
						<td>undefined</td>
						<td>Distance from positioned edge</td>
					</tr>
					<tr>
						<td>duration</td>
						<td>number</td>
						<td>120</td>
						<td>Animation duration in ms</td>
					</tr>
					<tr>
						<td>element_attrs</td>
						<td>SvelteHTMLElements['div']</td>
						<td>&lbrace;}</td>
						<td>HTML attributes for element</td>
					</tr>
					<tr>
						<td>class</td>
						<td>string</td>
						<td>''</td>
						<td>Additional CSS class</td>
					</tr>
					<tr>
						<td>pointer_events</td>
						<td>boolean</td>
						<td>true</td>
						<td>Allow pointer events</td>
					</tr>
					<tr>
						<td>children</td>
						<td>Snippet</td>
						<td>undefined</td>
						<td>Content to render</td>
					</tr>
					<tr>
						<td>trigger</td>
						<td>Snippet</td>
						<td>undefined</td>
						<td>Optional trigger content</td>
					</tr>
					<tr>
						<td>bg</td>
						<td>string | null</td>
						<td>'bg_3'</td>
						<td>Background class or null</td>
					</tr>
				</tbody>
			</table>
		</div>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Position Types" />

		<p>
			The component uses TypeScript types for positioning, imported from <code
				>$lib/position_helpers.js</code
			>:
		</p>

		<div class="table_wrapper mb_sm">
			<table class="w_100">
				<thead>
					<tr>
						<th>Type</th>
						<th>Values</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>BasicPosition</td>
						<td>'left' | 'right' | 'top' | 'bottom'</td>
						<td>Cardinal directions</td>
					</tr>
					<tr>
						<td>Position</td>
						<td>BasicPosition | 'center' | 'overlay'</td>
						<td>Extended position options</td>
					</tr>
					<tr>
						<td>Alignment</td>
						<td>'start' | 'center' | 'end'</td>
						<td>Alignment along positioned edge</td>
					</tr>
				</tbody>
			</table>
		</div>

		<Code
			content={`// Types from $lib/position_helpers.js
export type BasicPosition = 'left' | 'right' | 'top' | 'bottom';
export type Position = BasicPosition | 'overlay' | 'center';
export type Alignment = 'start' | 'center' | 'end';`}
		/>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Helper Functions" />

		<p>The component uses these utility functions for positioning:</p>

		<div class="table_wrapper mb_sm">
			<table class="w_100">
				<thead>
					<tr>
						<th>Function</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>generate_position_styles()</code></td>
						<td>Generates CSS positioning styles</td>
					</tr>
					<tr>
						<td><code>styles_to_string()</code></td>
						<td>Converts styles object to CSS string</td>
					</tr>
					<tr>
						<td><code>get_position_style()</code></td>
						<td>Generates complete CSS style string</td>
					</tr>
				</tbody>
			</table>
		</div>

		<Code
			content={`// Example usage:
import {get_position_style} from '$lib/position_helpers.js';

// Generate CSS style string
const style = get_position_style('top', 'center', '10px');
// Result: "position: absolute; z-index: 10; transform-origin: center; 
// top: calc(-1 * 10px); left: 50%; transform: translateX(-50%)"`}
		/>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Related Components" />

		<p>Positioned_Element is a foundational component that powers several other UI components:</p>

		<ul>
			<li>
				<Tome_Link name="tooltip" /> - For displaying information on hover/focus
			</li>
			<li>
				<Tome_Link name="popover" /> - For interactive popover content
			</li>
			<li>
				<Tome_Link name="confirm_button" /> - For confirmation buttons
			</li>
			<li>
				<Tome_Link name="confirm_cancel_button" /> - For confirm/cancel buttons
			</li>
		</ul>

		<div class="bg_2 p_sm radius_sm mt_sm">
			<h4 class="size_sm mb_xs">When to Use Directly</h4>
			<p class="mb_0">
				While you can use Positioned_Element directly for custom UI components, the higher-level
				components include additional accessibility features and interaction behaviors for common
				use cases. Use Positioned_Element directly when you need:
			</p>
			<ul class="mb_0 mt_xs">
				<li>Complete control over positioning behavior</li>
				<li>Custom animation or interaction patterns</li>
				<li>Non-standard positioning requirements</li>
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
		position: relative;
	}

	.position_relative {
		position: relative;
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
