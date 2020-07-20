const Employees = require("./Employees");

class Engineer extends Employees {
    constructor(name, id, email, GitHub) {
        super(name, id, email);
        this.GitHub = GitHub;
    }
    engineer() {
        console.log(
            "Name: " +
            this.engineerName +
            "\nID: " +
            this.engineerId +
            "\nEmail: " +
            this.engineerEmail +
            "\nGitHub name: " +
            this.engineerGitHub
        );
        console.log('\n-----------------\n');
    }

    getName() {
        return this.name;
      }
}

module.exports = Employees;