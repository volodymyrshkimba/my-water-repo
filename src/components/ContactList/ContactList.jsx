import { useSelector } from "react-redux";

import Contact from "../Contact/Contact.jsx";

import { selectFilteredContacts } from "../../redux/contacts/selectors.js";

import css from "./ContactList.module.css";

function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {visibleContacts.map((contact) => {
        return (
          <li key={contact._id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
