import { isManaged, isSaaS, getDynatraceEnvironmentBaseUrl } from "./utils";

describe("utils", () => {
	it("should be able to identify is SaaS environment URL", () => {
		expect(isSaaS("https://guu84124.live.dynatrace.com/#dashboard;id=6fb059e5-1b9d-4b5c-82ed-3aabe8d23590;gf=all;gtf=-2h")).toBeTruthy();
		expect(isSaaS("https://wwj91677.dev.dynatracelabs.com/ui/dashboards?gtf=-2h&gf=all")).toBeTruthy();
		expect(isSaaS("https://ebu46343.sprint.dynatracelabs.com/ui/dashboards?gtf=-2h&gf=all")).toBeTruthy();
		expect(isSaaS("https://ebu46343.sprint.dynatracelabs.com")).toBeTruthy();
		expect(isSaaS("https://sprint.dynatracelabs.com")).toBeFalsy();
		expect(isSaaS("https://sprint.dynatracelabs.com/settings")).toBeFalsy();
		expect(isSaaS("https://3407191-8317-403a-84c7-c7e92465884b-1.managed.internal.dynatrace.com:8021/e/f0b938d3-b174-4fe8-872d-c6474961cbe9/ui/services/SERVICE-92806C2DFC035664")).toBeFalsy();
	});

	it("should be able to identify its managed environment URL", () => {
		expect(isManaged("https://3b609467-08d3-416d-a2c7-a72e886380d1-1.managed-dev.internal.dynatracelabs.com:8021/cmc#cm/environments")).toBeFalsy();
		expect(isManaged("https://3b609467-08d3-416d-a2c7-a72e886380d1-1.managed-dev.internal.dynatracelabs.com:8021/e/4b1e1a82-1468-4a7d-b2c0-31e6b45ca159/")).toBeTruthy();
		expect(
			isManaged("https://17847112-a6fe-4f61-81b5-02479b1c48bc-2.managed.internal.dynatrace.com:8021/cmc#cm/environments/envDetails;envId=2ef5cebb-2fe0-40f1-9e57-7a311ca28e19;gf=all"),
		).toBeFalsy();
		expect(
			isManaged(
				"https://17847112-a6fe-4f61-81b5-02479b1c48bc-2.managed.internal.dynatrace.com:8021/e/2ef5cebb-2fe0-40f1-9e57-7a311ca28e19/ui/settings/builtin:internal.indexed-logstorage-settings?gtf=-2h&gf=all",
			),
		).toBeTruthy();
	});

	it("should be able to return dynatrace environment URL", () => {
		expect(
			getDynatraceEnvironmentBaseUrl(
				"https://3b609467-08d3-416d-a2c7-a72e886380d1-1.managed-dev.internal.dynatracelabs.com:8021/e/270959e9-146a-4948-9cba-8d50e15dcb19/ui/settings/builtin:anomaly-detection.rum-mobile?gtf=-2h&gf=all",
			),
		).toBe("https://3b609467-08d3-416d-a2c7-a72e886380d1-1.managed-dev.internal.dynatracelabs.com:8021/e/270959e9-146a-4948-9cba-8d50e15dcb19");
		expect(getDynatraceEnvironmentBaseUrl("https://guu84124.live.dynatrace.com/#dashboard;id=6fb059e5-1b9d-4b5c-82ed-3aabe8d23590;gf=all;gtf=-2h")).toBe("https://guu84124.live.dynatrace.com");
		expect(getDynatraceEnvironmentBaseUrl("https://3b609467-08d3-416d-a2c7-a72e886380d1-1.managed-dev.internal.dynatracelabs.com:8021/cmc/#")).toBe(null);
	});
});
