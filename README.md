
# Medium article on using Nightwatch.js with CircleCI on openweathermap.org

Article link -  "insert here"

## Content
- [Installation](#installation)
- [Execute Test](#execute)
- [Result](#result)

## Pre-requisite

- [x] Node.js
- [x] Visual Studio code

 Below are few VS code extension I use -
  _html-snippets, path-intellisense, vscode-eslint, docthis, indent-rainbowtrailing-spaces, stylelint, open-in-browser, vscode-import-cost, html-css-class-completion, Run as._
 
 ## Installation
1. Create empty Folder ::
`D:\> mkdir medium-nw-ci`
2. Clone the repository ::
`D:\medium-nw-ci> git clone https://github.com/rajeevbarde/medium-weather-nightwatch.git`
3. Change directory and make folder::
`cd medium-weather-nightwatch`
`mkdir Result` 
4. Install dependencies (2-5 min, one time setup) ::
 `npm install`

## Execute Test
- syntax : `node nightwatch.js Scenarios`

## Test Result
- HTML result are stored in 'Result' folder