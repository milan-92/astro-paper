---
author: Milan Milutinović
pubDatetime: 2025-01-13
title: "To Laravel or not to Laravel?"
slug: to-laravel-or-not-to-laravel
featured: true
draft: false
description: "Laravel seems like the best choice for a framework to setup this project. But I have a few misgivings."
modDatetime: 2025-01-12
---

Laravel seems like the best choice for a framework to setup this project. But I have a few misgivings.

First of all I'm reminded by commonly given advice by successful saas developer founders.

> Build your first product in whichever languages/frameworks you are most familiar with.
>
> &mdash;  <a href="https://www.amazon.com/Zero-Sold-Start-Bootstrapped-Business-ebook/dp/B08BWZS8VN" target="_blank">Arvid Kahl</a>

Well I've been a PHP developer my whole career. I've only ever been paid for one Vue project that I can remember. I worked with Laravel on a few smaller projects many years ago. I was setting up giveaway campaigns for Cadbury Chocolate as far as I remember. 

This was very, very early in my career and I'd blagged my way into a web developer contract role a few months after watching my first tutorial for HTML on YouTube - I was working for an advertising agency in Melbourne. 

I remember mostly asking the very friendly and very shy developer in the office what the hell I was doing about every 20 minutes, he actually did a great job explaining many things to me. In those days I was still afraid of the command line and git.

## Raw PHP no framework for real OG Developers

I've worked on many projects but the one I am most proud of and which was the most technically demanding was an Vertical ERP SaaS for Plant Nurseries in Australia - <a href="https://evergreenconnect.com.au" target="_blank">Evergreen Connect</a> - clean code nerds and javascript framework fanboys faint at the mere sight of the codebase. 

Built in raw PHP, raw SQL queries. No framework and almost no technical documentation. I take pride in taming that beast - and part of me still loves that codebase. It was that untamed beast of a codebase that taught me almost everything I know about developing 'real' software. 

And it's the contract that allowed me to travel the world and funded the renovation of my deceased grandfather's abandoned home in Serbia. So Mat & Carley if you are reading this - thank you for the opportunities you gave me while we worked together.

But I think just using raw PHP without a framework is going to create problems. Here are my thoughts on Laravel. First the negatives, because the Grinch is always there before Christmas.

---

## Negatives

1. Laravel's reliance on ORMs and the Object Oriented voodoo

My misgivings with Laravel are that it uses an ORM. Why would I want a layer of abstraction between my code and the database? To make debugging things unecessarily more convoluted? I want to write code that is as close to the machine as possible, not further abstracted away. 

On second glance you don't have to use Laravel's ORM, but it seems like it's highly suggested.

2. The MVC architecture

MVC to me sounds like some programmer's voodoo to me. I'm not sure what it is about it that I don't like. I'm not sure if it's the name or the concept itself. I'm not sure if it's the fact that I'm not a fan of object oriented programming. But something smells funny about it.

3. Blade templating engine

Again, why do I want another layer of abstraction between myself and the PHP code? I would write everything in 1's and 0's binary if I could - but I am only a mere mortal.

---

## Positives

1. Laravel's Ecosystem of Tools & Packages

Handling authentication and payments. These are the two crucial things that need to be done right, and it seems Laravel has very good solutions for both, and their other tools will probably come in handy along the way.

2. Laravel's Docs & Laracasts

Their documentation seems very robust and easy to digest and follow along with. Their Laracasts which they have been doing for years are a great resource with entertaining and educational content. Surely someone there can argue with me about why the 3 negatives are actually positives.

Although I don't know - I don't think anyone truly understands what Object Oriented Programming even is but they seem to be awful evangelistic about it. I'm a big believer in conspiracy theories and I'm convinced that OOP is a religion disguised as a programming paradigm. 

I'm also convinced that these two letters -  Ћ Ч in Serbian 🇷🇸 produce the exact same sound but the whole country is mass hallucinating thinking that they are different. So I have a funny way of looking at things sometimes.

3. Laravel's Community

I could attend Laracon which looks like a sweet ass conference and finally find a place in this world to call my home. Maybe they'll even use Conference King? I don't think they would if it's not built on Laravel.

And <a href="https://x.com/taylorotwell" target="_blank">Taylor Otwell</a>, Laravel's creator seems like a cool guy with good taste. I like Laravel's branding and the way they present themselves.

<img src="/assets/laravel.jpg" alt="Laravel Landing Page" />


---

Their landing page is super slick. Maybe that's good enough reason for me?
