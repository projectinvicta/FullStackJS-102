# FullStackJS-102: NPM & Building with Express.js

Welcome to **FullStackJS-102**! This repository is a step-by-step Codespaces template designed to guide you through the essentials of modern Node.js project architecture and backend development. You will learn to use npm for dependency management and construct a robust web server with Express.js from scratch.

---

## 📅 Lesson Outline (90 Minutes)

| Time | Module | Key Topics | Focus |
| :--- | :--- | :--- | :--- |
| **00:00 - 00:05** | **Introduction** | Overview of course goals & Node ecosystem | Intro to the module structure |
| **00:05 - 00:30** | **[1. NPM & Project Architecture](./01-npm-package-management/)** | `npm init`, `package.json`, ESM, dependencies, and CLI configs | Project structure and package anatomy |
| **00:30 - 01:00** | **[2. Express.js Fundamentals](./02-express-fundamentals/)** | App setup, listening on a port, routing, HTTP verbs, and Req/Res cycle | REST API construction |
| **01:00 - 01:20** | **[3. Middleware & Security](./03-middleware-security/)** | JSON/URL-encoded body parsers, cookie state, CORS, and sessions | Middleware and hooks |
| **01:20 - 01:30** | **Wrap-up & Review** | Summary of patterns & final Q&A | Synthesis & next steps |

---

## 🚀 Getting Started

All tools are pre-installed in your development environment. You can verify your Node.js and npm versions in the terminal:

```bash
node -v
npm -v
```

This workshop is split into 3 hands-on exercise directories. Go into each directory, read its `README.md`, and complete the `TODO` items in the files.

1. 📂 **[01-npm-package-management](./01-npm-package-management/)**
   - Initialize a Node.js project, customize a `package.json` file, install dependencies, set up run scripts, configure ES Modules, and publish a CLI binary link.
2. 📂 **[02-express-fundamentals](./02-express-fundamentals/)**
   - Build a standard REST API for managing books. Learn routing, route parameters, query strings, and custom response statuses/headers.
3. 📂 **[03-middleware-security](./03-middleware-security/)**
   - Integrate essential middleware to parse incoming request payloads, handle client cookies, set secure CORS policies, and implement stateful user sessions.

---

*Stuck? Check the [solutions/](./solutions/) folder to see the complete, correct implementations for each exercise.*
