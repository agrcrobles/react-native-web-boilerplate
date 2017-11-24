# React Native for Web - Stateless Boilerplate for React 15

> For React 16 see [react-native-web-fiber-boilerplate](https://github.com/agrcrobles/react-native-web-fiber-boilerplate)

## Overview

An easy and simple way to configure `react-native-web` and `react-navigation`.
For a thorough discussion, please read the following [blog post](https://medium.com/@locropulenton/navigating-in-all-platforms-with-react-navigation-673e9a6e963) about navigating in all platforms with react-navigation.

## Checking flow for IOS platform

> No Errors!

## modules cross platform

 - [built in navigators on web](https://github.com/react-community/react-navigation) # Use it your on own risk.
 - [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) # Fully supported
 - [touchable bounce](https://github.com/grabbou/react-native-touchable-bounce) # It is not added in react-native-web
 - [tricky-components](https://www.npmjs.com/package/tricky-components) Tricky components to test a cross platform app

## Quick start
```
git clone --depth 1 https://github.com/agrcrobles/react-native-web-boilerplate.git
```

### Web
```
cd react-native-web-boilerplate
yarn
yarn web
```
Open `http://localhost:3000/`

### Desktop with electron

```
cd electron
npm i
npm start
```

### Android

```
yarn start
yarn android
```

### IOS

```
yarn start
yarn ios
```

### More information

 - babel preset: `babel-preset-react-native` is recommended in mobile and in web ( and it hot reloads! )
 - packager: metro bundler packager is used
 - jest: experimental

## CONTRIBUTING

PR, stars ✭ and issue reporting, welcome!

## LICENSE

MIT
