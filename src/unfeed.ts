import { AtomFeed } from './atom'
import { JsonFeed } from './json'
import { RssFeed } from './rss'

export class UnFeed {
  private atom: AtomFeed
  private json: JsonFeed
  private rss: RssFeed

  constructor () {
    this.atom = new AtomFeed()
    this.json = new JsonFeed({})
    this.rss = new RssFeed()
  }

  render () {
    return {
      atom: this.atom.render(),
      json: this.json.render(),
      rss: this.rss.render()
    }
  }
}
