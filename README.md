## Description

> A simple server-side application that allows you to process the timestamp parameter. This is my final solution of the FreeCodeCamp URL Shortener Mircoservice challenge. Feel free to clone and tinker.

> Reference:
>
> - https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice

<br />

## Setup

> - Run the following commands.

```bash
npm run build
npm run dev
```

> - Testing

```bash
* CreateURL
Method: POST
URL: http://localhost:13000/api/shorturl
Body (JSON): { "short_url": "https://github.com" }

* GetURL
Method: GET
URL: http://localhost:13000/api/shorturl/:short_url?
Params: { "short_url": 1111 }
```

<br />

## Recording


