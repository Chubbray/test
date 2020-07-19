class Manager {
    constructor(manager) {
        this.manager = manager;
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