export type GuestInvite={episodeId:string;displayName:string;expiresAt:Date};
export function canUseGuestInvite(invite:GuestInvite,now=new Date()){return invite.displayName.trim().length>0&&invite.expiresAt.getTime()>now.getTime();}
export function guestRoomLabel(name:string){const clean=name.trim();return clean?`Guest room — ${clean}`:"Guest room";}
