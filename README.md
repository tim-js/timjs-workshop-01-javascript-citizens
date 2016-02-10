#JavaScript Fundamentals Workshop

Welcome to the first JavaScript workshop, organized by tim.js.

## Prerequisites

Here's a list of things you need:

* a laptop
* a code editor
* [Node.js][download_node] installed on your computer (version 4.x or 5.x)
* _git installed on your computer (this is optional)_

## Setup

Here are some steps you can follow to setup the workshop skeleton.
All these commands need to be run from the command line (shell/terminal): iTerm on Mac, terminal on Ubuntu, cmd/GitBash on Win.

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

### 3. Install dependencies

```
npm install
```

### 4. Run project

```
gulp
```

This should display a URL in the console, where you can load the project page.

[download_repo]: https://github.com/andreipfeiffer/workshop-js-fundamentals/archive/master.zip
[download_node]: https://nodejs.org/en/download/
