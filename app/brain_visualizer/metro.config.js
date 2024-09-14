// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('@expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = config;
// make it use the defualtconfig and then add the rresolver if it doesnt exist. and add essetExts key if it doesnt exis and fillay append (or create) if it doesnt exist