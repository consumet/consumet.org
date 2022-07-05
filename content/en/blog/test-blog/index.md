---
title: 'Getting Started with Scrapping Using Cheerio JS'
date: 2022-06-29
weight: 50
date: 2022-07-05T21:17:42+00:00
lastmod: 2022-07-05T21:17:42+00:00
tags: ['tutorial']
description: 'A complete guide on scraping with Cheerio JS'
draft: false
contributors: ['prince-ao']
---

# Introduction

I'm currently working on [a project](https://github.com/consumet/extensions) that relies heavily on Cheerio JS and I've learned a lot of lessons along
the way; if you are an expert on JQuery, then Cheerio JS will be intuative to you, but for the rest of us developers
it is an obscure and esoteric library. Just look at the [documentation](https://cheerio.js.org/).

In this post I'm using the ES6 syntax.

The libraries I will be using are:

```ts
import axios from 'axios';
import * as cheerio from 'cheerio';
```

The sample website I will be scrapping is [a goodreads page](https://www.goodreads.com/book/show/320.One_Hundred_Years_of_Solitude) (Hopefully it stays alive).

You should inspect the site's HTML before you continue.

# Scraping

Only a subset of the entire Cheerio JS library is necessary to successfully
scrape a site. Therefore, this is not a complete overview of the entire library
but only the parts that relate to scrapping.

## Loading

You must [load](https://cheerio.js.org/functions/load.html) HTML before using Cheerio. To load HTML into Cheerio you must get the HTML page of the website you want to scrape, this can be accoplished by:

```ts
const { data } = await axios.get(
	'https://www.goodreads.com/book/show/320.One_Hundred_Years_of_Solitude'
);
```

**data** contains the HTML website, to load it into Cheerio you must use:

```ts
const $ = cheerio.load(data);
```

the **$** is an instance of the CheerioAPI object and is also reffered to as a querying function.

## Querying

### Getting the book title

Supposed you wanted to get the book title, the title's parent is an h1 element with the id "bookTitle"

```html
<h1 id="bookTitle" class="gr-h1 gr-h1--serif" itemprop="name"> One Hundred Years of Solitude </h1>
```

so all you would need to do is run

```ts
const title = $('#bookTitle').text();
```

this works most of the time, but for some cases it wont, so you will need to
traverse the DOM until you reach the node.

```ts
const title = $('body div div div div div div div h1#bookTitle').text();
```

this might also not work in some cases, so you can use

```ts
const title = $('body')
	.children('div')
	.children('div')
	.children('div')
	.children('div')
	.children('div')
	.children('div')
	.children('div')
	.children('h1#bookTitle')
	.text();
```

### Getting the book image

Suppose now that you want to get the book's image url, the book is nested
under
a div with the class "bookCoverContainer" and is itself a img element with
the id
"coverImage"

```html
<div class="bookCoverContainer">
	<div class="bookCoverPrimary">
		<a rel="nofollow" itemprop="image" href="/book/photo/320.One_Hundred_Years_of_Solitude"
			><img
				id="coverImage"
				alt="One Hundred Years of Solitude"
				src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327881361l/320.jpg"
		/></a>
	</div>
	<!--...-->
</div>
```

to get the link of the image you can write

```ts
const image = $('.bookCoverContainer #coverImage').attr('src');
```

or simply

```ts
const image = $('#coverImage').attr('src');
```

### Getting the average stars

Let make this a little more fun. Suppose you wanted to get the average
book rating, all the comments are under the div with the "bookReviews"
id, each comment has a span with the class "staticStars" with the title attribute of either

```
did not like it -> 1 star
it was ok -> 2 stars
liked it -> 3 stars
really liked it -> 4 stars
it was amazing -> 5 stars
```

to get the average number of stars for the book you have to iterate through
all the comments and divide the sum of their stars with the number of
comments.

```ts
let numOfComments = 0;
let sumOfStars = 0;

$('#bookReviews .friendReviews').each((_, e) => {
	numOfComments++;
	switch (
		$(e)
			.children('div')
			.children('div')
			.children('div')
			.children('div')
			.children('span:eq(1)')
			.attr('title')
	) {
		case 'did not like it':
			sumOfStars += 1;
			break;
		case 'it was ok':
			sumOfStars += 2;
			break;
		case 'liked it':
			sumOfStars += 3;
			break;
		case 'really liked it':
			sumOfStars += 4;
			break;
		case 'it was amazing':
			sumOfStars += 5;
			break;
	}
});

if (numOfComments > 0) console.log(sumOfStars / numOfComments);
```

The result was 4.03.

You can learn more about querying at [the JQuery documentation](https://api.jquery.com/children/)

## Conclusion

This is all you need to get started scrapping with Cheerio JS! Scrapping
is more about creativity and experimentation than algorithm cunningness
(most of the functions are written for you), and the limits are endless, so
go forth and scrape.

# Tips and Side Notes

- You should change the User-Agent to look less suspicous.

```ts
const result = await axios.get('https://example.com', {
	headers: {
		'User-Agent': 'Opera/8.67 (X11; Linux x86_64; en-US) Presto/2.10.178 Version/11.00',
	},
});
```

- The data text you get from an element may sometimes contain extra padding, so you should remove it.

```ts
let text = $('h1').text();
text = text.trim();
```

- Traversing the DOM with the children() function is error prone and looks
  messy so you should write a function that parses text into the element
  you want. Mine is

```ts
const genElement = (s: string, e: string) => {
	if (s == '') return;
	const $ = load(e);
	let i = 0;
	let str = '';
	let el = $();
	for (; i < s.length; i++) {
		if (s[i] == ' ') {
			el = $(str);
			str = '';
			i++;
			break;
		}
		str += s[i];
	}
	for (; i < s.length; i++) {
		if (s[i] == ' ') {
			el = $(el).children(str);
			str = '';
			continue;
		}
		str += s[i];
	}
	el = $(el).children(str);
	return el;
};
```

you can use it like

```ts
$(genElement('div table tbody tr td div div a img', $(e).html() ?? ''));
```

- If you write right click on any page and click "View page source",
  a new tab with the website's source will be nicely displayed.

- Modern websites are dynamic, so there is a high chance that your code
  will break in a couple of months, if not a couple of weeks.
