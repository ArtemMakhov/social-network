
import { useState } from 'react';
import { Selected } from '../../Users/Users.styled';


export const Paginator = ({totalItemsCount,pageSize,currentPage,onPageChanged, portionSize =10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
  }
  
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

    return (
      <div>
        {portionNumber > 1 &&
          <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>}
        {pages
          .filter(p=> p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map(p => {
            return <Selected
                    key={p}
                    onClick={() => { onPageChanged(p) }}>
                    {p}
                  </Selected>
          })}
        {portionCount > portionNumber &&
          <button onClick={() => { setPortionNumber(portionNumber + 1) }}>next</button>}
            </div>
           
    );
};