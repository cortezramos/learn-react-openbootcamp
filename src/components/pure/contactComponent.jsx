import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contact }) => {
    return (
        <div>
            <h1> { contact.name } {contact.lastName} </h1>
            <h2> { contact.eMail } </h2>
            <h3> { contact.connected ?  'EN LINEA' : 'NO DISPONIBLE' } </h3>
        </div>
    );
};


ContactComponent.propTypes = {
    contac: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
