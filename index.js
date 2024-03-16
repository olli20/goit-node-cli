const { program } = require("commander");
const contacts = require("./contacts.js");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const listContacts = await contacts.listContacts();
      console.table(listContacts);
      break;

    case "get":
      const itemById = await contacts.getContactById(id); // ... id
      console.log(itemById);
      break;

    case "add":
      const addItem = await contacts.addContact(name, email, phone); // ... name email phone
      console.log(addItem);
      break;

    case "remove":
      const deleteItem = await contacts.removeContact(id); // ... id
      console.log(deleteItem);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
