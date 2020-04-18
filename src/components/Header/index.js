import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <HeaderWrapper>
    <FlexBetween className="container">
      <NavLink
        href="/"
        activeStyle={{
    fontWeight: 'bold',
    color: 'white',
  }}
        className="navbar-brand"
        to="/"
        exact
      >Home</NavLink>
      <NavLink
        activeStyle={{
    fontWeight: 'bold',
    color: 'white',
}}
        className="nav-item nav-link"
        to="/quiz"
        href="/quiz"
        exact
      >Test</NavLink>
    </FlexBetween>
  </HeaderWrapper>);

export default Header;

const HeaderWrapper = styled.div`
  background: lightgreen;
  display: flex;
  color: white;
`;

const FlexBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

