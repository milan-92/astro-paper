---
author: Milan Milutinović
pubDatetime: 2025-01-11
title: Let the Research Begin
slug: let-the-research-begin
featured: false
draft: false
description: >-
  You should never build anything from scratch. There are existing open source tools and projects that you can leverage to build your product. Doing research properly can save a lot of wasted time in developing a solution that already exists and is available to build on top of for free.
modDatetime: 2025-01-13

---

You should never build anything from scratch. There are existing open source tools and projects that you can leverage to build your product. Doing research properly can save a lot of wasted time in developing a solution that already exists and is available to build on top of for free.

## Well what do we Research though?

As outlined in the previous post - Conference King's MVP has two main components. 

1. Schedule Management
2. Attendee Networking

The conversation I had with Jan was largely centered around the first component. So let's focus on Scheduling first. 

Jan made some very good points about the importance of the schedule in the app - it must also be embeddable on the conference organizer's website. And also sync both ways with a user's calendar. 

He paid something like $50 for a WordPress plugin but he wasn't that happy with the solution, so I'm hoping he will be able to use Conference King instead for his next conference. Conference King already has $50 in revenue potential for next year! Booyah.

Googling something like 'open source calendar tools' I stumbled upon a reddit comment mentioning this - <a href="https://radicale.org/v3.html" target="_blank">Radicale</a>

<img src="/assets/radicale.jpg" alt="Radicale" />

It's described as 
> A CalDAV (calendars, to-do lists) and CardDAV (contacts) server. 

I never heard of these terms but they sound like it might be able to tackle even both the schedule and even some of the networking components.

I setup Radicale on my local machine with a few commands played with it for a little bit but I still don't really know what I am looking for. Let me see what else is out there and come back to Radicale when I have more context.

I listen a lot to <a href="https://www.startupsfortherestofus.com/" target="_blank">Rob Walling's podcast</a> - and I remember him always mentioning <a href="https://cal.com" target="_blank">Cal.com</a> which I think is one of the companies he's invested in. They have open source software which I could use as the basis for the scheduling component - specifically their <a href="https://github.com/calcom/platform-starter-kit?tab=readme-ov-file" target="_blank">platform starter kit</a>.

Cal.com is also an <a href="https://cal.com/open" target="_blank">Open Startup</a>. I really respect this kind of approach to building a business - maybe Conference King will be an Open Startup too?

If you have any ideas or advice for tooling that could help me build Conference King - please let me know! Drop a comment below or reply to me by email :)