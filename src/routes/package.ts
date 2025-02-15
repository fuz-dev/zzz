// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: '@ryanatkn/zzz',
	version: '0.0.1',
	description: 'bot control web',
	motto: 'electric buzz',
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
	peerDependencies: {'@sveltejs/kit': '^2', svelte: '^5'},
	devDependencies: {
		'@anthropic-ai/sdk': '^0.36.3',
		'@changesets/changelog-git': '^0.2.0',
		'@google/generative-ai': '^0.21.0',
		'@hono/node-server': '^1.13.8',
		'@hono/node-ws': '^1.0.8',
		'@ryanatkn/belt': '^0.29.0',
		'@ryanatkn/eslint-config': '^0.6.0',
		'@ryanatkn/fuz': '^0.131.5',
		'@ryanatkn/gro': '^0.148.0',
		'@ryanatkn/moss': '^0.21.1',
		'@sveltejs/adapter-static': '^3.0.8',
		'@sveltejs/kit': '^2.17.2',
		'@sveltejs/package': '^2.3.10',
		'@sveltejs/vite-plugin-svelte': '^4.0.0',
		devalue: '^5.1.1',
		eslint: '^9.20.1',
		'eslint-plugin-svelte': '^2.46.1',
		hono: '^4.7.1',
		openai: '^4.85.1',
		prettier: '^3.5.1',
		'prettier-plugin-svelte': '^3.3.3',
		svelte: '^5.20.1',
		'svelte-check': '^4.1.4',
		tslib: '^2.8.1',
		typescript: '^5.7.3',
		'typescript-eslint': '^8.24.0',
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
		'./completion_state.svelte.js': {
			types: './dist/completion_state.svelte.d.ts',
			default: './dist/completion_state.svelte.js',
		},
		'./Completion_Thread_Info.svelte': {
			types: './dist/Completion_Thread_Info.svelte.d.ts',
			svelte: './dist/Completion_Thread_Info.svelte',
			default: './dist/Completion_Thread_Info.svelte',
		},
		'./Completion_Thread_Summary.svelte': {
			types: './dist/Completion_Thread_Summary.svelte.d.ts',
			svelte: './dist/Completion_Thread_Summary.svelte',
			default: './dist/Completion_Thread_Summary.svelte',
		},
		'./Completion_Thread_View.svelte': {
			types: './dist/Completion_Thread_View.svelte.d.ts',
			svelte: './dist/Completion_Thread_View.svelte',
			default: './dist/Completion_Thread_View.svelte',
		},
		'./completion_thread.svelte.js': {
			types: './dist/completion_thread.svelte.d.ts',
			default: './dist/completion_thread.svelte.js',
		},
		'./Completion_Threads_List.svelte': {
			types: './dist/Completion_Threads_List.svelte.d.ts',
			svelte: './dist/Completion_Threads_List.svelte',
			default: './dist/Completion_Threads_List.svelte',
		},
		'./completion.js': {types: './dist/completion.d.ts', default: './dist/completion.js'},
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
		'./model.svelte.js': {types: './dist/model.svelte.d.ts', default: './dist/model.svelte.js'},
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
		'./Prompt_Instance.svelte': {
			types: './dist/Prompt_Instance.svelte.d.ts',
			svelte: './dist/Prompt_Instance.svelte',
			default: './dist/Prompt_Instance.svelte',
		},
		'./prompt.js': {types: './dist/prompt.d.ts', default: './dist/prompt.js'},
		'./server/.env.example': {default: './dist/server/.env.example'},
		'./server/helpers.js': {
			types: './dist/server/helpers.d.ts',
			default: './dist/server/helpers.js',
		},
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
		'./zzz_client.js': {types: './dist/zzz_client.d.ts', default: './dist/zzz_client.js'},
		'./zzz_data.svelte.js': {
			types: './dist/zzz_data.svelte.d.ts',
			default: './dist/zzz_data.svelte.js',
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
		'./completion_state.svelte.js': {path: 'completion_state.svelte.ts', declarations: []},
		'./Completion_Thread_Info.svelte': {path: 'Completion_Thread_Info.svelte', declarations: []},
		'./Completion_Thread_Summary.svelte': {
			path: 'Completion_Thread_Summary.svelte',
			declarations: [],
		},
		'./Completion_Thread_View.svelte': {path: 'Completion_Thread_View.svelte', declarations: []},
		'./completion_thread.svelte.js': {
			path: 'completion_thread.svelte.ts',
			declarations: [
				{name: 'Completion_Threads_Json', kind: 'type'},
				{name: 'Completion_Threads_Options', kind: 'type'},
				{name: 'Completion_Thread_History_Item', kind: 'type'},
				{name: 'Completion_Threads', kind: 'class'},
				{name: 'Completion_Thread_Json', kind: 'type'},
				{name: 'Completion_Thread_Options', kind: 'type'},
				{name: 'Completion_Thread', kind: 'class'},
			],
		},
		'./Completion_Threads_List.svelte': {path: 'Completion_Threads_List.svelte', declarations: []},
		'./completion.js': {
			path: 'completion.ts',
			declarations: [
				{name: 'Completion_Request', kind: 'type'},
				{name: 'Completion_Response', kind: 'type'},
				{name: 'Completion', kind: 'type'},
			],
		},
		'./config_helpers.js': {
			path: 'config_helpers.ts',
			declarations: [
				{name: 'Zzz_Config_Creator', kind: 'type'},
				{name: 'Zzz_Config', kind: 'type'},
			],
		},
		'./config.js': {
			path: 'config.ts',
			declarations: [
				{name: 'default_agents', kind: 'variable'},
				{name: 'default_models', kind: 'variable'},
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
		'./model.svelte.js': {
			path: 'model.svelte.ts',
			declarations: [
				{name: 'Model_Name', kind: 'type'},
				{name: 'Model_Json', kind: 'type'},
				{name: 'Model_Options', kind: 'type'},
				{name: 'Model', kind: 'class'},
			],
		},
		'./Multiprompt.svelte': {path: 'Multiprompt.svelte', declarations: []},
		'./path.js': {path: 'path.ts', declarations: [{name: 'to_root_path', kind: 'function'}]},
		'./Prompt_Agent_Form.svelte': {path: 'Prompt_Agent_Form.svelte', declarations: []},
		'./Prompt_Instance.svelte': {path: 'Prompt_Instance.svelte', declarations: []},
		'./prompt.js': {
			path: 'prompt.ts',
			declarations: [
				{name: 'Prompt', kind: 'type'},
				{name: 'Prompt_Message', kind: 'type'},
				{name: 'Prompt_Message_Content', kind: 'type'},
			],
		},
		'./server/.env.example': {path: 'server/.env.example', declarations: []},
		'./server/helpers.js': {
			path: 'server/helpers.ts',
			declarations: [{name: 'write_file_in_scope', kind: 'function'}],
		},
		'./server/server.js': {path: 'server/server.ts', declarations: []},
		'./server/zzz_server.js': {
			path: 'server/zzz_server.ts',
			declarations: [
				{name: 'Zzz_Server_Options', kind: 'type'},
				{name: 'Zzz_Server', kind: 'class'},
			],
		},
		'./Settings.svelte': {path: 'Settings.svelte', declarations: []},
		'./zzz_client.js': {
			path: 'zzz_client.ts',
			declarations: [
				{name: 'Zzz_Client_Options', kind: 'type'},
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
