declare type Sort = 'desc' | 'asc'

declare interface SelectSqlOption {
  select: string[] | string;
  from: string;
  where?: string[];
  order?: { by: string; sort: Sort };
  limit?: { page: number | string; count: number | string };
  slot?: string[];
}

declare interface RomInfo {
  id: string
  title: string
  cover: string
  image: string
  url: string
  language: string
  source: string
  comment: string
  size: string
  type: string
  category: string
  publisher: string
  location: string
}