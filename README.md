# qrunner-test
a testing for qrunner app.

### qrunner
what is qrunner:
is an app to run a script via a dashboard. 
- docs: https://docs.qrunner.xyz/
- test app: https://qrunner-staging.web.app/
- example repo: https://github.com/qrunner-dev/qrunner-example

### what's required for qrunner app
- yaml configuration: 
  in root folder create `QrunnerFile.yaml` that contains actions:
    - name
    - script location from root repository
    - base (currently `node:15:14.0` or `golang:1.16.4`)
    - description of the script 
- a script that linked with the yaml config actions
