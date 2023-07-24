// async 函数必然返回 promise
// 手动控制多个异步请求的顺序以及结果的时候，会有些用处
async function* fetchInSeries([...urls]) {
  for (const url of urls) {
    const res = await fetch(url)
    // g.next().value 得到 res.json()
    yield res.json()
  }
}

async function getData() {
  const g = fetchInSeries(['1.json', '2.json', '3.json'])
  let result
  while (!(result = await g.next()).done) {
    console.log(result.value);
  }
}

getData()