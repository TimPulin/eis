import { useEffect, useState } from 'react';
import {
  StyledPagination,
  StyledButton,
  StyledThreeDots,
} from './pagination-styles';
import PaginationItem from './PaginationItem';

type PaginationListPropsType = {
  limit: number;
  count: number;
  currentPageIndex: number;
  onClick: (pageNumber: number) => void;
};

const BTN_STATIC_AMOUNT = 6;

export default function PaginationList(props: PaginationListPropsType) {
  const { limit, count, currentPageIndex, onClick } = props;
  const [pagesCount, setPagesCount] = useState(0);
  const [pageIndexList, setPageIndexList] = useState<Array<number>>([]);
  const [firstThreeBtnIndex, setFirstThreeBtnIndex] = useState<Array<number>>(
    []
  );
  const [lastThreeBtnIndex, setLastThreeBtnIndex] = useState<Array<number>>([]);

  const findFirstBtn = () => {
    const firstThreeBtn = [
      pageIndexList[0],
      pageIndexList[1],
      pageIndexList[2],
    ];
    setFirstThreeBtnIndex(firstThreeBtn);
  };

  function findLastBtn() {
    const lastThreeBtn = [
      pageIndexList[pageIndexList.length - 3],
      pageIndexList[pageIndexList.length - 2],
      pageIndexList[pageIndexList.length - 1],
    ];
    setLastThreeBtnIndex(lastThreeBtn);
  }

  useEffect(() => {
    const pagesCount = Math.ceil(count / limit);
    const pageIndexListTemp = [...Array(pagesCount)].map((_, index) => index);
    setPagesCount(pagesCount);
    setPageIndexList(pageIndexListTemp);
  }, [count, limit]);

  useEffect(() => {
    if (pagesCount >= BTN_STATIC_AMOUNT) {
      findFirstBtn();
      findLastBtn();
    }
  }, [pagesCount]);

  if (pagesCount < BTN_STATIC_AMOUNT)
    return (
      <StyledPagination>
        {pagesCount > 0 && (
          <PaginationItem
            pageIndexList={pageIndexList}
            currentPageIndex={currentPageIndex}
            onClick={onClick}
          />
        )}
      </StyledPagination>
    );

  return (
    <StyledPagination>
      {/* NOTE отрисовка первых трех кнопок */}
      <PaginationItem
        pageIndexList={firstThreeBtnIndex}
        currentPageIndex={currentPageIndex}
        onClick={onClick}
      />

      {/* NOTE отрисовка дополнительных трех кнопок */}
      {currentPageIndex === 2 && pagesCount > BTN_STATIC_AMOUNT && (
        <PaginationItem
          pageIndexList={pageIndexList.slice(
            3,
            pageIndexList.length - BTN_STATIC_AMOUNT - 1 > 3
              ? 6
              : pageIndexList.length - BTN_STATIC_AMOUNT - 1
          )}
          currentPageIndex={currentPageIndex}
          onClick={onClick}
        />
      )}

      {currentPageIndex >= 5 &&
        currentPageIndex <= pagesCount - 4 &&
        pagesCount > 9 && (
          <>
            <li>
              <StyledThreeDots />
            </li>
            <PaginationItem
              pageIndexList={pageIndexList.slice(
                currentPageIndex - 1,
                currentPageIndex + 2
              )}
              currentPageIndex={currentPageIndex}
              onClick={onClick}
            />
          </>
        )}

      <li>
        <StyledThreeDots />
      </li>

      {/* NOTE отрисовка дополнительных трех кнопок */}
      {currentPageIndex === pageIndexList.length - 3 &&
        pagesCount > BTN_STATIC_AMOUNT && (
          <PaginationItem
            pageIndexList={pageIndexList.slice(
              pageIndexList.length - BTN_STATIC_AMOUNT - 1 > 3
                ? -6
                : (pageIndexList.length - BTN_STATIC_AMOUNT - 1) * -1,
              -3
            )}
            currentPageIndex={currentPageIndex}
            onClick={onClick}
          />
        )}

      {/* NOTE отрисовка последних трех кнопок */}
      <PaginationItem
        pageIndexList={lastThreeBtnIndex}
        currentPageIndex={currentPageIndex}
        onClick={onClick}
      />
    </StyledPagination>
  );
}
