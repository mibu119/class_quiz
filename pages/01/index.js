import {
  AppMenu,
  Body,
  Container,
  Head,
  Header,
  HeaderName,
  ListBox,
  ListButton,
  ListNumber,
  ListQuestion,
  ListTitle,
  Menu,
  MenuBox,
  MenuList,
  MenuListName,
  PhoneHead,
  PinkMenuName,
  Profile,
  ProfileName,
  SearchIcon,
  Wrapper,
} from "../../styles/emotion";

export default function FAQPage() {
  // 자바스크립트 작성하는 공간

  return (
    // html 작성하는 공간
    <Container>
      <Wrapper>
        <PhoneHead>
          <img src="/my_event.png"></img>
        </PhoneHead>
        <Head>
          <SearchIcon>
            <img src="/main_search_black.png"></img>
          </SearchIcon>
          <Header>
            <HeaderName>마이</HeaderName>
            <Profile>
              <img class="profilePhoto" src="/profile_image.png"></img>
              <ProfileName>임정아</ProfileName>
              <img class="profileVector" src="/Vector.png"></img>
            </Profile>
          </Header>
          <Menu>
            <MenuList>
              <MenuListName>공지사항</MenuListName>
              <MenuListName>이벤트</MenuListName>
              <MenuListName>
                <PinkMenuName>FAQ</PinkMenuName>
              </MenuListName>
              <MenuListName>Q&A</MenuListName>
            </MenuList>
          </Menu>
        </Head>
        <Body>
          <ListBox>
            <ListQuestion>
              <ListNumber>Q.01</ListNumber>
              <ListTitle>리뷰 작성은 어떻게 하나요?</ListTitle>
            </ListQuestion>
            <ListButton src="/Vector-02.png"></ListButton>
          </ListBox>
          <ListBox>
            <ListQuestion>
              <ListNumber>Q.02</ListNumber>
              <ListTitle>리뷰 수정/삭제는 어떻게 하나요?</ListTitle>
            </ListQuestion>
            <ListButton src="/Vector-02.png"></ListButton>
          </ListBox>
          <ListBox>
            <ListQuestion>
              <ListNumber>Q.03</ListNumber>
              <ListTitle>아이디/비밀번호를 잊어버렸어요</ListTitle>
            </ListQuestion>
            <ListButton src="/Vector-02.png"></ListButton>
          </ListBox>
          <ListBox>
            <ListQuestion>
              <ListNumber>Q.04</ListNumber>
              <ListTitle>회원탈퇴를 하고 싶어요.</ListTitle>
            </ListQuestion>
            <ListButton src="/Vector-02.png"></ListButton>
          </ListBox>
          <ListBox>
            <ListQuestion>
              <ListNumber>Q.05</ListNumber>
              <ListTitle>출발지 설정은 어떻게 하나요?</ListTitle>
            </ListQuestion>
            <ListButton src="/Vector-02.png"></ListButton>
          </ListBox>
          <ListBox>
            <ListQuestion>
              <ListNumber>Q.06</ListNumber>
              <ListTitle>비밀번호를 변경하고 싶어요.</ListTitle>
            </ListQuestion>
            <ListButton src="/Vector-02.png"></ListButton>
          </ListBox>
        </Body>
        <AppMenu>
          <MenuBox>
            <div class="menuIcon">1</div>
            <div class="menuName">홈</div>
          </MenuBox>
          <MenuBox>
            <div class="menuIcon">2</div>
            <div class="menuName">잇츠로드</div>
          </MenuBox>
          <MenuBox>
            <div class="menuIcon">3</div>
            <div class="menuName">마이찜</div>
          </MenuBox>
          <MenuBox>
            <div class="menuIcon">4</div>
            <div class="menuName">마이</div>
          </MenuBox>
        </AppMenu>
      </Wrapper>
    </Container>
  );
}
