import { NodeConnectionTypes, type INodeType, type INodeTypeDescription, type IExecuteFunctions, type INodeExecutionData } from 'n8n-workflow';
import { AktivitTenService, AthletenService, SportService, OpenAPI, SportSettings, Activity, Interval } from '../../client';

interface AdditionalFields {
	athleteId?: string;
	oldest?: string;
	newest?: string;
	limit?: number;
	recalcHrZones?: boolean;
	[key: string]: string | number | boolean | undefined;
}

export class Intervals implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Intervals.icu',
		name: 'intervals',
		icon: { light: 'file:../../icons/intervals.svg', dark: 'file:../../icons/intervals.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with Intervals.icu API',
		defaults: {
			name: 'Intervals.icu',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'intervalsApiKeyApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://intervals.icu',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Activity',
						value: 'activity',
					},
					{
						name: 'Athlete',
						value: 'athlete',
					},
					{
						name: 'Route',
						value: 'route',
					},
					{
						name: 'Sports Setting',
						value: 'sportsSettings',
					},
					{
						name: 'Weather',
						value: 'weather',
					},
				],
				default: 'activity',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['activity'],
					},
				},
				
				options: [
					{
						name: 'Create',
						value: 'create',
						description: 'Create a new activity',
						action: 'Create a new activity',
					},
					{
						name: 'Delete',
						value: 'delete',
						description: 'Delete an activity',
						action: 'Delete an activity',
					},					
					{
						name: 'Download Activities As CSV',
						value: 'downloadActivitiesAsCsv',
						action: 'Download activities as CSV',
					},
					{
						name: 'Download Activity File',
						value: 'downloadActivityFile',
						description: 'Download original activity file',
						action: 'Download original activity file',
					},
					{
						name: 'Download Activity Fit File',
						value: 'downloadActivityFitFile',
						action: 'Download activity FIT file',
					},

					{
						name: 'Download Activity GPX File',
						value: 'downloadActivityGpxFile',
						action: 'Download activity GPX file',
					},
					{
						name: 'Find Best Efforts',
						value: 'findBestEfforts',
						description: 'Find best efforts in activity',
						action: 'Find best efforts in activity',
					},
					{
						name: 'Get',
						value: 'get',
						description: 'Get an activity by ID',
						action: 'Get an activity',
					},
					{
						name: 'Get Activity HR Curve',
						value: 'getActivityHrCurve',
						description: 'Get activity heart rate curve',
						action: 'Get activity heart rate curve',
					},
					{
						name: 'Get Activity Map',
						value: 'getActivityMap',
						description: 'Get activity map data',
						action: 'Get activity map data',
					},
					{
						name: 'Get Activity Pace Curve',
						value: 'getActivityPaceCurve',
						action: 'Get activity pace curve',
					},
					{
						name: 'Get Activity Power Curve',
						value: 'getActivityPowerCurve',
						action: 'Get activity power curve',
					},
					{
						name: 'Get Activity Power Spike Model',
						value: 'getActivityPowerSpikeModel',
						description: 'Get activity power spike detection model',
						action: 'Get activity power spike detection model',
					},
					{
						name: 'Get Activity Segments',
						value: 'getActivitySegments',
						action: 'Get activity segments',
					},
					{
						name: 'Get Activity Streams',
						value: 'getActivityStreams',
						action: 'Get activity streams',
					},
					{
						name: 'Get Activity Weather Summary',
						value: 'getActivityWeatherSummary',
						action: 'Get activity weather summary',
					},
					{
						name: 'Get Gap Histogram',
						value: 'getGapHistogram',
						description: 'Get gradient adjusted pace histogram',
						action: 'Get gradient adjusted pace histogram',
					},
					{
						name: 'Get HR Histogram',
						value: 'getHrHistogram',
						description: 'Get heart rate histogram',
						action: 'Get heart rate histogram',
					},
					{
						name: 'Get HR Training Load Model',
						value: 'getHrTrainingLoadModel',
						description: 'Get heart rate training load model',
						action: 'Get heart rate training load model',
					},
					{
						name: 'Get Interval Stats',
						value: 'getIntervalStats',
						description: 'Get interval-like stats for part of activity',
						action: 'Get interval like stats for part of activity',
					},
					{
						name: 'Get Intervals',
						value: 'getIntervals',
						description: 'Get activity intervals',
						action: 'Get activity intervals',
					},
					{
						name: 'Get Many',
						value: 'getMany',
						description: 'Get multiple activities',
						action: 'Get multiple activities',
					},
					{
						name: 'Get Pace Histogram',
						value: 'getPaceHistogram',
						description: 'Get activity pace histogram',
						action: 'Get activity pace histogram',
					},
					{
						name: 'Get Power Histogram',
						value: 'getPowerHistogram',
						description: 'Get activity power histogram',
						action: 'Get activity power histogram',
					},
					{
						name: 'Get Power vs HR',
						value: 'getPowerVsHr',
						description: 'Get activity power vs heart rate data',
						action: 'Get activity power vs heart rate data',
					},
					{
						name: 'Get Time At HR',
						value: 'getTimeAtHr',
						description: 'Get activity time at heart rate data',
						action: 'Get activity time at heart rate data',
					},
					{
						name: 'List Activities Around',
						value: 'listActivitiesAround',
						description: 'List activities before and after another activity',
						action: 'List activities before and after another activity',
					},
					{
						name: 'List Activity HR Curves',
						value: 'listActivityHrCurves',
						description: 'Get best HR for a range of durations',
						action: 'Get best HR for a range of durations',
					},
					{
						name: 'List Activity Pace Curves',
						value: 'listActivityPaceCurves',
						description: 'Get best pace for a range of distances',
						action: 'Get best pace for a range of distances',
					},
					{
						name: 'List Activity Power Curves',
						value: 'listActivityPowerCurves',
						description: 'Get best power for a range of durations',
						action: 'Get best power for a range of durations',
					},
					{
						name: 'Search For Activities',
						value: 'searchForActivities',
						description: 'Search for activities by name or tag',
						action: 'Search for activities by name or tag',
					},
					{
						name: 'Search For Activities Full',
						value: 'searchForActivitiesFull',
						description: 'Search for activities (full)',
						action: 'Search for activities full',
					},
					{
						name: 'Search For Intervals',
						value: 'searchForIntervals',
						description: 'Find activities with intervals matching criteria',
						action: 'Find activities with intervals matching criteria',
					},
					{
						name: 'Update',
						value: 'update',
						description: 'Update an activity',
						action: 'Update an activity',
					},
					{
						name: 'Update Intervals',
						value: 'updateIntervals',
						description: 'Update activity intervals',
						action: 'Update activity intervals',
					},
					{
						name: 'Upload Activity',
						value: 'uploadActivity',
						description: 'Upload activity file',
						action: 'Upload activity file',
					},
				],
				default: 'get',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['athlete'],
					},
				},
				options: [
					{
						name: 'Get',
						value: 'get',
						description: 'Get athlete information',
						action: 'Get athlete information',
					},
					{
						name: 'Get Profile',
						value: 'getProfile',
						description: 'Get athlete profile',
						action: 'Get athlete profile',
					},
					{
						name: 'Update',
						value: 'update',
						description: 'Update athlete information',
						action: 'Update athlete information',
					},
				],
				default: 'get',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['route'],
					},
				},
				options: [
					{
						name: 'Get',
						value: 'get',
						description: 'Get a route by ID',
						action: 'Get a route',
					},
					{
						name: 'Get Many',
						value: 'getMany',
						description: 'Get multiple routes',
						action: 'Get multiple routes',
					},
				],
				default: 'get',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['sportsSettings'],
					},
				},
				options: [
	{
		name: 'Create',
		value: 'create',
		description: 'Create a new activity',
		action: 'Create a new activity',
	},
	{
		name: 'Delete',
		value: 'delete',
		description: 'Delete an activity',
		action: 'Delete an activity',
	},
	{
		name: 'Download Activities As CSV',
		value: 'downloadActivitiesAsCsv',
		action: 'Download activities as CSV',
	},
	{
		name: 'Download Activity File',
		value: 'downloadActivityFile',
		description: 'Download original activity file',
		action: 'Download original activity file',
	},
	{
		name: 'Download Activity Fit File',
		value: 'downloadActivityFitFile',
		action: 'Download activity FIT file',
	},
	{
		name: 'Download Activity GPX File',
		value: 'downloadActivityGpxFile',
		action: 'Download activity GPX file',
	},
	{
		name: 'Find Best Efforts',
		value: 'findBestEfforts',
		description: 'Find best efforts in activity',
		action: 'Find best efforts in activity',
	},
	{
		name: 'Get',
		value: 'get',
		description: 'Get an activity by ID',
		action: 'Get an activity',
	},
	{
		name: 'Get Activity HR Curve',
		value: 'getActivityHrCurve',
		description: 'Get activity heart rate curve',
		action: 'Get activity heart rate curve',
	},
	{
		name: 'Get Activity Map',
		value: 'getActivityMap',
		description: 'Get activity map data',
		action: 'Get activity map data',
	},
	{
		name: 'Get Activity Pace Curve',
		value: 'getActivityPaceCurve',
		action: 'Get activity pace curve',
	},
	{
		name: 'Get Activity Power Curve',
		value: 'getActivityPowerCurve',
		action: 'Get activity power curve',
	},
	{
		name: 'Get Activity Power Spike Model',
		value: 'getActivityPowerSpikeModel',
		description: 'Get activity power spike detection model',
		action: 'Get activity power spike detection model',
	},
	{
		name: 'Get Activity Segments',
		value: 'getActivitySegments',
		action: 'Get activity segments',
	},
	{
		name: 'Get Activity Streams',
		value: 'getActivityStreams',
		action: 'Get activity streams',
	},
	{
		name: 'Get Activity Weather Summary',
		value: 'getActivityWeatherSummary',
		action: 'Get activity weather summary',
	},
	{
		name: 'Get Gap Histogram',
		value: 'getGapHistogram',
		description: 'Get gradient adjusted pace histogram',
		action: 'Get gradient adjusted pace histogram',
	},
	{
		name: 'Get HR Histogram',
		value: 'getHrHistogram',
		description: 'Get heart rate histogram',
		action: 'Get heart rate histogram',
	},
	{
		name: 'Get HR Training Load Model',
		value: 'getHrTrainingLoadModel',
		description: 'Get heart rate training load model',
		action: 'Get heart rate training load model',
	},
	{
		name: 'Get Interval Stats',
		value: 'getIntervalStats',
		description: 'Get interval-like stats for part of activity',
		action: 'Get interval like stats for part of activity',
	},
	{
		name: 'Get Intervals',
		value: 'getIntervals',
		description: 'Get activity intervals',
		action: 'Get activity intervals',
	},
	{
		name: 'Get Many',
		value: 'getMany',
		description: 'Get multiple activities',
		action: 'Get multiple activities',
	},
	{
		name: 'Get Pace Histogram',
		value: 'getPaceHistogram',
		description: 'Get activity pace histogram',
		action: 'Get activity pace histogram',
	},
	{
		name: 'Get Power Histogram',
		value: 'getPowerHistogram',
		description: 'Get activity power histogram',
		action: 'Get activity power histogram',
	},
	{
		name: 'Get Power vs HR',
		value: 'getPowerVsHr',
		description: 'Get activity power vs heart rate data',
		action: 'Get activity power vs heart rate data',
	},
	{
		name: 'Get Time At HR',
		value: 'getTimeAtHr',
		description: 'Get activity time at heart rate data',
		action: 'Get activity time at heart rate data',
	},
	{
		name: 'List Activities Around',
		value: 'listActivitiesAround',
		description: 'List activities before and after another activity',
		action: 'List activities before and after another activity',
	},
	{
		name: 'List Activity HR Curves',
		value: 'listActivityHrCurves',
		description: 'Get best HR for a range of durations',
		action: 'Get best HR for a range of durations',
	},
	{
		name: 'List Activity Pace Curves',
		value: 'listActivityPaceCurves',
		description: 'Get best pace for a range of distances',
		action: 'Get best pace for a range of distances',
	},
	{
		name: 'List Activity Power Curves',
		value: 'listActivityPowerCurves',
		description: 'Get best power for a range of durations',
		action: 'Get best power for a range of durations',
	},
	{
		name: 'Search For Activities',
		value: 'searchForActivities',
		description: 'Search for activities by name or tag',
		action: 'Search for activities by name or tag',
	},
	{
		name: 'Search For Activities Full',
		value: 'searchForActivitiesFull',
		description: 'Search for activities (full)',
		action: 'Search for activities full',
	},
	{
		name: 'Search For Intervals',
		value: 'searchForIntervals',
		description: 'Find activities with intervals matching criteria',
		action: 'Find activities with intervals matching criteria',
	},
	{
		name: 'Update',
		value: 'update',
		description: 'Update an activity',
		action: 'Update an activity',
	},
	{
		name: 'Update Intervals',
		value: 'updateIntervals',
		description: 'Update activity intervals',
		action: 'Update activity intervals',
	},
	{
		name: 'Upload Activity',
		value: 'uploadActivity',
		description: 'Upload activity file',
		action: 'Upload activity file',
	},
],
				default: 'create',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['weather'],
					},
				},
				options: [
					{
						name: 'Get Forecast',
						value: 'getForecast',
						description: 'Get weather forecast',
						action: 'Get weather forecast',
					},
				],
				default: 'getForecast',
			},
			{
				displayName: 'Athlete ID',
				name: 'athleteId',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['athlete', 'sportsSettings'],
					},
				},
				default: '0',
				description: 'The athlete ID (usually your own ID), keep as 0 for authenticated user',
			},
			{
				displayName: 'Activity ID',
				name: 'activityId',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['activity'],
						operation: [
							'get',
							'update',
							'delete',
							'getIntervals',
							'updateIntervals',
							'getActivityStreams',
							'getActivitySegments',
							'getActivityMap',
							'getActivityWeatherSummary',
							'getTimeAtHr',
							'getPowerVsHr',
							'getActivityPowerCurve',
							'getActivityPaceCurve',
							'getActivityHrCurve',
							'getPowerHistogram',
							'getPaceHistogram',
							'getHrHistogram',
							'getGapHistogram',
							'getHrTrainingLoadModel',
							'getActivityPowerSpikeModel',
							'getIntervalStats',
							'findBestEfforts',
							'downloadActivityFile',
							'downloadActivityGpxFile',
							'downloadActivityFitFile',
							'listActivitiesAround',
						],
					},
				},
				default: '',
				description: 'The ID of the activity',
			},
			{
				displayName: 'Athlete ID',
				name: 'athleteId',
				type: 'string',
				displayOptions: {
					show: {
						resource: ['activity'],
						operation: [
							'create',
							'getMany',
							'searchForActivities',
							'searchForActivitiesFull',
							'searchForIntervals',
							'downloadActivitiesAsCsv',
							'listActivitiesAround',
							'listActivityPowerCurves',
							'listActivityPaceCurves',
							'listActivityHrCurves',
							'uploadActivity',
						],
					},
				},
				default: '0',
			},
			{
				displayName: 'Activity Data',
				name: 'activityData',
				type: 'json',
				displayOptions: {
					show: {
						resource: ['activity'],
						operation: ['create', 'update'],
					},
				},
				default: '{}',
				description: 'Activity data to create or update',
			},
			{
				displayName: 'Intervals',
				name: 'intervals',
				type: 'json',
				displayOptions: {
					show: {
						resource: ['activity'],
						operation: ['updateIntervals'],
					},
				},
				default: '[]',
				description: 'Array of intervals to update',
			},
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['activity'],
						operation: ['searchForActivities', 'searchForActivitiesFull'],
					},
				},
				default: '',
				description: 'Search query (case insensitive name or tag with #)',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				displayOptions: {
					show: {
						resource: ['activity'],
						operation: ['searchForActivities', 'searchForActivitiesFull'],
					},
				},
				default: 50,
				description: 'Max number of results to return',
			},
			{
				displayName: 'Min Seconds',
				name: 'minSecs',
				type: 'number',
				required: true,
				displayOptions: {
					show: {
						resource: ['activity'],
						operation: ['searchForIntervals'],
					},
				},
				default: 0,
				description: 'Minimum duration in seconds',
			},
			{
				displayName: 'Max Seconds',
				name: 'maxSecs',
				type: 'number',
				required: true,
				displayOptions: {
					show: {
						resource: ['activity'],
						operation: ['searchForIntervals'],
					},
				},
				default: 3600,
				description: 'Maximum duration in seconds',
			},
			{
				displayName: 'Min Intensity',
				name: 'minIntensity',
				type: 'number',
				required: true,
				displayOptions: {
					show: {
						resource: ['activity'],
						operation: ['searchForIntervals'],
					},
				},
				default: 0,
				description: 'Minimum intensity percentage',
			},
			{
				displayName: 'Max Intensity',
				name: 'maxIntensity',
				type: 'number',
				required: true,
				displayOptions: {
					show: {
						resource: ['activity'],
						operation: ['searchForIntervals'],
					},
				},
				default: 100,
				description: 'Maximum intensity percentage',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'string',
				displayOptions: {
					show: {
						resource: ['activity'],
						operation: ['searchForIntervals'],
					},
				},
				default: '',
				description: 'Interval type to search for',
			},
			{
				displayName: 'Min Reps',
				name: 'minReps',
				type: 'number',
				displayOptions: {
					show: {
						resource: ['activity'],
						operation: ['searchForIntervals'],
					},
				},
				default: 1,
				description: 'Minimum number of repetitions',
			},
			{
				displayName: 'Max Reps',
				name: 'maxReps',
				type: 'number',
				displayOptions: {
					show: {
						resource: ['activity'],
						operation: ['searchForIntervals'],
					},
				},
				default: 999999,
				description: 'Maximum number of repetitions',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				displayOptions: {
					show: {
						resource: ['activity'],
						operation: ['searchForIntervals'],
					},
				},
				default: 50,
				description: 'Max number of results to return',
			},
			{
				displayName: 'Stream',
				name: 'stream',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['activity'],
						operation: ['findBestEfforts'],
					},
				},
				default: 'watts',
				description: 'Stream to search (watts, heart_rate, pace, etc)',
			},
			{
				displayName: 'Start Index',
				name: 'startIndex',
				type: 'number',
				required: true,
				displayOptions: {
					show: {
						resource: ['activity'],
						operation: ['getIntervalStats'],
					},
				},
				default: 0,
				description: 'First point in stream to consider',
			},
			{
				displayName: 'End Index',
				name: 'endIndex',
				type: 'number',
				required: true,
				displayOptions: {
					show: {
						resource: ['activity'],
						operation: ['getIntervalStats'],
					},
				},
				default: 0,
				description: 'Last point in stream to consider',
			},
			{
				displayName: 'Oldest',
				name: 'oldest',
				type: 'dateTime',
				required: true,
				displayOptions: {
					show: {
						resource: ['activity'],
						operation: ['listActivityPowerCurves', 'listActivityPaceCurves', 'listActivityHrCurves'],
					},
				},
				default: '={{ $now.minus(7, "days").toISOString() }}',
				description: 'Start date',
			},
			{
				displayName: 'Newest',
				name: 'newest',
				type: 'dateTime',
				required: true,
				displayOptions: {
					show: {
						resource: ['activity'],
						operation: ['listActivityPowerCurves', 'listActivityPaceCurves', 'listActivityHrCurves'],
					},
				},
				default: '={{ $now.toISOString() }}',
				description: 'End date',
			},
			{
				displayName: 'Setting ID',
				name: 'settingId',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['sportsSettings'],
						operation: ['get', 'update', 'delete', 'applyToActivities', 'listMatchingActivities', 'listPaceDistancesForSport'],
					},
				},
				default: '',
				description: 'The sport settings ID',
			},
			{
				displayName: 'Setting Data',
				name: 'settingData',
				type: 'json',
				displayOptions: {
					show: {
						resource: ['sportsSettings'],
						operation: ['create', 'update'],
					},
				},
				default: '{}',
				description: 'Sport settings data',
			},
			{
				displayName: 'Settings Data',
				name: 'settingsData',
				type: 'json',
				displayOptions: {
					show: {
						resource: ['sportsSettings'],
						operation: ['updateMultiple'],
					},
				},
				default: '[]',
				description: 'Array of sport settings to update',
			},
			{
				displayName: 'Recalculate HR Zones',
				name: 'recalcHrZones',
				type: 'boolean',
				displayOptions: {
					show: {
						resource: ['sportsSettings'],
						operation: ['update', 'updateMultiple'],
					},
				},
				
				default: false,
				description: 'Whether Recalculate heart rate zones',
			},
			{
				displayName: 'File',
				name: 'file',
				type: 'string',
				required: true,
				typeOptions: {
					mimeTypeOnly: true,
				},
				displayOptions: {
					show: {
						resource: ['activity'],
						operation: ['uploadActivity'],
					},
				},
				default: '',
				description: 'Activity file to upload (fit, tcx, gpx)',
			},
			{
				displayName: 'Activity Name',
				name: 'activityName',
				type: 'string',
				displayOptions: {
					show: {
						resource: ['activity'],
						operation: ['uploadActivity'],
					},
				},
				default: '',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				displayOptions: {
					show: {
						resource: ['activity'],
						operation: ['uploadActivity'],
					},
				},
				default: '',
				description: 'Activity description',
			},
			{
				displayName: 'Device Name',
				name: 'deviceName',
				type: 'string',
				displayOptions: {
					show: {
						resource: ['activity'],
						operation: ['uploadActivity'],
					},
				},
				default: '',
				description: 'Device the activity was created on',
			},
			{
				displayName: 'External ID',
				name: 'externalId',
				type: 'string',
				displayOptions: {
					show: {
						resource: ['activity'],
						operation: ['uploadActivity'],
					},
				},
				default: '',
				description: 'ID of the activity on the system it came from',
			},
			{
				displayName: 'Paired Event ID',
				name: 'pairedEventId',
				type: 'number',
				displayOptions: {
					show: {
						resource: ['activity'],
						operation: ['uploadActivity'],
					},
				},
				default: undefined,
				description: 'Workout to pair with activity',
			},
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ['activity'],
						operation: ['getMany'],
					},
				},
				options: [
					{
						displayName: 'Athlete ID',
						name: 'athleteId',
						type: 'string',
						default: '0',
						description: 'The athlete ID whose activities to retrieve',
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						typeOptions: {
							minValue: 1,
						},
						default: 50,
						description: 'Max number of results to return',
					},
					{
						displayName: 'Oldest',
						name: 'oldest',
						type: 'dateTime',
						default: '={{ $now.minus(7, "days").toISOString() }}',
						description: 'Only return activities after this date',
					},
					{
						displayName: 'Newest',
						name: 'newest',
						type: 'dateTime',
						default: '',
						description: 'Only return activities before this date',
					},
				],
			},
		],
	};

	async execute(this: IExecuteFunctions) {
		const items: INodeExecutionData[] = [];
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;
		const itemIndex = 0;

		try {
			// Configure the client with credentials
			const credentials = await this.getCredentials('intervalsApiKeyApi');
			OpenAPI.USERNAME = 'API_KEY';
			OpenAPI.PASSWORD = credentials.apiKey as string;
			OpenAPI.BASE = 'https://intervals.icu';

			if (resource === 'activity') {
				await handleActivityResource(this, operation, items, itemIndex);
			} else if (resource === 'athlete') {
				await handleAthleteResource(this, operation, items, itemIndex);
			} else if (resource === 'sportsSettings') {
				await handleSportsSettingsResource(this, operation, items, itemIndex);
			} else if (resource === 'route') {
				await handleRouteResource(this, operation, items, itemIndex);
			} else if (resource === 'weather') {
				await handleWeatherResource(this, operation, items, itemIndex);
			}
		} catch (error) {
			if (this.continueOnFail()) {
				items.push({ json: { error: error.message }, pairedItem: { item: itemIndex } });
			} else {
				throw error;
			}
		}

		return [items];
	}
}

async function handleActivityResource(
	execContext: IExecuteFunctions,
	operation: string,
	items: INodeExecutionData[],
	itemIndex: number
) {
	if (operation === 'get') {
		const activityId = execContext.getNodeParameter('activityId', itemIndex) as string;
		const response = await AktivitTenService.getActivity(activityId);
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'getMany') {
		const additionalFields = execContext.getNodeParameter('additionalFields', itemIndex) as AdditionalFields;
		const athleteId = additionalFields.athleteId || '0';
		const oldest = additionalFields.oldest || new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
			.toISOString()
			.slice(0, 19);
		const newest = additionalFields.newest;
		const limit = additionalFields.limit;

		const response = await AktivitTenService.listActivities(athleteId, oldest, newest, undefined, limit);
		for (const activity of response) {
			items.push({ json: activity, pairedItem: { item: itemIndex } });
		}
	} else if (operation === 'create') {
		const activityData = execContext.getNodeParameter('activityData', itemIndex) as Activity;
		const athleteId = execContext.getNodeParameter('athleteId', itemIndex, '0') as string;
		const response = await AktivitTenService.createManualActivity(athleteId, activityData);
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'update') {
		const activityId = execContext.getNodeParameter('activityId', itemIndex) as string;
		const activityData = execContext.getNodeParameter('activityData', itemIndex) as Activity;
		const response = await AktivitTenService.updateActivity(activityId, activityData);
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'delete') {
		const activityId = execContext.getNodeParameter('activityId', itemIndex) as string;
		const response = await AktivitTenService.deleteActivity(activityId);
		items.push({ json: { success: true, deletedId: response }, pairedItem: { item: itemIndex } });
	} else if (operation === 'getIntervals') {
		const activityId = execContext.getNodeParameter('activityId', itemIndex) as string;
		const response = await AktivitTenService.getIntervals(activityId);
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'updateIntervals') {
		const activityId = execContext.getNodeParameter('activityId', itemIndex) as string;
		const intervals = execContext.getNodeParameter('intervals', itemIndex) as Interval[];
		const response = await AktivitTenService.updateIntervals(activityId, intervals);
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'searchForActivities') {
		const athleteId = execContext.getNodeParameter('athleteId', itemIndex, '0') as string;
		const q = execContext.getNodeParameter('query', itemIndex) as string;
		const limit = execContext.getNodeParameter('limit', itemIndex, undefined) as number | undefined;
		const response = await AktivitTenService.searchForActivities(athleteId, q, limit);
		for (const activity of response) {
			items.push({ json: activity, pairedItem: { item: itemIndex } });
		}
	} else if (operation === 'searchForActivitiesFull') {
		const athleteId = execContext.getNodeParameter('athleteId', itemIndex, '0') as string;
		const q = execContext.getNodeParameter('query', itemIndex) as string;
		const limit = execContext.getNodeParameter('limit', itemIndex, undefined) as number | undefined;
		const response = await AktivitTenService.searchForActivitiesFull(athleteId, q, limit);
		for (const activity of response) {
			items.push({ json: activity, pairedItem: { item: itemIndex } });
		}
	} else if (operation === 'searchForIntervals') {
		const athleteId = execContext.getNodeParameter('athleteId', itemIndex, '0') as string;
		const minSecs = execContext.getNodeParameter('minSecs', itemIndex) as number;
		const maxSecs = execContext.getNodeParameter('maxSecs', itemIndex) as number;
		const minIntensity = execContext.getNodeParameter('minIntensity', itemIndex) as number;
		const maxIntensity = execContext.getNodeParameter('maxIntensity', itemIndex) as number;
		const type = execContext.getNodeParameter('type', itemIndex, undefined) as string | undefined;
		const minReps = execContext.getNodeParameter('minReps', itemIndex, 1) as number;
		const maxReps = execContext.getNodeParameter('maxReps', itemIndex, 999999) as number;
		const limit = execContext.getNodeParameter('limit', itemIndex, 30) as number;

		const response = await AktivitTenService.searchForIntervals(
			athleteId,
			minSecs,
			maxSecs,
			minIntensity,
			maxIntensity,
			type ? (type.toUpperCase() as 'AUTO' | 'POWER' | 'HR' | 'PACE') : undefined,
			minReps,
			maxReps,
			limit
		);
		for (const activity of response) {
			items.push({ json: activity, pairedItem: { item: itemIndex } });
		}
	} else if (operation === 'getActivityStreams') {
		const activityId = execContext.getNodeParameter('activityId', itemIndex) as string;
		const types = execContext.getNodeParameter('types', itemIndex, undefined) as string[] | undefined;
		const response = await AktivitTenService.getActivityStreams(activityId, '', types);
		for (const stream of response) {
			items.push({ json: stream, pairedItem: { item: itemIndex } });
		}
	} else if (operation === 'getActivitySegments') {
		const activityId = execContext.getNodeParameter('activityId', itemIndex) as string;
		const response = await AktivitTenService.getActivitySegments(activityId);
		for (const segment of response) {
			items.push({ json: segment, pairedItem: { item: itemIndex } });
		}
	} else if (operation === 'getActivityMap') {
		const activityId = execContext.getNodeParameter('activityId', itemIndex) as string;
		const response = await AktivitTenService.getActivityMap(activityId);
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'getActivityWeatherSummary') {
		const activityId = execContext.getNodeParameter('activityId', itemIndex) as string;
		const response = await AktivitTenService.getActivityWeatherSummary(activityId);
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'getTimeAtHr') {
		const activityId = execContext.getNodeParameter('activityId', itemIndex) as string;
		const response = await AktivitTenService.getTimeAtHr(activityId);
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'getPowerVsHr') {
		const activityId = execContext.getNodeParameter('activityId', itemIndex) as string;
		const response = await AktivitTenService.getPowerVsHr(activityId, '');
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'getActivityPowerCurve') {
		const activityId = execContext.getNodeParameter('activityId', itemIndex) as string;
		const response = await AktivitTenService.getActivityPowerCurve(activityId, '');
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'getActivityPaceCurve') {
		const activityId = execContext.getNodeParameter('activityId', itemIndex) as string;
		const response = await AktivitTenService.getActivityPaceCurve(activityId, '');
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'getActivityHrCurve') {
		const activityId = execContext.getNodeParameter('activityId', itemIndex) as string;
		const response = await AktivitTenService.getActivityHrCurve(activityId, '');
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'getPowerHistogram') {
		const activityId = execContext.getNodeParameter('activityId', itemIndex) as string;
		const response = await AktivitTenService.getPowerHistogram(activityId);
		for (const bucket of response) {
			items.push({ json: bucket, pairedItem: { item: itemIndex } });
		}
	} else if (operation === 'getPaceHistogram') {
		const activityId = execContext.getNodeParameter('activityId', itemIndex) as string;
		const response = await AktivitTenService.getPaceHistogram(activityId);
		for (const bucket of response) {
			items.push({ json: bucket, pairedItem: { item: itemIndex } });
		}
	} else if (operation === 'getHrHistogram') {
		const activityId = execContext.getNodeParameter('activityId', itemIndex) as string;
		const response = await AktivitTenService.getHrHistogram(activityId);
		for (const bucket of response) {
			items.push({ json: bucket, pairedItem: { item: itemIndex } });
		}
	} else if (operation === 'getGapHistogram') {
		const activityId = execContext.getNodeParameter('activityId', itemIndex) as string;
		const response = await AktivitTenService.getGapHistogram(activityId);
		for (const bucket of response) {
			items.push({ json: bucket, pairedItem: { item: itemIndex } });
		}
	} else if (operation === 'getHrTrainingLoadModel') {
		const activityId = execContext.getNodeParameter('activityId', itemIndex) as string;
		const response = await AktivitTenService.getHrTrainingLoadModel(activityId);
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'getActivityPowerSpikeModel') {
		const activityId = execContext.getNodeParameter('activityId', itemIndex) as string;
		const response = await AktivitTenService.getActivityPowerSpikeModel(activityId);
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'getIntervalStats') {
		const activityId = execContext.getNodeParameter('activityId', itemIndex) as string;
		const startIndex = execContext.getNodeParameter('startIndex', itemIndex) as number;
		const endIndex = execContext.getNodeParameter('endIndex', itemIndex) as number;
		const response = await AktivitTenService.getIntervalStats(activityId, startIndex, endIndex);
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'findBestEfforts') {
		const activityId = execContext.getNodeParameter('activityId', itemIndex) as string;
		const stream = execContext.getNodeParameter('stream', itemIndex) as string;
		const duration = execContext.getNodeParameter('duration', itemIndex, undefined) as number | undefined;
		const distance = execContext.getNodeParameter('distance', itemIndex, undefined) as number | undefined;
		const response = await AktivitTenService.findBestEfforts(activityId, stream, duration, distance);
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'downloadActivityFile') {
		const activityId = execContext.getNodeParameter('activityId', itemIndex) as string;
		const response = await AktivitTenService.downloadActivityFile(activityId);
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'downloadActivityGpxFile') {
		const activityId = execContext.getNodeParameter('activityId', itemIndex) as string;
		const response = await AktivitTenService.downloadActivityGpxFile(activityId);
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'downloadActivityFitFile') {
		const activityId = execContext.getNodeParameter('activityId', itemIndex) as string;
		const response = await AktivitTenService.downloadActivityFitFile(activityId);
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'downloadActivitiesAsCsv') {
		const athleteId = execContext.getNodeParameter('athleteId', itemIndex, '0') as string;
		const response = await AktivitTenService.downloadActivitiesAsCsv(athleteId);
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'listActivitiesAround') {
		const athleteId = execContext.getNodeParameter('athleteId', itemIndex, '0') as string;
		const activityId = execContext.getNodeParameter('activityId', itemIndex) as string;
		const response = await AktivitTenService.listActivitiesAround(athleteId, activityId);
		for (const activity of response) {
			items.push({ json: activity, pairedItem: { item: itemIndex } });
		}
	} else if (operation === 'listActivityPowerCurves') {
		const athleteId = execContext.getNodeParameter('athleteId', itemIndex, '0') as string;
		const oldest = execContext.getNodeParameter('oldest', itemIndex) as string;
		const newest = execContext.getNodeParameter('newest', itemIndex) as string;
		const response = await AktivitTenService.listActivityPowerCurves(athleteId, '', oldest, newest);
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'listActivityPaceCurves') {
		const athleteId = execContext.getNodeParameter('athleteId', itemIndex, '0') as string;
		const oldest = execContext.getNodeParameter('oldest', itemIndex) as string;
		const newest = execContext.getNodeParameter('newest', itemIndex) as string;
		const response = await AktivitTenService.listActivityPaceCurves(athleteId, '', oldest, newest);
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'listActivityHrCurves') {
		const athleteId = execContext.getNodeParameter('athleteId', itemIndex, '0') as string;
		const oldest = execContext.getNodeParameter('oldest', itemIndex) as string;
		const newest = execContext.getNodeParameter('newest', itemIndex) as string;
		const response = await AktivitTenService.listActivityHrCurves(athleteId, '', oldest, newest);
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'uploadActivity') {
		const athleteId = execContext.getNodeParameter('athleteId', itemIndex, '0') as string;
		const file = await execContext.helpers.getBinaryDataBuffer(itemIndex, 'file');
		const name = execContext.getNodeParameter('activityName', itemIndex, '') as string;
		const description = execContext.getNodeParameter('description', itemIndex, '') as string;
		const deviceName = execContext.getNodeParameter('deviceName', itemIndex, '') as string;
		const externalId = execContext.getNodeParameter('externalId', itemIndex, '') as string;
		const pairedEventId = execContext.getNodeParameter('pairedEventId', itemIndex, undefined) as number | undefined;
		
		const response = await AktivitTenService.uploadActivity(
			athleteId,
			name && name.length > 0 ? name : undefined,
			description && description.length > 0 ? description : undefined,
			deviceName && deviceName.length > 0 ? deviceName : undefined,
			externalId && externalId.length > 0 ? externalId : undefined,
			typeof pairedEventId === 'number' ? pairedEventId : undefined,
			{ file: new Blob([file], { type: 'application/octet-stream' }) }
		);
		items.push({ json: response, pairedItem: { item: itemIndex } });
	}
}

async function handleAthleteResource(
	execContext: IExecuteFunctions,
	operation: string,
	items: INodeExecutionData[],
	itemIndex: number
) {
	const athleteId = execContext.getNodeParameter('athleteId', itemIndex, '0') as string;

	if (operation === 'get') {
		const response = await AthletenService.getAthlete(athleteId);
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'getProfile') {
		const response = await AthletenService.getAthleteProfile(athleteId);
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'update') {
		// Note: UpdateAthlete method needs to be called
		items.push({ json: { message: 'Athlete update not available in current API' }, pairedItem: { item: itemIndex } });
	}
}

async function handleSportsSettingsResource(
	execContext: IExecuteFunctions,
	operation: string,
	items: INodeExecutionData[],
	itemIndex: number
) {
	const athleteId = execContext.getNodeParameter('athleteId', itemIndex, '0') as string;

	if (operation === 'list') {
		const response = await SportService.listSettings(athleteId);
		for (const setting of response) {
			items.push({ json: setting, pairedItem: { item: itemIndex } });
		}
	} else if (operation === 'get') {
		const settingId = execContext.getNodeParameter('settingId', itemIndex) as string;
		const response = await SportService.getSettings1(athleteId, settingId);
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'create') {
		const settingData = execContext.getNodeParameter('settingData', itemIndex) as SportSettings;
		const response = await SportService.createSettings(athleteId, settingData);
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'update') {
		const settingId = execContext.getNodeParameter('settingId', itemIndex) as string;
		const settingData = execContext.getNodeParameter('settingData', itemIndex) as SportSettings;
		const recalcHrZones = execContext.getNodeParameter('recalcHrZones', itemIndex, false) as boolean;
		const response = await SportService.updateSettings(athleteId, settingId, recalcHrZones, settingData);
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'updateMultiple') {
		const settingsData = execContext.getNodeParameter('settingsData', itemIndex) as Record<string, unknown>[];
		const recalcHrZones = execContext.getNodeParameter('recalcHrZones', itemIndex, false) as boolean;
		const response = await SportService.updateSettingsMulti(athleteId, recalcHrZones, settingsData);
		for (const setting of response) {
			items.push({ json: setting, pairedItem: { item: itemIndex } });
		}
	} else if (operation === 'delete') {
		const settingId = execContext.getNodeParameter('settingId', itemIndex) as string;
		const response = await SportService.deleteSettings(athleteId, parseInt(settingId));
		items.push({ json: { success: true, deleted: response }, pairedItem: { item: itemIndex } });
	} else if (operation === 'applyToActivities') {
		const settingId = execContext.getNodeParameter('settingId', itemIndex) as string;
		const response = await SportService.applyToActivities(athleteId, settingId);
		items.push({ json: { success: true, result: response }, pairedItem: { item: itemIndex } });
	} else if (operation === 'listMatchingActivities') {
		const settingId = execContext.getNodeParameter('settingId', itemIndex) as string;
		const response = await SportService.listMatchingActivities(athleteId, settingId);
		for (const activity of response) {
			items.push({ json: activity, pairedItem: { item: itemIndex } });
		}
	} else if (operation === 'listPaceDistances') {
		const response = await SportService.listPaceDistances();
		items.push({ json: response, pairedItem: { item: itemIndex } });
	} else if (operation === 'listPaceDistancesForSport') {
		const settingId = execContext.getNodeParameter('settingId', itemIndex) as string;
		const response = await SportService.listPaceDistancesForSport(athleteId, settingId);
		items.push({ json: response, pairedItem: { item: itemIndex } });
	}
}

async function handleRouteResource(
	execContext: IExecuteFunctions,
	operation: string,
	items: INodeExecutionData[],
	itemIndex: number
) {
	// Route operations can be added here when RoutenService is available
	items.push({ json: { message: 'Route operations not yet implemented' }, pairedItem: { item: itemIndex } });
}

async function handleWeatherResource(
	execContext: IExecuteFunctions,
	operation: string,
	items: INodeExecutionData[],
	itemIndex: number
) {
	// Weather operations can be added here when WetterService is available
	items.push({ json: { message: 'Weather operations not yet implemented' }, pairedItem: { item: itemIndex } });
}