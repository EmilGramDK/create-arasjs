# create-arasjs <a href="https://npmjs.com/package/create-arasjs"><img src="https://img.shields.io/npm/v/create-arasjs" alt="npm package"></a>

create-arasjs is a tool to quickly start a project from a basic template for popular frameworks.

> **Note:**
> ArasJS is not affiliated with, endorsed by, or sponsored by Aras Corporation. It is an independent open-source library designed to assist developers in building applications that run inside Aras Innovator.

## Get Started

To create a new Aras application, run the following command:

```sh
npx create-arasjs my-app
```

This will create a directory named `my-app` in your current folder, set up the project structure, and install all dependencies automatically.

Currently supported template presets include:

- [react-ts](/template-react-ts)

Currently in progress:

- [angular-ts](/template-angular-ts)
- [vanilla-ts](/template-vanilla-ts)
- [vanilla-js](/template-vanilla-js)

## Pre-Setup ArasJS App

You will have to add localhost:3456 to the allowed redirect URIs in your Aras Innovator OAuth Configuration.

Please read the [ArasJS Setup Guide](https://npmjs.com/package/arasjs#pre-setup) to get started.

## Available Commands

### `npm run dev`

Starts the development server.

```sh
npm run dev
```

Once the server is running, open [https://localhost:3456/innovatorserver/client](https://localhost:3456/innovatorserver/client) in your browser.

- The application will automatically reload when you make changes to the source code.
- Build errors and lint warnings will appear in the console.

## Learn More

For more information about the libraries used in this template, check out the following resources:

- [ArasJS](https://www.npmjs.com/package/arasjs) - Learn how to integrate and use the ArasJS library.

## License

This project is licensed under the **MIT License**.
