
import { Selected } from '../../Users/Users.styled';


export const Paginator = ({totalUsersCount,pageSize,onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
            <div>
                {pages.map(p => {
                  return <Selected
                    onClick={() => { onPageChanged(p) }}>
                    {p}
                  </Selected>
                })}
            </div>
           
    );
};