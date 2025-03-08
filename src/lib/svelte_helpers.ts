/**
 * Interface for component prop definitions used in documentation.
 */
export interface Prop_Definition {
	/** Property name */
	name: string;
	/** Type signature (as string) */
	type: string;
	/** Default value (as string) */
	default_value: string;
	/** Description of the prop */
	description: string;
}
