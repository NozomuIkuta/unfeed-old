import { JsonFeedInfo } from './types'

export class JsonFeed {
  private _version: NonNullable<JsonFeedInfo['version']>
  private _title: NonNullable<JsonFeedInfo['title']>
  private _home_page_url: JsonFeedInfo['home_page_url']
  private _feed_url: JsonFeedInfo['feed_url']
  private _description: JsonFeedInfo['description']
  private _user_comment: JsonFeedInfo['user_comment']
  private _next_url: JsonFeedInfo['next_url']
  private _icon: JsonFeedInfo['icon']
  private _favicon: JsonFeedInfo['favicon']
  private _authors: NonNullable<JsonFeedInfo['authors']>
  private _language: JsonFeedInfo['language']
  private _expired: JsonFeedInfo['expired']
  private _hubs: NonNullable<JsonFeedInfo['hubs']>
  private _items: NonNullable<JsonFeedInfo['items']>

  private static DEFAULT_VERSION = 'https://jsonfeed.org/version/1.1'
  private static DEFAULT_TITLE = 'JSON Feed'

  constructor (options: Partial<Omit<JsonFeedInfo, 'author'>>) {
    this._version = options.version || JsonFeed.DEFAULT_VERSION
    this._title = options.title || JsonFeed.DEFAULT_TITLE
    this._home_page_url = options.home_page_url
    this._feed_url = options.feed_url
    this._description = options.description
    this._user_comment = options.user_comment
    this._next_url = options.next_url
    this._icon = options.icon
    this._favicon = options.favicon
    this._authors = options.authors || []
    this._language = options.language
    this._expired = options.expired
    this._hubs = options.hubs || []
    this._items = options.items || []
  }

  get version (): JsonFeedInfo['version'] {
    return this._version
  }

  set version (value: JsonFeedInfo['version']) {
    this._version = value
  }

  get title (): JsonFeed['_title'] {
    return this._title
  }

  set title (value: JsonFeed['_title']) {
    this._title = value
  }

  get homePageUrl (): JsonFeedInfo['home_page_url'] {
    return this._home_page_url
  }

  set homePageUrl (value: JsonFeedInfo['home_page_url']) {
    this._home_page_url = value
  }

  get feedUrl (): JsonFeedInfo['feed_url'] {
    return this._feed_url
  }

  set feedUrl (value: JsonFeedInfo['feed_url']) {
    this._feed_url = value
  }

  get description (): JsonFeedInfo['description'] {
    return this._description
  }

  set description (value: JsonFeedInfo['description']) {
    this._description = value
  }

  get userComment (): JsonFeedInfo['user_comment'] {
    return this._user_comment
  }

  set userComment (value: JsonFeedInfo['user_comment']) {
    this._user_comment = value
  }

  get nextUrl (): JsonFeedInfo['next_url'] {
    return this._next_url
  }

  set nextUrl (value: JsonFeedInfo['next_url']) {
    this._next_url = value
  }

  get icon (): JsonFeedInfo['icon'] {
    return this._icon
  }

  set icon (value: JsonFeedInfo['icon']) {
    this._icon = value
  }

  get favicon (): JsonFeedInfo['favicon'] {
    return this._favicon
  }

  set favicon (value: JsonFeedInfo['favicon']) {
    this._favicon = value
  }

  get authors (): JsonFeedInfo['authors'] {
    return this._authors
  }

  set authors (value: JsonFeedInfo['authors']) {
    this._authors = value || []
  }

  get language (): JsonFeedInfo['language'] {
    return this._language
  }

  set language (value: JsonFeedInfo['language']) {
    this._language = value
  }

  get expired (): JsonFeedInfo['expired'] {
    return this._expired
  }

  set expired (value: JsonFeedInfo['expired']) {
    this._expired = value
  }

  get hubs (): JsonFeedInfo['hubs'] {
    return this._hubs
  }

  set hubs (value: JsonFeedInfo['hubs']) {
    this._hubs = value || []
  }

  get items (): JsonFeedInfo['items'] {
    return this._items
  }

  set items (value: JsonFeedInfo['items']) {
    this._items = value
  }
}
