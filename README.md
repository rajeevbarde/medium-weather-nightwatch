
# Medium article on using Nightwatch.js with CircleCI on openweathermap.org

Article link -  "insert here"

## Content
- [Installation](#installation)
- [Execute Test](#Execute_Test)
- [Result](#result)
- [CI-CD](#CI-CD)
 
 ## Installation (On Windows Machine)
1. Create empty Folder ::
`D:\>mkdir medium-nw-ci`
2. Clone the repository ::
`D:\medium-nw-ci> git clone https://github.com/rajeevbarde/medium-weather-nightwatch.git`
3. Change directory and make Result folder::
`cd medium-weather-nightwatch && mkdir Result`
4. Install dependencies (2-5 min, one time setup) ::
 `npm install`

## Execute Test
Below command will execute acceptance criteria under folder Scenarios
- chrome : `node nightwatch.js Scenarios`
- firefox : `node nightwatch.js Scenarios` -e firefox


## Test Result
- HTML result are stored in 'Result' folder

## CI-CD
-  CircleCI - https://circleci.com/gh/rajeevbarde/medium-weather-nightwatch
- HMTL Reports are under menu - Artifacts
