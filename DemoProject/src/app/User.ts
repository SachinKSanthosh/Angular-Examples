export interface Data {
	id: string;
	name: string;
	email: string;
	password: string;
}

export interface User {
	data: Data[];
}