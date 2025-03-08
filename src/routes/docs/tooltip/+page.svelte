<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import Tooltip from '$lib/Tooltip.svelte';
	import {GLYPH_CHECK, GLYPH_FILE} from '$lib/glyphs.js';
	import Tome_Content from '@ryanatkn/fuz/Tome_Content.svelte';
	import {get_tome_by_name} from '@ryanatkn/fuz/tome.js';

	const tome = get_tome_by_name('tooltip');
</script>

<Tome_Content {tome}>
	<h1 class="size_xl mb_md">Tooltip</h1>

	<p class="mb_md">
		Tooltips provide additional information when hovering over or focusing on an element. They
		follow <a
			href="https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/"
			target="_blank"
			rel="noopener noreferrer">WAI-ARIA tooltip pattern</a
		> for accessibility.
	</p>

	<div class="import_example p_sm bg_2 radius_sm mb_lg">
		<Code content="import Tooltip from '$lib/Tooltip.svelte';" />
	</div>

	<section class="mb_xl">
		<h2 class="size_lg mb_md">Examples</h2>

		<div class="example_grid">
			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Basic Tooltip</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
					<Tooltip position="top">
						{#snippet content()}
							Simple tooltip content
						{/snippet}
						<button type="button" class="plain">Hover me</button>
					</Tooltip>
				</div>

				<Code
					content={`<Tooltip position="top">
  {#snippet content()}
    Simple tooltip content
  {/snippet}
  <button type="button" class="plain">
    Hover me
  </button>
</Tooltip>`}
				/>
			</div>

			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Custom Background</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
					<Tooltip position="right" bg="bg_h_1">
						{#snippet content()}
							<span class="color_h">Custom</span> tooltip
						{/snippet}
						<button type="button" class="plain">Custom background</button>
					</Tooltip>
				</div>

				<Code
					content={`<Tooltip position="right" bg="bg_h_1">
  {#snippet content()}
    <span class="color_h">Custom</span> tooltip
  {/snippet}
  <button type="button" class="plain">
    Custom background
  </button>
</Tooltip>`}
				/>
			</div>

			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Rich Content</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
					<Tooltip position="bottom">
						{#snippet content()}
							<div class="p_xs">
								<div class="mb_xs2 font_weight_600">File details:</div>
								<div class="size_xs">Created: Today</div>
								<div class="size_xs">Size: 1.2 MB</div>
							</div>
						{/snippet}
						<button type="button" class="plain icon_button">{GLYPH_FILE}</button>
					</Tooltip>
				</div>

				<Code
					content={`<Tooltip position="bottom">
  {#snippet content()}
    <div class="p_xs">
      <div class="mb_xs2 font_weight_600">File details:</div>
      <div class="size_xs">Created: Today</div>
      <div class="size_xs">Size: 1.2 MB</div>
    </div>
  {/snippet}
  <button type="button" class="plain icon_button">{GLYPH_FILE}</button>
</Tooltip>`}
				/>
			</div>

			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Transparent Background</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
					<Tooltip position="left" bg={null} delay={0}>
						{#snippet content()}
							<div class="p_xs2 bg_e_1 radius_xs">No background on container</div>
						{/snippet}
						<button type="button" class="plain">No delay</button>
					</Tooltip>
				</div>

				<Code
					content={`<Tooltip position="left" bg={null} delay={0}>
  {#snippet content()}
    <div class="p_xs2 bg_e_1 radius_xs">
      No background on container
    </div>
  {/snippet}
  <button type="button" class="plain">
    No delay
  </button>
</Tooltip>`}
				/>
			</div>

			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">With Icon</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
					<Tooltip position="top">
						{#snippet content()}
							Success action completed
						{/snippet}
						<span class="color_h">{GLYPH_CHECK}</span>
					</Tooltip>
				</div>

				<Code
					content={`<Tooltip position="top">
  {#snippet content()}
    Success action completed
  {/snippet}
  <span class="color_h">{GLYPH_CHECK}</span>
</Tooltip>`}
				/>
			</div>

			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Custom Delay</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
					<Tooltip position="bottom" delay={1000}>
						{#snippet content()}
							This tooltip has a 1-second delay
						{/snippet}
						<button type="button" class="plain">Hover for 1 second</button>
					</Tooltip>
				</div>

				<Code
					content={`<Tooltip position="bottom" delay={1000}>
  {#snippet content()}
    This tooltip has a 1-second delay
  {/snippet}
  <button type="button" class="plain">
    Hover for 1 second
  </button>
</Tooltip>`}
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
						<td>position</td>
						<td>BasicPosition</td>
						<td>'top'</td>
						<td>Position of the tooltip ('top', 'right', 'bottom', 'left')</td>
					</tr>
					<tr>
						<td>delay</td>
						<td>number</td>
						<td>80</td>
						<td>Delay in ms before showing the tooltip</td>
					</tr>
					<tr>
						<td>tooltip_attrs</td>
						<td>SvelteHTMLElements['div']</td>
						<td>{'{'}}</td>
						<td>HTML attributes for the tooltip container</td>
					</tr>
					<tr>
						<td>content</td>
						<td>Snippet</td>
						<td>required</td>
						<td>Content to render inside the tooltip</td>
					</tr>
					<tr>
						<td>bg</td>
						<td>string | null</td>
						<td>'bg_3'</td>
						<td>Background color class or null for transparent</td>
					</tr>
					<tr>
						<td>id</td>
						<td>string</td>
						<td>auto-generated</td>
						<td>ID for the tooltip (for ARIA)</td>
					</tr>
					<tr>
						<td>children</td>
						<td>Snippet</td>
						<td>undefined</td>
						<td>Content that triggers the tooltip</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>

	<section class="mb_xl">
		<h2 class="size_lg mb_md">Accessibility</h2>

		<p class="mb_md">The Tooltip component follows WAI-ARIA patterns:</p>

		<ul>
			<li>Uses <code>role="tooltip"</code> for the tooltip element</li>
			<li>Connects to its trigger with <code>aria-describedby</code></li>
			<li>Can be dismissed with the Escape key</li>
			<li>Works with keyboard focus events</li>
			<li>Avoids capturing keyboard focus, following the tooltip pattern</li>
		</ul>
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
