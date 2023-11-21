import React, { useState, useEffect } from 'react';
import ContactForm from '../Contact Form/ContactForm';
import './contact-list.css';

const ContactsList = () => {
    const [contacts, setContacts] = useState([]);
    const [isFormVisible, setFormVisible] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setContacts(data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    const deleteContact = (id) => {
        const updatedContacts = contacts.filter(contact => contact.id !== id);
        setContacts(updatedContacts);
    };

    const addContact = (newContact) => {
        setContacts([...contacts, newContact]);
        setFormVisible(false);
    };

    return (
        <div>
            <div className='main-container'>
                <h1>Contacts</h1>
                <table>
                    <thead>
                    <tr className='headings'>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Options</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contacts.map(contact => (
                        <tr key={contact.id}>
                            <td>{contact.name}</td>
                            <td>{contact.username}</td>
                            <td>{contact.phone}</td>
                            <td className='optionTd'>
                                <button onClick={() => deleteContact(contact.id)} className='deleteBtn'>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div className="form-container">
                {isFormVisible ? (
                    <ContactForm onSubmit={addContact} onCancel={() => setFormVisible(false)} />
                ) : (
                    <button onClick={() => setFormVisible(true)} className='addBtn'>Add Contact</button>
                )}
            </div>

        </div>
    );
};

export default ContactsList;
