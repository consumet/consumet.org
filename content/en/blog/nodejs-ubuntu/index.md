---
title: 'Setting up a NodeJS Server on Ubuntu'
weight: 50
date: 2022-07-18T06:17:42+00:00
lastmod: 2022-07-18T06:17:42+00:00
tags: ['tutorial', 'nodejs', 'linux']
description: 'A guide on setting up a NodeJS server on ubuntu'
draft: false
contributors: ['prince-ao']
---

# Introduction

After you've developed a server with NodeJS you need to move that into production. 

There are two options when it comes to putting your backend into production, the
easiest way is to use a service that automatically builds and starts your app, like
[heroku](https://www.heroku.com/); or use a personal or cloud server to set up the
backend. In this tutorial I will go over the latter option.

## 1. Moving Project to Server

Upload your project to github. Then clone it to the backend.

## 2. Setting up Port Forwarding

If you have a LAN you have to set up port forwarding. Port forwarding is a system
that forwards any request on your global IP address to your local IP address, in this
case the local IP address is your ubuntu server. Setting up port forwarding depends on
your ISP, do some research and set up port forwarding on your router. If your using a
cloud povider like [aws](https://aws.amazon.com/) you can figure that out in their
documentation page.

## 3. Setting up a Firewall with ufw

If you want to open up your server to the internet you must set up a firewall. A
simple way to do that is use [ufw](https://wiki.ubuntu.com/UncomplicatedFirewall). This article is a great introduction to ufw.
Once you have it set up, you need to allow incoming requests to the ip that your
server is running on.

## 4. Running Server

At this point you can just run your NodeJS server. The caveat is that it wont run efficently and
you will not get any server monitoring. If you want to to add server monitoring along with 
features that improve the performance of your server, check out [pm2](https://pm2.io/) a NodeJS
process manager.