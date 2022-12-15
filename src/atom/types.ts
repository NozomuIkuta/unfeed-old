// Ref. https://www.rfc-editor.org/rfc/rfc4287
export interface AtomConstructorOptions {
  metadata: Partial<AtomMetadata>
  entries: AtomEntryElements[]
}

export interface AtomMetadata {
  // atom:feed elements MUST contain one or more atom:author elements, unless all of the atom:feed element's child atom:entry elements contain at least one atom:author element.
  author: AtomAuthorElement
  // atom:feed elements MAY contain any number of atom:category elements.
  categories?: AtomCategoryElement[]
  // atom:feed elements MAY contain any number of atom:contributor elements.
  contributors: AtomContributorElement[]
  // atom:feed elements MUST NOT contain more than one atom:generator element.
  generator: AtomeGeneratorElement
  // atom:feed elements MUST NOT contain more than one atom:icon element.
  icon: AtomIconElement
  // atom:feed elements MUST contain exactly one atom:id element.
  id: AtomIdElement
  // atom:feed elements SHOULD contain one atom:link element with a rel attribute value of "self".  This is the preferred URI for retrieving Atom Feed Documents representing this Atom feed.
  // atom:feed elements MUST NOT contain more than one atom:link element with a rel attribute value of "alternate" that has the same combination of type and hreflang attribute values.
  // atom:feed elements MAY contain additional atom:link elements beyond those described above.
  link: AtomLinkElement
  // atom:feed elements MUST NOT contain more than one atom:logo element.
  logo: AtomLogoElement
  published: AtomPublishedElement
  // atom:feed elements MUST NOT contain more than one atom:rights element.
  rights: string
  source?: string
  // atom:feed elements MUST NOT contain more than one atom:subtitle element.
  subtitle: string
  summary?: string
  // atom:feed elements MUST contain exactly one atom:title element.
  title: string
  // atom:feed elements MUST contain exactly one atom:updated element.
  updated: string
}

export interface AtomAuthorElement extends AtomPersonConstruct {}

export interface AtomCategoryElement {
  attrs: AtomCategoryElementAttrs
}

interface AtomCategoryElementAttrs extends AtomCommonAttrs {
  term: string
  scheme?: string
  label?: string
}

export interface AtomContributorElement extends AtomPersonConstruct {}

export interface AtomeGeneratorElement {
  attrs: AtomCommonAttrs
  uri?: string // https://www.rfc-editor.org/rfc/rfc3987
  version?: string
  content: string
}

export interface AtomIconElement {
  attrs: AtomCommonAttrs
  content: string // https://www.rfc-editor.org/rfc/rfc3987
}

export interface AtomIdElement {
  attrs: AtomCommonAttrs
  content: string // https://www.rfc-editor.org/rfc/rfc3987
}

export interface AtomLinkElement {
  attrs: AtomCommonAttrs
  href: string
  rel?: string
  type?: string
  hreflang?: string // https://www.rfc-editor.org/rfc/rfc3066
  title?: string
  length?: string
}

export interface AtomLogoElement {
  attrs: AtomCommonAttrs
  content: string
}

export interface AtomPublishedElement extends AtomDateConstruct {}

export interface AtomEntry {}

export interface AtomCommonAttrs {
  /* xml:base */ base?: string
  /* xml:lang */ lang?: string // https://www.rfc-editor.org/rfc/rfc3066
}

export interface AtomPersonConstruct {
  attrs: AtomCommonAttrs
  name: string
  uri?: string
  email?: string
}

export interface AtomDateConstruct {
  attrs: AtomCommonAttrs
  'xsd:dateTime': string
}

export interface AtomEntryElements {}
