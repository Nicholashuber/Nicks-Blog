---
title: LinkToCalendar.com
subtitle: Add Events to Google Calendar, Outlook, iCal
category:
  - Portfolio
author: Nick Huber
date: 2021-03-14T07:03:06.510Z
featureImage: /uploads/393fd88a8e4289f4be289a55f6585d5c.png
---
## Generate an event link or button for your page and allow guests to add this event to many different calendars. Supports Google Calendar, Outlook, Yahoo, and IOS.

Have you ever wanted to send an email to various people and have a single unifying way to add your event to any calendar service and time zone? That's where we come in! Simple generate your links on our website or generate them on the fly with code! Since sending out an image or a link uses no JavaScript it can be sent through any email service. Change appearance, colors and fonts for better integration into your website style.

This project of mine was created due to a frustration! A service api I was using for many clients sold out to the big man and its completely changing!

The new owners were deprecating their cool api assimilating it into their ecosystem. All the while going to charge a lot of money per request and removing functionality in favor of inconvenient SSO practices.

Utilizing Herokus platform to host Api's I created a Nodejs instance that would take in requests and return a response with the url formatted for the chosen calendar service.

## \
Try it out on this JSFiddle!

![](/uploads/jsfiddle.png)

## To use my service on YOUR website place this HTML where you would like the user to add the event to their calendar:

```
<link rel="stylesheet" href="https://linktocalendar.com/assets/ltc-style-blue.css"/>
<script src="https://linktocalendar.com/assets/linktocalendar-main.js"><script>
<span class="linktocalendar ltc-style-blue">
  <var class="ltc_event">
    <var class="ltc_date_start">2019-05-04 12:00:00</var>
    <var class="ltc_date_end">2019-05-04 18:00:00</var>
    <var class="ltc_timezone">America/New_York</var>
    <var class="ltc_title">Star Wars Day Party</var>
    <var class="ltc_description">May the force be with you</var>
    <var class="ltc_location">Tatooine</var>
    <var class="ltc_organizer">Luke Skywalker</var>
    <var class="ltc_organizer_email">Nick@huber.dev</var>
  </var>
</span>
```