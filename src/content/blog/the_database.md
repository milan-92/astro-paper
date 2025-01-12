---
author: Milan Milutinović
pubDatetime: 2025-01-12
title: "The Database is the King behind Conference King"
slug: the-database-is-the-king-behind-conference-king
featured: true
draft: false
description: "The Database is the source of truth for everything. So this is the first thing to think about. Luckily I didn't have to think about it too much, I just asked chatGPT."
modDatetime: 2025-01-12
---

The Database is the source of truth for everything. So this is the first thing to think about when it comes to actually engineering and not just writing blog posts. Luckily I didn't have to think about it too much, I just asked chatGPT and it gave me this great starting point for a schema. I'm putting this here for my own reference.

1. `attendees` Table

Stores basic information about each conference attendee.

| Field | Type | Description |
|-------|------|-------------|
| id | BIGINT UNSIGNED | Primary key (auto-increment) |
| first_name | VARCHAR(255) | Attendee's first name |
| last_name | VARCHAR(255) | Attendee's last name |
| email | VARCHAR(255) | Attendee's email address (unique) |
| phone | VARCHAR(15) | Attendee's phone number (optional) |
| profile_picture | VARCHAR(255) | URL to the attendee's profile picture (optional) |
| company_name | VARCHAR(255) | Company name (optional) |
| job_title | VARCHAR(255) | Attendee's job title (optional) |
| bio | TEXT | Short bio of the attendee (optional) |
| ticket_type | VARCHAR(100) | Type of ticket purchased (e.g., VIP, Regular, etc.) |
| registration_date | TIMESTAMP | Date when the attendee registered (auto-filled) |
| status | ENUM('active', 'inactive', 'cancelled') | Status of the attendee's registration |
| created_at | TIMESTAMP | Timestamp for when the record was created |
| updated_at | TIMESTAMP | Timestamp for the last update of the record |


2. `sessions` Table

Stores information about the conference sessions (talks, workshops, etc.).

| Field | Type | Description |
|-------|------|-------------|
| id | BIGINT UNSIGNED | Primary key (auto-increment) |
| title | VARCHAR(255) | Title of the session |
| description | TEXT | Description of the session |
| start_time | DATETIME | Start time of the session |
| end_time | DATETIME | End time of the session |
| location | VARCHAR(255) | Location of the session (room, hall, etc.) |
| speaker_id | BIGINT UNSIGNED | Foreign key to the attendees table (if the speaker is an attendee) |
| created_at | TIMESTAMP | Timestamp for when the record was created |
| updated_at | TIMESTAMP | Timestamp for the last update of the record |

3. `attendee_social_links` Table

Stores the social media links of attendees, such as LinkedIn, Twitter, etc.

| Field | Type | Description |
|-------|------|-------------|
| id | BIGINT UNSIGNED | Primary key (auto-increment) |
| attendee_id | BIGINT UNSIGNED | Foreign key to the attendees table |
| platform | VARCHAR(255) | Name of the social media platform (e.g., LinkedIn, Twitter) |
| url | VARCHAR(255) | URL of the attendee's profile on the social media platform |
| created_at | TIMESTAMP | Timestamp for when the record was created |
| updated_at | TIMESTAMP | Timestamp for the last update of the record |

---

chatGPT also suggested these tables ; which I also think are great but not necessary for the MVP but let's leave them here for reference.

4. `attendee_sessions` Table

A many-to-many relationship table that links attendees with the sessions they have registered for.

| Field | Type | Description |
|-------|------|-------------|
| id | BIGINT UNSIGNED | Primary key (auto-increment) |
| attendee_id | BIGINT UNSIGNED | Foreign key to the attendees table |
| session_id | BIGINT UNSIGNED | Foreign key to the sessions table |
| registered_at | TIMESTAMP | Date when the attendee registered for the session |
| status | ENUM('registered', 'attended', 'missed') | Status of attendance for the session |
| created_at | TIMESTAMP | Timestamp for when the record was created |
| updated_at | TIMESTAMP | Timestamp for the last update of the record |

5. `attendee_feedback` Table

Stores feedback from attendees about the sessions they attended.

| Field | Type | Description |
|-------|------|-------------|
| id | BIGINT UNSIGNED | Primary key (auto-increment) |
| attendee_id | BIGINT UNSIGNED | Foreign key to the attendees table |
| session_id | BIGINT UNSIGNED | Foreign key to the sessions table |
| rating | INT | Rating given by the attendee (e.g., 1 to 5 stars) |
| comments | TEXT | Comments from the attendee about the session |
| created_at | TIMESTAMP | Timestamp for when the feedback was submitted |
| updated_at | TIMESTAMP | Timestamp for the last update of the record |

