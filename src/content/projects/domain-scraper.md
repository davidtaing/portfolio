---
title: Domain Scraper
description: How to get started with Markdoc
---

[Back](/projects)

# Domain Scraper

## The Problem

Having joined a new Real Estate Agency in a different local area, I had to figure out a way to quickly assess what rental properties were worth.

## Description

Creates Bar Charts of Currently Listed Rental Properties on Domain.com.au.

## Technologies

- Node
- JavaScript
- Mongoose
- Jest
- R
- ggplot2
- Domain.com.au Developer API

## Links

- [Github Repo](https://github.com/davidtaing/domain-scraper)

## Key Points

- Queries the Domain.com.au Developer API using Node for current rental listings data and persists listings to MongoDB (via. Mongoose) and JSON.
- Generates bar charts using R and ggplot2.
- Extracts rental prices from displayPrice field with contaminated text using a combination String.replace(), String.trim() & String.split(). For example we had some interesting edge cases:
  - Ranges: "$500PW - $520PW" or "$1000 per week to $1100 per week"
  - Agencies with numbers in their name: "Leased by Century 1 - $600PW"
  - Other unrelated numbers in field: "Leased in 3 days - $600PW"
  - No numbers in field: "Desposit Taken"
- Wrote unit tests for each edge case.
