import { Contact } from './Dialog.styled';


export const Dialog = ({ name, id }) => {

    return (
        <div><Contact to={id}>{name}</Contact></div>
    )
};