import { MouseEvent, useState } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./14.queries";
import PaginationPageUI from "./14.presenter";
import {
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../commons/types/generated/types";

export default function PaginationPage() {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardArgs
  >(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const [isPageOn, setIsPageOn] = useState(1);

  const lastPage =
    dataBoardsCount != null
      ? Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
      : 1;

  const onClickPageNumber = (event: MouseEvent<HTMLSpanElement>) => {
    refetch({ page: Number(event.currentTarget.id) });
    setIsPageOn(Number(event.currentTarget.id));
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      refetch({ page: startPage + 10 });
    }
  };
  return (
    <PaginationPageUI
      data={data}
      dataBoardsCount={dataBoardsCount}
      startPage={startPage}
      onClickPageNumber={onClickPageNumber}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      lastPage={lastPage}
      isPageOn={isPageOn}
    />
  );
}
