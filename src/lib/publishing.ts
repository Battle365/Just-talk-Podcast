export type PublishProvider="youtube"|"spotify";export type PublishKind="live"|"finished_episode";
export function supportsPublish(provider:PublishProvider,kind:PublishKind){if(provider==="youtube")return true;return kind==="finished_episode";}
