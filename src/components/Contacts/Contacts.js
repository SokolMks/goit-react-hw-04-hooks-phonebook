import React from "react";
import PropTypes from "prop-types";
import style from "./Contacts.module.css";

const Contacts = ({
  contactsList,
  onDeleteContact,
  filterContacts,
  onChangeFilter,
}) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Contacts</h2>
        <ul className={style.list}>
          <label className={style.label}>
            Find contacts by name:
            <input
              type="text"
              name="name"
              value={filterContacts}
              onChange={onChangeFilter}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          {contactsList.map(({ id, name, number }) => (
            <li key={id} className={style.listElement}>
              <p>
                {name}: {number}
              </p>
              <button className={style.btn} onClick={() => onDeleteContact(id)}>
                Delete contact
              </button>
            </li>
          ))}
        </ul>

    </div>
  );
};

Contacts.propTypes = {
  contactsList: PropTypes.array.isRequired,
  mainListContact: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  filterContacts: PropTypes.string.isRequired,
};

export default Contacts;