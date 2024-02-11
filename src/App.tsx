import styled from 'styled-components';
import Login from './pages/Auth/Login'; //만들어놓은 Login 페이지 가져오기
import UserSettings from './pages/Settings/UserSettings';
import SearchMain from './pages/Search/SearchMain';
//import SearchList from './pages/Search/SearchItem';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';


// 이제 기본 도메인/login 하면 Route로 인해서 해당 페이지로 이동하고, 그 페이지를 <Login/>이 구성하는  것.
function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
useEffect(() => {
    setScreenSize();
});
  return (
    <Container>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<UserSettings />} />
        <Route path="/main" element={<SearchMain />} />
        {/*<Route path="/item" element={<SearchList />} />*/}
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div`
    display: flex;
    height: calc(var(--vh, 1vh) * 100);
    background-color: #0A1128;
    @media ${(props) => props.theme.tablet} {
    }

`
