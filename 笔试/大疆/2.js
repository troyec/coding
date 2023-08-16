let str = "http://localhost:8080/hello-world?sponsor=dji&group=enterprise";
let protocol = str.split("://")[0];
console.log(`protocol=${protocol}:`);
let res = str.split("://")[1];
let host = res.split("/")[0];
let [hostName, port] = host.split(":");
console.log(`hostname=${hostName}`);
port ? console.log(`port=${port}`) : console.log(`port=`);
let [path, params] = res.split("/").slice(1).join("/").split("?");
console.log(`pathname=${path}`);
if (params) {
  let paramsArr = params.split("&");
  for (let item of paramsArr) {
    console.log(`search:${item}`);
  }
}
