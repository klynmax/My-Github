import React from 'react';

export default function Button({label}) {
    return (
        <button>{label}</button>
    )
}

Button.defaultProps = {
    label: 'Valor Padrão',
}