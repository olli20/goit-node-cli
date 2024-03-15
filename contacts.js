const fs = require("fs").promises;
const path = require("path");

const contactsPath = "./db/contacts.json";

async function listContacts() {
  const contacts = await fs.readFile(contactsPath, "utf-8"); // Повертає масив контактів.
  return JSON.parse(contacts);
}

async function getContactById(contactId) {
  const contacts = await fs.readFile(contactsPath, "utf-8");
  const parsedContacts = JSON.parse(contacts);
  parsedContacts.map((item) => {
    if (contactId === item.id) {
      return item;
    }
  });
  return null;
  // Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

async function removeContact(contactId) {
  // Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
  // Повертає об'єкт доданого контакту (з id).
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
