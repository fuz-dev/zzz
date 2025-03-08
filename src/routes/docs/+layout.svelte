<script lang="ts">
	import type {Snippet} from 'svelte';
	import Library from '@ryanatkn/fuz/Library.svelte';
	import Svg from '@ryanatkn/fuz/Svg.svelte';
	import {zzz_logo} from '@ryanatkn/fuz/logos.js';

	import {tomes} from '$routes/docs/tomes.js';
	import {pkg_context} from '$routes/pkg.js';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	const pkg = pkg_context.get();
</script>

<Library {tomes} {pkg}>
	{#snippet breadcrumb_children(is_primary_nav)}
		{#if is_primary_nav}
			<div class="icon row">
				<Svg data={zzz_logo} size="var(--icon_size_sm)" /> <span class="ml_sm">moss</span>
			</div>
		{:else}
			<Svg data={zzz_logo} size="var(--icon_size_sm)" />
		{/if}
	{/snippet}
	{@render children()}
</Library>
