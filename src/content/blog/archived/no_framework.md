---
author: Milan Milutinović
pubDatetime: 2025-01-14
title: "Why real men don't use frameworks. Real men code in raw PHP."
slug: why-real-men-dont-use-frameworks
featured: false
draft: true
description: "In this article I position myself as a modern day Martin Luther (The monk, not the black guy) with a polemical rant against all modern web development practices. It's a must read."
modDatetime: 2025-01-16

---

Alright I think I've got a good reason to not use a framework for Conference King. And I'm going to use this article to draw an allegory to my favourite historical figure - <a href="https://en.wikipedia.org/wiki/Martin_Luther" target="_blank">Martin Luther (the monk, not the black guy)</a>.

<div style="display: flex; gap: 1rem; justify-content: center;">
    <img src="/assets/martin_luther.jpg" alt="Martin Luther the monk" style="width: 45%;" />
    <img src="/assets/martin_luther_king.jpg" alt="Martin Luther King Jr." style="width: 45%;" />
</div>


I've decided against Laravel for this project. <a href="/posts/to-laravel-or-not-to-laravel">Even though I was considering it just a few days ago</a>. It just seems unnecessary. Really all I want from it is auth out of the box. But I can get that elsewhere. All these vague promises of clean code. I watched a few hours of Laracasts and I didn't see anything clean. I have no idea why routing is done the way it's done in all these frameworks.

So I'm gonna stick to my caveman tech stack - it loads super quick, and it makes junior Javascript developers cry because it breaks their narrative - good enough for me.

> **HTML, CSS, jQuery, PHP, MySQL**

In this post I'll also be ranting and waging a holy war against all modern web development practices. Let the crusades begin!

## CSS Frameworks/Libraries are just a way to add siteload bloat and avoid writing inline styles

When did writing inline styles become a heretical practice? Was it always that way?

I hate these CSS frameworks like Tailwind and Bootstrap. All the clean code evangelicals use them and talk about how clean it is while showing their nested divs with 500 classes attached to each of them. 

Not sure why the mainstream thinking became that CSS should not be written at all - when did it become a bunch of HTML classes you are supposed to memorise? Why would I put a class like `text-center` on a div? And not just use inline styles like a real man?

## Object Oriented Programming - I was never baptized in this church

Also if someone can explain to me the gospel of Object Oriented Programming in a way that makes even the slightest sense to me I'd be grateful. My dad is also a programmer and I think he once disowned me for a few hours after I made the argument that OOP is an unnecessary abstraction layer in both the code itself and the meta-thinking of the developer trying to adhere to the paradigm.

I've coded with OOP for years. I understand it. But I don't like it. It's an unnecessary abstraction layer that hurts clean data flow. If someone gives me another cars are objects and the color red is their attribute I'll start coding Conference King in Assembly out of spite.

## Strict Data typing is also a fool's game

While we're at it - I also hate TypeScript. More load bloat. In principle I stand against it. They kept saying how much I would love it but I never did. Being strict with your data is a recipe for more things breaking unnecessarily. 'Bad' or 'Wrong' data should coalesce, into what it is closest to. It should coalesce rather than break. For example what is wrong with treating `0`, `'0'`, `0000-00-00` and `false` as more or less the same datatype? It's all falsy.

If you have to be strict with your datatypes you aren't auditing or understanding your data flow clearly enough in the first place. Probably because you have it mutating through 500 different objects and an ORM instead of just hitting the database with a simple SQL request.

## I keep all my concerns related

Which gets to my next point. Separation of concerns. Why are we separating our concerns? I want my view and my data to be as intertwined as possible. That's how it will be as consistent as possible. My user just wants to see the data that's in the database. 

Adding a meta abstraction like `separation of concerns` is just a recipe to confuse developers to write code that is more difficult to understand, and more prone to breaking. 

All while being sold as 'clean code'? 🤔🤔🤔 

I'm willing to be proven wrong and have this stuff explained to me. But I understand the theory , I just don't buy it. At some point you can say it's not that I don't understand it because I haven't learned enough about it, it's that I'm arguing that no one understands it. And no one understands it because it doesn't make any sense. And if it doesn't make any sense then it's wrong.

But if we all just keep thinking we have to continue studying it and learning it then we never get off the treadmill and find the truth - and the most efficient way of organizing our thinking around code.

Has anyone ever even said this out loud? I feel like Martin Luther nailing his <a href="https://en.wikipedia.org/wiki/Ninety-five_Theses" target="_blank">95 theses</a> to the Catholic Church's door in the 16th century.

Rant over. Let's go with raw PHP & jQuery. And see how scaleable and maintainable it is together. 

Hallelujah I am saved.