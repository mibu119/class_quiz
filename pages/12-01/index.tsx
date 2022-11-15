import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

export default function PostCodePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  //   const handleOk = () => {
  //     setIsModalOpen((prev) => !prev);
  //   };

  //   const handleCancel = () => {
  //     setIsModalOpen((prev) => !prev);
  //   };

  const handleComplete = (data: Address) => {
    // setIsModalOpen((prev) => !prev);
    onToggleModal();
  };

  return (
    <>
      <button onClick={onToggleModal}>우편 주소 검색</button>
      {isModalOpen && (
        <Modal
          title="주소 검색"
          open={true}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
