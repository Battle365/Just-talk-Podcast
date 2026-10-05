export type ProductionStage="raw_saved"|"editing"|"ready"|"published";
export type ProductionPlan={preserveRaw:boolean;introAsset:"placeholder"|"licensed";fadeToBlack:boolean;maxMinutes:45};
export const MVP_PRODUCTION_PLAN:ProductionPlan={preserveRaw:true,introAsset:"placeholder",fadeToBlack:true,maxMinutes:45};
export function canPublish(stage:ProductionStage){return stage==="ready"||stage==="published";}
