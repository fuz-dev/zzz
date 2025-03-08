/**
 * Standard position options for UI elements
 */
export type Position = 'left' | 'right' | 'top' | 'bottom' | 'overlay' | 'center';

/**
 * Alignment options for positioned elements
 */
export type Alignment = 'start' | 'center' | 'end';

/**
 * Generates CSS positioning styles for UI elements
 *
 * @param anchor - Where to position the element ('left', 'right', etc.)
 * @param align - Alignment along the anchor edge ('start', 'center', 'end')
 * @param offset - Distance from the anchor (CSS value)
 * @returns CSS styles as a Record
 */
export const generate_position_styles = (
	anchor: Position = 'center',
	align: Alignment = 'center',
	offset = 'var(--input_height)',
): Record<string, string> => {
	const styles: Record<string, string> = {
		position: 'absolute',
		'z-index': '10',
		'transform-origin': 'center',
	};

	switch (anchor) {
		case 'left':
			styles.left = `calc(-1 * ${offset})`;
			styles.top = align === 'center' ? '50%' : align === 'start' ? '0' : 'auto';
			styles.bottom = align === 'end' ? '0' : 'auto';
			styles['transform-origin'] = 'right';
			if (align === 'center') styles.transform = 'translateY(-50%)';
			break;
		case 'right':
			styles.right = `calc(-1 * ${offset})`;
			styles.top = align === 'center' ? '50%' : align === 'start' ? '0' : 'auto';
			styles.bottom = align === 'end' ? '0' : 'auto';
			styles['transform-origin'] = 'left';
			if (align === 'center') styles.transform = 'translateY(-50%)';
			break;
		case 'top':
			styles.top = `calc(-1 * ${offset})`;
			styles.left = align === 'center' ? '50%' : align === 'start' ? '0' : 'auto';
			styles.right = align === 'end' ? '0' : 'auto';
			styles['transform-origin'] = 'bottom';
			if (align === 'center') styles.transform = 'translateX(-50%)';
			break;
		case 'bottom':
			styles.bottom = `calc(-1 * ${offset})`;
			styles.left = align === 'center' ? '50%' : align === 'start' ? '0' : 'auto';
			styles.right = align === 'end' ? '0' : 'auto';
			styles['transform-origin'] = 'top';
			if (align === 'center') styles.transform = 'translateX(-50%)';
			break;
		case 'center':
			styles.top = '50%';
			styles.left = '50%';
			styles.transform = 'translate(-50%, -50%)';
			styles['transform-origin'] = 'center';
			break;
		case 'overlay':
			styles.top = '0';
			styles.left = '0';
			styles.width = '100%';
			styles.height = '100%';
			styles['transform-origin'] = 'center';
			break;
	}

	return styles;
};

/**
 * Converts a styles object to a CSS inline style string
 */
export const styles_to_string = (styles: Record<string, string>): string =>
	Object.entries(styles)
		.map(([key, value]) => `${key}: ${value}`)
		.join('; ');

/**
 * Generate a complete CSS style string for positioning elements
 */
export const get_position_style = (
	anchor: Position = 'center',
	align: Alignment = 'center',
	offset = 'var(--input_height)',
): string => styles_to_string(generate_position_styles(anchor, align, offset));
