class Manager extends Employees {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
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
}