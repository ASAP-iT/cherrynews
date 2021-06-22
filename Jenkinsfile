pipeline {
    agent any

    environment {
        PATH = "$PATH:/usr/local/bin"
    }

    stages {
        stage("Deploy Prod") {
            when {
                branch "master"
            }
            steps {
                notifyEvents message: "#Cherry_Frontend ⬇️ Started Npm Installing...", token: '7yi9o1VBd3mz-JP2JhQOICo3Y5zgPHGk'
                echo "Installing node js packages..."
                sh "npm install"
                notifyEvents message: '#Cherry_Frontend 🛠 Started Building...', token: '7yi9o1VBd3mz-JP2JhQOICo3Y5zgPHGk'
                echo "Building..."
                sh "npm run build"
                sh "cp -rf dist/* /var/www/cherry.asap-it/public"
                echo "Deployed!"
            }
        }
    }
    post {
        success {
            notifyEvents message: "#Cherry_Frontend 🥃 Deploy Succeed 😍💕😋😎️", token: '7yi9o1VBd3mz-JP2JhQOICo3Y5zgPHGk'
        }
        failure {
            notifyEvents message: '#Cherry_Frontend Deploy Failed  😩😑😖😳', token: '7yi9o1VBd3mz-JP2JhQOICo3Y5zgPHGk'
        }
    }
}
