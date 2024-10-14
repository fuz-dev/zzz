export interface Agent_Json {
	name: string;
	title: string;
	model: string;
	url: string;
}

export interface Agent_Options {
	data: Agent_Json;
}

export class Agent {
	name: string = $state()!;
	title: string = $state()!;
	model: string = $state()!;
	url: string = $state()!;

	// TODO
	// models

	constructor(options: Agent_Options) {
		const {
			data: {name, title, model, url},
		} = options;
		this.name = name;
		this.title = title;
		this.model = model;
		this.url = url;
	}

	toJSON(): Agent_Json {
		return {
			name: this.name,
			title: this.title,
			model: this.model,
			url: this.url,
		};
	}
}
