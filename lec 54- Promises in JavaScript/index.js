
// Promises are a fundamental concept in JavaScript used to handle asynchronous operations in a more organized and manageable way. Promises provide a structured approach to dealing with asynchronous tasks, such as making network requests, reading files, or executing timed operations, while allowing you to handle success and error cases more clearly.
// A Promise represents a value that might be available now, in the future, or never. It has three possible states:

// Pending: The initial state, indicating that the asynchronous operation is still ongoing.
// Fulfilled: The state when the operation completed successfully, and the promise has a resolved value.
// Rejected: The state when the operation encountered an error, and the promise has a reason for rejection.


const prom1 = new Promise( (resolve, reject) => {

    setTimeout( () => {
        const roll_no = [1,2,3,4,5,6,7,8,9,10,11];
        console.log("inside promise");
        // resolve -> then
        resolve(roll_no);
        // reject -> catch
        reject(`Error while resolving`);
    },3000);

});

// promise consume
prom1.then( (rollNo) => {
    console.log("roll number : " , rollNo);
}).catch( (err) => {
    console.log(err);
});


// promises as objects
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

prom1.then( (rollNo) => {
    console.log("roll number : " , rollNo);

    getBioData(rollNo[5])
    .then( (str) => {
        console.log("inside getBioData : " , str);
    }).catch( (err) => {
        console.log("error : " , err);
    });

}).catch( (err) => {
    console.log(err);
});




prom1.then( (rollNo) => {
    console.log("roll number : " , rollNo);

    return getBioData(rollNo[5]);

}).then( (str) => {
    console.log("inside getBioData : " , str);
}).catch( (err) => {
    console.log(err);
});