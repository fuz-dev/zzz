import type {Zzz_Config_Creator} from '$lib/config_helpers.js';
import type {Provider_Json} from '$lib/provider.svelte.js';
import type {Model_Json} from '$lib/model.svelte.js';

// TODO refactor - zzz.config.ts

export const default_providers: Array<Provider_Json> = [
	{
		name: 'ollama',
		icon: '',
		title: 'Ollama',
		url: 'https://ollama.com/',
	},
	{
		name: 'claude',
		icon: '',
		title: 'Claude',
		url: 'https://docs.anthropic.com/en/home',
	},
	{
		name: 'chatgpt',
		icon: '',
		title: 'ChatGPT',
		url: 'https://platform.openai.com/docs/overview',
	},
	{
		name: 'gemini',
		icon: '',
		title: 'Gemini',
		url: 'https://ai.google.dev/gemini-api/docs/',
	},
];

export const default_models: Array<Model_Json> = [
	// TODO import/map these directly when possible
	{
		name: 'llama3.2',
		provider_name: 'ollama',
		tags: ['llama', 'llama3'],
		parameter_count: 3.21,
		context_window: 131_072,
		output_token_limit: 8_192,
		training_cutoff: 'December 2023',
	},
	{
		name: 'llama3.2:1b',
		provider_name: 'ollama',
		tags: ['llama', 'llama3'],
		parameter_count: 1.24,
		context_window: 131_072,
		output_token_limit: 8_192,
		training_cutoff: 'December 2023',
	},
	{
		name: 'claude-3-5-haiku-20241022',
		provider_name: 'claude',
		tags: ['cheap'],
		context_window: 200_000,
		output_token_limit: 8_192,
		cost_input: 3,
		cost_output: 15,
		training_cutoff: 'April 2024',
	},
	{
		name: 'claude-3-5-sonnet-20241022',
		provider_name: 'claude',
		tags: ['smart'],
		context_window: 200_000,
		output_token_limit: 8_192,
		cost_input: 0.8,
		cost_output: 4,
		training_cutoff: 'July 2024',
	},
	{
		name: 'gpt-4o-mini',
		provider_name: 'chatgpt',
		tags: ['cheap'],
		context_window: 128_000,
		output_token_limit: 16_384,
		cost_input: 0.15,
		cost_output: 0.6,
	},
	{
		name: 'gpt-4o',
		provider_name: 'chatgpt',
		tags: ['smart'],
		context_window: 128_000,
		output_token_limit: 16_384,
		cost_input: 2.5,
		cost_output: 10,
	},
	{
		name: 'o1',
		provider_name: 'chatgpt',
		tags: ['reasoning', 'smart'],
		context_window: 200_000,
		output_token_limit: 100_000,
		cost_input: 15,
		cost_output: 60,
	},
	{
		name: 'o1-mini',
		provider_name: 'chatgpt',
		tags: ['reasoning', 'cheap'],
		context_window: 128_000,
		output_token_limit: 65_536,
		cost_input: 1.1,
		cost_output: 4.4,
	},
	// no access :[
	// {
	// 	name: 'o3-mini',
	// 	provider_name: 'chatgpt',
	// 	tags: ['reasoning', 'cheap'],
	// context_window: 200_000,
	// output_token_limit: 100_000,
	// 	cost_input: 1.1,
	// 	cost_output: 4.4,
	// },
	{
		name: 'gemini-2.0-flash-lite-preview-02-05',
		provider_name: 'gemini',
		tags: ['cheaper'],
		context_window: 1_048_576,
		output_token_limit: 8_192,
		cost_input: 0.075,
		cost_output: 0.3,
		training_cutoff: 'August 2024',
	},
	{
		name: 'gemini-2.0-flash',
		provider_name: 'gemini',
		tags: ['cheap'],
		context_window: 1_048_576,
		output_token_limit: 8_192,
		cost_input: 0.1,
		cost_output: 0.4,
		training_cutoff: 'August 2024',
	},
	{
		name: 'gemini-2.0-pro-exp-02-05',
		provider_name: 'gemini',
		tags: ['smart'],
		cost_input: 0.15,
		cost_output: 0.6,
	}, // TODO input is $0.075, prompts <= 128k tokens, $0.15, prompts > 128k tokens -- output is $0.30, prompts <= 128k tokens, $0.60, prompts > 128k tokens
	{
		name: 'gemini-2.0-flash-thinking-exp-01-21',
		provider_name: 'gemini',
		tags: ['cheap', 'reasoning'],
	},
	{
		name: 'gemini-1.5-pro',
		provider_name: 'gemini',
		tags: ['smart'],
		context_window: 2_000_000,
		cost_input: 2.5, // $1.25, prompts <= 128k tokens, $2.50, prompts > 128k tokens
		cost_output: 10, // $5.00, prompts <= 128k tokens, $10.00, prompts > 128k tokens
	},
];

export const SYSTEM_MESSAGE_DEFAULT =
	'You are a helpful and brilliant collaborator. Respond with a short creative message, one sentence in length, that continues from where the user left off, playing along for fun.';

// TODO currently this is imported directly by client and server, but we probably only want to forward a serialized subset to the client
const config: Zzz_Config_Creator = () => {
	return {
		providers: default_providers,
		models: default_models,
		system_message: SYSTEM_MESSAGE_DEFAULT,
	};
};

export default config;
