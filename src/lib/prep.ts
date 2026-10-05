export type PrepKind = "topic" | "note" | "ai_prompt" | "question";
export type PrepItem = { id:string; kind:PrepKind; content:string; createdAt:string };
export function normalizePrepContent(value:string):string { return value.trim().replace(/\s+/g," "); }
export function canSavePrepItem(kind:PrepKind, value:string):boolean { return ["topic","note","ai_prompt","question"].includes(kind) && normalizePrepContent(value).length >= 2; }
export function buildPrepItem(id:string, kind:PrepKind, value:string, createdAt=new Date()):PrepItem {
 const content=normalizePrepContent(value);
 if(!canSavePrepItem(kind,content)) throw new Error("Prep item content is required");
 return {id,kind,content,createdAt:createdAt.toISOString()};
}
