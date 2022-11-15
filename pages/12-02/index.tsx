import { Modal, Button } from "antd";

export default function AlertModalPage() {
  const success = () => {
    Modal.success({
      title: "게시글 등록",
      content: "게시글이 등록되었습니다.",
    });
  };
  return (
    <>
      <Button onClick={success}>게시글 등록</Button>
    </>
  );
}
