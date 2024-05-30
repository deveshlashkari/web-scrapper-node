# Web Scraper API

This project is a Node.js web scraper API that accepts a URL and returns the scraped text data, including headings and paragraphs. The API is built using Express.js, axios, and cheerio.

## Features

- Exposes a REST API endpoint to scrape web pages.
- Extracts headings (`<h1>` to `<h6>`) and paragraphs (`<p>`).
- Uses `axios` for HTTP requests and `cheerio` for HTML parsing.

## Project Structure

```bash
web-scraper-api
│
├── src
│   ├── routes
│   │   └── scrape.js
│   ├── services
│   │   └── scraper.js
│   └── app.js
│
├── test
│   └── scraper.test.js
│
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v12.x or higher)
- npm (v6.x or higher)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/web-scraper-api.git
    cd web-scraper-api

    ```

2.  **Install the dependencies:**
    ```bash
    npm install
    ```
3.  ### Running the Server

    To start the server with `nodemon` for automatic restarts during development:

    1.  **Install `nodemon` (if not installed):**
        ```bash
        npm install -g nodemon
        ```
    2.  **Start the server:**
        ```bash
	npm start
The server will run at `http://localhost:3000`.

### API Usage

#### Endpoint

`POST /api/scrape`

#### Request Body

- `url` (string): The URL of the web page to scrape.

#### Example

```bash
{
  "url": "https://example.com"
}
```

#### Response

- `data` (array): An array of objects containing the tag name and text content.

```bash
	{
  "data": [
    { "tag": "h1", "text": "Example Domain" },
    { "tag": "p", "text": "This domain is for use in illustrative examples in documents." }
  ]
}
```

### Project Structure

- `src/app.js`: Main application file that sets up the Express server.
- `src/routes/scrape.js`: Defines the route for the scraper API.
- `src/services/scraper.js`: Contains the logic for scraping web pages using axios and cheerio.
- `test/scraper.test.js`: Contains tests for the API using Mocha and Chai.

### Contributing

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature-branch`).
3.  Commit your changes (`git commit -m 'Add new feature'`).
4.  Push to the branch (`git push origin feature-branch`).
5.  Open a pull request.
