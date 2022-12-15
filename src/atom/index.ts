interface AtomConstructorOptions {
  metadata: Partial<AtomMetadata>
}

interface AtomMetadata {
  // atom:feed elements MUST contain one or more atom:author elements, unless all of the atom:feed element's child atom:entry elements contain at least one atom:author element.
  author: string
  // atom:feed elements MAY contain any number of atom:category elements.
  category?: string
  // atom:feed elements MAY contain any number of atom:contributor elements.
  contributor: string
  // atom:feed elements MUST NOT contain more than one atom:generator element.
  generator: string
  // atom:feed elements MUST NOT contain more than one atom:icon element.
  icon: string
  // atom:feed elements MUST contain exactly one atom:id element.
  id: string
  // atom:feed elements SHOULD contain one atom:link element with a rel attribute value of "self".  This is the preferred URI for retrieving Atom Feed Documents representing this Atom feed.
  // atom:feed elements MUST NOT contain more than one atom:link element with a rel attribute value of "alternate" that has the same combination of type and hreflang attribute values.
  // atom:feed elements MAY contain additional atom:link elements beyond those described above.
  link: string
  // atom:feed elements MUST NOT contain more than one atom:logo element.
  logo: string
  published: string
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

export interface AtomEntry {

}

export class Atom {
  public metadata: Partial<AtomMetadata>

  constructor ({
    metadata
  }: AtomConstructorOptions) {
    this.metadata = metadata
  }

  add () {

  }

  validate () {
    if ()



    this.feed.metadata
  }

  toString () {
    return `
<?xml version="1.0" encoding="utf-8"?>

<feed xmlns="http://www.w3.org/2005/Atom">

  <title>Example Feed</title>
  <subtitle>A subtitle.</subtitle>
  <link href="http://example.org/feed/" rel="self" />
  <link href="http://example.org/" />
  <id>urn:uuid:60a76c80-d399-11d9-b91C-0003939e0af6</id>
  <updated>2003-12-13T18:30:02Z</updated>


  <entry>
    <title>Atom-Powered Robots Run Amok</title>
    <link href="http://example.org/2003/12/13/atom03" />
    <link rel="alternate" type="text/html" href="http://example.org/2003/12/13/atom03.html"/>
    <link rel="edit" href="http://example.org/2003/12/13/atom03/edit"/>
    <id>urn:uuid:1225c695-cfb8-4ebb-aaaa-80da344efa6a</id>
        <published>2003-11-09T17:23:02Z</published>
    <updated>2003-12-13T18:30:02Z</updated>
    <summary>Some text.</summary>
    <content type="xhtml">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <p>This is the entry content.</p>
      </div>
    </content>
    <author>
      <name>John Doe</name>
      <email>johndoe@example.com</email>
    </author>
  </entry>

</feed>`.trimStart()
  }
}
