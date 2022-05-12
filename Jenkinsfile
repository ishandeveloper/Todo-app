pipeline {
    agent any
    stages {
      stage('Deploy App to Staging') {
        steps {
          sshPublisher(
            publishers: 
            [sshPublisherDesc(
              configName: 'staging', transfers: [
                sshTransfer(
                  cleanRemote: false, 
                  excludes: '',
                  execCommand: 'echo "Replace me by your build/install scripts"', 
                  //execCommand: 'node app.js', 
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
          verbose: false)])
        }
      }
      
      stage('Run Automated Tests') {
        steps {
          // One or more steps need to be included within the steps block.
          echo "Run Automated Tests"
        }
      }
      
      stage('Perform Manual Testing') {
        steps {
          // One or more steps need to be included within the steps block.
          echo "Perform Manual Testing"
        }
      }
      
      stage('Release to Production') {
        steps {
          // One or more steps need to be included within the steps block.
          echo "Release to Production"
        }
      }
    }
    
}