# create-arasjs <a href="https://npmjs.com/package/create-arasjs"><img src="https://img.shields.io/npm/v/create-arasjs" alt="npm package"></a>

A CLI tool to quickly generate a new project using the ArasJS Library from a template

> **Note:**
> ArasJS is not affiliated with, endorsed by, or sponsored by Aras Corporation. It is an independent open-source library designed to assist developers in building applications that run inside Aras Innovator.

## Get Started

To create a new Aras application, run the following command:

```sh
npm create arasjs my-app
```

or

```sh
npx create-arasjs my-app
```

This will create a directory named `my-app` in your current folder, set up the project structure, and install all dependencies automatically.

## Setup ArasJS App

You will have to add localhost:3000 to the allowed redirect URIs in your Aras Innovator OAuth Configuration.

Please read the [ArasJS Setup Guide](https://npmjs.com/package/arasjs#readme) to get started.

## Available Commands

### `npm run dev`

Starts the development server.

```sh
npm run dev
```

Once the server is running, open [https://localhost:3000/innovatorserver/client](https://localhost:3000/innovatorserver/client) in your browser.

- The application will automatically reload when you make changes to the source code.
- Build errors and lint warnings will appear in the console.

## Learn More

For more information about the libraries used in this template, check out the following resources:

- [ArasJS](https://www.npmjs.com/package/arasjs) - Learn how to integrate and use the ArasJS library.
- [ArasJS Types](https://www.npmjs.com/package/arasjs-types) - Type definitions for ArasJS applications.

## License

This project is licensed under the **MIT License**.
