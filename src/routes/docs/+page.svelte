<div class="docs_home">
	<h1 class="size_xl mb_md">UI Components</h1>

	<p class="mb_lg">
		Zzz provides a set of accessible, customizable UI components for building interactive
		interfaces.
	</p>

	<div class="docs_grid">
		<a href="/docs/tooltip" class="docs_card p_md radius_md">
			<h2 class="size_lg mb_sm">Tooltip</h2>
			<p>Simple tooltips that appear on hover/focus</p>
		</a>

		<a href="/docs/popover" class="docs_card p_md radius_md">
			<h2 class="size_lg mb_sm">Popover</h2>
			<p>Interactive popovers with custom content</p>
		</a>

		<a href="/docs/confirm-button" class="docs_card p_md radius_md">
			<h2 class="size_lg mb_sm">Confirm Button</h2>
			<p>Buttons with confirmation step</p>
		</a>

		<a href="/docs/confirm-cancel-button" class="docs_card p_md radius_md">
			<h2 class="size_lg mb_sm">Confirm/Cancel Button</h2>
			<p>Buttons with confirm and cancel options</p>
		</a>
	</div>
</div>

<style>
	.docs_grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: var(--space_md);
	}

	.docs_card {
		background-color: var(--bg_color_2);
		border: 1px solid var(--border_color_1);
		text-decoration: none;
		color: inherit;
		transition: transform 0.15s ease-in-out;
	}

	.docs_card:hover {
		transform: translateY(-3px);
		border-color: var(--border_color_2);
	}
</style>
