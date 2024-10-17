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
		'@anthropic-ai/sdk': '^0.29.1',
		'@changesets/changelog-git': '^0.2.0',
		'@google/generative-ai': '^0.21.0',
		'@hono/node-server': '^1.13.2',
		'@hono/node-ws': '^1.0.4',
		'@ryanatkn/belt': '^0.25.3',
		'@ryanatkn/eslint-config': '^0.5.5',
		'@ryanatkn/fuz': '^0.129.5',
		'@ryanatkn/gro': '^0.140.7',
		'@ryanatkn/moss': '^0.16.1',
		'@sveltejs/adapter-static': '^3.0.5',
		'@sveltejs/kit': '^2.7.1',
		'@sveltejs/package': '^2.3.5',
		'@sveltejs/vite-plugin-svelte': '^3.1.2',
		devalue: '^5.1.1',
		eslint: '^9.12.0',
		'eslint-plugin-svelte': '^2.44.1',
		hono: '^4.6.5',
		openai: '^4.67.3',
		prettier: '^3.3.3',
		'prettier-plugin-svelte': '^3.2.7',
		svelte: '^5.0.0-next.266',
		'svelte-check': '^4.0.5',
		tslib: '^2.8.0',
		typescript: '^5.6.3',
		'typescript-eslint': '^8.9.0',
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
		'./config_helpers.js': {
			types: './dist/config_helpers.d.ts',
			default: './dist/config_helpers.js',
		},
		'./config.js': {types: './dist/config.d.ts', default: './dist/config.js'},
		'./Control_Panel.svelte': {
			types: './dist/Control_Panel.svelte.d.ts',
			svelte: './dist/Control_Panel.svelte',
			default: './dist/Control_Panel.svelte',
		},
		'./Dashboard.svelte': {
			types: './dist/Dashboard.svelte.d.ts',
			svelte: './dist/Dashboard.svelte',
			default: './dist/Dashboard.svelte',
		},
		'./Echo_Form.svelte': {
			types: './dist/Echo_Form.svelte.d.ts',
			svelte: './dist/Echo_Form.svelte',
			default: './dist/Echo_Form.svelte',
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
		'./Hud_Dialog.svelte': {
			types: './dist/Hud_Dialog.svelte.d.ts',
			svelte: './dist/Hud_Dialog.svelte',
			default: './dist/Hud_Dialog.svelte',
		},
		'./Hud_Root.svelte': {
			types: './dist/Hud_Root.svelte.d.ts',
			svelte: './dist/Hud_Root.svelte',
			default: './dist/Hud_Root.svelte',
		},
		'./hud.svelte.js': {types: './dist/hud.svelte.d.ts', default: './dist/hud.svelte.js'},
		'./id.js': {types: './dist/id.d.ts', default: './dist/id.js'},
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
		'./prompt.svelte.js': {types: './dist/prompt.svelte.d.ts', default: './dist/prompt.svelte.js'},
		'./server/helpers.js': {
			types: './dist/server/helpers.d.ts',
			default: './dist/server/helpers.js',
		},
		'./server/prompt.log': {default: './dist/server/prompt.log'},
		'./server/server.js': {types: './dist/server/server.d.ts', default: './dist/server/server.js'},
		'./server/zzz_server.js': {
			types: './dist/server/zzz_server.d.ts',
			default: './dist/server/zzz_server.js',
		},
		'./Settings.svelte': {
			types: './dist/Settings.svelte.d.ts',
			svelte: './dist/Settings.svelte',
			default: './dist/Settings.svelte',
		},
		'./Tape_Info.svelte': {
			types: './dist/Tape_Info.svelte.d.ts',
			svelte: './dist/Tape_Info.svelte',
			default: './dist/Tape_Info.svelte',
		},
		'./Tape_Summary.svelte': {
			types: './dist/Tape_Summary.svelte.d.ts',
			svelte: './dist/Tape_Summary.svelte',
			default: './dist/Tape_Summary.svelte',
		},
		'./Tape_View.svelte': {
			types: './dist/Tape_View.svelte.d.ts',
			svelte: './dist/Tape_View.svelte',
			default: './dist/Tape_View.svelte',
		},
		'./tape.svelte.js': {types: './dist/tape.svelte.d.ts', default: './dist/tape.svelte.js'},
		'./Tapes_List.svelte': {
			types: './dist/Tapes_List.svelte.d.ts',
			svelte: './dist/Tapes_List.svelte',
			default: './dist/Tapes_List.svelte',
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
		'./config_helpers.js': {
			path: 'config_helpers.ts',
			declarations: [
				{name: 'Zzz_Config_Creator', kind: 'type'},
				{name: 'Zzz_Config', kind: 'type'},
				{name: 'Model_Type', kind: 'type'},
				{name: 'Models', kind: 'type'},
			],
		},
		'./config.js': {
			path: 'config.ts',
			declarations: [
				{name: 'default_models', kind: 'variable'},
				{name: 'default_agents', kind: 'variable'},
				{name: 'SYSTEM_MESSAGE_DEFAULT', kind: 'variable'},
				{name: 'default', kind: 'variable'},
			],
		},
		'./Control_Panel.svelte': {path: 'Control_Panel.svelte', declarations: []},
		'./Dashboard.svelte': {path: 'Dashboard.svelte', declarations: []},
		'./Echo_Form.svelte': {path: 'Echo_Form.svelte', declarations: []},
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
		'./Hud_Dialog.svelte': {path: 'Hud_Dialog.svelte', declarations: []},
		'./Hud_Root.svelte': {path: 'Hud_Root.svelte', declarations: []},
		'./hud.svelte.js': {
			path: 'hud.svelte.ts',
			declarations: [{name: 'hud_context', kind: 'variable'}],
		},
		'./id.js': {
			path: 'id.ts',
			declarations: [
				{name: 'Id', kind: 'type'},
				{name: 'random_id', kind: 'function'},
			],
		},
		'./Message_Info.svelte': {path: 'Message_Info.svelte', declarations: []},
		'./Message_Summary.svelte': {path: 'Message_Summary.svelte', declarations: []},
		'./Message_View.svelte': {path: 'Message_View.svelte', declarations: []},
		'./Multiprompt.svelte': {path: 'Multiprompt.svelte', declarations: []},
		'./path.js': {path: 'path.ts', declarations: [{name: 'to_base_path', kind: 'function'}]},
		'./Prompt_Agent_Form.svelte': {path: 'Prompt_Agent_Form.svelte', declarations: []},
		'./prompt.svelte.js': {
			path: 'prompt.svelte.ts',
			declarations: [
				{name: 'Prompt_Json', kind: 'type'},
				{name: 'Prompt_Options', kind: 'type'},
				{name: 'Prompt', kind: 'class'},
			],
		},
		'./server/helpers.js': {
			path: 'server/helpers.ts',
			declarations: [{name: 'write_file_in_scope', kind: 'function'}],
		},
		'./server/prompt.log': {path: 'server/prompt.log', declarations: []},
		'./server/server.js': {path: 'server/server.ts', declarations: []},
		'./server/zzz_server.js': {
			path: 'server/zzz_server.ts',
			declarations: [
				{name: 'Options', kind: 'type'},
				{name: 'Zzz_Server', kind: 'class'},
			],
		},
		'./Settings.svelte': {path: 'Settings.svelte', declarations: []},
		'./Tape_Info.svelte': {path: 'Tape_Info.svelte', declarations: []},
		'./Tape_Summary.svelte': {path: 'Tape_Summary.svelte', declarations: []},
		'./Tape_View.svelte': {path: 'Tape_View.svelte', declarations: []},
		'./tape.svelte.js': {
			path: 'tape.svelte.ts',
			declarations: [
				{name: 'Tapes_Json', kind: 'type'},
				{name: 'Tapes_Options', kind: 'type'},
				{name: 'Tape_History_Item', kind: 'type'},
				{name: 'Tapes', kind: 'class'},
				{name: 'Tape_Json', kind: 'type'},
				{name: 'Tape_Options', kind: 'type'},
				{name: 'Tape', kind: 'class'},
			],
		},
		'./Tapes_List.svelte': {path: 'Tapes_List.svelte', declarations: []},
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
				{name: 'Update_File_Message', kind: 'type'},
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
