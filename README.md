# Azure Functions

This repository contains basic Azure Functions.

## Getting Started

These functions can be easily tested.

```sh
npm install
npm run test
```

These functions can be run locally on a windows computer

1. Install [Azure Functions Core Tools](https://github.com/Azure/azure-functions-cli)

`npm i -g azure-functions-core-tools`

2. func run <function_name>

`func run guidTemplate`

These functions can be easily packed up to remove the node_modules dependency

1. Install [Azure Functions Pack](https://github.com/Azure/azure-functions-pack)

`npm i -g azure-functions-pack`

2. Package up the module dependencies

`funcpack pack ./`

3.