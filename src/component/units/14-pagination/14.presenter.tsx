import { NextButton, PageNum, PrevButton } from "./14.styles";
import { IQuery } from "../../../commons/types/generated/types";
import { MouseEvent } from "react";

interface PaginationPageUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  dataBoardsCount?: Pick<IQuery, "fetchBoardsCount">;
  startPage: number;
  onClickPageNumber: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  lastPage: number;
  isPageOn: number;
}

export default function PaginationPageUI(props: PaginationPageUIProps) {
  return (
    <>
      <div style={{ padding: "50px", fontSize: "18px" }}>
        {props.data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.contents}</span>
          </div>
        ))}
        <PrevButton
          onClick={props.onClickPrevPage}
          disabled={props.startPage <= 1}
        >
          이전페이지
        </PrevButton>
        {new Array(10).fill(props.startPage).map(
          (_, i) =>
            i + props.startPage <= props.lastPage && (
              <PageNum
                key={i + props.startPage}
                id={String(i + props.startPage)}
                onClick={props.onClickPageNumber}
                isPageOn={props.isPageOn === props.startPage + i ? true : false}
              >
                {i + props.startPage}
              </PageNum>
            )
        )}
        <NextButton
          onClick={props.onClickNextPage}
          disabled={props.startPage + 10 > props.lastPage}
        >
          다음페이지
        </NextButton>
      </div>
    </>
  );
}
