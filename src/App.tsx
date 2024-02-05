import React from 'react';
import styled from 'styled-components';
import Login from './pages/Auth/Login'; //만들어놓은 Login 페이지 가져오기
import UserSettings from './pages/Settings/UserSettings';
import { Route, Routes } from 'react-router-dom';


// 이제 기본 도메인/login 하면 Route로 인해서 해당 페이지로 이동하고, 그 페이지를 <Login/>이 구성하는  것.
function App() {
  return (
    <Container>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<UserSettings />} />
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div`

`
