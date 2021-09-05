import { useState, useEffect } from "react";
import shortid from "shortid";
import Section from "./components/Section/Section";
import PhoneBook from "./components/Phonebook/Phonebook";
import Contacts from "./components/Contacts/Contacts";

function AppHook() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const cont = localStorage.getItem("contacts");
    const parsContacts = JSON.parse(cont);

    if(parsContacts) {
      setContacts(parsContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const dataSubmitForm = ({ name, number }) => {
    const arrName = contacts.map((contact) => contact.name.toLowerCase());
    const checkName = arrName.includes(name.toLowerCase());

    if(checkName) {
      alert("This name is already in the list of contacts!");
      return;
    } else {
      const elContact = {
        id: shortid.generate(),
        name,
        number
      };

      setContacts((prevState) => [elContact, ...prevState]);
    }
  };

  const changeFilterContacts = (e) => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );
  };

  const normalazFilter = filter.toLowerCase();
  const filterListContacts = contacts.filter((contact) => 
    contact.name.toLowerCase().includes(normalazFilter)
  );

  return (
    <Section>
      <PhoneBook submitForm={dataSubmitForm} />

      <Contacts
        mainListContact={contacts}
        onChangeFilter={changeFilterContacts}
        filterContacts={filter}
        contactsList={filterListContacts}
        onDeleteContact={deleteContact}
      />
    </Section>
  );
}
export default AppHook;