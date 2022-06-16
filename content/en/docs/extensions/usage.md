---
title: "Usage"
description: "How to use Consumet Extensions package."
lead: "How to use Consumet Extensions package."
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "extensions"
weight: 100
toc: true
---

You can use any provider you want. [Providers list →]({{< relref "extensions/list" >}})

The structure of the Consumet Extensions is not yet finalized, so changes will happen regularly.

## Books example
#### Search for a book using the libgen provider.
```js
import { BOOKS } from "@consumet/extensions"

const searchBooks = async (query) => {
  const libgen = new BOOKS.Libgen() // Class path can be found in the provider's list next to the provider name.
  const books = await libgen.search(query) // Search for books. You can see all the available methods for a object using your IDE.
  console.log(books) // Print the result.
}

searchBooks("One Hundred Years of Solitude")
```
See also the exmaples in the [extensions repository](https://github.com/consumet/extensions/tree/master/examples).

## Anime example
#### Search for an anime using the gogoanime provider.
```js
import { ANIME } from "@consumet/extensions"

const searchAnime = async (query) => {
  const gogoanime = new ANIME.en.GogoAnime()
  const books = await gogoanime.search(query)
  console.log(books)
}

searchAnime("One Piece")
```