import { useEffect, useState } from 'react';
import { StyledPagination, StyledButton } from './pagination-styles';

type PaginationPropsType = {
  limit: number;
  count: number;
  currentPage: number;
  onClick: (pageNumber: number) => void;
};

export default function Pagination(props: PaginationPropsType) {
  const { limit, count, currentPage, onClick } = props;
  const [pagesCount, setPagesCount] = useState(0);

  useEffect(() => {
    setPagesCount(Math.ceil(count / limit));
  });

  return (
    <StyledPagination>
      {pagesCount > 0 &&
        [...Array(pagesCount)].map((_, index) => (
          <li key={index}>
            <StyledButton
              data-active={currentPage === index}
              onClick={() => onClick(index)}
              disabled={currentPage === index}
            >
              {index + 1}
            </StyledButton>
          </li>
        ))}
    </StyledPagination>
  );
}
