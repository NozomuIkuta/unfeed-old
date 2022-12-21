export interface RssFeedRoot {
  attrs: {
    'xmlns:blogChannel': 'http://backend.userland.com/blogChannelModule'
    version: '2.0'
  }
  channel: RssChannelElement
}

export interface RssChannelElement {
  description: string
  link: string
  title: string
  category?: string
  // TODO: investigate type definition
  cloud?: any
  copyright?: string
  docs?: string
  generator?: string
  image?: RssImageElement
  items?: RssItemElement[]
  language?: string
  lastBuildDate?: string
  managingEditor?: string
  pubDate?: string
  // TODO: investigate type definition
  rating?: any
  textInput?: RssTextInputElement
  skipDays?: boolean[] /* of length 7 (0~6) */
  skipHours?: boolean[] /* of length 23 (0~23) */
  ttl?: number
  webMaster?: string
}

export interface RssImageElement {
  link: string
  title: string
  url: string
  description?: string
  height?: string
  width?: string
}

export interface RssItemElement {
  author?: string
  category?: string
  comments?: string
  description?: string
  enclosure?: RssEnclosureElement
  link?: string
  title?: string
  guid?: string
  pubDate?: string
  source?: RssSourceElement
}

export interface RssEnclosureElement {
  attrs: {
    url: string
    length: number
    type: string
  }
  text: never
}

export interface RssSourceElement {
  attrs: {
    url: string
  }
  text: string
}

export interface RssTextInputElement {
  description: string
  name: string
  link: string
  title: string
}
