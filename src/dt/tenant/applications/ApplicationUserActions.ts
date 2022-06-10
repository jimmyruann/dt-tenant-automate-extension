export interface ApplicationUserActions {
	booleans: Booleans;
	settings: ApplicationUserActionsSettings;
	metaEntity: MetaEntity;
	userActions: UserActions;
	userActions2: UserActions;
	dataPointLists: DataPointLists;
	timeframes: string;
	problemSectionData: ProblemSectionData;
	eventDataAggregations: EventDataAggregations;
	events: Events;
	metricLimit: string;
	baseEntity: BaseEntity;
}

interface BaseEntity {
	settings: BaseEntitySettings;
}

interface BaseEntitySettings {
	mxIdxFlSmplRt_bperformance: string;
	mxIdxFlSmplRt_buseractn: string;
	mxIdxFlSmplRt_buseractkey: string;
	parts: string;
}

interface Booleans {
	uaProp: boolean;
	isExtMetricsEnabled: boolean;
	bPerfCntTotalLoad: boolean;
	bPerfCntTotalXhr: boolean;
	bPerfCntTotalRouteChg: boolean;
	isEnabledVc: boolean;
	isEnabledSi: boolean;
	showVcSiWrn: boolean;
}

interface DataPointLists {
	bPerfLoad: BPerfCntLoad;
	bPerfCntTotalLoad: BPerfCntLoad;
	bPerfCntLoad: BPerfCntLoad;
	bPerfXhr: BPerfCntLoad;
	bPerfCntTotalXhr: BPerfCntLoad;
	bPerfCntXhr: BPerfCntLoad;
}

interface BPerfCntLoad {
	dataPoints: LastValue[];
	lastValue: LastValue;
}

interface LastValue {
	timestamp: number;
	value: number;
}

interface EventDataAggregations {
	timeSlots: TimeSlots;
	counts: Counts;
	monitoredEntityIds: string[];
	timeframe: Timeframe;
	eventMetadataFilterItems: any[];
}

interface Counts {
	APPLICATION_ERROR_RATE_INCREASED: number;
	ERROR_EVENT: number;
	CUSTOM_INFO: number;
	APPLICATION_SLOWDOWN: number;
}

interface TimeSlots {
	APPLICATION_ERROR_RATE_INCREASED: BPerfCntLoad;
	CUSTOM_INFO: BPerfCntLoad;
	ERROR_EVENT: BPerfCntLoad;
	APPLICATION_SLOWDOWN: BPerfCntLoad;
}

interface Timeframe {
	type: string;
	startTime: number;
	endTime: number;
	duration: number;
	center: number;
}

interface Events {
	eventsNat: any[];
	events: Event[];
}

interface Event {
	id: string;
	startTime: number;
	endTime: number;
	duration: number;
	eventType: EventType;
	entityDisplayName: CustomizedName;
	metadata: EventMetadata;
	properties: string;
	entityId: string;
	abnormal: boolean;
	underMaintenance: boolean;
	natural: boolean;
	recurring: boolean;
	suppressProblem: boolean;
}

enum CustomizedName {
	EasyTravelBooking = "easyTravel booking",
	WWWEasytravelCOM = "www.easytravel.com",
}

enum EventType {
	ApplicationErrorRateIncreased = "APPLICATION_ERROR_RATE_INCREASED",
	ApplicationSlowdown = "APPLICATION_SLOWDOWN",
	ErrorEvent = "ERROR_EVENT",
	HTTPCheckLocalOutage = "HTTP_CHECK_LOCAL_OUTAGE",
	SyntheticGlobalOutage = "SYNTHETIC_GLOBAL_OUTAGE",
}

interface EventMetadata {
	CONSIDER_FOR_ROOT_CAUSE_ANALYSIS: string;
	CONTEXT: Context;
	BL_CURRENT_RESPONSE_TIME_MEDIAN?: string;
	PROBLEM_GENERATED: string;
	SEVERITY: string;
	IS_ENTITY_DEPENDENCY_COUNT_CALCULATION_ENABLED: string;
	BL_CURRENT_LOAD: string;
	BL_REFERENCE_RESPONSE_TIME_90TH_PERCENTILE?: string;
	EVENT_ANALYSIS_START_TIMESTAMP: string;
	BL_IS_MEDIAN_ABNORMAL?: string;
	EVENT_EXTERNAL_STATUS: EventExternalStatus;
	DEBUG_SOURCE: string;
	CLUSTER_VERSION: string;
	UEM_DIMENSION_OPERATING_SYSTEM: string;
	UEM_DIMENSION_APPLICATION_METHOD: string;
	BL_HAS_USER_DEFINED_REFERENCE: string;
	EVENT_ANALYSIS_END_TIMESTAMP: string;
	CORRELATION_ID: string;
	EVENT_CONTEXT: Context;
	BL_IS_90TH_PERCENTILE_ABNORMAL?: string;
	BL_DURATION_METRIC_TYPE?: BlDurationMetricType;
	ANALYSIS_TRIGGER_TIME: string;
	BL_CURRENT_RESPONSE_TIME_90TH_PRECENTILE?: string;
	EVENT_GROUP_LABEL: EventGroupLabel;
	BL_CUBE_REVISION: string;
	INITIAL_TIMEOUT_DURATION_IN_MILLIS: string;
	UEM_DIMENSION_GEOLOCATION: string;
	ENTITY_TAGS: string;
	UEM_DIMENSION_BROWSER: string;
	BL_TOTAL_LOAD: string;
	REPORT_FIRST_SEEN: string;
	BL_REFERENCE_RESPONSE_TIME_MEDIAN?: string;
	BL_REFERENCE_ERROR_RATE?: string;
	BL_CURRENT_ERROR_RATE?: string;
}

enum BlDurationMetricType {
	ApplicationResponseTime = "APPLICATION_RESPONSE_TIME",
}

enum Context {
	Baselining = "BASELINING",
	Synthetic = "SYNTHETIC",
}

enum EventExternalStatus {
	Closed = "CLOSED",
}

enum EventGroupLabel {
	ApplicationSlowdown = "Application slowdown",
	BrowserMonitorGlobalOutage = "Browser monitor global outage",
	JavaScriptErrorRateIncrease = "JavaScript error rate increase",
}

enum ApplicationMethod03Aba30624Be9B81 {
	KeypressOnTripDestinationOnPage = 'keypress on "Trip Destination" on page /',
}

enum ApplicationMethodAa269E48D8F0746A {
	ClickOnSearchOnPage = 'click on "Search" on page /',
}

enum ApplicationMethodGroup9223692882571_F55 {
	Load = "Load",
	Xhr = "Xhr",
}

enum Browser44C8Efe87C847Ca6 {
	DesktopBrowser = "Desktop Browser",
}

enum BrowserFf8Eae6885De87B3 {
	Chrome = "Chrome",
}

enum OSA8577Dd6C66Da5E1 {
	Windows10 = "Windows 10",
}

enum OSC2Ce1Ed9011Fa680 {
	Windows = "Windows",
}

enum SeverityEquivalence {
	The190001High = "190001☰☰☰high",
	The190002High = "190002☰☰☰high",
	The190002High190001High = "190002☰☰☰high◘◘◘190001☰☰☰high",
	The190003High = "190003☰☰☰high",
}

interface MetaEntity {
	id: string;
	internalName: CustomizedName;
	customizedName: CustomizedName;
	displayName: CustomizedName;
	type: Type;
	serviceType: string;
	applicationType: string;
	lastSeenMillisAgo: number;
	manualInjectionEnabled: boolean;
	newApplication: boolean;
	applicationDeleted: boolean;
	subscribed: boolean;
	firstSeen: number;
	uemEnabled: boolean;
	health: any[];
}

enum Type {
	Application = "APPLICATION",
}

interface ProblemSectionData {
	problems: Problem[];
	totalProblemCount: number;
	yellowStateData: YellowStateData;
}

interface Problem {
	displayName: string;
	id: string;
	startTime: number;
	endTime: number;
	duration: number;
	closeTriggered: boolean;
	impactType: Type;
	topAffectedEntityDisplayName: CustomizedName;
	affectedEntities: number;
	eventIds: string[];
	severityLevel: SeverityLevel;
	eventTypes: EventType[];
	firstEvent: FirstEvent;
	underMaintenance: boolean;
}

interface FirstEvent {
	id: string;
	startTime: number;
	endTime: number;
	duration: number;
	eventType: EventType;
	entityDisplayName: CustomizedName;
	metadata: FirstEventMetadata;
	properties: string;
	entityId: string;
	abnormal: boolean;
	underMaintenance: boolean;
	natural: boolean;
	recurring: boolean;
	suppressProblem: boolean;
}

interface FirstEventMetadata {
	CONSIDER_FOR_ROOT_CAUSE_ANALYSIS: string;
	CONTEXT: Context;
	BL_CURRENT_RESPONSE_TIME_MEDIAN?: string;
	PROBLEM_GENERATED: string;
	SEVERITY?: string;
	IS_ENTITY_DEPENDENCY_COUNT_CALCULATION_ENABLED: string;
	BL_CURRENT_LOAD?: string;
	BL_REFERENCE_RESPONSE_TIME_90TH_PERCENTILE?: string;
	EVENT_ANALYSIS_START_TIMESTAMP?: string;
	BL_IS_MEDIAN_ABNORMAL?: string;
	EVENT_EXTERNAL_STATUS: EventExternalStatus;
	DEBUG_SOURCE: string;
	CLUSTER_VERSION: string;
	UEM_DIMENSION_OPERATING_SYSTEM?: string;
	UEM_DIMENSION_APPLICATION_METHOD?: string;
	BL_HAS_USER_DEFINED_REFERENCE?: string;
	EVENT_ANALYSIS_END_TIMESTAMP?: string;
	CORRELATION_ID: string;
	EVENT_CONTEXT: Context;
	BL_IS_90TH_PERCENTILE_ABNORMAL?: string;
	BL_DURATION_METRIC_TYPE?: BlDurationMetricType;
	ANALYSIS_TRIGGER_TIME: string;
	BL_CURRENT_RESPONSE_TIME_90TH_PRECENTILE?: string;
	EVENT_GROUP_LABEL: EventGroupLabel;
	BL_CUBE_REVISION?: string;
	INITIAL_TIMEOUT_DURATION_IN_MILLIS: string;
	UEM_DIMENSION_GEOLOCATION?: string;
	ENTITY_TAGS: string;
	UEM_DIMENSION_BROWSER?: string;
	BL_TOTAL_LOAD?: string;
	REPORT_FIRST_SEEN: string;
	BL_REFERENCE_RESPONSE_TIME_MEDIAN?: string;
	BL_REFERENCE_ERROR_RATE?: string;
	BL_CURRENT_ERROR_RATE?: string;
	SYNTHETIC_AFFECTED_LOCATIONS?: string;
	SYNTHETIC_LAST_SUCCESSFUL_VISIT_ID_PER_GEOLOCATION?: string;
	SYNTHETIC_AFFECTED_GEOLOCATIONS?: string;
	SYNTHETIC_LAST_CV_CONFIG_UPDATE?: string;
	SYNTHETIC_FIRST_FAILED_EXECUTION?: string;
	SYNTHETIC_CONFIGURED_LOCATIONS?: string;
	SYNTHETIC_VISIT_ID_TIMESTAMPS?: string;
	SYNTHETIC_AFFECTED_BROWSER_EVENTS?: string;
	SYNTHETIC_ERROR_CODES?: string;
	SYNTHETIC_AFFECTED_TEST_STEPS?: string;
	SYNTHETIC_LAST_MONITOR_CONFIG_UPDATE?: string;
	IS_FREQUENT_ISSUE_DETECTION_DISABLED?: string;
	SYNTHETIC_CONNECTED_APPLICATIONS?: string;
	SYNTHETIC_AUTOMATICALLY_CONNECTED_APPS?: string;
	EFFECTIVE_ENTITY_ID?: string;
}

enum SeverityLevel {
	Availability = "AVAILABILITY",
	Errors = "ERRORS",
	Performance = "PERFORMANCE",
}

interface YellowStateData {
	yellowStateData: GenericYellowStateDataClass;
	genericYellowStateData: GenericYellowStateDataClass;
}

interface GenericYellowStateDataClass {}

interface ApplicationUserActionsSettings {
	appName: CustomizedName;
	metricsTopXLimit: string;
	bPerfLoad: string;
	bPerfXhr: string;
	bPerfRouteChg: string;
	string: string;
}
interface UserActions {
	result?: Result;
}

interface Result {
	realtimeUserActions: RealtimeUserAction[];
	subscribed: boolean;
}

interface RealtimeUserAction {
	id: string;
	actionName: string;
	actionType: ApplicationMethodGroup9223692882571_F55;
	domain: string;
	kpm: string;
	kpmValue?: number;
	timeConsumed?: number;
	apdex?: Apdex;
	averageThroughput?: number;
	averageErrorRate?: number;
	subscribed: boolean;
	healthStatus: HealthStatus;
	rare: boolean;
	actionCount: number;
}

enum Apdex {
	Excellent = "EXCELLENT",
	Fair = "FAIR",
	Good = "GOOD",
}

enum HealthStatus {
	Healthy = "Healthy",
}
