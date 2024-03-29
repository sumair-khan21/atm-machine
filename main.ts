// #! /usr/bin/env node
// import inquirer from "inquirer";

// let myBalance = 10000; //dollar
// let myPin = 1234;

// let pinAnswer = await inquirer.prompt([
//   {
//     name: "pin",
//     message: "Enter your pin code",
//     type: "number",
//   },
// ]);

// if (pinAnswer.pin === myPin) {
//   console.log(`Correct Pin Code!!`);

//   let operationAns = await inquirer.prompt([
//     {
//       name: "operations",
//       message: "please select option",
//       type: "list",
//       choices: ["withdraw", "check balance", "fastcash"],
//     },
//   ]);

//   if (operationAns.operations === "withdraw") {
//     let amountAns = await inquirer.prompt([
//       {
//         name: "amount",
//         message: "enter your amount",
//         type: "number",
//       },
//     ]);

//  if(amountAns.amount > myBalance){
//   console.log("insufficnt balance")
//  }


//    else{
//       myBalance -= amountAns.amount;
//       console.log(`your current balance is: ${myBalance}`);
//    }
//   } else if (operationAns.operations === "check balance") {
//     console.log(`your current balance is: ${myBalance}`);
//   }
//   else if (operationAns.operations === "fastcash") {
//       let fast1 = await inquirer.prompt([{
//             name:"cash2",
//             message:"select your amount",
//             type:"list",
//             choices:["1000", "2000", "3000","4000","5000" ]
//       }])

//        myBalance -= fast1.cash2
//       console.log(`your current balance is: ${myBalance}`);
//     }
// } else {
//   console.log("Incorrect Pin Code");
// }



// ---------------------------------------------------------------------------------------------


import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 4321;

let pincode = await inquirer.prompt([{
      name:"sms",
      message:"enter your pin",
      type:"number"
}])
if(pincode.sms === myPin){
      console.log("correct");

      let operationAns = await inquirer.prompt([{
            name:"operation",
            message:"select one option",
            type:"list",
            choices:["withdraw", "checkbalance", "fastcash"]
      }]);
      if(operationAns.operation === "withdraw"){

            let amountAns = inquirer.prompt([{
                  name:"amount",
                  message:"enter your amount",
                  type:"number"
            }])
            if(amountAns.amount > myBalance){
                     console.log("insufficnt balance")
                   }else{
                        myBalance -= amountAns.amount
                   }
      } else if(operationAns.operation === "checkbalance"){
            console.log(`your current balance is ${myBalance}`)
      } else if(operationAns.operation ==="fastcash"){
            let fast = await inquirer.prompt([{
                  name:"cash",
                  message:"fast cash",
                  type:"number",
                  choices:["1000", "2000"]
            }])
            myBalance -= fast.cash
            console.log(`your remaining balance is: ${myBalance}`);
      }

      
}
else{
      console.log("incorrect pin")
}












