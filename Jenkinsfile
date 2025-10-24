pipeline {
agent any

tools {
nodejs &#39;NodeJS&#39;
}

parameters {
string(name: &#39;BRANCH_NAME&#39;, defaultValue: &#39;main&#39;)
string(name: &#39;BUILD_ENV&#39;, defaultValue: &#39;dev&#39;)
}

environment {
APP_VERSION = &quot;1.0.0&quot;
}

stages {
stage(&#39;Install Dependencies&#39;) {
steps {
echo &quot;Installing Node.js dependencies...&quot;
bat &quot;npm install&quot;
}
}

stage(&#39;Build&#39;) {
steps {
echo &quot;Building Calculator App v${APP_VERSION} on branch
${params.BRANCH_NAME}&quot;
}
}

stage(&#39;Unit Test&#39;) {
when {
expression { return params.BUILD_ENV == &#39;dev&#39; }
}
steps {
echo &#39;Running unit tests with Jest...&#39;
bat &quot;npm test&quot;
}
}

stage(&#39;Deploy&#39;) {
steps {
echo &#39;Simulating deployment of Node.js Calculator App...&#39;
}
}
}

post {
always {

echo &#39;Cleaning up workspace...&#39;
// deleteDir()
}
success {
echo &#39;Pipeline executed successfully.&#39;
}
failure {
echo &#39;Pipeline failed.&#39;
}
}
}
