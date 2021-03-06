import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Category from "./Category";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import Login from "./Login";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Language = styled.span`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  
  // Logout pllv
  let user = JSON.parse(localStorage.getItem('userDetails'))
  console.warn(user)
  const navigate = useNavigate();
  function logOut(){
    localStorage.clear();
    navigate('/.');
  }
  //Logout pllv Fisnish

  // const {totalQuantities} = useSelector(state=>state.CartReducer)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search Product"/>
            <Search style={{ color: "gray", fontSize: 15 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo><Link to="/" style={{color:"black", textDecoration: "none"}}>SHOPAHOLIC</Link></Logo>
        </Center>

        <Right>
          {/* <MenuItem><Link to="/shop">Shop</Link></MenuItem> */}
          <NavDropdown title="Shop" id="basic-nav-dropdown">
          <NavDropdown.Item href="/womenshop">Women Fashion</NavDropdown.Item>
          <NavDropdown.Item href="/menshop">Men Fashion</NavDropdown.Item>
          <NavDropdown.Item href="/electronics">Electronics</NavDropdown.Item>
          {/* <NavDropdown.Item href="/other">Other</NavDropdown.Item> */}
        </NavDropdown>
          {/* <MenuItem><Link to="/login">Login</Link></MenuItem> */}
          {/* <MenuItem><Link to="/register">Register</Link></MenuItem> */}

          {/* <Nav.Link  href="/login" id="basic-nav-dropdown">Login</Nav.Link > */}
          {/* <Nav.Link  href="/register" id="basic-nav-dropdown">Register</Nav.Link > */}


  {/* Profile Code */}
          {localStorage.getItem('userDetails')?
          <Nav>
            <NavDropdown title={user && user.username} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          :
          <Nav.Link  href="/login" id="basic-nav-dropdown">Login</Nav.Link >
          }
  {/* Finish Profile  */}


          <MenuItem><Link to="/cart">
            <Badge badgeContent={1} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
            </Link>
          </MenuItem>
        </Right>

      </Wrapper>
    </Container>
  );
};

export default Navbar;
