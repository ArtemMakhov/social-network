import React from 'react';
import { useSelector } from 'react-redux';
import { Users } from './Users';
import { Loader } from '../common/Loader/Loader';
import { getIsFetching} from '../../redux/selectors/users-selector';


type UsersPagePropsType = {
    pageTitle: string 
}

export const UsersPage: React.FC<UsersPagePropsType> = (props) => {
    const isFetching = useSelector(getIsFetching)
    return (
        <>
            <h2>{props.pageTitle}</h2>
            {isFetching ? <Loader /> : null}
            <Users />
        </>
    );
}





