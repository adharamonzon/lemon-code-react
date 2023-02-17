import React from 'react';
 import { Formik } from 'formik';
import { useField } from "formik";
import Box from '@mui/material/Box';
import TextField, {TextFieldProps} from '@mui/material/TextField';

export const TextFieldComponent: React.FC <TextFieldProps>= (props) => {
  const [field, meta] = useField(props.name);
  const textFieldProps = Boolean(field) ? field : props;
  const hasErr = Boolean(meta && meta.touched && meta.error);
  
  return (
    <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}}>
      <TextField variant="outlined"
                 {...props}
                 name={textFieldProps.name}
                 onChange={textFieldProps.onChange}
                 onBlur={textFieldProps.onBlur}
                 value={textFieldProps.value}
                 error={hasErr}
                 helperText={hasErr ? meta.error : ""}
                 fullWidth={true}
                 margin="normal"          
      />
    </Box>
  )
}