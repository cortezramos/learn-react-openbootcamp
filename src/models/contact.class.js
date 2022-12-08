export class Contact {
    name = '';
    lastName = '';
    eMail = '';
    connected = false;

    constructor(name, lastName, eMail, connected) {
        this.name = name;
        this.lastName = lastName;
        this.eMail = eMail;
        this.connected = connected;
    }
}