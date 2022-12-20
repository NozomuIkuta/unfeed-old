export interface JsonFeedInfo {
  version: string
  title: string
  home_page_url?: string
  feed_url?: string
  description?: string
  user_comment?: string
  next_url?: string
  icon?: string
  favicon?: string
  /** @deprecated Use `authors` instead */
  author?: JsonFeedAuthor
  authors?: JsonFeedAuthor[]
  language?: string
  expired?: boolean
  hubs?: JsonFeedHub[]
  items: JsonFeedItem[]
}

export type JsonFeedInfoKeys = keyof JsonFeedInfo

export interface JsonFeedAuthor {
  name?: string
  url?: string
  avatar?: string
}

export interface JsonFeedHub {
  type: string
  url: string
}

export interface JsonFeedItem {
  id: string
  url?: string
  external_url?: string
  title?: string
  content_html?: string
  content_text?: string
  summary?: string
  image?: string
  banner_image?: string
  date_published?: string
  date_modified?: string
  /** @deprecated Use `authors` instead */
  author?: JsonFeedAuthor
  authors?: JsonFeedAuthor[]
  tags?: string[]
  language?: string
  attachments?: JsonFeedAttachment[]
}

export interface JsonFeedAttachment {
  url: string
  mime_type: string
  title?: string
  size_in_bytes?: number
  duration_in_seconds?: number
}
