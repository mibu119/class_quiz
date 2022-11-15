import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

export default function PostCodePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchResult, setSearchResult] = useState("");

  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleComplete = (data: Address) => {
    console.log(data);
    onToggleModal();
    setSearchResult(data.address);
  };

  //   const onChangeModal = (event) => {
  //     setSearchResult(event.currentTarget.id);
  //   };

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
      <div>{searchResult}</div>
    </>
  );
}
