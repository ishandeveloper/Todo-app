pipeline {
    agent any
    stages {
      stage('Deploy App to Staging') {
        steps {
          sshPublisher(
            publishers: [
              sshPublisherDesc(
              configName: 'staging', transfers: [
                sshTransfer(
                  cleanRemote: false, 
                  excludes: '',
                  //execCommand: 'echo "Replace me by your build/install scripts"', 
                  execCommand: '''
                                cd todoapp
                                npm install
                                pm2 delete app 2> /dev/null
                                pm2 start -f app.js
                                ''', 
                  execTimeout: 120000, 
                  flatten: false, 
                  makeEmptyDirs: false, 
                  noDefaultExcludes: false, 
                  patternSeparator: '[, ]+', 
                  remoteDirectory: '', 
                  remoteDirectorySDF: false, 
                  removePrefix: '', 
                  sourceFiles: '**/*')], 
          usePromotionTimestamp: false, 
          useWorkspaceInPromotion: false, 
          verbose: true)])
        }
      }
      
      stage('Run Automated Tests') {
        steps {
              sh 'npm prune'
              sh 'npm cache clean --force'
              sh 'npm i'
              sh 'npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator'
              sh 'rm -f mochawesome.json'
              sh 'npx cypress run addtest --config baseUrl="http://35.189.246.57:8080" --browser ${BROWSER} --spec ${SPEC} --reporter mochawesome'
              sh 'npx mochawesome-merge cypress/results/*.json -o mochawesome-report/mochawesome.json'
              sh 'npx marge mochawesome-report/mochawesome.json'
          }
          post {
              success {
                  publishHTML (
                      target : [
                          allowMissing: false,
                          alwaysLinkToLastBuild: true,
                          keepAll: true,
                          reportDir: 'mochawesome-report',
                          reportFiles: 'mochawesome.html',
                          reportName: 'My Reports',
                          reportTitles: 'The Report'])

              }
          // One or more steps need to be included within the steps block.
          // echo "Run Automated Tests"
          }
      }
      
      stage('Perform manual testing') {
        steps {
          timeout(activity: true, time: 5) {
            input 'Proceed to production?'
          }
        }
      }
      
      stage('Release to Production') {
        steps {
          sshPublisher(
            publishers: [
              sshPublisherDesc(
              configName: 'production', transfers: [
                sshTransfer(
                  cleanRemote: false, 
                  excludes: '', 
                  execCommand: '''
                                cd todoapp
                                npm install
                                pm2 delete app 2> /dev/null
                                pm2 start -f app.js
                                ''', 
                  execTimeout: 120000, 
                  flatten: false, 
                  makeEmptyDirs: false, 
                  noDefaultExcludes: false, 
                  patternSeparator: '[, ]+', 
                  remoteDirectory: '', 
                  remoteDirectorySDF: false, 
                  removePrefix: '', 
                  sourceFiles: '*/')], 
          usePromotionTimestamp: false, 
          useWorkspaceInPromotion: false, 
          verbose: true)])
        }
      }
    }
    
}