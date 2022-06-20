---
title: "How to Update"
description: "Regularly update Consumet extenstions npm package to keep your providers stable, and usable."
lead: "Regularly update Consumet extenstions npm package to keep your providers stable, and usable."
date: 2020-11-12T13:26:54+01:00
lastmod: 2020-11-12T13:26:54+01:00
draft: false
images: []
menu:
  docs:
    parent: "help"
weight: 610
toc: true
---

<!-- {{< alert icon="💡" text="Learn more about <a href=\"https://docs.npmjs.com/about-semantic-versioning\">semantic versioning</a> and <a href=\"https://docs.npmjs.com/cli/v6/using-npm/semver#advanced-range-syntax\">advanced range syntax</a>." />}} -->

## Check if Consumet extensions is up to date

The [`npm outdated`](https://docs.npmjs.com/cli/v7/commands/npm-outdated) command will check the registry to see if the package is currently outdated:

**npm:**
```bash
npm outdated @consumet/extensions
```
**yarn:**
```bash
yarn outdated @consumet/extensions
```

## Update Consumet extensions

The [`npm update`](https://docs.npmjs.com/cli/v7/commands/npm-update) command will update all the package:

**npm:**
```bash
npm update @consumet/extensions
```
**yarn:**
```bash
yarn upgrade @consumet/extensions --latest
```