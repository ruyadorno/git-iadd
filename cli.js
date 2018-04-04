#!/usr/bin/env node

const { join } = require('path');
const { exec } = require('child_process');

const env = {
    ...process.env,
    PATH: process.env.PATH + ':' + join(__dirname, 'node_modules', '.bin')
};

exec('git status -s | sed s/^...// | ipt -m -M "Select files to add:" | xargs git add', { env });
