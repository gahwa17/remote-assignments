function delayedResultPromise(n1, n2, delayTime) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(n1 + n2);
        }, delayTime);
    });
}

delayedResultPromise(4, 5, 3000).then(console.log);

async function main() {
    const result = await delayedResultPromise(4, 5, 3000);
    console.log(result);
}
main();