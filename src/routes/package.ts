// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: '@ryanatkn/zzz',
	version: '0.0.1',
	description: 'bot control hq',
	motto: 'copy this software',
	glyph: '💤',
	logo: 'logo.svg',
	logo_alt: "three sleepy z's",
	public: true,
	license: 'MIT',
	homepage: 'https://www.zzzbot.dev/',
	repository: 'https://github.com/ryanatkn/zzz',
	author: {name: 'Ryan Atkinson', email: 'mail@ryanatkn.com', url: 'https://www.ryanatkn.com/'},
	bugs: 'https://github.com/ryanatkn/zzz/issues',
	funding: 'https://www.ryanatkn.com/funding',
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		check: 'gro check',
		test: 'gro test',
		preview: 'vite preview',
		deploy: 'gro deploy',
	},
	type: 'module',
	engines: {node: '>=20.17'},
	devDependencies: {
		'@anthropic-ai/sdk': '^0.29.0',
		'@changesets/changelog-git': '^0.2.0',
		'@hono/node-server': '^1.13.2',
		'@hono/node-ws': '^1.0.4',
		'@ryanatkn/belt': '^0.25.3',
		'@ryanatkn/eslint-config': '^0.5.5',
		'@ryanatkn/fuz': '^0.129.4',
		'@ryanatkn/gro': '0.140.0',
		'@ryanatkn/moss': '^0.16.1',
		'@sveltejs/adapter-static': '^3.0.5',
		'@sveltejs/kit': '^2.7.0',
		'@sveltejs/package': '^2.3.5',
		'@sveltejs/vite-plugin-svelte': '^3.0.0',
		eslint: '^9.12.0',
		'eslint-plugin-svelte': '^2.44.1',
		hono: '^4.6.4',
		prettier: '^3.3.3',
		'prettier-plugin-svelte': '^3.2.7',
		svelte: '^5.0.0-next.264',
		'svelte-check': '^4.0.5',
		tslib: '^2.7.0',
		typescript: '^5.6.3',
		'typescript-eslint': '^8.8.1',
		uvu: '^0.5.6',
	},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	sideEffects: ['**/*.css'],
	files: ['dist'],
	exports: {
		'./package.json': './package.json',
		'./Agent_Info.svelte': {
			types: './dist/Agent_Info.svelte.d.ts',
			svelte: './dist/Agent_Info.svelte',
			default: './dist/Agent_Info.svelte',
		},
		'./Agent_Summary.svelte': {
			types: './dist/Agent_Summary.svelte.d.ts',
			svelte: './dist/Agent_Summary.svelte',
			default: './dist/Agent_Summary.svelte',
		},
		'./Agent_View.svelte': {
			types: './dist/Agent_View.svelte.d.ts',
			svelte: './dist/Agent_View.svelte',
			default: './dist/Agent_View.svelte',
		},
		'./agent.svelte.js': {types: './dist/agent.svelte.d.ts', default: './dist/agent.svelte.js'},
		'./Dashboard.svelte': {
			types: './dist/Dashboard.svelte.d.ts',
			svelte: './dist/Dashboard.svelte',
			default: './dist/Dashboard.svelte',
		},
		'./File_Editor.svelte': {
			types: './dist/File_Editor.svelte.d.ts',
			svelte: './dist/File_Editor.svelte',
			default: './dist/File_Editor.svelte',
		},
		'./File_Info.svelte': {
			types: './dist/File_Info.svelte.d.ts',
			svelte: './dist/File_Info.svelte',
			default: './dist/File_Info.svelte',
		},
		'./File_List.svelte': {
			types: './dist/File_List.svelte.d.ts',
			svelte: './dist/File_List.svelte',
			default: './dist/File_List.svelte',
		},
		'./File_Summary.svelte': {
			types: './dist/File_Summary.svelte.d.ts',
			svelte: './dist/File_Summary.svelte',
			default: './dist/File_Summary.svelte',
		},
		'./File_View.svelte': {
			types: './dist/File_View.svelte.d.ts',
			svelte: './dist/File_View.svelte',
			default: './dist/File_View.svelte',
		},
		'./file.svelte.js': {types: './dist/file.svelte.d.ts', default: './dist/file.svelte.js'},
		'./Hud_Root.svelte': {
			types: './dist/Hud_Root.svelte.d.ts',
			svelte: './dist/Hud_Root.svelte',
			default: './dist/Hud_Root.svelte',
		},
		'./hud.svelte.js': {types: './dist/hud.svelte.d.ts', default: './dist/hud.svelte.js'},
		'./Message_Info.svelte': {
			types: './dist/Message_Info.svelte.d.ts',
			svelte: './dist/Message_Info.svelte',
			default: './dist/Message_Info.svelte',
		},
		'./Message_Summary.svelte': {
			types: './dist/Message_Summary.svelte.d.ts',
			svelte: './dist/Message_Summary.svelte',
			default: './dist/Message_Summary.svelte',
		},
		'./Message_View.svelte': {
			types: './dist/Message_View.svelte.d.ts',
			svelte: './dist/Message_View.svelte',
			default: './dist/Message_View.svelte',
		},
		'./Multiprompt.svelte': {
			types: './dist/Multiprompt.svelte.d.ts',
			svelte: './dist/Multiprompt.svelte',
			default: './dist/Multiprompt.svelte',
		},
		'./path.js': {types: './dist/path.d.ts', default: './dist/path.js'},
		'./Prompt_Agent_Form.svelte': {
			types: './dist/Prompt_Agent_Form.svelte.d.ts',
			svelte: './dist/Prompt_Agent_Form.svelte',
			default: './dist/Prompt_Agent_Form.svelte',
		},
		'./Prompt_Response_Info.svelte': {
			types: './dist/Prompt_Response_Info.svelte.d.ts',
			svelte: './dist/Prompt_Response_Info.svelte',
			default: './dist/Prompt_Response_Info.svelte',
		},
		'./Prompt_Response_Summary.svelte': {
			types: './dist/Prompt_Response_Summary.svelte.d.ts',
			svelte: './dist/Prompt_Response_Summary.svelte',
			default: './dist/Prompt_Response_Summary.svelte',
		},
		'./Prompt_Response_View.svelte': {
			types: './dist/Prompt_Response_View.svelte.d.ts',
			svelte: './dist/Prompt_Response_View.svelte',
			default: './dist/Prompt_Response_View.svelte',
		},
		'./Prompt_Responses_List.svelte': {
			types: './dist/Prompt_Responses_List.svelte.d.ts',
			svelte: './dist/Prompt_Responses_List.svelte',
			default: './dist/Prompt_Responses_List.svelte',
		},
		'./prompt.svelte.js': {types: './dist/prompt.svelte.d.ts', default: './dist/prompt.svelte.js'},
		'./prompts/msg_01HhsZqH2PNvN1HBcuoGs53k__claude-3-5-sonnet-20240620.json': {
			default: './dist/prompts/msg_01HhsZqH2PNvN1HBcuoGs53k__claude-3-5-sonnet-20240620.json',
		},
		'./prompts/msg_01WAboELRr5xYhWWLqYqyJPk__claude-3-5-sonnet-20240620.json': {
			default: './dist/prompts/msg_01WAboELRr5xYhWWLqYqyJPk__claude-3-5-sonnet-20240620.json',
		},
		'./prompts/msg_01WD9qTnxseoaVwtW1ksqfu5__claude-3-5-sonnet-20240620.json': {
			default: './dist/prompts/msg_01WD9qTnxseoaVwtW1ksqfu5__claude-3-5-sonnet-20240620.json',
		},
		'./server/server.js': {types: './dist/server/server.d.ts', default: './dist/server/server.js'},
		'./server/zzz_server.js': {
			types: './dist/server/zzz_server.d.ts',
			default: './dist/server/zzz_server.js',
		},
		'./zzz_client.js': {types: './dist/zzz_client.d.ts', default: './dist/zzz_client.js'},
		'./zzz_data.svelte.js': {
			types: './dist/zzz_data.svelte.d.ts',
			default: './dist/zzz_data.svelte.js',
		},
		'./Zzz_Main.svelte': {
			types: './dist/Zzz_Main.svelte.d.ts',
			svelte: './dist/Zzz_Main.svelte',
			default: './dist/Zzz_Main.svelte',
		},
		'./zzz_message.js': {types: './dist/zzz_message.d.ts', default: './dist/zzz_message.js'},
		'./Zzz_Root.svelte': {
			types: './dist/Zzz_Root.svelte.d.ts',
			svelte: './dist/Zzz_Root.svelte',
			default: './dist/Zzz_Root.svelte',
		},
		'./zzz.svelte.js': {types: './dist/zzz.svelte.d.ts', default: './dist/zzz.svelte.js'},
	},
} satisfies Package_Json;

export const src_json = {
	name: '@ryanatkn/zzz',
	version: '0.0.1',
	modules: {
		'./package.json': {path: 'package.json', declarations: []},
		'./Agent_Info.svelte': {path: 'Agent_Info.svelte', declarations: []},
		'./Agent_Summary.svelte': {path: 'Agent_Summary.svelte', declarations: []},
		'./Agent_View.svelte': {path: 'Agent_View.svelte', declarations: []},
		'./agent.svelte.js': {
			path: 'agent.svelte.ts',
			declarations: [
				{name: 'Agent_Name', kind: 'type'},
				{name: 'Agent_Json', kind: 'type'},
				{name: 'Agent_Options', kind: 'type'},
				{name: 'Agent', kind: 'class'},
			],
		},
		'./Dashboard.svelte': {path: 'Dashboard.svelte', declarations: []},
		'./File_Editor.svelte': {path: 'File_Editor.svelte', declarations: []},
		'./File_Info.svelte': {path: 'File_Info.svelte', declarations: []},
		'./File_List.svelte': {path: 'File_List.svelte', declarations: []},
		'./File_Summary.svelte': {path: 'File_Summary.svelte', declarations: []},
		'./File_View.svelte': {path: 'File_View.svelte', declarations: []},
		'./file.svelte.js': {
			path: 'file.svelte.ts',
			declarations: [
				{name: 'Source_File_Json', kind: 'type'},
				{name: 'Prompt_Json', kind: 'type'},
				{name: 'Prompt_Options', kind: 'type'},
				{name: 'Prompt', kind: 'class'},
			],
		},
		'./Hud_Root.svelte': {path: 'Hud_Root.svelte', declarations: []},
		'./hud.svelte.js': {
			path: 'hud.svelte.ts',
			declarations: [{name: 'hud_context', kind: 'variable'}],
		},
		'./Message_Info.svelte': {path: 'Message_Info.svelte', declarations: []},
		'./Message_Summary.svelte': {path: 'Message_Summary.svelte', declarations: []},
		'./Message_View.svelte': {path: 'Message_View.svelte', declarations: []},
		'./Multiprompt.svelte': {path: 'Multiprompt.svelte', declarations: []},
		'./path.js': {path: 'path.ts', declarations: [{name: 'to_base_path', kind: 'function'}]},
		'./Prompt_Agent_Form.svelte': {path: 'Prompt_Agent_Form.svelte', declarations: []},
		'./Prompt_Response_Info.svelte': {path: 'Prompt_Response_Info.svelte', declarations: []},
		'./Prompt_Response_Summary.svelte': {path: 'Prompt_Response_Summary.svelte', declarations: []},
		'./Prompt_Response_View.svelte': {path: 'Prompt_Response_View.svelte', declarations: []},
		'./Prompt_Responses_List.svelte': {path: 'Prompt_Responses_List.svelte', declarations: []},
		'./prompt.svelte.js': {
			path: 'prompt.svelte.ts',
			declarations: [
				{name: 'Prompt_Json', kind: 'type'},
				{name: 'Prompt_Options', kind: 'type'},
				{name: 'Prompt', kind: 'class'},
			],
		},
		'./prompts/msg_01HhsZqH2PNvN1HBcuoGs53k__claude-3-5-sonnet-20240620.json': {
			path: 'prompts/msg_01HhsZqH2PNvN1HBcuoGs53k__claude-3-5-sonnet-20240620.json',
			declarations: [],
		},
		'./prompts/msg_01WAboELRr5xYhWWLqYqyJPk__claude-3-5-sonnet-20240620.json': {
			path: 'prompts/msg_01WAboELRr5xYhWWLqYqyJPk__claude-3-5-sonnet-20240620.json',
			declarations: [],
		},
		'./prompts/msg_01WD9qTnxseoaVwtW1ksqfu5__claude-3-5-sonnet-20240620.json': {
			path: 'prompts/msg_01WD9qTnxseoaVwtW1ksqfu5__claude-3-5-sonnet-20240620.json',
			declarations: [],
		},
		'./server/server.js': {path: 'server/server.ts', declarations: []},
		'./server/zzz_server.js': {
			path: 'server/zzz_server.ts',
			declarations: [
				{name: 'Options', kind: 'type'},
				{name: 'Zzz_Server', kind: 'class'},
			],
		},
		'./zzz_client.js': {
			path: 'zzz_client.ts',
			declarations: [
				{name: 'Options', kind: 'type'},
				{name: 'Zzz_Client', kind: 'class'},
			],
		},
		'./zzz_data.svelte.js': {
			path: 'zzz_data.svelte.ts',
			declarations: [
				{name: 'Zzz_Data_Json', kind: 'type'},
				{name: 'Zzz_Data', kind: 'class'},
			],
		},
		'./Zzz_Main.svelte': {path: 'Zzz_Main.svelte', declarations: []},
		'./zzz_message.js': {
			path: 'zzz_message.ts',
			declarations: [
				{name: 'Zzz_Message', kind: 'type'},
				{name: 'Client_Message', kind: 'type'},
				{name: 'Server_Message', kind: 'type'},
				{name: 'Base_Message', kind: 'type'},
				{name: 'Echo_Message', kind: 'type'},
				{name: 'Load_Session_Message', kind: 'type'},
				{name: 'Loaded_Session_Message', kind: 'type'},
				{name: 'Filer_Change_Message', kind: 'type'},
				{name: 'Send_Prompt_Message', kind: 'type'},
				{name: 'Receive_Prompt_Message', kind: 'type'},
			],
		},
		'./Zzz_Root.svelte': {path: 'Zzz_Root.svelte', declarations: []},
		'./zzz.svelte.js': {
			path: 'zzz.svelte.ts',
			declarations: [
				{name: 'zzz_context', kind: 'variable'},
				{name: 'Zzz_Options', kind: 'type'},
				{name: 'Zzz_Json', kind: 'type'},
				{name: 'Zzz', kind: 'class'},
			],
		},
	},
} satisfies Src_Json;

// generated by src/routes/package.gen.ts
