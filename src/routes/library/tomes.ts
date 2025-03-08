import type {Tome} from '@ryanatkn/fuz/tome.js';

import tooltip from '$routes/library/tooltip/+page.svelte';
import popover from '$routes/library/popover/+page.svelte';
import confirm_button from '$routes/library/confirm_button/+page.svelte';
import confirm_cancel_button from '$routes/library/confirm_cancel_button/+page.svelte';
import positioned_element from '$routes/library/positioned_element/+page.svelte';

export const tomes: Array<Tome> = [
	{
		name: 'tooltip',
		category: 'ui',
		component: tooltip,
		related: ['popover', 'positioned_element'],
	},
	{
		name: 'popover',
		category: 'ui',
		component: popover,
		related: ['tooltip', 'positioned_element'],
	},
	{
		name: 'confirm_button',
		category: 'ui',
		component: confirm_button,
		related: ['confirm_cancel_button'],
	},
	{
		name: 'confirm_cancel_button',
		category: 'ui',
		component: confirm_cancel_button,
		related: ['confirm_button'],
	},
	{
		name: 'positioned_element',
		category: 'ui',
		component: positioned_element,
		related: ['tooltip', 'popover'],
	},
];
