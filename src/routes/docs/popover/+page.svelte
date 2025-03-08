<script lang="ts">
	import Popover from '$lib/Popover.svelte';
	import {
		GLYPH_REMOVE,
		GLYPH_CHECK,
		GLYPH_ARROW_UP,
		GLYPH_ARROW_DOWN,
		GLYPH_FILE,
	} from '$lib/glyphs.js';
	import Tome_Content from '@ryanatkn/fuz/Tome_Content.svelte';
	import {get_tome_by_name} from '@ryanatkn/fuz/tome.js';

	const tome = get_tome_by_name('popover');

	// Demo actions
	const demo_action = () => {
		alert('Action triggered!');
	};
</script>

<Tome_Content {tome}>
	<h1 class="size_xl mb_md">Popover</h1>

	<p class="mb_md">
		Popovers display interactive content when a trigger element is clicked. Unlike tooltips,
		popovers can contain interactive elements and remain open until explicitly closed.
	</p>

	<div class="import_example p_sm bg_2 radius_sm mb_lg">
		<pre><code>import Popover from '$lib/Popover.svelte';</code></pre>
	</div>

	<section class="mb_xl">
		<h2 class="size_lg mb_md">Examples</h2>

		<div class="example_grid">
			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Basic Popover</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
					<Popover position="bottom">
						{#snippet trigger(is_open, toggle)}
							<button type="button" class="plain" onclick={toggle}>
								Toggle Menu {is_open ? GLYPH_ARROW_UP : GLYPH_ARROW_DOWN}
							</button>
						{/snippet}

						{#snippet children(_params)}
							<div class="p_xs">
								<button type="button" class="plain w_100 text_align_left">Menu Item 1</button>
								<button type="button" class="plain w_100 text_align_left">Menu Item 2</button>
								<button type="button" class="plain w_100 text_align_left">Menu Item 3</button>
							</div>
						{/snippet}
					</Popover>
				</div>

				<pre class="code_block p_sm bg_1"><code
						>&lt;Popover position="bottom"&gt;
            {'{'}#snippet trigger(is_open, toggle)}
							&lt;button type="button" class="plain" onclick={'{'}toggle}&gt;
      Toggle Menu {'{'}is_open
								? GLYPH_ARROW_UP
								: GLYPH_ARROW_DOWN}
    &lt;/button&gt;
    {'{'}/snippet}
  
            {'{'}#snippet children(params)}
							&lt;div class="p_xs"&gt;
      &lt;button type="button" class="plain w_100 text_align_left"&gt;Menu Item 1&lt;/button&gt;
      &lt;button type="button" class="plain w_100 text_align_left"&gt;Menu Item 2&lt;/button&gt;
      &lt;button type="button" class="plain w_100 text_align_left"&gt;Menu Item 3&lt;/button&gt;
    &lt;/div&gt;
    {'{'}/snippet}
&lt;/Popover&gt;</code
					></pre>
			</div>

			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Action Menu</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
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
										params.toggle(); // Close popover after action
									}}
								>
									<span class="color_h">{GLYPH_CHECK}</span> Approve
								</button>
								<button
									type="button"
									class="plain w_100 text_align_left color_c"
									onclick={() => {
										params.toggle(); // Close popover after action
									}}
								>
									{GLYPH_REMOVE} Reject
								</button>
								<div class="border_bottom_solid border_width_1 border_color_1 my_xs"></div>
								<button type="button" class="plain w_100 text_align_left">View Details</button>
							</div>
						{/snippet}
					</Popover>
				</div>

				<pre class="code_block p_sm bg_1"><code
						>&lt;Popover position="right"&gt;
  {'{'}#snippet trigger(is_open, toggle)}
							&lt;button type="button" class="plain" onclick={'{'}toggle}&gt;
      Actions {'{'}is_open
								? GLYPH_ARROW_UP
								: GLYPH_ARROW_DOWN}
    &lt;/button&gt;
    {'{'}/snippet}
  
  {'{'}#snippet children(params)}
							&lt;div class="p_xs"&gt;
      &lt;button
        type="button"
        class="plain w_100 text_align_left"
        onclick={'{'}() => {'{'}
								someAction();
								params.toggle(); // Close popover after action
							}}
      &gt;
        &lt;span class="color_h"&gt;{'{'}GLYPH_CHECK}&lt;/span&gt; Approve
      &lt;/button&gt;
      &lt;button
        type="button"
        class="plain w_100 text_align_left color_c"
        onclick={'{'}() => {'{'}
								params.toggle(); // Close popover after action
							}}
      &gt;
      {'{'}GLYPH_REMOVE} Reject
      &lt;/button&gt;
      &lt;div class="border_bottom_solid border_width_1 border_color_1 my_xs"&gt;&lt;/div&gt;
      &lt;button type="button" class="plain w_100 text_align_left"&gt;View Details&lt;/button&gt;
    &lt;/div&gt;
    {'{'}/snippet}
&lt;/Popover&gt;</code
					></pre>
			</div>

			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Custom Background</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
					<Popover position="top" bg="bg_h_1">
						{#snippet trigger(is_open, toggle)}
							<button type="button" class="plain" onclick={toggle}>
								Custom Style {is_open ? GLYPH_ARROW_UP : GLYPH_ARROW_DOWN}
							</button>
						{/snippet}

						{#snippet children(params)}
							<div class="p_xs">
								<p class="mb_xs color_h">Custom styled popover</p>
								<button type="button" class="plain w_100 mt_xs" onclick={params.toggle}
									>Close</button
								>
							</div>
						{/snippet}
					</Popover>
				</div>

				<pre class="code_block p_sm bg_1"><code
						>&lt;Popover position="top" bg="bg_h_1"&gt;
  {'{'}#snippet trigger(is_open, toggle)}
							&lt;button type="button" class="plain" onclick={'{'}toggle}&gt;
      Custom Style {'{'}is_open ? GLYPH_ARROW_UP : GLYPH_ARROW_DOWN}
    &lt;/button&gt;
						{'{'}/snippet}
  
  {'{'}#snippet children(params)}
							&lt;div class="p_xs"&gt;
      &lt;p class="mb_xs color_h"&gt;Custom styled popover&lt;/p&gt;
      &lt;button type="button" class="plain w_100 mt_xs" onclick={'{'}params.toggle}&gt;
        Close
      &lt;/button&gt;
    &lt;/div&gt;
						{'{'}/snippet}
&lt;/Popover&gt;</code
					></pre>
			</div>

			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Persistent Popover</h3>
				<p class="mb_xs size_xs">This popover won't close when clicking inside it</p>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
					<Popover
						position="left"
						popover_attrs={{
							onclick: (e) => e.stopPropagation(),
							style: 'min-width: 200px;',
						}}
					>
						{#snippet trigger(is_open, toggle)}
							<button type="button" class="plain" onclick={toggle}>
								Persistent Menu {is_open ? GLYPH_ARROW_UP : GLYPH_ARROW_DOWN}
							</button>
						{/snippet}

						{#snippet children(params)}
							<div class="p_xs">
								<p class="mb_sm">This won't auto-close when clicked</p>
								<form class="mb_sm">
									<label class="size_xs">Example form:</label>
									<input type="text" class="plain w_100 mb_xs" placeholder="Input field" />
									<button type="button" class="plain w_100">Submit</button>
								</form>
								<button type="button" class="plain w_100 mt_xs" onclick={params.toggle}>
									Close Menu
								</button>
							</div>
						{/snippet}
					</Popover>
				</div>

				<pre class="code_block p_sm bg_1"><code
						>&lt;Popover 
  position="left"
  popover_attrs={'{'}{'{'}
							onclick: (e) => e.stopPropagation(),
							style: 'min-width: 200px;',
						}}
&gt;
  {'{'}#snippet trigger(is_open, toggle)}
							&lt;button type="button" class="plain" onclick={'{'}toggle}&gt;
      Persistent Menu {'{'}is_open ? GLYPH_ARROW_UP : GLYPH_ARROW_DOWN}
    &lt;/button&gt;
						{'{'}/snippet}
  
  {'{'}#snippet children(params)}
							&lt;div class="p_xs"&gt;
      &lt;p class="mb_sm"&gt;This won't auto-close when clicked&lt;/p&gt;
      &lt;form class="mb_sm"&gt;
        &lt;label class="size_xs"&gt;Example form:&lt;/label&gt;
        &lt;input type="text" class="plain w_100 mb_xs" placeholder="Input field" /&gt;
        &lt;button type="button" class="plain w_100"&gt;Submit&lt;/button&gt;
      &lt;/form&gt;
      &lt;button type="button" class="plain w_100 mt_xs" onclick={'{'}params.toggle}&gt;
        Close Menu
      &lt;/button&gt;
    &lt;/div&gt;
						{'{'}/snippet}
&lt;/Popover&gt;</code
					></pre>
			</div>

			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Icon Trigger</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
					<Popover position="bottom">
						{#snippet trigger(_is_open, toggle)}
							<button
								type="button"
								class="plain icon_button"
								onclick={toggle}
								aria-label="Open file menu"
							>
								{GLYPH_FILE}
							</button>
						{/snippet}

						{#snippet children(_params)}
							<div class="p_xs">
								<div class="mb_xs font_weight_600">File.txt</div>
								<div class="size_xs mb_xs">Last modified: Today</div>
								<div class="flex gap_xs mt_xs">
									<button type="button" class="plain flex_1">Open</button>
									<button type="button" class="plain flex_1">Download</button>
									<button type="button" class="plain flex_1 color_c">Delete</button>
								</div>
							</div>
						{/snippet}
					</Popover>
				</div>

				<pre class="code_block p_sm bg_1"><code
						>&lt;Popover position="bottom"&gt;
  {'{'}#snippet trigger(is_open, toggle)}
							&lt;button type="button" class="plain icon_button" onclick={'{'}toggle} aria-label="Open file menu"&gt;
      {GLYPH_FILE}
    &lt;/button&gt;
						{'{'}/snippet}
  
  {'{'}#snippet children(params)}
							&lt;div class="p_xs"&gt;
      &lt;div class="mb_xs font_weight_600"&gt;File.txt&lt;/div&gt;
      &lt;div class="size_xs mb_xs"&gt;Last modified: Today&lt;/div&gt;
      &lt;div class="flex gap_xs mt_xs"&gt;
        &lt;button type="button" class="plain flex_1"&gt;Open&lt;/button&gt;
        &lt;button type="button" class="plain flex_1"&gt;Download&lt;/button&gt;
        &lt;button type="button" class="plain flex_1 color_c"&gt;Delete&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
						{'{'}/snippet}
&lt;/Popover&gt;</code
					></pre>
			</div>

			<div class="example p_md bg_2 radius_sm">
				<h3 class="size_md mb_xs">Transparent Background</h3>
				<div class="example_demo mb_sm p_md flex justify_content_center align_items_center">
					<Popover position="bottom" bg={null}>
						{#snippet trigger(_is_open, toggle)}
							<button type="button" class="plain" onclick={toggle}> Custom Container </button>
						{/snippet}

						{#snippet children(params)}
							<div class="p_xs2 bg_e_1 radius_md">
								<p class="mb_xs">Custom container with transparent popover wrapper</p>
								<button type="button" class="plain" onclick={params.toggle}>Close</button>
							</div>
						{/snippet}
					</Popover>
				</div>

				<pre class="code_block p_sm bg_1"><code
						>&lt;Popover position="bottom" bg={null}&gt;
  {'{'}#snippet trigger(is_open, toggle)}
							&lt;button type="button" class="plain" onclick={'{'}toggle}&gt;
      Custom Container
    &lt;/button&gt;
						{'{'}/snippet}
  
  {'{'}#snippet children(params)}
							&lt;div class="p_xs2 bg_e_1 radius_md"&gt;
      &lt;p class="mb_xs"&gt;Custom container with transparent popover wrapper&lt;/p&gt;
      &lt;button type="button" class="plain" onclick={'{'}params.toggle}&gt;Close&lt;/button&gt;
    &lt;/div&gt;
						{'{'}/snippet}
&lt;/Popover&gt;</code
					></pre>
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
						<td>open</td>
						<td>boolean</td>
						<td>false</td>
						<td>Whether the popover is initially open</td>
					</tr>
					<tr>
						<td>position</td>
						<td>BasicPosition</td>
						<td>'bottom'</td>
						<td>Position of the popover ('top', 'right', 'bottom', 'left')</td>
					</tr>
					<tr>
						<td>popover_attrs</td>
						<td>SvelteHTMLElements['div']</td>
						<td>{'{'}}</td>
						<td>HTML attributes for the popover container</td>
					</tr>
					<tr>
						<td>onchange</td>
						<td>(open: boolean) => void</td>
						<td>undefined</td>
						<td>Function called when popover opens or closes</td>
					</tr>
					<tr>
						<td>trigger</td>
						<td>Snippet{'<'}[open: boolean, toggle: () => void]></td>
						<td>required</td>
						<td>Content for the trigger element with open state and toggle function</td>
					</tr>
					<tr>
						<td>children</td>
						<td>Snippet{'<'}[{'{'}is_open: boolean; toggle: () => void}]></td>
						<td>required</td>
						<td>Content for the popover with state and methods</td>
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
		<h2 class="size_lg mb_md">Methods</h2>

		<p class="mb_md">
			The Popover component exposes the following methods via the <code>controls</code> export:
		</p>

		<div class="table_wrapper">
			<table class="w_100">
				<thead>
					<tr>
						<th>Method</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>open()</code></td>
						<td>Opens the popover programmatically</td>
					</tr>
					<tr>
						<td><code>close()</code></td>
						<td>Closes the popover programmatically</td>
					</tr>
					<tr>
						<td><code>toggle()</code></td>
						<td>Toggles the popover's open state</td>
					</tr>
				</tbody>
			</table>
		</div>

		<pre class="code_block p_sm bg_1 mt_md"><code
				>// Using methods via bind:
&lt;Popover bind:controls position="bottom"&gt;
{'{'}#snippet trigger(is_open, toggle)}
    &lt;button type="button" class="plain" onclick={'{'}toggle}&gt;Toggle&lt;/button&gt;
{'{'}/snippet}
  
{'{'}#snippet children(params)}
&lt;div class="p_xs"&gt;Popover content&lt;/div&gt;
{'{'}/snippet}
&lt;/Popover&gt;

// Then later:
controls.open();   // Open programmatically
controls.close();  // Close programmatically
controls.toggle(); // Toggle state</code
			></pre>
	</section>

	<section class="mb_xl">
		<h2 class="size_lg mb_md">Accessibility</h2>

		<p class="mb_md">The Popover component follows accessibility best practices:</p>

		<ul>
			<li>Can be dismissed with the Escape key</li>
			<li>Closes when clicking outside (unless configured not to)</li>
			<li>Preserves focus management</li>
			<li>Does not trap focus within the popover (unlike dialogs/modals)</li>
		</ul>

		<div class="bg_2 p_md radius_sm mt_md">
			<h3 class="size_sm mb_xs">Accessibility Recommendations</h3>
			<ul class="mb_0">
				<li>
					Add appropriate <code>aria-label</code> to trigger buttons that don't have visible text
				</li>
				<li>For complex UI with multiple popovers, ensure each has a unique identifier</li>
				<li>
					Consider adding <code>aria-expanded</code> to trigger elements (handled via the trigger snippet)
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

	.code_block {
		overflow: auto;
		max-height: 200px;
		font-size: var(--size_xs);
		font-family: var(--font_mono);
		border-radius: var(--radius_xs);
		margin: 0;
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
