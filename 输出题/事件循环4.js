console.log(1);
setTimeout(function () { console.log(2); }, 0);
new Promise(resolve => {
    console.log(3);
    resolve();
}).then(() => {
    console.log(4);
})
console.log(5);

