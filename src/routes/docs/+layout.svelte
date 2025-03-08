<script lang="ts">
	import type {Snippet} from 'svelte';
	import {GLYPH_DOCS} from '$lib/glyphs.js';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();
</script>

<div class="docs_layout">
	<header class="w_100 p_md border_bottom_solid border_width_1 border_color_1 mb_lg">
		<div class="docs_header flex justify_content_space_between">
			<h1 class="size_xl">
				<span class="mr_sm">{GLYPH_DOCS}</span>
				Zzz Documentation
			</h1>
			<nav>
				<ul class="flex gap_md unstyled">
					<li><a href="/docs" class="plain">Home</a></li>
					<li><a href="/docs/tooltip" class="plain">Tooltip</a></li>
					<li><a href="/docs/popover" class="plain">Popover</a></li>
				</ul>
			</nav>
		</div>
	</header>

	<main class="p_md">
		{@render children()}
	</main>
</div>

<style>
	.docs_layout {
		max-width: 1200px;
		margin: 0 auto;
	}
</style>
