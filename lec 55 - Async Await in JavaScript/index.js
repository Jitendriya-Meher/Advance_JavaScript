
// async/await is a modern syntax for handling asynchronous operations in a more synchronous-like manner. It was introduced in ES2017 (ES8) and is built on top of Promises. The purpose of async/await is to simplify the way you write and manage asynchronous code, making it easier to read, write, and understand.

// async Function Declaration:
// When you declare a function with the async keyword, it automatically returns a Promise. This means that the function's return value will be wrapped in a Promise, allowing you to use await inside the function to pause its execution until a Promise is resolved or rejected.

// await Keyword:
// Inside an async function, you can use the await keyword to pause the execution of the function until a Promise is settled (either resolved or rejected). This allows you to write asynchronous code in a more linear and sequential manner, making it appear as if it were synchronous.

// Error Handling:
// You can handle errors within an async function using regular try/catch blocks, just like with synchronous code.


// async makes a function return a Promise
// await makes a function wait for a Promise


const prom1 = new Promise( (resolve, reject) => {

    setTimeout( () => {
        const roll_no = [1,2,3,4,5,6,7,8,9,10,11];
        console.log("inside promise");
        // resolve -> then
        resolve(roll_no);
        // reject -> catch
        // reject(`Error while resolving`);
    },3000);

});

const getBioData = (indexdata) => {

    return new Promise ( (resolve, reject) => {

        setTimeout( (index) => {
            
            let bioData = {
                name:"Jitendriya Meher",
                age:21
            }

            resolve(`my name = ${bioData.name}, age = ${bioData.age}, index = ${index}`);

            reject(`error in getBioData function`);

        },3000, indexdata);

    });
}


async function getData(){

    const rollno = await prom1;
    console.log("rollno: " , rollno);

    const data = await getBioData(rollno[9]);
    console.log("data: " , data);

    const data2 = await getBioData(rollno[0]);
    console.log("data2 : " , data2);

    return data2;
}

const asyncData = getData();
console.log("async data: " , asyncData);

asyncData.then( (data) => {
    console.log("\nthen async data : ",data);
}).catch( (err) => {
    console.log("error async data : ",err);
});