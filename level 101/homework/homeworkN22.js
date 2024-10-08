class PhoneBook {
  constructor() {
    this.contacts = new Map();
  }

  addContact(name, phone) {
    this.contacts.set(phone, name);
  }

  getContact(phone) {
    return this.contacts.get(phone);
  }
}
