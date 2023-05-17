## Description

> - A backend application that allows you to shorten a specific URL using NodeJS.

> - This is my final solution of the FreeCodeCamp URL Shortener Mircoservice challenge.

> Reference: https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice

<br />
<br />
<br />

## Setup

> - Create a new `.env` file and put the corresponding `key-value` pairs.

```bash
# * MongoDB
MONGODB_URI=

# * Local
PORT=
```

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
<br />
<br />

## Testing

[Screencast from Saturday, 25 February, 2023 05:45:57 AM PST.webm](https://user-images.githubusercontent.com/69438999/221299576-f93409a0-1533-44f6-83ab-4be6b97278f3.webm)
