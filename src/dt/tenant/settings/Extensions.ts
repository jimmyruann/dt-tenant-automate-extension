export const getApiUrl = () => {
	return "/rest/configuration/monitoringextensions";
};

export interface Extensions {
	list: ExtensionList[];
}

export interface ExtensionList {
	extensionId: string;
	extensionName: string;
	extensionType: string;
	extensionVersion: string;
	extensionProductiveMinVersion?: string;
	extensionExperimentalMinVersion?: string;
	processTypes: string[];
	initializationState?: string;
	extensionProperties: ExtensionProperties;
	active: boolean;
	infraModeActive: boolean;
	experimentalActive: boolean;
	technologyDetected: boolean;
	technologies: string[];
	useGlobal: boolean;
	showConfigureTeaser: boolean;
	restId?: string;
	enableInfraModeSwitch: boolean;
	consumesDDUs: boolean;
	beta: boolean;
}

export interface ExtensionProperties {
	monitoring_mode?: CitrixagentRun;
	citrixagent_run?: CitrixagentRun;
	openkit_beacon_url?: OpenkitBeaconURL;
	openkit_application_id?: ConnectionPassword;
	openkit_proxy_address?: APITokenClass;
	openkit_proxy_username?: ConnectionPassword;
	openkit_proxy_password?: ConnectionPassword;
	openkit_verify_certificates?: ConnectionPassword;
	log_level?: LogLevel;
	prometheus_endpoint?: APITokenClass;
	auth_user?: AuthUser;
	auth_password?: AuthPassword;
	port?: AuthUser;
	url?: URL;
	socket_mode?: ConnectionPassword;
	username?: VirtualServers;
	password?: APITokenClass;
	host_port?: VirtualServers;
	server_connection?: VirtualServers;
	queue_manager?: VirtualServers;
	channel?: VirtualServers;
	queues?: AuthUser;
	exclude_system?: AverageLatchWaitTimeMilliSecond;
	reset_q_stats?: AverageLatchWaitTimeMilliSecond;
	listener?: VirtualServers;
	dlq_alert?: AverageLatchWaitTimeMilliSecond;
	retry_channel_alert?: AverageLatchWaitTimeMilliSecond;
	model_queue?: VirtualServers;
	reply_queue_prefix?: VirtualServers;
	use_ssl?: VirtualServers;
	get_qsg?: VirtualServers;
	ssl_keystore?: VirtualServers;
	ssl_keystore_password?: APITokenClass;
	ssl_cipher?: SSLCipher;
	get_queue_topology?: AverageLatchWaitTimeMilliSecond;
	tenant?: VirtualServers;
	api_token?: APITokenClass;
	http_proxy_host?: VirtualServers;
	http_proxy_user?: VirtualServers;
	http_proxy_password?: APITokenClass;
	group?: VirtualServers;
	java_path?: VirtualServers;
	debug?: AverageLatchWaitTimeMilliSecond;
	auth_db?: APITokenClass;
	connection_user?: Connection;
	connection_password?: ConnectionPassword;
	connection_port?: Connection;
	connection_host?: AverageLatchWaitTimeMilliSecond;
	host_name?: HostName;
	certificate?: AverageLatchWaitTimeMilliSecond;
	certificatePath?: VirtualServers;
	VirtualServers?: VirtualServers;
	csVirtualServers?: VirtualServers;
	services?: VirtualServers;
	servicegroups?: VirtualServers;
	interfaces?: VirtualServers;
	ntp_server?: ConnectionPassword;
	ntp_port?: AverageLatchWaitTimeMilliSecond;
	status_uri?: StatusURI;
	database?: ConnectionPassword;
	cfg_file_location?: APITokenClass;
	cfg_port?: APITokenClass;
	usems?: VirtualServers;
	server?: VirtualServers;
	instance?: VirtualServers;
	mssysname?: VirtualServers;
	mshost?: VirtualServers;
	msport?: VirtualServers;
	msgroup?: VirtualServers;
	clientno?: VirtualServers;
	pollAll?: AverageLatchWaitTimeMilliSecond;
	useHostName?: VirtualServers;
	destinationFile?: VirtualServers;
	workfolder?: VirtualServers;
	tasks?: VirtualServers;
	metrics?: AverageLatchWaitTimeMilliSecond;
	rum?: AverageLatchWaitTimeMilliSecond;
	rfc?: CustomDeviceGroupIdentifierSource;
	apiToken?: APITokenClass;
	environmentID?: VirtualServers;
	applicationID?: VirtualServers;
	timeoutMin?: VirtualServers;
	capUser?: VirtualServers;
	useTerminalForIp?: VirtualServers;
	threshold?: VirtualServers;
	pollLess?: VirtualServers;
	customdevicename?: VirtualServers;
	customgroupname?: VirtualServers;
	host?: VirtualServers;
	database_host?: AverageLatchWaitTimeMilliSecond;
	database_port?: AverageLatchWaitTimeMilliSecond;
	database_name?: AverageLatchWaitTimeMilliSecond;
	database_user?: AverageLatchWaitTimeMilliSecond;
	database_password?: ConnectionPassword;
	custom_device_identifier_source?: CustomDeviceGroupIdentifierSource;
	custom_device_identifier?: AverageLatchWaitTimeMilliSecond;
	custom_device_group_identifier_source?: CustomDeviceGroupIdentifierSource;
	custom_device_group_identifier?: AverageLatchWaitTimeMilliSecond;
	single_database?: AverageLatchWaitTimeMilliSecond;
	AverageLatchWaitTimeMilliSecond?: AverageLatchWaitTimeMilliSecond;
	LatchWaitsPerSecond?: AverageLatchWaitTimeMilliSecond;
	LoginsPerSecond?: AverageLatchWaitTimeMilliSecond;
	ProcessesBlockedCount?: AverageLatchWaitTimeMilliSecond;
	UserConnectionsCount?: AverageLatchWaitTimeMilliSecond;
	LockWaitTimeMilliSecond?: AverageLatchWaitTimeMilliSecond;
	LockTimeoutsPerSecond?: AverageLatchWaitTimeMilliSecond;
	LockWaitsPerSecond?: AverageLatchWaitTimeMilliSecond;
	DeadlocksPerSecond?: AverageLatchWaitTimeMilliSecond;
	BatchRequestsPerSecond?: AverageLatchWaitTimeMilliSecond;
	SqlCompilationsPerSecond?: AverageLatchWaitTimeMilliSecond;
	SqlRecompilationsPerSecond?: AverageLatchWaitTimeMilliSecond;
	TargetServerMemoryKiloByte?: AverageLatchWaitTimeMilliSecond;
	TotalServerMemoryKiloByte?: AverageLatchWaitTimeMilliSecond;
	ConnectionMemoryKiloByte?: AverageLatchWaitTimeMilliSecond;
	MemoryGrantsOutstandingCount?: AverageLatchWaitTimeMilliSecond;
	MemoryGrantsPendingCount?: AverageLatchWaitTimeMilliSecond;
	LogFilesSizeKiloByte?: AverageLatchWaitTimeMilliSecond;
	LogFilesUsedSizeKiloByte?: AverageLatchWaitTimeMilliSecond;
	LogFlushWaitsPerSecond?: AverageLatchWaitTimeMilliSecond;
	LogGrowthsCount?: AverageLatchWaitTimeMilliSecond;
	LogShrinksCount?: AverageLatchWaitTimeMilliSecond;
	LogTruncationsCount?: AverageLatchWaitTimeMilliSecond;
	LogUsedPercent?: AverageLatchWaitTimeMilliSecond;
	TransactionsPerSecond?: AverageLatchWaitTimeMilliSecond;
	PageReadsPerSecond?: AverageLatchWaitTimeMilliSecond;
	PageWritesPerSecond?: AverageLatchWaitTimeMilliSecond;
	PageLifeExpectancySecond?: AverageLatchWaitTimeMilliSecond;
	FreeListStallsPerSecond?: AverageLatchWaitTimeMilliSecond;
	CheckpointPagesPerSecond?: AverageLatchWaitTimeMilliSecond;
	BufferCacheHitPercent?: AverageLatchWaitTimeMilliSecond;
	BytesSentToReplicaPerSecond?: AverageLatchWaitTimeMilliSecond;
}

export interface AverageLatchWaitTimeMilliSecond {
	id: string;
	name: string;
	type: string;
	defaultValue: string;
	order: number;
}

export interface VirtualServers {
	id: string;
	name: string;
	type: string;
	defaultValue: string;
	order: number;
	hint: string;
}

export interface APITokenClass {
	id: string;
	name: string;
	type: string;
	defaultValue: string;
	value: string;
	order: number;
	hint: string;
}

export interface AuthPassword {
	id: string;
	name: string;
	type: string;
	defaultValue: string;
	value: string;
	order: number;
	hint?: string;
}

export interface AuthUser {
	id: string;
	name: string;
	type: string;
	defaultValue: string;
	value?: string;
	order: number;
	hint?: string;
}

export interface CitrixagentRun {
	id: string;
	name: string;
	type: string;
	defaultValue: string;
	value: string;
	dropdownValues: string[];
	order: number;
	hint: string;
}

export interface ConnectionPassword {
	id: string;
	name: string;
	type: string;
	defaultValue: string;
	value: string;
	order: number;
}

export interface Connection {
	id: string;
	name: string;
	type: string;
	defaultValue: string;
	value?: string;
	order: number;
}

export interface CustomDeviceGroupIdentifierSource {
	id: string;
	name: string;
	type: string;
	defaultValue: string;
	dropdownValues: string[];
	order: number;
}

export interface HostName {
	id: string;
	name: string;
	type: string;
	defaultValue: string;
	order: number;
	hint: string;
}

export interface LogLevel {
	id: string;
	name: string;
	type: string;
	defaultValue: string;
	value: string;
	dropdownValues: string[];
	order: number;
}

export interface OpenkitBeaconURL {
	id: string;
	name: string;
	type: string;
	defaultValue: string;
	value: string;
	order: number;
}

export interface SSLCipher {
	id: string;
	name: string;
	type: string;
	defaultValue: string;
	dropdownValues: string[];
	order: number;
	hint: string;
}

export interface StatusURI {
	id: string;
	name: string;
	type: string;
	defaultValue: string;
	value: string;
	order: number;
	hint: string;
}

export interface URL {
	id: string;
	name: string;
	type: string;
	defaultValue: string;
	value?: string;
	order: number;
	hint: string;
}
