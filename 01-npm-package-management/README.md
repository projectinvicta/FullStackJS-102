# Exercise 01: NPM & Project Architecture

Welcome to Module 1! In this module, you will learn how to initialize Node.js projects, manage external dependencies, configure project metadata, set up script automation, enable modern ES Modules, and create custom command-line interface (CLI) commands.

---

## 📖 Key Concepts

### 1. NPM (Node Package Manager)
**NPM** is the default package manager for the Node.js runtime. It consists of:
- A command-line client (`npm`) to install, update, and manage dependencies.
- An online registry housing millions of open-source JavaScript packages (libraries).

### 2. Anatomy of `package.json`
Every Node.js project has a `package.json` file at its root. It serves as the project's manifest, containing:
- **Identity metadata:** Name, version, description, license, and author.
- **Dependency declarations:**
  - `dependencies`: Libraries required for the application to run in production (e.g., `express`).
  - `devDependencies`: Tools only required during local development and testing (e.g., `nodemon`, `eslint`).
- **Scripts:** Custom CLI shortcuts to automate tasks like running tests, starting the server, or formatting code.
- **Environment config:**
  - `type`: Setting this to `"module"` enables standard ECMAScript Modules (ESM) allowing you to use `import` and `export` statements instead of CommonJS `require()`.
  - `engines`: Specifies the range of Node.js versions your project is compatible with.
- **Advanced configuration:**
  - `bin`: Maps command names to local executable scripts, exposing CLI commands.
  - `config`: Defines configuration parameters (like a port number) that can be accessed inside your scripts as environment variables.

---

## 🛠️ Step-by-Step Instructions

To simulate a real-world project, we will initialize our configuration at the **root** of this workspace.

### Step 1: Initialize the Project
1. Open your terminal at the root of the project.
2. Run `npm init` to start the interactive configuration. Enter the details when prompted (or press enter to accept defaults). This will generate a new `package.json` file at the root.

### Step 2: Install Dependencies
1. Install **Express.js** as a standard runtime dependency:
   ```bash
   npm install express
   ```
2. Install **Nodemon** (a utility that monitors files and automatically restarts the server when code changes) as a development dependency:
   ```bash
   npm install --save-dev nodemon
   ```
3. Observe how the `"dependencies"` and `"devDependencies"` sections were created in your root `package.json`.

### Step 3: Customize `package.json`
Open the newly created `package.json` at the root and add the following keys/values:
1. Ensure the `"name"` is set to `"fullstackjs-102-workshop"` and `"version"` is `"1.0.0"`.
2. Add `"type": "module"` to enable ES Modules so we can use modern `import` and `export` statements.
3. Add an `"engines"` section to restrict the Node version to greater than or equal to 18:
   ```json
   "engines": {
     "node": ">=18.0.0"
   }
   ```
4. Update the `"scripts"` object to contain:
   ```json
   "scripts": {
     "start": "node 01-npm-package-management/index.js",
     "dev": "nodemon 01-npm-package-management/index.js"
   }
   ```
5. Add a `"bin"` object mapping a custom shell command to our script:
   ```json
   "bin": {
     "my-cli": "./01-npm-package-management/bin/cli.js"
   }
   ```
6. Add a `"config"` object to define a configuration port:
   ```json
   "config": {
     "port": "3000"
   }
   ```

### Step 4: Write Your ES Module Code
1. Open [utils.js](file:///Users/stantonwjones/dev/FullStackJS-102/01-npm-package-management/utils.js) and export a function.
2. Open [index.js](file:///Users/stantonwjones/dev/FullStackJS-102/01-npm-package-management/index.js) and import that function. Add code to read the port from your `package.json` configuration field.
3. Test your configuration by running `npm run start` and `npm run dev` in the terminal.

### Step 5: Test the custom CLI Command
1. Open [bin/cli.js](file:///Users/stantonwjones/dev/FullStackJS-102/01-npm-package-management/bin/cli.js). Make sure it begins with the shebang line (`#!/usr/bin/env node`) and prints a message.
2. Link the CLI command locally using:
   ```bash
   npm link
   ```
3. Now type `my-cli` in your terminal and press Enter. You should see your custom script output!
4. When finished, you can clean up the link using `npm unlink -g fullstackjs-102-workshop`.

---

> [!TIP]
> **Reading Config Variables in JS**
> NPM automatically exposes fields in the `"config"` block of your `package.json` as environment variables.
> You can read them inside your JS scripts using `process.env.npm_package_config_<key>`. For example, `process.env.npm_package_config_port`.
