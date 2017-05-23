def appName = '42network'
def repository = 'https://744045856567.dkr.ecr.us-east-1.amazonaws.com'
def imageTag = "${env.BRANCH_NAME}.${env.BUILD_NUMBER}"
def label = "buildpod.${env.JOB_NAME}.${imageTag}".replace('-', '_').replace('/', '_')

podTemplate(
  label: label,
  containers: [
    containerTemplate(
      name: 'docker',
      image: 'docker',
      command: 'cat',
      ttyEnabled: true,
    ),
  ], volumes: [
    hostPathVolume(hostPath: '/var/run/docker.sock', mountPath: '/var/run/docker.sock'),
  ]) {
    node (label) {
      try {
        notifyBuild('STARTED')

        container('docker') {
          stage('Checkout SCM') {
            checkout scm
          }

          stage('Docker build') {
            sh """
              docker build -t ${appName} .
            """
          }

          stage('Docker push') {
            docker.withRegistry(repository, 'ecr:us-east-1:aws-ecr') {
              docker.image(appName).push(imageTag)
            }
            slackSend channel: '#homepage', color: 'good', message: "Build ${imageTag} - Success. Pushed to registry. <${env.BUILD_URL}|view>"
          }
        }
      } catch(e) {
        currentBuild.result = "FAILED"
        throw e
      } finally {
        notifyBuild(currentBuild.result)
      }
    }
}

def notifyBuild(String buildStatus = 'STARTED') {
  buildStatus = buildStatus ?: 'SUCCESS'

  def color = 'good'
  def summary = "${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'"

  if (buildStatus == 'STARTED') {
    color = 'warning'
  } else if (buildStatus == 'SUCCESS') {
    color = 'good'
  } else {
    color = 'danger'
  }

  slackSend(color: color, channel: '#homepage', message: summary)
}
