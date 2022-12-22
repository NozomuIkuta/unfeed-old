# packageName

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]
[![Codecov][codecov-src]][codecov-href]

> Package description

## Compatibility Table (WIP)

⚠️: under investigation and/or consideration

### Top-level Properties

|Unfeed|JSON Feed|Atom|RSS|
|:---|:---:|:---:|:---:|
|`title`|`title`|`title`|`title`|
|`subtitle`|🚫|`subtitle`|🚫|
|`id`|🚫|`id`|🚫|
|⚠️|`home_page_url`|⚠️|`link`|
|⚠️|`feed_url`|⚠️|⚠️|
|⚠️|`description`|⚠️|`description`|
|⚠️|`user_comment`|⚠️|⚠️|
|⚠️|`next_url`|⚠️|⚠️|
|⚠️|`icon`|⚠️|⚠️|
|⚠️|`favicon`|⚠️|⚠️|
|⚠️|`authors`|⚠️|⚠️|
|⚠️|🚫|🚫|`managingEditor`|
|⚠️|🚫|🚫|`webMaster`|
|⚠️|`language`|⚠️|`language`|
|⚠️|`expired`|⚠️|⚠️|
|⚠️|`hubs`|⚠️|⚠️|


### Item-level Properties

|Unfeed|JSON Feed|Atom|RSS|
|:---|:---:|:---:|:---:|
|`items`|`items` (array of `item`)|`entries` (array of `entry`)|`entries` (array of `entry`)|
|`item.id`|`item.id`|`entry.id`|`entry.guid`|
|`item.url`|`item.url`|`entry.link`|`entry.link`|
|`item.externalUrl`|`item.external_url`|🚫|🚫|
|`item.title`|`item.title`|`entry.title`|`entry.title`|
|⚠️ `item.contentHtml`|`item.content_html`|`entry.content`|🚫|
|⚠️ `item.contentText`|`item.content_text`|`entry.content`|🚫|
|`item.summary`|`item.summary`|`entry.summary`|`entry.description`|
|`item.image`|`item.summary`|🚫|🚫|
|`item.bannerImage`|`item.banner_image`|🚫|🚫|
|`item.datePublished`|`item.date_published`|`entry.published`|`entry.pubDate`|
|`item.dateModified`|`item.date_modified`|`entry.updated`|🚫|
|`item.authors`|`item.authors`|`entry.author` (first element)|`entry.author` (first element)|
|`item.tags`|`item.tags`|🚫|🚫|
|`item.language`|`item.language`|🚫|🚫|

## Usage

Install package:

```sh
# npm
npm install packageName

# yarn
yarn add packageName

# pnpm
pnpm install packageName
```

Import:

```js
// ESM
import { } from 'packageName'

// CommonJS
const { } = require('packageName')
```

## 💻 Development

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable` (use `npm i -g corepack` for Node.js < 16.10)
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

## License

Made with 💛

Published under [MIT License](./LICENSE).

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/packageName?style=flat-square
[npm-version-href]: https://npmjs.com/package/packageName

[npm-downloads-src]: https://img.shields.io/npm/dm/packageName?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/packageName

[github-actions-src]: https://img.shields.io/github/workflow/status/unjs/packageName/ci/main?style=flat-square
[github-actions-href]: https://github.com/unjs/packageName/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/gh/unjs/packageName/main?style=flat-square
[codecov-href]: https://codecov.io/gh/unjs/packageName
