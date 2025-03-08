<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import Popover from '$lib/Popover.svelte';
	import {GLYPH_REMOVE, GLYPH_CHECK, GLYPH_ARROW_UP, GLYPH_ARROW_DOWN} from '$lib/glyphs.js';
	import Tome_Content from '@ryanatkn/fuz/Tome_Content.svelte';
	import Tome_Section from '@ryanatkn/fuz/Tome_Section.svelte';
	import Tome_Section_Header from '@ryanatkn/fuz/Tome_Section_Header.svelte';
	import {get_tome_by_name} from '@ryanatkn/fuz/tome.js';
	import Props_Table from '$lib/Props_Table.svelte';
	import type {Prop_Definition} from '$lib/svelte_helpers.js';
	import Tome_Link from '@ryanatkn/fuz/Tome_Link.svelte';

	const tome = get_tome_by_name('popover');

	// Demo actions
	const demo_action = () => {
		alert('Action triggered!');
	};

	// Props data for the component
	const popover_props: Array<Prop_Definition> = [
		{
			name: 'open',
			type: 'boolean',
			default_value: 'false',
			description: 'Initial open state',
		},
		{
			name: 'position',
			type: 'BasicPosition',
			default_value: "'bottom'",
			description: 'Position of the popover',
		},
		{
			name: 'popover_attrs',
			type: "SvelteHTMLElements['div']",
			default_value: '{}',
			description: 'HTML attributes for popover',
		},
		{
			name: 'onchange',
			type: '(open: boolean) => void',
			default_value: 'undefined',
			description: 'Called on state change',
		},
		{
			name: 'trigger',
			type: 'Snippet<[open: boolean, toggle: () => void]>',
			default_value: 'required',
			description: 'Trigger element content',
		},
		{
			name: 'children',
			type: 'Snippet<[{is_open: boolean; toggle: () => void}]>',
			default_value: 'required',
			description: 'Popover content',
		},
		{
			name: 'bg',
			type: 'string | null',
			default_value: "'bg_3'",
			description: 'Background class or null',
		},
	];

	// Methods data for the component
	const popover_methods: Array<Prop_Definition> = [
		{
			name: 'open()',
			type: 'Method',
			default_value: '-',
			description: 'Opens the popover programmatically',
		},
		{
			name: 'close()',
			type: 'Method',
			default_value: '-',
			description: 'Closes the popover programmatically',
		},
		{
			name: 'toggle()',
			type: 'Method',
			default_value: '-',
			description: "Toggles the popover's open state",
		},
	];
</script>

<Tome_Content {tome}>
	<h1>Popover</h1>

	<p>
		Popovers display interactive content when a trigger element is clicked. Unlike tooltips,
		popovers can contain interactive elements and remain open until explicitly closed.
	</p>

	<div class="import_example p_sm bg_2 radius_sm mb_md">
		<Code content="import Popover from '$lib/Popover.svelte';" />
	</div>

	<Tome_Section>
		<Tome_Section_Header text="Examples" />

		<div class="example_grid">
			<div class="example p_sm bg_2 radius_sm">
				<h3 class="size_sm">Basic Popover</h3>
				<div class="example_demo mb_sm">
					<Popover position="bottom">
						{#snippet trigger(is_open, toggle)}
							<button type="button" class="plain" onclick={toggle}>
								Menu {is_open ? GLYPH_ARROW_UP : GLYPH_ARROW_DOWN}
							</button>
						{/snippet}

						{#snippet children(_params)}
							<div class="p_xs">
								<button type="button" class="plain w_100 text_align_left">Menu Item 1</button>
								<button type="button" class="plain w_100 text_align_left">Menu Item 2</button>
							</div>
						{/snippet}
					</Popover>
				</div>
				<Code
					content={`<Popover position="bottom">
  {#snippet trigger(is_open, toggle)}
    <button type="button" class="plain" onclick={toggle}>
      Menu {is_open ? GLYPH_ARROW_UP : GLYPH_ARROW_DOWN}
    </button>
  {/snippet}
  
  {#snippet children(params)}
    <div class="p_xs">
      <button type="button" class="plain w_100 text_align_left">Menu Item 1</button>
      <button type="button" class="plain w_100 text_align_left">Menu Item 2</button>
    </div>
  {/snippet}
</Popover>`}
				/>
			</div>

			<div class="example p_sm bg_2 radius_sm">
				<h3 class="size_sm">Action Menu</h3>
				<div class="example_demo mb_sm">
					<Popover position="right">
						{#snippet trigger(is_open, toggle)}
							<button type="button" class="plain" onclick={toggle}>
								Actions {is_open ? GLYPH_ARROW_UP : GLYPH_ARROW_DOWN}
							</button>
						{/snippet}

						{#snippet children(params)}
							<div class="p_xs">
								<button
									type="button"
									class="plain w_100 text_align_left"
									onclick={() => {
										demo_action();
										params.toggle();
									}}
								>
									<span class="color_h">{GLYPH_CHECK}</span> Approve
								</button>
								<button
									type="button"
									class="plain w_100 text_align_left color_c"
									onclick={params.toggle}
								>
									{GLYPH_REMOVE} Reject
								</button>
							</div>
						{/snippet}
					</Popover>
				</div>
				<Code
					content={`<Popover position="right">
  {#snippet trigger(is_open, toggle)}
    <button type="button" class="plain" onclick={toggle}>
      Actions {is_open ? GLYPH_ARROW_UP : GLYPH_ARROW_DOWN}
    </button>
  {/snippet}
  
  {#snippet children(params)}
    <div class="p_xs">
      <button
        type="button"
        class="plain w_100 text_align_left"
        onclick={() => {
          someAction();
          params.toggle(); // Close popover
        }}
      >
        <span class="color_h">{GLYPH_CHECK}</span> Approve
      </button>
      <button
        type="button"
        class="plain w_100 text_align_left color_c"
        onclick={params.toggle}
      >
        {GLYPH_REMOVE} Reject
      </button>
    </div>
  {/snippet}
</Popover>`}
				/>
			</div>

			<div class="example p_sm bg_2 radius_sm">
				<h3 class="size_sm">Custom Background</h3>
				<div class="example_demo mb_sm">
					<Popover position="top" bg="bg_h_1">
						{#snippet trigger(is_open, toggle)}
							<button type="button" class="plain" onclick={toggle}>
								Custom {is_open ? GLYPH_ARROW_UP : GLYPH_ARROW_DOWN}
							</button>
						{/snippet}

						{#snippet children(params)}
							<div class="p_xs">
								<p class="mb_xs color_h">Custom styled popover</p>
								<button type="button" class="plain w_100" onclick={params.toggle}>Close</button>
							</div>
						{/snippet}
					</Popover>
				</div>
				<Code
					content={`<Popover position="top" bg="bg_h_1">
  {#snippet trigger(is_open, toggle)}
    <button type="button" class="plain" onclick={toggle}>
      Custom {is_open ? GLYPH_ARROW_UP : GLYPH_ARROW_DOWN}
    </button>
  {/snippet}
  
  {#snippet children(params)}
    <div class="p_xs">
      <p class="mb_xs color_h">Custom styled popover</p>
      <button type="button" class="plain w_100" onclick={params.toggle}>Close</button>
    </div>
  {/snippet}
</Popover>`}
				/>
			</div>

			<div class="example p_sm bg_2 radius_sm">
				<h3 class="size_sm">Non-Closing Popover</h3>
				<div class="example_demo mb_sm">
					<Popover
						position="left"
						popover_attrs={{
							onclick: (e) => e.stopPropagation(),
							style: 'min-width: 180px;',
						}}
					>
						{#snippet trigger(is_open, toggle)}
							<button type="button" class="plain" onclick={toggle}>
								Persistent {is_open ? GLYPH_ARROW_UP : GLYPH_ARROW_DOWN}
							</button>
						{/snippet}

						{#snippet children(params)}
							<div class="p_xs">
								<form class="mb_sm">
									<label for="popover-input" class="size_xs">Form:</label>
									<input
										id="popover-input"
										type="text"
										class="plain w_100 mb_xs"
										placeholder="Input"
									/>
								</form>
								<button type="button" class="plain w_100" onclick={params.toggle}>Close</button>
							</div>
						{/snippet}
					</Popover>
				</div>
				<Code
					content={`<Popover 
  position="left"
  popover_attrs={{
    onclick: (e) => e.stopPropagation(),
    style: 'min-width: 180px;'
  }}
>
  {#snippet trigger(is_open, toggle)}
    <button type="button" class="plain" onclick={toggle}>
      Persistent {is_open ? GLYPH_ARROW_UP : GLYPH_ARROW_DOWN}
    </button>
  {/snippet}
  
  {#snippet children(params)}
    <div class="p_xs">
      <form class="mb_sm">
        <label for="popover-input" class="size_xs">Form:</label>
        <input id="popover-input" type="text" class="plain w_100 mb_xs" placeholder="Input" />
      </form>
      <button type="button" class="plain w_100" onclick={params.toggle}>Close</button>
    </div>
  {/snippet}
</Popover>`}
				/>
			</div>
		</div>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Props" />

		<Props_Table props={popover_props} />
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Methods" />

		<p>
			The Popover component exposes the following methods via the <code>controls</code> export:
		</p>

		<Props_Table props={popover_methods} title="Available Methods" />

		<div class="mt_md">
			<Code
				content={`// Using methods via bind:
<Popover bind:controls position="bottom">
  {#snippet trigger(is_open, toggle)}
    <button type="button" class="plain" onclick={toggle}>Toggle</button>
  {/snippet}
  
  {#snippet children(params)}
    <div class="p_xs">Popover content</div>
  {/snippet}
</Popover>

// Then later:
controls.open();   // Open programmatically
controls.close();  // Close programmatically
controls.toggle(); // Toggle state`}
			/>
		</div>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Accessibility" />

		<p>The Popover component follows accessibility best practices:</p>

		<ul>
			<li>Can be dismissed with the Escape key</li>
			<li>Closes when clicking outside (unless configured not to)</li>
			<li>Preserves focus management</li>
			<li>Does not trap focus within the popover</li>
		</ul>

		<div class="bg_2 p_sm radius_sm mt_sm">
			<h4 class="mb_xs size_sm">Accessibility Tips</h4>
			<ul class="mb_0">
				<li>
					Add <code>aria-label</code> to trigger buttons that don't have visible text
				</li>
				<li>Consider adding <code>aria-expanded</code> to trigger elements</li>
			</ul>
		</div>

		<div class="bg_2 p_sm radius_sm mt_sm">
			<h4 class="size_sm mb_xs">Related Components</h4>
			<ul class="mb_0">
				<li>
					<Tome_Link name="tooltip" /> - For simpler, non-interactive informational content
				</li>
				<li>
					<Tome_Link name="positioned_element" /> - The core positioning utility used by popovers
				</li>
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

	code {
		font-family: var(--font_mono);
		font-size: 0.9em;
	}

	.method_table td:first-child {
		white-space: nowrap;
	}
</style>
