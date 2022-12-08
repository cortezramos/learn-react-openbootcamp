import React, { useState } from 'react';
import PropTypes from 'prop-types';

const GreetingF = (props) => {

    const [age, setAge]  = useState(29);


    const birthday = () => {
        setAge(age + 1);
    }

    return (
        <div>
            <h1> Hola { props.name } desde funcion</h1>
            <h2> Tu edad es: { age } </h2>
            <button onClick={birthday}>Cumple Año</button>
        </div>
    );
};

GreetingF.propTypes = {
    name: PropTypes.string
};

export default GreetingF;
