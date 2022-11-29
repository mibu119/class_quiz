import { useRecoilState } from "recoil";
import { isEditState } from "../../../../commons/stores";

export default function WriteUI() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  return (
    <>
      <h1>{isEdit ? "수정하기" : "등록하기"}</h1>
    </>
  );
}
