import styled from "@emotion/styled";

export const Container = styled.div`
  // css와 연결하는 코드
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  padding: 50px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  background-color: white;
`;

export const PhoneHead = styled.div`
  object-fit: contain;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  border-bottom: 1px solid #cacaca;
`;

export const SearchIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 20px 0px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0px;
`;

export const HeaderName = styled.div`
  font-size: 40px;
  font-weight: 700;
`;

export const Profile = styled.div`
  display: flex;
  width: 180px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const ProfilePhoto = styled.div``;

export const ProfileName = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px 0px;
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 30px;
  font-weight: 700;
  color: #cacaca;
`;

export const MenuListName = styled.div`
  display: flex;
  margin-right: 50px;
`;

export const PinkMenuName = styled.span`
  color: #ff1b6d;
  border-bottom: 2px solid #ff1b6d;
`;

export const Body = styled.div`
  padding: 0px 50px;
  display: flex;
  flex-direction: column;
`;

export const ListBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
`;

export const ListQuestion = styled.div`
  padding: 10px 0px;
`;

export const ListButton = styled.img`
  width: 24px;
  height: 13px;
`;

export const ListNumber = styled.div`
  color: #adadad;
  font-size: 18px;
`;

export const ListTitle = styled.div`
  font-size: 24px;
  font-weight: 400;
  padding: 10px 0px;
`;

export const AppMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: space-evenly;
  border-top: 1px solid #dcdcdc;
`;

export const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
`;
