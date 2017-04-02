## Overview

A simple boilerplate app to demonstrate how to use [ES6] and [React] with
[Electron]. It uses [Babel] to automatically transpile ES6 and JS code,
without depending on any package manager besides `npm`.

## How?

The Node and Electron binaries both take a parameter `-r` that automatically
requires a module before the rest of the code.  The `npm start` script is
modified using this, which registers Babel and loads the entry point `main.js`.

The renderer entry point `index.html` does basically the same, but loads the
`scripts/main.js` file, which renders the `localhost:3000` component into the `body`.
