import { describe, expect, it } from "vitest";
import { episodeMustEnd, remainingEpisodeMs } from "../../src/lib/show-policy";
describe("45-minute show policy",()=>{
 it("has time remaining before 45 minutes",()=>expect(remainingEpisodeMs(new Date("2026-01-01T00:00:00Z"),new Date("2026-01-01T00:44:00Z"))).toBe(60000));
 it("requires ending at 45 minutes",()=>expect(episodeMustEnd(new Date("2026-01-01T00:00:00Z"),new Date("2026-01-01T00:45:00Z"))).toBe(true));
});
