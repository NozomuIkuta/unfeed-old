import { JsonFeedInfo } from './types'

export class JsonFeed {
  private _version: NonNullable<JsonFeedInfo['version']>
  private _title: NonNullable<JsonFeedInfo['title']>
  private _homePageUrl: NonNullable<JsonFeedInfo['home_page_url']>
  private _feedUrl: NonNullable<JsonFeedInfo['feed_url']>
  private _description: NonNullable<JsonFeedInfo['description']>
  private _userComment: NonNullable<JsonFeedInfo['user_comment']>
  private _nextUrl: NonNullable<JsonFeedInfo['next_url']>
  private _icon: NonNullable<JsonFeedInfo['icon']>
  private _favicon: NonNullable<JsonFeedInfo['favicon']>
  private _authors: NonNullable<JsonFeedInfo['authors']>
  private _language: NonNullable<JsonFeedInfo['language']>
  private _expired: NonNullable<JsonFeedInfo['expired']>
  private _hubs: NonNullable<JsonFeedInfo['hubs']>
  private _items: NonNullable<JsonFeedInfo['items']>

  private static DEFAULT_VERSION = 'https://jsonfeed.org/version/1.1'
  private static DEFAULT_TITLE = 'JSON Feed'

  constructor (options: Partial<Omit<JsonFeedInfo, 'author'>>) {
    this._version = options.version || JsonFeed.DEFAULT_VERSION
    this._title = options.title || JsonFeed.DEFAULT_TITLE
    this._homePageUrl = options.home_page_url || ''
    this._feedUrl = options.feed_url || ''
    this._description = options.description || ''
    this._userComment = options.user_comment || ''
    this._nextUrl = options.next_url || ''
    this._icon = options.icon || ''
    this._favicon = options.favicon || ''
    this._authors = options.authors || []
    this._language = options.language || ''
    this._expired = options.expired || false
    this._hubs = options.hubs || []
    this._items = options.items || []
  }

  get version (): JsonFeed['_version'] {
    return this._version
  }

  set version (value: JsonFeedInfo['version']) {
    this._version = value
  }

  get title (): JsonFeed['_title'] {
    return this._title
  }

  set title (value: JsonFeedInfo['title']) {
    this._title = value || ''
  }

  get homePageUrl (): JsonFeed['_homePageUrl'] {
    return this._homePageUrl
  }

  set homePageUrl (value: JsonFeedInfo['home_page_url']) {
    this._homePageUrl = value || ''
  }

  get feedUrl (): JsonFeed['_feedUrl'] {
    return this._feedUrl
  }

  set feedUrl (value: JsonFeedInfo['feed_url']) {
    this._feedUrl = value || ''
  }

  get description (): JsonFeed['_description'] {
    return this._description
  }

  set description (value: JsonFeedInfo['description']) {
    this._description = value || ''
  }

  get userComment (): JsonFeed['_userComment'] {
    return this._userComment
  }

  set userComment (value: JsonFeedInfo['user_comment']) {
    this._userComment = value || ''
  }

  get nextUrl (): JsonFeed['_nextUrl'] {
    return this._nextUrl
  }

  set nextUrl (value: JsonFeedInfo['next_url']) {
    this._nextUrl = value || ''
  }

  get icon (): JsonFeed['_icon'] {
    return this._icon
  }

  set icon (value: JsonFeedInfo['icon']) {
    this._icon = value || ''
  }

  get favicon (): JsonFeed['_favicon'] {
    return this._favicon
  }

  set favicon (value: JsonFeedInfo['favicon']) {
    this._favicon = value || ''
  }

  get authors (): JsonFeed['_authors'] {
    return this._authors
  }

  set authors (value: JsonFeedInfo['authors']) {
    this._authors = value || []
  }

  get language (): JsonFeed['_language'] {
    return this._language
  }

  set language (value: JsonFeedInfo['language']) {
    this._language = value || ''
  }

  get expired (): JsonFeed['_expired'] {
    return this._expired
  }

  set expired (value: JsonFeed['_expired']) {
    this._expired = value || false
  }

  get hubs (): JsonFeed['_hubs'] {
    return this._hubs
  }

  set hubs (value: JsonFeedInfo['hubs']) {
    this._hubs = value || []
  }

  get items (): JsonFeed['_items'] {
    return this._items
  }

  set items (value: JsonFeedInfo['items']) {
    this._items = value || []
  }

  render (): JsonFeedInfo {
    const feed: JsonFeedInfo = {
      version: this._version,
      title: this._title,
      items: []
    }

    if (this._homePageUrl) {
      feed.home_page_url = this._homePageUrl
    }

    if (this._homePageUrl) {
      feed.home_page_url = this._homePageUrl
    }

    if (this._feedUrl) {
      feed.feed_url = this._feedUrl
    }

    if (this._description) {
      feed.description = this._description
    }

    if (this._userComment) {
      feed.user_comment = this._userComment
    }

    if (this._nextUrl) {
      feed.next_url = this._nextUrl
    }

    if (this._icon) {
      feed.icon = this._icon
    }

    if (this._favicon) {
      feed.favicon = this._favicon
    }

    if (this._authors) {
      feed.authors = this._authors
    }

    if (this._language) {
      feed.language = this._language
    }

    if (this._expired !== undefined) {
      feed.expired = this._expired
    }

    if (this._hubs) {
      feed.hubs = this._hubs
    }

    if (this._items) {
      feed.items = this._items
    }

    return feed
  }
}
