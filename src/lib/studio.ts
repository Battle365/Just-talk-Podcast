export type StudioRole="host"|"cohost"|"guest";
export type Participant={id:string;displayName:string;role:StudioRole;connected:boolean};
export function introductionText(p:Participant){return p.role==="guest"?`Guest — ${p.displayName}`:`${p.role==="host"?"Host":"Co-host"} — ${p.displayName}`;}
export function activeParticipants(items:Participant[]){return items.filter(x=>x.connected);}
