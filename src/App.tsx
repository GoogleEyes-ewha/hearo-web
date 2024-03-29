import styled from 'styled-components';
import Login from './pages/Auth/Login'; //만들어놓은 Login 페이지 가져오기
import UserSettings from './pages/Settings/UserSettings';
import SearchMain from './pages/Search/SearchMain';
import SearchResult from './pages/Search/SearchResult';


import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { RecoilRoot } from 'recoil';
//import { useFetchWishListOnLogin } from './hooks/wishList';
import Detail from './pages/Detail';
import CallBack from './pages/Auth/CallBack';

// 이제 기본 도메인/login 하면 Route로 인해서 해당 페이지로 이동하고, 그 페이지를 <Login/>이 구성하는  것.

function App() {

  //useFetchWishListOnLogin(); // 로그인 되었을 경우 wishList 가져오기

  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.altKey) {
        navigate('/main');
      } 
      else if (event.altKey && !isNaN(Number(event.key))) {
        const categoryId = parseInt(event.key);
        if (categoryId > 0 && categoryId < 9) {
          navigate(`/item/category/${categoryId}`);
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [navigate]);

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  const queryClient = new QueryClient();

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenSize);
    return () => window.removeEventListener('resize', setScreenSize); // Clean up 
  }, []);
  
  return (
    <RecoilRoot>  
    <QueryClientProvider client={queryClient}>
      <Container>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/settings" element={<UserSettings />} />
          <Route path="/main" element={<SearchMain />} />
          <Route path="/item" element={<SearchResult />} />
          <Route path="/item/category/:categoryId" element={<SearchResult />} />  
          <Route path="/item/:itemId" element={<Detail />} />  
          <Route path="/login/callback" element={<CallBack/>}/>
        </Routes>
      </Container>
    </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;

const Container = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    background-color: #0A1128;
    @media ${(props) => props.theme.tablet} {
    }

`
