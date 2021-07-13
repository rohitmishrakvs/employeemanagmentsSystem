import React from 'react'
import { TextField } from '@material-ui/core';

export default function Input(props) {

    const {type, name, label, value,error=null, onChange } = props;
    return (
        <TextField
            variant="outlined"
            fullWidth
            type={type}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
        />
    )
}