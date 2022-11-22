---
title: Rental Applications
description: Tenancy Applications Website That I Built For Fun.
---

[Back](/projects)

# Rental Applications

## Description

Tenancy Applications Website That I Built For Fun.

## Technologies

- React
- Next.js
- TypeScript
- React Hook Form
- CSS
- Jest
- React Testing Library

## Links

- [Live Preview](https://rental-applications.vercel.app)
- [Github Repo](https://github.com/davidtaing/rental-applications)

## Key Points

Pivoted and replaced Formik implementation with React Hook Form due to the entire form rerendering upon input. Formik is implemented with controlled components and uses the Context API to house its state.

**Original State**

```
  {
    input: "",
    ...state
  }
```

**Updated State**

New state object now has a different reference to the original state, and React will treat the entire state as being updated. This means that we will rerender other fields, even if they haven't actually changed.

```
  {
    input: "updatedState",
    ...state
  }
```

**Formik Implementation**

![Formik Implementation: Bad Re-Render](/images/projects/email-sender/bad-rerendering.gif)

**React Hook Form Implementation**

![React Hook Form Implementation](/images/projects/email-sender/not-rerendering.gif)
