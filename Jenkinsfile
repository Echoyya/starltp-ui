@Library('k8s-build-pipline') _

initBuildStaticWebUI(env: ["starltp-dev","starltp-test1","starltp-test2"])

echo "用户选择的环境为：${params.env}"
echo "用户选择的部署操作为：${params.action}"
echo "用户选择的helm更新为：${params.isUpHelm}"

//发送邮件通知人列表。;号分割。如"penglj@startimes.com.cn;zhoup@startimes.com.cn"
def mailto="liuwx@startimes.com.cn;shangxb@startimes.com.cn"

buildStaticWebUI("newtranstar","fe",mailto,params)
