<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import Positioned_Element from '$lib/Positioned_Element.svelte';
	import Tome_Content from '@ryanatkn/fuz/Tome_Content.svelte';
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
	<h1 class="size_xl mb_md">Positioned Element</h1>

	<p class="mb_md">
		The Positioned Element component is a low-level utility for positioning elements relative to a
		trigger element. It serves as the foundation for higher-level components like
		<Tome_Link name="tooltip" /> and <Tome_Link name="popover" />.
	</p>

	<div class="import_example p_sm bg_2 radius_sm mb_lg">
		<Code content="import Positioned_Element from '$lib/Positioned_Element.svelte';" />
	</div>

	<section class="mb_xl">
		<h2 class="size_lg mb_md">Examples</h2>

		<div class="example_grid">
			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Basic Right Positioning</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
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

			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Bottom with Custom Background</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
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

			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Left Position with Custom Alignment</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
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

			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Top Position with End Alignment</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
					<div>
						<button type="button" class="plain" onclick={() => (show_example_4 = !show_example_4)}>
							Toggle Top {show_example_4 ? '▲' : '▼'}
						</button>

						<Positioned_Element show={show_example_4} position="top" align="end" offset="15px">
							{#snippet children()}
								<div class="p_sm bg_3 radius_sm">
									<span>End-aligned content</span>
								</div>
							{/snippet}
						</Positioned_Element>
					</div>
				</div>

				<Code
					content={`<button type="button" class="plain" onclick={() => (show = !show)}>
  Toggle Top {show ? '▲' : '▼'}
</button>

<Positioned_Element 
  show={show} 
  position="top"
  align="end"
  offset="15px"
>
  {#snippet children()}
    <div class="p_sm bg_3 radius_sm">
      <span>End-aligned content</span>
    </div>
  {/snippet}
</Positioned_Element>`}
				/>
			</div>

			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Center Positioning</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
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

			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Overlay Positioning</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
					<div class="position_relative">
						<button type="button" class="plain" onclick={() => (show_example_6 = !show_example_6)}>
							Toggle Overlay {show_example_6 ? '▲' : '▼'}
						</button>

						<Positioned_Element show={show_example_6} position="overlay" bg="bg_2">
							{#snippet children()}
								<div
									class="p_md radius_sm flex flex_column justify_content_center align_items_center h_100"
								>
									<span class="mb_sm">Overlay content</span>
									<button type="button" class="plain" onclick={() => (show_example_6 = false)}>
										Close
									</button>
								</div>
							{/snippet}
						</Positioned_Element>
					</div>
				</div>

				<Code
					content={`<div class="position_relative">
  <button type="button" class="plain" onclick={() => (show = !show)}>
    Toggle Overlay {show ? '▲' : '▼'}
  </button>

  <Positioned_Element show={show} position="overlay" bg="bg_2">
    {#snippet children()}
      <div class="p_md radius_sm flex flex_column justify_content_center align_items_center h_100">
        <span class="mb_sm">Overlay content</span>
        <button
          type="button"
          class="plain"
          onclick={() => (show = false)}
        >
          Close
        </button>
      </div>
    {/snippet}
  </Positioned_Element>
</div>`}
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
						<td>show</td>
						<td>boolean</td>
						<td>false</td>
						<td>Whether to show the positioned element</td>
					</tr>
					<tr>
						<td>position</td>
						<td>Position</td>
						<td>'right'</td>
						<td
							>Position relative to container ('top', 'right', 'bottom', 'left', 'center',
							'overlay')</td
						>
					</tr>
					<tr>
						<td>align</td>
						<td>Alignment</td>
						<td>'center'</td>
						<td>Alignment along the positioned edge ('start', 'center', 'end')</td>
					</tr>
					<tr>
						<td>offset</td>
						<td>string</td>
						<td>undefined</td>
						<td>Distance from the positioned edge (CSS value)</td>
					</tr>
					<tr>
						<td>duration</td>
						<td>number</td>
						<td>120</td>
						<td>Animation duration in milliseconds</td>
					</tr>
					<tr>
						<td>element_attrs</td>
						<td>SvelteHTMLElements['div']</td>
						<td>{'{}'}</td>
						<td>HTML attributes for the positioned element</td>
					</tr>
					<tr>
						<td>class</td>
						<td>string</td>
						<td>''</td>
						<td>Additional CSS class to apply</td>
					</tr>
					<tr>
						<td>pointer_events</td>
						<td>boolean</td>
						<td>true</td>
						<td>Whether the element can receive pointer events</td>
					</tr>
					<tr>
						<td>children</td>
						<td>Snippet</td>
						<td>undefined</td>
						<td>Content to render in the positioned element</td>
					</tr>
					<tr>
						<td>trigger</td>
						<td>Snippet</td>
						<td>undefined</td>
						<td>Optional trigger element content</td>
					</tr>
					<tr>
						<td>bg</td>
						<td>string | null</td>
						<td>'bg_3'</td>
						<td>Background color class or null for transparent</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>

	<section class="mb_xl">
		<h2 class="size_lg mb_md">Position Types</h2>

		<p class="mb_md">
			The component uses two TypeScript types for positioning, imported from <code
				>$lib/position_helpers.js</code
			>:
		</p>

		<div class="table_wrapper mb_md">
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
						<td>Cardinal directions for positioning elements</td>
					</tr>
					<tr>
						<td>Position</td>
						<td>BasicPosition | 'center' | 'overlay'</td>
						<td>Extended position options including center and overlay</td>
					</tr>
					<tr>
						<td>Alignment</td>
						<td>'start' | 'center' | 'end'</td>
						<td>How the element aligns along its positioned edge</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="mb_md">
			<Code
				content={`// These types are exported from $lib/position_helpers.js
export type BasicPosition = 'left' | 'right' | 'top' | 'bottom';
export type Position = BasicPosition | 'overlay' | 'center';
export type Alignment = 'start' | 'center' | 'end';`}
			/>
		</div>
	</section>

	<section class="mb_xl">
		<h2 class="size_lg mb_md">Helper Functions</h2>

		<p class="mb_md">The component uses these utility functions for positioning elements:</p>

		<div class="table_wrapper mb_md">
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
						<td>Generates CSS positioning styles based on position, alignment, and offset</td>
					</tr>
					<tr>
						<td><code>styles_to_string()</code></td>
						<td>Converts a styles object to a CSS inline style string</td>
					</tr>
					<tr>
						<td><code>get_position_style()</code></td>
						<td>Generates a complete CSS style string for positioning elements</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="mb_md">
			<Code
				content={`// Usage example:
import {get_position_style} from '$lib/position_helpers.js';

// Generate a CSS style string for positioning
const style = get_position_style('top', 'center', '10px');
// Result: "position: absolute; z-index: 10; transform-origin: center; 
// top: calc(-1 * 10px); left: 50%; right: auto; transform-origin: bottom; 
// transform: translateX(-50%)"`}
			/>
		</div>
	</section>

	<section class="mb_xl">
		<h2 class="size_lg mb_md">Usage with Other Components</h2>

		<p class="mb_md">
			Positioned_Element is a foundational component that powers several other UI components:
		</p>

		<ul class="mb_md">
			<li>
				<Tome_Link name="tooltip" /> - Uses positioned element for displaying information on hover/focus
			</li>
			<li>
				<Tome_Link name="popover" /> - Uses positioned element for interactive popover content
			</li>
			<li>
				<Tome_Link name="confirm_button" /> - Uses positioned element for confirmation buttons
			</li>
			<li>
				<Tome_Link name="confirm_cancel_button" /> - Uses positioned element for confirm/cancel buttons
			</li>
		</ul>

		<p>
			While you can use Positioned_Element directly for custom UI components, consider using the
			higher-level components for common UI patterns as they include additional accessibility
			features and interaction behaviors.
		</p>
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
		position: relative;
	}

	.position_relative {
		position: relative;
		width: 100%;
		height: 100%;
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
