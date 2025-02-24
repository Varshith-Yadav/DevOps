# Node.js Hello World Server

This is a simple Node.js server that serves a "Hello World" message. It also includes a basic HTML page and CSS styling.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Local Setup](#local-setup)
- [Running the Server](#running-the-server)
- [Running Tests](#running-tests)
- [Docker Setup](#docker-setup)
- [Project Structure](#project-structure)

---

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Docker](https://www.docker.com/) (optional, for containerization)

---

## Local Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd learn-1
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```

---

## Running the Server

Start the server with:
```bash
node server.js
```

Access your application at:
- Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## Running Tests

Run the test suite with:
```bash
npm test
```

---

## Docker Setup

You can also run this project using Docker:
```bash
docker compose up
```

Access the application:
- Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
learn-1/
├── public/               # Static files (HTML, CSS)
│   ├── index.html
│   ├── styles.css
├── server.js             # Node.js server
├── server.test.js        # Unit tests
├── package.json          # Project dependencies and scripts
├── package-lock.json     # Lock file for dependencies
├── Dockerfile            # Docker configuration
├── README.md             # Project documentation
