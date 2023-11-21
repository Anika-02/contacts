import React from 'react';
import { Formik, Form, Field } from 'formik';

import './contact-form.css'

const ContactForm = ({ onSubmit, onCancel }) => {
    return (
        <Formik
            initialValues={{
                name: '',
                username: '',
                phone: ''
            }}
            onSubmit={(values, { resetForm }) => {
                onSubmit(values);
                resetForm();
            }}
        >
            <Form className='form'>
                <div className='input'>
                    <label htmlFor="name" className='title'>First Name:</label>
                    <Field type="text" id="name" name="name" className='field' required />
                </div>

                <div className='input'>
                    <label htmlFor="username" className='title'>Last Name:</label>
                    <Field type="text" id="username" name="username" className='field' required />
                </div>

                <div className='input'>
                    <label htmlFor="phone" className='title'>Phone Number:</label>
                    <Field type="tel" id="phone" name="phone" className='field' required />
                </div>

                <div className='button'>
                    <button type="submit" className='saveBtn'>Save</button>
                    <button type="button" className='cancelBtn' onClick={onCancel}>Cancel</button>
                </div>
            </Form>
        </Formik>
    );
};

export default ContactForm;
