const p1 = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        resolve("p1 promise resolved")
    }, 5000)
})

const p2 = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        resolve("p2 promise resolved")
    }, 1000)
})

async function getData() {
    const data1 = await p1;
    console.log(data1);
    console.log("Hello baba");

    const data2 = await p2;
    console.log(data2);
    console.log("Hello baba 2");
}

getData()