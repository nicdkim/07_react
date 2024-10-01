import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function LayOut() {
  return (
    <div>
      <h1>영화 목록 애플리케이션</h1>
      

      <nav style={{ marginBottom: '20px' }}>
        <NavLink to="/home" style={{ marginRight: '15px' , marginLeft: '15px'}}>홈</NavLink>
        <NavLink to="/movies" style={{ marginRight: '15px' }}>영화 목록</NavLink>
        <NavLink to="/add-movie">영화 추가하기</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default LayOut;