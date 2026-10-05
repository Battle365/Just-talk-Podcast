export type PublicEpisode={id:string;title:string;description:string;publishedAt:string;durationMinutes:number;videoUrl?:string;audioUrl?:string};
export function isValidPublicEpisode(e:PublicEpisode){return e.title.trim().length>0&&e.durationMinutes>0&&e.durationMinutes<=45&&Boolean(e.videoUrl||e.audioUrl);}
