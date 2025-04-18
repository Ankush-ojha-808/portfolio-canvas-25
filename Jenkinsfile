pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds') // Jenkins credentials ID
        IMAGE_NAME = 'your-dockerhub-username/portfolio-canvas-25'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Ankush-ojha-808/portfolio-canvas-25.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${IMAGE_NAME}")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKERHUB_CREDENTIALS) {
                        dockerImage.push('latest')
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh 'docker stop portfolio-canvas-25 || true'
                    sh 'docker rm portfolio-canvas-25 || true'
                    sh "docker run -d -p 3000:80 --name portfolio-canvas-25 ${IMAGE_NAME}:latest"
                }
            }
        }
    }
}
