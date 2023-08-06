
// "Callback Hell," also known as the "Pyramid of Doom," refers to a situation in JavaScript where multiple layers of nested callbacks are used to handle asynchronous operations. This can lead to code that is difficult to read, maintain, and debug, as the indentation level increases, making the code harder to follow.

const getRollNo = () => {

    setTimeout(() => {

        console.log("\nApi gettting roll no");
        let rollNo = [1,2,3,4,5,6,7,8,9,10];
        console.log("Roll numbers : ",rollNo);

        setTimeout( (rl) => {

            const bioData = {
                name:"jiten",
                age:26,
                id:rl
            }

            console.log("\nbio DATA : ",bioData);

            setTimeout( (bd) => {

                bioData.gender = "male";

                console.log(`\nHii ${bd.name} , age = ${bd.age} , id = ${bd.id} , gender = ${bd.gender}`);

            },2000,bioData);

        },2000,rollNo[5]);

    },2000);

}

getRollNo();