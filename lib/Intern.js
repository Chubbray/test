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
}