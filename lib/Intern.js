const Employees = require("./Employees");

class Intern extends Employees {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    intern() {
        console.log(
            "Name: " +
            this.internName +
            "\nID: " +
            this.internId +
            "\nEmail: " +
            this.internEmail +
            "\nSchool name: " +
            this.internSchool
        );
        console.log('\n-----------------\n');
    }

    getName() {
        return this.name;
      }
}

module.exports = Employees;