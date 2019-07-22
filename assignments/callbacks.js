/*Stretch
Move on to tomorrow's content and start studying callbacks, write a few of your own to get the hang of it.*/

const addTwoNumbers = (num1In, num2In) => {
    console.log(`${num1In} + ${num2In} = ${num1In + num2In}`);
};

const needCalculationsDone = (callback) => {
    const num1 = 5;
    const num2 = 10;

    callback(num1, num2);
    
};

needCalculationsDone (addTwoNumbers);

/**********************************************************************************************/

const returnPersonalizedMsg = (nameIn) => {
    console.log(`Hello ${nameIn}, Thanks for Joining us.`);

};

const newUser = (callback) => {
    const name = "John Doe";

    callback(name);
}

newUser(returnPersonalizedMsg);

/**********************************************************************************************/
