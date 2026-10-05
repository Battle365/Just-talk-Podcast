export const SUPABASE_FREE_TIER_GUARDRAILS={databaseBytes:500*1024*1024,storageBytes:1*1024*1024*1024,egressBytes:5*1024*1024*1024,monthlyActiveUsers:50000,edgeFunctionInvocations:500000,realtimeMessages:2000000,realtimePeakConnections:200}as const;
export const RAW_VIDEO_STORAGE_POLICY="external-adapter-required" as const;
export function shouldStoreLargeRawVideoInSupabase(){return false;}
