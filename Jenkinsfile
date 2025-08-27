pipeline {
    agent any
    parameters {
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: "enter the scripts path that you wanrt to execue ")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'electron'], description: "Choise the browser you want to execute")
    
    }
    
    
    stages{
        stage('Bulding'){
            steps{
                echo 'Building the apllication'
            }
            
        }
        stage('Testing'){
            steps{
                //bat 'npm install --legacy-peer-deps'
                bat 'npm ci --force'
                //bat 'npx cypress run --browser ${BROWSER} --spec ${SPEC}'
                bat 'npx cypress run'
            }
        }

        stage('Deploying'){
            steps{
                echo 'Deploy the apllication'
            }
            
        }
        stage('Archive Test Artifacts') {
            steps {
                //archiveArtifacts artifacts: 'cypress/videos/**, cypress/screenshots/**', allowEmptyArchive: true
                archiveArtifacts artifacts: 'cypress/reports/**'
            }
        }
    }
    post {
        always {
             publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, icon: '', keepAll: true, reportDir: '', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }

   }