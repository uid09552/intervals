import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class IntervalsApiKeyApi implements ICredentialType {
	name = 'intervalsApiKeyApi';

	displayName = 'Intervals.icu API Key API';

	icon: Icon = { light: 'file:../icons/intervals.svg', dark: 'file:../icons/intervals.dark.svg' };

	documentationUrl = 'https://intervals.icu/api/v1/docs/';

	properties: INodeProperties[] = [
		{
			displayName: 'Intervals.icu API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'Your Intervals.icu API key from /settings',
		},
	];
authenticate: IAuthenticateGeneric = {
	type: 'generic',
	properties: {
	auth: {
			username: 'API_KEY',
			password: '={{$credentials.apiKey}}',
		},
	},
};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://intervals.icu',
			url: '/api/v1/athlete/0',
			method: 'GET',
			auth: {
			username: 'API_KEY',
			password: '={{$credentials.apiKey}}',
		},
		},
	};
}
