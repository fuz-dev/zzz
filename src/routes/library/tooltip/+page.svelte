<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import Tooltip from '$lib/Tooltip.svelte';
	import {GLYPH_CHECK, GLYPH_FILE} from '$lib/glyphs.js';
	import Tome_Content from '@ryanatkn/fuz/Tome_Content.svelte';
	import Tome_Section from '@ryanatkn/fuz/Tome_Section.svelte';
	import Tome_Section_Header from '@ryanatkn/fuz/Tome_Section_Header.svelte';
	import {get_tome_by_name} from '@ryanatkn/fuz/tome.js';

	const tome = get_tome_by_name('tooltip');
</script>

<Tome_Content {tome}>
	<h1>Tooltip</h1>

	<p>
		Tooltips provide additional information when hovering over or focusing on an element. They
		follow <a
			href="https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/"
			target="_blank"
			rel="noopener noreferrer">WAI-ARIA tooltip pattern</a
		> for accessibility.
	</p>

	<div class="import_example p_sm bg_2 radius_sm mb_md">
		<Code content="import Tooltip from '$lib/Tooltip.svelte';" />
	</div>

	<Tome_Section>
		<Tome_Section_Header text="Examples" />

		<div class="example_grid">
			<div class="example p_sm bg_2 radius_sm">
				<h3 class="size_sm">Basic Tooltip</h3>
				<div class="example_demo mb_sm">
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
  <button type="button" class="plain">Hover me</button>
</Tooltip>`}
				/>
			</div>

			<div class="example p_sm bg_2 radius_sm">
				<h3 class="size_sm">Custom Background</h3>
				<div class="example_demo mb_sm">
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
  <button type="button" class="plain">Custom background</button>
</Tooltip>`}
				/>
			</div>

			<div class="example p_sm bg_2 radius_sm">
				<h3 class="size_sm">Rich Content</h3>
				<div class="example_demo mb_sm">
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

			<div class="example p_sm bg_2 radius_sm">
				<h3 class="size_sm">Transparent Background</h3>
				<div class="example_demo mb_sm">
					<Tooltip position="left" bg={null} delay={0}>
						{#snippet content()}
							<div class="p_xs2 bg_e_1 radius_xs">No background</div>
						{/snippet}
						<button type="button" class="plain">No delay</button>
					</Tooltip>
				</div>
				<Code
					content={`<Tooltip position="left" bg={null} delay={0}>
  {#snippet content()}
    <div class="p_xs2 bg_e_1 radius_xs">No background</div>
  {/snippet}
  <button type="button" class="plain">No delay</button>
</Tooltip>`}
				/>
			</div>

			<div class="example p_sm bg_2 radius_sm">
				<h3 class="size_sm">With Icon</h3>
				<div class="example_demo mb_sm">
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

			<div class="example p_sm bg_2 radius_sm">
				<h3 class="size_sm">Custom Delay</h3>
				<div class="example_demo mb_sm">
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
  <button type="button" class="plain">Hover for 1 second</button>
</Tooltip>`}
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
						<td>position</td>
						<td>BasicPosition</td>
						<td>'top'</td>
						<td>Position of the tooltip</td>
					</tr>
					<tr>
						<td>delay</td>
						<td>number</td>
						<td>80</td>
						<td>Delay in ms before showing</td>
					</tr>
					<tr>
						<td>tooltip_attrs</td>
						<td>SvelteHTMLElements['div']</td>
						<td>&lbrace;}</td>
						<td>HTML attributes for tooltip</td>
					</tr>
					<tr>
						<td>content</td>
						<td>Snippet</td>
						<td>required</td>
						<td>Content for the tooltip</td>
					</tr>
					<tr>
						<td>bg</td>
						<td>string | null</td>
						<td>'bg_3'</td>
						<td>Background class or null</td>
					</tr>
					<tr>
						<td>id</td>
						<td>string</td>
						<td>auto-generated</td>
						<td>ID for ARIA attributes</td>
					</tr>
					<tr>
						<td>children</td>
						<td>Snippet</td>
						<td>undefined</td>
						<td>Trigger element content</td>
					</tr>
				</tbody>
			</table>
		</div>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Accessibility" />

		<p>The Tooltip component follows WAI-ARIA patterns:</p>
		<ul>
			<li>Uses <code>role="tooltip"</code> for the tooltip element</li>
			<li>Connects to its trigger with <code>aria-describedby</code></li>
			<li>Can be dismissed with the Escape key</li>
			<li>Works with keyboard focus events</li>
			<li>Avoids capturing keyboard focus</li>
		</ul>
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

	code {
		font-family: var(--font_mono);
		font-size: 0.9em;
	}
</style>
