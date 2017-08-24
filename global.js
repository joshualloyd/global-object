#!/usr/bin/env node

const { versions } = process;

const { node, v8 } = versions;

console.log(`Node.js version: ${node}\nV8 version: ${v8}`);