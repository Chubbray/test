class Employees {
    constructor(Manager, Engineer, Intern) {
        this.Manager = Manager;
        this.Engineer = Engineer;
        this.Intern = Intern;
    }

    manager() {
        console.log(
            "Name: " +
             this.managerName +
              "\nID: " +
              this.managerId +
              "\nEmail: " +
              this.mnagerEmail +
              "\nOffice number: " +
              this.managerOfficeNumber
        );
        console.log('\n-----------------\n');
    }

    engineer() {
        console.log(
            "Name: " +
             this.engineerName +
              "\nID: " +
              this.engineerId +
              "\nEmail: " +
              this.engineerEmail +
              "\nOffice number: " +
              this.engineerGitHub
        );
        console.log('\n-----------------\n');
    }

    intern() {
        console.log(
            "Name: " +
             this.internName +
              "\nID: " +
              this.internId +
              "\nEmail: " +
              this.internEmail +
              "\nOffice number: " +
              this.internSchool
        );
        console.log('\n-----------------\n');
    }
}