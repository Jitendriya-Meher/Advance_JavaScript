
// The event loop is a fundamental concept in JavaScript that plays a crucial role in managing asynchronous operations and ensuring that non-blocking behavior is maintained within the language.

// JavaScript is single-threaded, meaning it executes one piece of code at a time. However, it often needs to handle tasks that can take some time to complete, such as fetching data from a server, reading files, or waiting for user input. To handle these tasks efficiently without blocking the main thread, JavaScript uses the event loop.

// Here's how the event loop works:

// Call Stack:
// The main thread of JavaScript maintains a call stack, which is a data structure that keeps track of function calls and their execution contexts. When a function is called, a new frame is added to the top of the stack. When a function completes, its frame is removed from the stack.


// Web APIs and Asynchronous Operations:
// JavaScript has built-in Web APIs (provided by the browser or the environment) that allow you to perform asynchronous tasks, such as making network requests, setting timers with setTimeout, or interacting with the DOM. When you use these APIs, the corresponding tasks are offloaded to the Web APIs and are executed asynchronously.


// Callback Queue:
// When an asynchronous task (e.g., a timer or a network request) is completed, a callback function is placed in the callback queue. This queue holds the callback functions waiting to be executed.


// Event Loop:
// The event loop continuously checks the callback queue and the call stack. If the call stack is empty, it takes the first callback from the queue and pushes it onto the call stack, starting its execution.


// Execution and Clearing the Call Stack:
// As the callback function executes, it can call other functions. Each function call is added to the call stack. The event loop continues this process, moving functions from the callback queue to the call stack, until the call stack is empty.



const fun2 = () => {

    setTimeout( () => {
        console.log("fun 2 is starting");
    },3000);
}

const fun1 = () => {
    console.log("fun1 is starting");
    fun2();
    console.log("fun1 is ending");
}

fun1();
