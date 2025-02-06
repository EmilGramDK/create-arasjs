#!/usr/bin/env node

import { program } from "commander";
import path from "path";
import fs from "fs";
import { input, select, Separator } from "@inquirer/prompts";
import colors from "picocolors";
import { execSync } from "child_process";

const { cyan, blue, redBright, green, yellow, magenta, bold, italic, strikethrough } = colors;

const templates = [
  {
    name: "React TS",
    value: "react-ts",
    description: "React with TypeScript",
    color: cyan,
  },
  {
    name: "Angular TS",
    value: "angular-ts",
    description: "Angular with TypeScript",
    color: redBright,
    disabled: "(in progress)",
  },
  {
    name: "Vanilla TS",
    value: "vanilla-ts",
    description: "Vanilla JS with TypeScript",
    color: green,
    disabled: "(in progress)",
  },
  {
    name: "Vanilla JS",
    value: "vanilla-js",
    description: "Vanilla JS",
    color: yellow,
    disabled: "(in progress)",
  },
];

const availableTemplates = templates.filter((template) => !template.disabled);
const disabledTemplates = templates.filter((template) => template.disabled);

// prettier-ignore
const helpMessage = `\n${magenta(bold("Create ArasJS Project"))}
Create a new project using ArasJS Library Template.

Usage: ${yellow("npm create arasjs <project-name> [options]")}
Example: ${cyan(`npm create arasjs my-app ${italic("-t react-ts")}`)}

Options:
  -t, --template {name}        Use a specific template

Available templates:
${availableTemplates.map((template) => `  -t ${template.color(bold(`${template.value}`))}`).join("\n")}
${disabledTemplates.map((template) => `  -t ${template.color(`${strikethrough(template.value)}`)} ${template.disabled}`).join("\n")}
`;

program
  .version("0.0.1")
  .argument("[project-name]", "Name of the project")
  .option("-t, --template <template>", "use a specific template")
  .option("-h, --help", "display help for command")
  .action(async (projectName, options) => {
    if (options.help) {
      console.log(helpMessage);
      process.exit(0);
    }

    if (!projectName) {
      console.log(helpMessage);
      process.exit(1);
    }

    projectName = projectName.replace(/[^a-zA-Z0-9]/g, "-");
    const projectPath = path.join(process.cwd(), projectName);

    if (fs.existsSync(projectPath)) {
      console.error(redBright(`Error: Directory "${projectName}" already exists.`));
      process.exit(1);
    }

    console.log(magenta(bold("Create ArasJS Project\n")));

    let template = options.template;
    if (!template || !availableTemplates.find((t) => t.value === template)) {
      template = await select({
        message: "Select a template",
        choices: [...availableTemplates, new Separator(), ...disabledTemplates],
      });
    }

    let innovatorServer = await input({
      message: "Enter Innovator Server URL",
      default: "https://aras.example.com/innovatorserver",
      validate: validateInnovatorServer,
    });

    innovatorServer = innovatorServer.toLowerCase();
    innovatorServer = innovatorServer.split("/innovatorserver")[0];
    innovatorServer += "/innovatorserver";

    // prettier-ignore
    console.log(yellow(`Creating project ${bold(`${projectName}`)} using template: ${bold(`${template}`)}\n`));
    console.log(blue(`Using Innovator Server: ${bold(`${innovatorServer}`)}\n`));

    // Create project directory
    fs.mkdirSync(projectPath);

    // Find template folder
    const templatePath = path.join(process.cwd(), `template-${template}`);

    // Copy template files to project directory
    moveRecursiveSync(templatePath, projectPath);

    // Update app.config.ts with Innovator Server URL
    const appConfigPath = path.join(projectPath, "app.config.ts");
    const appConfig = fs.readFileSync(appConfigPath, "utf8");
    const updatedAppConfig = appConfig.replace(
      "https://aras.example.com/innovatorserver",
      innovatorServer
    );
    fs.writeFileSync(appConfigPath, updatedAppConfig);

    // Rename _gitignore to .gitignore
    fs.renameSync(path.join(projectPath, "_gitignore"), path.join(projectPath, ".gitignore"));

    console.log(green("Installing npm dependencies..."));
    execSync("npm install", { stdio: "inherit", cwd: projectPath });

    console.log(green("\nProject created successfully!\n"));
    console.log(yellow(`To get started:`));
    console.log(cyan(`-->  cd ${projectName}  <--`));
    console.log(cyan(`-->  npm run dev  <--\n`));
  });

program.parse();

function moveRecursiveSync(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });

  entries.forEach((entry) => {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath);
      }
      moveRecursiveSync(srcPath, destPath);
    } else {
      fs.renameSync(srcPath, destPath);
    }
  });
}

function validateInnovatorServer(value) {
  if (!value) return "Innovator Server URL is required";

  try {
    new URL(value);
  } catch (error) {
    return "Invalid Innovator Server URL";
  }

  return true;
}
