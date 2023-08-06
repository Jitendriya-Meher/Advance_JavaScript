
// Synchronous (Sync) Operations:
// Synchronous operations are executed one after another, in a sequential and blocking manner. Each operation must complete before the next one can begin. This can sometimes lead to the program waiting for a particular operation to finish before proceeding, which can potentially cause delays or "blocking" behavior.

console.log("\nSynchronous operation");
const func2 = () => {

    console.log("fun2 is starting");

    console.log("fun2 is ending");
}

const func1 = () => {
    console.log("fun1 is starting");
    func2();
    console.log("fun1 is ending");
}

func1();

// Asynchronous (Async) Operations:
// Asynchronous operations allow tasks to be executed independently and concurrently without waiting for the previous task to finish. This is particularly useful for tasks that might take time, such as network requests, file I/O, or other potentially slow operations. In asynchronous programming, you initiate a task and continue with other operations while waiting for the task to complete. Callbacks, promises, and async/await are common patterns used to manage asynchronous operations in JavaScript.

console.log("\nAsynchronous operation");

const fun2 = () => {

    console.log("fun2 is starting");

    setTimeout( ()=> {
        console.log("fun2 setTimeout 1");
    },3000);
    setTimeout( ()=> {
        console.log("fun2 setTimeout 2");
    },2000);
    setTimeout( ()=> {
        console.log("fun2 setTimeout 3");
    },1000);

    console.log("fun2 is ending");
}

const fun1 = () => {
    console.log("fun1 is starting");
    fun2();
    console.log("fun1 is ending");
}

fun1();

