
export interface Image {
  Created?: number;
  Id?: string;
  ParentId?: string;
  RepoTags?: string[];
  RepoDigests?: string[];
  Size?: number;
  VirtualSize?: number;
  SharedSize?: number;
  Labels?: any;
  Containers?: number;
}
