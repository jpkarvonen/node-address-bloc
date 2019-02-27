const inquirer = require('inquirer');

module.exports = class MenuController {
  constructor(){
    this.mainMenuQuestions = [
      {
       type: "list",
       name: "mainMenuChoice",
       message: "Please choose from an option below: ",
       choices: [
         "Add new contact",
         "Today's Date and Time",
         "Exit"
       ]
      }
    ];
    this.contacts = [];
  }

  main(){
    console.log(`Welcome to AddressBloc!`);
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch(response.mainMenuChoice){
        case "Add new contact":
          this.addContact();
          break;
        case "Today's Date and Time":
          this.getDate();
          break;
        case "Exit":
          this.exit();
        default:
          console.log("Invalid input");
          this.main();
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  clear(){
    console.log("\x1Bc");
  }

  addContact(){
    this.clear();
    console.log('addContact called');
    this.main();
  }

  exit(){
    this.clear();
    console.log("Thanks for using AddressBloc!");
    process.exit();
  }

  getDate(){
    this.clear();
    //Date
    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    //Time
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();

    console.log("The date is:");
    console.log(utc);
    console.log("The time is:");
    console.log(time);
    this.main();
  }
}
