---
author: Milan Milutinović
pubDatetime: 2025-01-14
title: "First Design for Profiles"
slug: profiles-of-attendees
featured: true
draft: false
description: "Getting these profiles right is the first step. The process of an attendee populating their profile needs to be as frictionless and exciting as possible. They should be creating their profile and looking forward to sharing it with other attendees."
modDatetime: 2025-01-14

---

## Conference King Social Platform

Here are some screenshots of the mobile version's design in progress, which I'm building on <a href="https://www.canva.com" target="_blank">Canva</a>

<div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center;">
    <img src="/assets/social_wireframe/1.jpg" alt="Social wireframe 1" style="width: 30%;" />
    <img src="/assets/social_wireframe/2.jpg" alt="Social wireframe 2" style="width: 30%;" />
    <img src="/assets/social_wireframe/3.jpg" alt="Social wireframe 3" style="width: 30%;" />
    <img src="/assets/social_wireframe/4.jpg" alt="Social wireframe 4" style="width: 30%;" />
    <img src="/assets/social_wireframe/5.jpg" alt="Social wireframe 5" style="width: 30%;" />
    <img src="/assets/social_wireframe/6.jpg" alt="Social wireframe 6" style="width: 30%;" />
</div>


The social aspect for the MVP will just be a super basic directory of all attendees, which the attendees will self populate. They will then be able to search through the directory, filtering by profile type - Speaker, Sponsor, etc. 

Every profile will be asked a question which will be their tagline. `Why I'm a sponsor` or `Why I'm a speaker` or `Why I'm attending` etc.

I'm considering adding a magic wand button which makes a call to chatGPT to auto generate a profile summary from the premade questions they filled in. This <a href="/posts/no-ai">'AI' (LLM)</a> is a pretty cool feature that will give the user a 'wow' factor and excite them in exploring using the app further.

## Icon Pack

I'll be using <a href="https://tabler.io/icons" target="_blank">Tabler</a> for the icons - the same icon pack used by this blog.

## Sorting on the Attendee Directory

Default sorting for the directory will be by two parameters, in this order :

> 1. Profile type
>    - Sponsors
>    - Speakers
>    - Organizers
>    - Attendees

> 2. Profile completion
>    - Last Updated
>    - Profiles deemed 'uncompleted' - not having a profile picture - will be at the bottom

## Account Creation

Users will not be creating their own accounts in the MVP. They will be generated and created from the Tickettailor records that VNF has of each guest, using CSV files to auto populate corresponding database tables. So users only need login for Authentication. 

The more attendees use this platform, during, before & after the conference - the more valuable the app becomes to the user. So getting the user experience right here is the key. The user must feel in their hands the value of populating their profile - it's their first point of contact with the conference and it's a crucial moment in the user journey for the app.
