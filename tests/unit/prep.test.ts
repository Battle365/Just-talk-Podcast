import {describe,expect,it} from "vitest";
import {buildPrepItem,canSavePrepItem,normalizePrepContent} from "../../src/lib/prep";
describe("prep library rules",()=>{
 it("normalizes whitespace",()=>expect(normalizePrepContent("  guest   questions  ")).toBe("guest questions"));
 it("rejects empty content",()=>expect(canSavePrepItem("topic"," ")).toBe(false));
 it("builds a valid private prep item",()=>expect(buildPrepItem("1","topic","  AI and work  ",new Date("2026-10-05T00:00:00Z"))).toEqual({id:"1",kind:"topic",content:"AI and work",createdAt:"2026-10-05T00:00:00.000Z"}));
});
