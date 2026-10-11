export type AnalyticsSnapshot={provider:string;views:number;watchMinutes:number;capturedAt:string};
export function normalizeAnalytics(input:{provider:string;views?:number;watchMinutes?:number;capturedAt?:string}):AnalyticsSnapshot{return{provider:input.provider,views:Math.max(0,input.views??0),watchMinutes:Math.max(0,input.watchMinutes??0),capturedAt:input.capturedAt??new Date().toISOString()};}
