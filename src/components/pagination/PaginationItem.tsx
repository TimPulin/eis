import { StyledButton } from './pagination-styles';

type PaginationItemPropsType = {
  pageIndexList: Array<number>;
  currentPageIndex: number;
  onClick: (pageNumber: number) => void;
};

export default function PaginationItem(props: PaginationItemPropsType) {
  const { pageIndexList, currentPageIndex, onClick } = props;
  return (
    <>
      {pageIndexList.map((pageIndex) => (
        <li key={pageIndex}>
          <StyledButton
            data-active={currentPageIndex === pageIndex}
            onClick={() => onClick(pageIndex)}
            disabled={currentPageIndex === pageIndex}
          >
            {pageIndex + 1}
          </StyledButton>
        </li>
      ))}
    </>
  );
}
