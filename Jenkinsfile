pipeline {
    agent any
    parameters {
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: "enter the scripts path that you wanrt to execue ")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "Choise the browser you want to execute")
    
    }
    options{
        ansiColor('xterm')
    }
    
    stages{
        stage('Bulding'){
            echo "Building the apllication"
        }
        stage('Testing'){
            steps{
                bat "npn i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }

        stage('Deploying'){
            echo "Deploy the apllication"
        }
    }

   }