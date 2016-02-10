#JavaScript Fundamentals Workshop

Welcome to the first JavaScript workshop, organized by [tim.js][timjs]. We will cover some fundamental concepts of ES5, and also touch some new features added in ES6. Here is a summary:

* (very) short history
* primitives
* arrays
* objects
* functions
* value vs. reference
* scope
* hoisting & TDZ
* closures
* strict mode
* _this_ context
* typeof vs. instanceof vs. [Class]
* iterating Arrays & Objects
* prototypes
* a small application, to apply the concepts above

## Prerequisites

Here's a list of things you need:

1. a laptop
2. a code editor
3. [Node.js][download_node] installed on your computer (version 4.x or 5.x)
4. _git installed on your computer (this is optional)_
5. _coffee (we'll provide that)_

## Setup

Here are the steps you can follow to setup the workshop project skeleton.
All these commands need to be run from the command line (shell/terminal):
* iTerm on MacOSX
* cmd/GitBash on Windows
* any terminal on Linux.

### 1. Create project folder

First, you need to create a new folder somewhere on your computer:

```
cd [WORK_FOLDER]
mkdir [PROJECT_NAME]
cd [PROJECT_NAME]
```

### 2. Clone project skeleton

Second, you need to clone this repository. If you have git installed, you can:

```
git clone https://github.com/andreipfeiffer/workshop-js-fundamentals.git ./
```

... if you don't have git, you can __[download this repo][download_repo]__ and unzip it in your PROJECT_NAME folder.

NOTE: if you have a GitHub account, you can fork this repo, so you can commit your personal changes.

### 3. Install dependencies

```
npm install
```

### 4. Run project

```
npm start
```

This should display a URL in the console, where you can load the project page.

[download_repo]: https://github.com/andreipfeiffer/workshop-js-fundamentals/archive/master.zip
[download_node]: https://nodejs.org/en/download/
[timjs]: http://timjs.ro
