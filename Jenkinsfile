pipeline {
    environment {
        buildVersion='1.0.0'
        registryHost = "artifactory:8082"
        registryHostUrl = "http://artifactory:8082"
        imageName='a2i/superset'
        registry = "artifactory:8082/a2i/superset"
        registryCredential = 'Nexus'
        registryToolName = 'Docker'
        newVersion='latest'
        gitUrl='https://github.com/saidylive/data-leadership.git'
        gitCredId='Github account Credentials'
        gitBranch='main'
    }
    
    agent {
        label 'master'
    }
    
    stages {
        stage('Repository Clone') {
            steps {
                git branch: "${gitBranch}", changelog: false, credentialsId: "${gitCredId}", poll: false, url: "${gitUrl}"
            }
        }
        
        stage('Build & Publish') {
            steps {
                script{
                    withDockerRegistry(credentialsId: "${registryCredential}", toolName: "${registryToolName}", url: "${registryHostUrl}") {
                        def customImage = docker.build registry + ":$buildVersion"
                        customImage.push()
                        customImage.push("${newVersion}")
                        sh "docker rmi --force \$(docker images -q ${customImage.id} | uniq)"
                        // sh "docker logout ${registryHost}"
                    }
                }
            }
        }
    }
}
