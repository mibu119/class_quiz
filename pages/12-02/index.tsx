import { Modal, Button } from "antd";
import { useState } from "react";

export default function AlertModalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const success = () => {
    Modal.success({
      title: "게시글 등록",
      content: "게시글이 등록되었습니다.",
    });
  };
  return (
    <>
      <Button onClick={success}>게시글 등록</Button>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <input type="password" placeholder="비밀번호 입력"></input>
      </Modal>
    </>
  );
}
