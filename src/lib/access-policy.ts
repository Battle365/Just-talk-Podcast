export type PodcastSurface="public_episode"|"public_clip"|"prep_library"|"studio"|"admin";
export function requiresAuthentication(surface:PodcastSurface):boolean{return !["public_episode","public_clip"].includes(surface);}
export function requiresPayment(_surface:PodcastSurface):boolean{return false;}
