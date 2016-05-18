# tim.js workshop 01: JavaScript Citizens

Welcome to the first JavaScript workshop, organized by [tim.js][timjs].

We will dive into the building blocks of the ECMAScript language, the so called "1st class citizens", explaining in detail how they work & why is it so important to understand them. We will cover some fundamental concepts of ES5, while also touching some new features added in ES6.

Tutor: __Andrei Pfeiffer__

## Content

- __Intro__: short history, JS vs ES;
- __Primitives__: types, typeof, type casting, falsey values;
- __Arrays__: literals, stack, queue, filtering, iterating;
- __Objects__: literals, enhanced literals, property descriptors, json;
- __Functions__: types, returns, 1st class functions.

## What you need?

Here's a list of things you need:

1. a laptop & power-plug
2. a code editor (_optional_)
3. [Node.js][download_node] 4.0+ (_optional_)

## Who is it for?

- Beginner & Intermediate JavaScript developers who want to discover the language at a deeper level
- Advanced developers, who switched to JavaScript and want to understand its mechanics

## Setup

Here are the steps you can follow to setup the workshop project skeleton.
All these commands need to be run from the command line (shell/terminal):
* iTerm on MacOSX
* cmd/GitBash on Windows
* any terminal on Linux.

### 1. Create project folder

First, you need to create a new folder somewhere on your computer:

```
mkdir [PROJECT_NAME]
cd [PROJECT_NAME]

// or create a new "project folder" and navigate to it using your favourite file system tool
```

### 2. Clone project skeleton

Second, you need to clone this repository. You can do it in multiple ways:

a) __with git:__
```
git clone https://github.com/andreipfeiffer/timjs-workshop-01-javascript-citizens.git ./
```

NOTE: if you have a GitHub account, you can fork this repo, so you can commit your personal changes.

b) __without git__

__[Download][download_repo]__ this repo and unzip it in your PROJECT_NAME folder.



### 3. Install dependencies

```
npm install
```

### 4. Run project

```
npm start
```

This should display a URL in the console, where you can load the project page.

[download_repo]: https://github.com/andreipfeiffer/timjs-workshop-01-javascript-citizens/archive/master.zip
[download_node]: https://nodejs.org/en/download/
[timjs]: http://timjs.ro
