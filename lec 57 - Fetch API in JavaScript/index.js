
// The Fetch API is a modern JavaScript API that provides an interface for making network requests, such as fetching resources from a server. It is built into modern web browsers and is a more powerful and flexible alternative to the traditional XMLHttpRequest (XHR) for handling HTTP requests.

// The fetch() function returns a Promise that resolves to the Response object representing the response to the request. You can then use various methods and properties on the Response object to handle the response data and manage the request process.

fetch("	https://data.covid19india.org/v4/min/data.min.json")
.then(  (apidata) => {
    console.log("apidata: " , apidata);
    return apidata.json();
})
.then( (actualData) => {
    console.log(actualData);
})
.catch( (err) => {
    console.log("error: " , err);
});


// async await
const Api = async () => {

    try{
        const response = await fetch("	https://data.covid19india.org/v4/min/data.min.json");

        console.log("async respnse : " ,(response));

        const data = response.json();

        console.log("async data: " ,(data));
    }
    catch(err){
        console.log("error in sync : ", err);
    }
}

Api();