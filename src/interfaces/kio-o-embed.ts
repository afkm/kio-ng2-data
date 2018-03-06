// DEPRECATED! Specific interfaces for content data moved to specific modules ( kio-ng2-video, kio-ng2-ctn )

export interface KioOEmbedData {
  tag:string ,
  attributes:any   
}

export interface KioOEmbed {
  html:string ,
  data:KioOEmbedData
}
