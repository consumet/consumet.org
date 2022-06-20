---
title: 'Installation'
description: 'Consumet extensions npm package'
lead: 'Consumet extensions npm package'
date: 2020-11-16T13:59:39+01:00
lastmod: 2020-11-16T13:59:39+01:00
draft: false
images: []
menu:
  docs:
    parent: "overview"
weight: 110
---

## Requirements

- [Node.js](https://nodejs.org/) — latest LTS version or newer

{{< details "Why Node.js?" >}}
Consumet Extensions uses npm (included with Node.js) to centralize dependency management, making it [easy to update]({{< relref "how-to-update" >}}) resources, build tooling, plugins, and build scripts.
{{< /details >}}

## Installation
To install Consumet Extensions, run the following command:
```bash
npm install @consumet/extensions
```
or if you have yarn installed, run the following command:
```bash
yarn add @consumet/extensions
```

## Usage
{{<alert icon="👉" text="The is intended to who already have Consumet Extensions npm package installed." />}}
Step-by-step instructions on how to start using Consumet extensions package. [Tutorial →]({{< relref "extensions/../../extensions/usage.md" >}})