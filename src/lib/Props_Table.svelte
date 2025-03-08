<script lang="ts">
	import type {Prop_Definition} from './svelte_helpers.js';

	interface Props {
		props: Array<Prop_Definition>;
		title?: string;
		class_name?: string;
	}

	const {props, title, class_name = ''}: Props = $props();
</script>

<div class="props_table {class_name}">
	{#if title}
		<h3 class="props_table_title">{title}</h3>
	{/if}

	<div class="props_table_header">
		<div class="props_table_header_prop">Prop</div>
		<div class="props_table_header_type">Type</div>
		<div class="props_table_header_default">Default</div>
		<div class="props_table_header_desc">Description</div>
	</div>

	{#each props as prop}
		<div class="props_table_row">
			<div class="props_table_cell props_table_prop" data-label="">
				<span class="prop_name">{prop.name}</span>
			</div>
			<div class="props_table_cell props_table_type" data-label="Type:">
				<code>{prop.type}</code>
			</div>
			<div class="props_table_cell props_table_default" data-label="Default:">
				<code>{prop.default_value}</code>
			</div>
			<div class="props_table_cell props_table_desc" data-label="Description:">
				{prop.description}
			</div>
		</div>
	{/each}
</div>

<style>
	.props_table {
		width: 100%;
		font-size: var(--size_sm);
		margin-bottom: var(--space_md);
	}

	.props_table_title {
		margin-bottom: var(--space_xs);
		font-size: var(--size_sm);
		font-weight: 600;
	}

	.props_table_header {
		display: grid;
		grid-template-columns: minmax(100px, 1fr) minmax(120px, 1.5fr) minmax(100px, 1fr) minmax(
				200px,
				2fr
			);
		gap: var(--space_xs);
		padding: var(--space_xs);
		border-bottom: 1px solid var(--border_color_1);
		font-weight: 600;
		background-color: var(--bg_color_2);
		border-radius: var(--radius_xs) var(--radius_xs) 0 0;
	}

	.props_table_row {
		display: grid;
		grid-template-columns: minmax(100px, 1fr) minmax(120px, 1.5fr) minmax(100px, 1fr) minmax(
				200px,
				2fr
			);
		gap: var(--space_xs);
		padding: var(--space_xs);
		border-bottom: 1px solid var(--border_color_1);
		align-items: center;
	}

	.props_table_row:last-child {
		border-bottom: none;
		border-radius: 0 0 var(--radius_xs) var(--radius_xs);
	}

	.props_table_cell {
		overflow-wrap: break-word;
	}

	.prop_name {
		font-weight: 500;
	}

	code {
		font-family: var(--font_mono);
		font-size: 0.9em;
		white-space: pre-wrap;
		word-break: break-word;
	}

	/* Mobile view */
	@media (max-width: 768px) {
		.props_table_header {
			display: none;
		}

		.props_table_row {
			grid-template-columns: 1fr;
			gap: var(--space_xs2);
			padding: var(--space_sm) var(--space_xs);
		}

		.props_table_prop {
			font-weight: 600;
			margin-bottom: var(--space_xs2);
		}

		.props_table_cell {
			display: grid;
			grid-template-columns: 80px 1fr;
			align-items: start;
			gap: var(--space_xs);
		}

		.props_table_cell::before {
			content: attr(data-label);
			font-weight: 500;
			opacity: 0.7;
		}

		.props_table_prop::before {
			content: '';
			display: none;
		}
	}
</style>
