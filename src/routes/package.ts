// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: '@ryanatkn/zzz',
	version: '0.0.1',
	description: 'bot and web toolkit',
	motto: 'endgame web UI',
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
		serve: 'gro build && npm run preview & node ',
	},
	type: 'module',
	engines: {node: '>=20.17'},
	peerDependencies: {'@sveltejs/kit': '^2', svelte: '^5'},
	devDependencies: {
		'@changesets/changelog-git': '^0.2.1',
		'@ryanatkn/eslint-config': '^0.6.0',
		'@ryanatkn/fuz': '^0.131.6',
		'@ryanatkn/gro': '^0.148.0',
		'@ryanatkn/moss': '^0.22.1',
		'@sveltejs/adapter-static': '^3.0.8',
		'@sveltejs/kit': '^2.17.2',
		'@sveltejs/package': '^2.3.10',
		'@sveltejs/vite-plugin-svelte': '^4.0.0',
		eslint: '^9.20.1',
		'eslint-plugin-svelte': '^2.46.1',
		ollama: '^0.5.13',
		prettier: '^3.5.1',
		'prettier-plugin-svelte': '^3.3.3',
		svelte: '^5.20.2',
		'svelte-check': '^4.1.4',
		tslib: '^2.8.1',
		typescript: '^5.7.3',
		'typescript-eslint': '^8.24.1',
		uvu: '^0.5.6',
	},
	dependencies: {
		'@anthropic-ai/sdk': '^0.36.3',
		'@google/generative-ai': '^0.21.0',
		'@hono/node-server': '^1.13.8',
		'@hono/node-ws': '^1.0.8',
		'@ryanatkn/belt': '^0.29.0',
		'date-fns': '^4.1.0',
		devalue: '^5.1.1',
		hono: '^4.7.2',
		openai: '^4.85.2',
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
		'./Chat_Item.svelte': {
			types: './dist/Chat_Item.svelte.d.ts',
			svelte: './dist/Chat_Item.svelte',
			default: './dist/Chat_Item.svelte',
		},
		'./Chat_Message.svelte': {
			types: './dist/Chat_Message.svelte.d.ts',
			svelte: './dist/Chat_Message.svelte',
			default: './dist/Chat_Message.svelte',
		},
		'./Chat_Tape.svelte': {
			types: './dist/Chat_Tape.svelte.d.ts',
			svelte: './dist/Chat_Tape.svelte',
			default: './dist/Chat_Tape.svelte',
		},
		'./Chat_View.svelte': {
			types: './dist/Chat_View.svelte.d.ts',
			svelte: './dist/Chat_View.svelte',
			default: './dist/Chat_View.svelte',
		},
		'./chat.svelte.js': {types: './dist/chat.svelte.d.ts', default: './dist/chat.svelte.js'},
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
		'./Confirm_Button.svelte': {
			types: './dist/Confirm_Button.svelte.d.ts',
			svelte: './dist/Confirm_Button.svelte',
			default: './dist/Confirm_Button.svelte',
		},
		'./constants.js': {types: './dist/constants.d.ts', default: './dist/constants.js'},
		'./Control_Panel.svelte': {
			types: './dist/Control_Panel.svelte.d.ts',
			svelte: './dist/Control_Panel.svelte',
			default: './dist/Control_Panel.svelte',
		},
		'./Dashboard_Chats.svelte': {
			types: './dist/Dashboard_Chats.svelte.d.ts',
			svelte: './dist/Dashboard_Chats.svelte',
			default: './dist/Dashboard_Chats.svelte',
		},
		'./Dashboard_Files.svelte': {
			types: './dist/Dashboard_Files.svelte.d.ts',
			svelte: './dist/Dashboard_Files.svelte',
			default: './dist/Dashboard_Files.svelte',
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
		'./File_Explorer.svelte': {
			types: './dist/File_Explorer.svelte.d.ts',
			svelte: './dist/File_Explorer.svelte',
			default: './dist/File_Explorer.svelte',
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
		'./id.js': {types: './dist/id.d.ts', default: './dist/id.js'},
		'./Main_Dialog.svelte': {
			types: './dist/Main_Dialog.svelte.d.ts',
			svelte: './dist/Main_Dialog.svelte',
			default: './dist/Main_Dialog.svelte',
		},
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
		'./Model_Detail.svelte': {
			types: './dist/Model_Detail.svelte.d.ts',
			svelte: './dist/Model_Detail.svelte',
			default: './dist/Model_Detail.svelte',
		},
		'./Model_Link.svelte': {
			types: './dist/Model_Link.svelte.d.ts',
			svelte: './dist/Model_Link.svelte',
			default: './dist/Model_Link.svelte',
		},
		'./Model_Select.svelte': {
			types: './dist/Model_Select.svelte.d.ts',
			svelte: './dist/Model_Select.svelte',
			default: './dist/Model_Select.svelte',
		},
		'./Model_Selector.svelte': {
			types: './dist/Model_Selector.svelte.d.ts',
			svelte: './dist/Model_Selector.svelte',
			default: './dist/Model_Selector.svelte',
		},
		'./Model_Summary.svelte': {
			types: './dist/Model_Summary.svelte.d.ts',
			svelte: './dist/Model_Summary.svelte',
			default: './dist/Model_Summary.svelte',
		},
		'./model.svelte.js': {types: './dist/model.svelte.d.ts', default: './dist/model.svelte.js'},
		'./models.svelte.js': {types: './dist/models.svelte.d.ts', default: './dist/models.svelte.js'},
		'./Nav_Link.svelte': {
			types: './dist/Nav_Link.svelte.d.ts',
			svelte: './dist/Nav_Link.svelte',
			default: './dist/Nav_Link.svelte',
		},
		'./ollama.js': {types: './dist/ollama.d.ts', default: './dist/ollama.js'},
		'./path.js': {types: './dist/path.d.ts', default: './dist/path.js'},
		'./prompt.js': {types: './dist/prompt.d.ts', default: './dist/prompt.js'},
		'./Provider_Detail.svelte': {
			types: './dist/Provider_Detail.svelte.d.ts',
			svelte: './dist/Provider_Detail.svelte',
			default: './dist/Provider_Detail.svelte',
		},
		'./Provider_Info.svelte': {
			types: './dist/Provider_Info.svelte.d.ts',
			svelte: './dist/Provider_Info.svelte',
			default: './dist/Provider_Info.svelte',
		},
		'./Provider_Link.svelte': {
			types: './dist/Provider_Link.svelte.d.ts',
			svelte: './dist/Provider_Link.svelte',
			default: './dist/Provider_Link.svelte',
		},
		'./Provider_Select.svelte': {
			types: './dist/Provider_Select.svelte.d.ts',
			svelte: './dist/Provider_Select.svelte',
			default: './dist/Provider_Select.svelte',
		},
		'./Provider_Summary.svelte': {
			types: './dist/Provider_Summary.svelte.d.ts',
			svelte: './dist/Provider_Summary.svelte',
			default: './dist/Provider_Summary.svelte',
		},
		'./Provider_View.svelte': {
			types: './dist/Provider_View.svelte.d.ts',
			svelte: './dist/Provider_View.svelte',
			default: './dist/Provider_View.svelte',
		},
		'./provider.svelte.js': {
			types: './dist/provider.svelte.d.ts',
			default: './dist/provider.svelte.js',
		},
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
		'./Text_Icon.svelte': {
			types: './dist/Text_Icon.svelte.d.ts',
			svelte: './dist/Text_Icon.svelte',
			default: './dist/Text_Icon.svelte',
		},
		'./zzz_client.js': {types: './dist/zzz_client.d.ts', default: './dist/zzz_client.js'},
		'./zzz_config.js': {types: './dist/zzz_config.d.ts', default: './dist/zzz_config.js'},
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
		'./Chat_Item.svelte': {path: 'Chat_Item.svelte', declarations: []},
		'./Chat_Message.svelte': {path: 'Chat_Message.svelte', declarations: []},
		'./Chat_Tape.svelte': {path: 'Chat_Tape.svelte', declarations: []},
		'./Chat_View.svelte': {path: 'Chat_View.svelte', declarations: []},
		'./chat.svelte.js': {
			path: 'chat.svelte.ts',
			declarations: [
				{name: 'Chat_Message', kind: 'type'},
				{name: 'Tape', kind: 'type'},
				{name: 'Chat', kind: 'class'},
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
				{name: 'to_completion_response_text', kind: 'function'},
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
				{name: 'providers_default', kind: 'variable'},
				{name: 'models_default', kind: 'variable'},
				{name: 'SYSTEM_MESSAGE_DEFAULT', kind: 'variable'},
				{name: 'default', kind: 'variable'},
			],
		},
		'./Confirm_Button.svelte': {path: 'Confirm_Button.svelte', declarations: []},
		'./constants.js': {
			path: 'constants.ts',
			declarations: [
				{name: 'GLYPH_CHAT', kind: 'variable'},
				{name: 'GLYPH_TAPE', kind: 'variable'},
				{name: 'GLYPH_FILE', kind: 'variable'},
				{name: 'GLYPH_PROMPTS', kind: 'variable'},
				{name: 'GLYPH_PROVIDER', kind: 'variable'},
				{name: 'GLYPH_MODEL', kind: 'variable'},
				{name: 'GLYPH_CAPABILITIES', kind: 'variable'},
				{name: 'GLYPH_SETTINGS', kind: 'variable'},
			],
		},
		'./Control_Panel.svelte': {path: 'Control_Panel.svelte', declarations: []},
		'./Dashboard_Chats.svelte': {path: 'Dashboard_Chats.svelte', declarations: []},
		'./Dashboard_Files.svelte': {path: 'Dashboard_Files.svelte', declarations: []},
		'./Dashboard.svelte': {path: 'Dashboard.svelte', declarations: []},
		'./Echo_Form.svelte': {path: 'Echo_Form.svelte', declarations: []},
		'./File_Editor.svelte': {path: 'File_Editor.svelte', declarations: []},
		'./File_Explorer.svelte': {path: 'File_Explorer.svelte', declarations: []},
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
		'./id.js': {
			path: 'id.ts',
			declarations: [
				{name: 'Id', kind: 'type'},
				{name: 'random_id', kind: 'function'},
			],
		},
		'./Main_Dialog.svelte': {path: 'Main_Dialog.svelte', declarations: []},
		'./Message_Info.svelte': {path: 'Message_Info.svelte', declarations: []},
		'./Message_Summary.svelte': {path: 'Message_Summary.svelte', declarations: []},
		'./Message_View.svelte': {path: 'Message_View.svelte', declarations: []},
		'./Model_Detail.svelte': {path: 'Model_Detail.svelte', declarations: []},
		'./Model_Link.svelte': {path: 'Model_Link.svelte', declarations: []},
		'./Model_Select.svelte': {path: 'Model_Select.svelte', declarations: []},
		'./Model_Selector.svelte': {path: 'Model_Selector.svelte', declarations: []},
		'./Model_Summary.svelte': {path: 'Model_Summary.svelte', declarations: []},
		'./model.svelte.js': {
			path: 'model.svelte.ts',
			declarations: [
				{name: 'Model_Name', kind: 'type'},
				{name: 'Model_Json', kind: 'type'},
				{name: 'Model_Options', kind: 'type'},
				{name: 'Model', kind: 'class'},
			],
		},
		'./models.svelte.js': {
			path: 'models.svelte.ts',
			declarations: [{name: 'Models', kind: 'class'}],
		},
		'./Nav_Link.svelte': {path: 'Nav_Link.svelte', declarations: []},
		'./ollama.js': {
			path: 'ollama.ts',
			declarations: [
				{name: 'Ollama_Model_Info', kind: 'type'},
				{name: 'Ollama_Models_Response', kind: 'type'},
				{name: 'import_ollama', kind: 'function'},
				{name: 'ollama_list', kind: 'function'},
				{name: 'ollama_list_with_metadata', kind: 'function'},
				{name: 'merge_ollama_models', kind: 'function'},
			],
		},
		'./path.js': {path: 'path.ts', declarations: [{name: 'to_root_path', kind: 'function'}]},
		'./prompt.js': {
			path: 'prompt.ts',
			declarations: [
				{name: 'Prompt', kind: 'type'},
				{name: 'Prompt_Message', kind: 'type'},
				{name: 'Prompt_Message_Content', kind: 'type'},
			],
		},
		'./Provider_Detail.svelte': {path: 'Provider_Detail.svelte', declarations: []},
		'./Provider_Info.svelte': {path: 'Provider_Info.svelte', declarations: []},
		'./Provider_Link.svelte': {path: 'Provider_Link.svelte', declarations: []},
		'./Provider_Select.svelte': {path: 'Provider_Select.svelte', declarations: []},
		'./Provider_Summary.svelte': {path: 'Provider_Summary.svelte', declarations: []},
		'./Provider_View.svelte': {path: 'Provider_View.svelte', declarations: []},
		'./provider.svelte.js': {
			path: 'provider.svelte.ts',
			declarations: [
				{name: 'Provider_Name', kind: 'type'},
				{name: 'Provider_Json', kind: 'type'},
				{name: 'Provider_Options', kind: 'type'},
				{name: 'Provider', kind: 'class'},
			],
		},
		'./server/.env.example': {path: 'server/.env.example', declarations: []},
		'./server/helpers.js': {
			path: 'server/helpers.ts',
			declarations: [
				{name: 'write_file_in_scope', kind: 'function'},
				{name: 'delete_file_in_scope', kind: 'function'},
			],
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
		'./Text_Icon.svelte': {path: 'Text_Icon.svelte', declarations: []},
		'./zzz_client.js': {
			path: 'zzz_client.ts',
			declarations: [
				{name: 'Zzz_Client_Options', kind: 'type'},
				{name: 'Zzz_Client', kind: 'class'},
			],
		},
		'./zzz_config.js': {
			path: 'zzz_config.ts',
			declarations: [{name: 'zzz_config', kind: 'variable'}],
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
				{name: 'Delete_File_Message', kind: 'type'},
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
