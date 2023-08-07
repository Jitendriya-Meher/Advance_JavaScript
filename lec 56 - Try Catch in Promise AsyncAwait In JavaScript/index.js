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

    try{
        const rollno = await prom1;
        console.log("rollno: " , rollno);

        const data = await getBioData(rollno[9]);
        console.log("data: " , data);

        const data2 = await getBioData(rollno[0]);
        console.log("data2 : " , data2);

        return data2;
    }
    catch(err){
        console.log("error in async function : " , err);
    }
}

const asyncData = getData();
console.log("async data: " , asyncData);

asyncData.then( (data) => {
    console.log("\nthen async data : ",data);
}).catch( (err) => {
    console.log("error async data : ",err);
});