import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  text-align: center;
  //   background-color: #f5f0e4;
  -ms-overflow-style: none;
  font-family: "Inter", sans-serif;
  overflow: hidden;

  @media (hover: hover) {
    width: 390px;
    margin: 0 auto;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const BodyWrapper = styled.div`
  flex: 1;
  overflow: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-bottom: 60px;
`;

const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 10px;
  align-items: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Back = styled.div`
  width: 30px;
  cursor: pointer;
`;

const Logo = styled.div`
  cursor: pointer;
`;

const Video = styled.div`
  cursor: pointer;
  width: 30px;
`;

const BottomBar = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 60px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;

  /* 미디어 쿼리 적용 */
  @media (hover: hover) {
    width: 390px;
    margin: 0 auto;
  }
`;

const Menu = styled.div`
  width: 30px;
  cursor: pointer;
`;

const Search = styled.div`
  width: 30px;
  cursor: pointer;
`;

const Home = styled.div`
  width: 30px;
  cursor: pointer;
`;

const My = styled.div`
  width: 30px;
  cursor: pointer;
`;

const SearchBox = styled.div`
  width: 100%;
  height: 50px;
  padding-top: 40px;
  position: relative;
  margin: auto;
`;

const RedSearch = styled.div`
  position: absolute;
  top: 65px; /* 세로 가운데 정렬 */
  left: 15%; /* 원하는 가로 위치 조절 */
  transform: translateY(-50%); /* 세로 가운데 정렬을 위한 조정 */
`;

const InputSearch = styled.input`
  width: 60%; /* 인풋을 100% 너비로 설정 */
  height: 42px; /* 인풋을 100% 높이로 설정 */
  margin-left: 26%;
  border: none; /* 기본 테두리 제거 */
  //   padding-left: 40px; /* 왼쪽 여백 추가 (이미지 너비만큼) */
  font-size: 16px;
  background-color: transparent; /* 배경색 투명으로 설정 */
  position: absolute;
  margin-top: 40px;
  top: 0;
  left: 0;
  opacity: 0.8; /* 인풋을 조금 투/명하게 설정 */
  //   color: white; /* 글자색 설정 */
  caret-color: white; /* 커서 색상 설정 */
`;

// const Body = styled.div`
//   height: 752px;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 20px;
//   flex-shrink: 0;
// `;

const Main = () => {
  const navigate = useNavigate();
  const navigateToBack = () => {
    window.history.back();
  };

  return (
    <Container>
      <BodyWrapper>
        <Topbar>
          <Back onClick={navigateToBack}>
            <img
              src={`${process.env.PUBLIC_URL}/images/left.png`}
              alt="back"
              width="12px"
            />
          </Back>
          <Logo>
            <img
              src={`${process.env.PUBLIC_URL}/images/로고3.png`}
              alt="logo"
              width="90px"
            />
          </Logo>
          <Video>
            <img
              src={`${process.env.PUBLIC_URL}/images/carousel-video.png`}
              width="30px"
              alt="video"
            />
          </Video>
        </Topbar>
        <SearchBox>
          <img
            src={`${process.env.PUBLIC_URL}/images/검색창.png`}
            width="80%"
            height="50px"
          />
          <RedSearch>
            <img
              src={`${process.env.PUBLIC_URL}/images/redsearch.png`}
              width="28px"
            />
          </RedSearch>
          <InputSearch placeholder="검색어를 입력하세요."></InputSearch>
        </SearchBox>

        <BottomBar>
          <Menu>
            <img
              src={`${process.env.PUBLIC_URL}/images/menu.png`}
              width="26px"
            />
          </Menu>
          <Search>
            <img
              src={`${process.env.PUBLIC_URL}/images/search.png`}
              width="26px"
            />
          </Search>
          <Home>
            <img
              src={`${process.env.PUBLIC_URL}/images/home.png`}
              width="26px"
            />
          </Home>
          <My>
            <img src={`${process.env.PUBLIC_URL}/images/me.png`} width="26px" />
          </My>
        </BottomBar>
      </BodyWrapper>
    </Container>
  );
};

export default Main;
