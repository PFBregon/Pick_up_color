import React from 'react';


function ColorPicker ( { onChange, label, id, value } ) {

    return (
      <div className="color-picker">
        <label htmlFor={id}>{label}</label>
        <br />
        <input 
            onChange={onChange} 
            defaultValue={value}
            name={id} 
            id={id} 
            type="color"
            />
     </div>
    );
};


export default ColorPicker

