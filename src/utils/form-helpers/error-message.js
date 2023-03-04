import {  ErrorMessage } from 'formik';
import styled from 'styled-components';

const ErrorText = styled.p`
  color: blue;
`

export const FormError = ({ name }) => {
  return (
    <ErrorMessage name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  )
};