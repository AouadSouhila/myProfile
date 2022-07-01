import React from "react";
import styled, {css} from "styled-components/macro"
import { Link} from "react-router-dom";
import { menuData} from "../data/MenuData";
import srclogo from "../images/mylogo.png"
import resume from "../data/cv_eng.pdf"
import { saveAs } from "file-saver";
const Nav = styled.nav`
background: #fff;
height: 60px;
display: flex;
justify-content: space-between;
padding: 1rem 2rem;
z-index: 100;
position: fixed;
width: 100%;

`;

const NavLink = css`
color: #000;
display: flex;
align-items: center;
padding: 0 3rem;
height: 100%;
cursor: pointer;
text-decoration: none;
font-size: 18px;

&:hover {
    color: #ED6C6D ;
    font-weight : 800;
    border-bottom: 3px solid #ED6C6D;
    background-color :rgba(255,153,153, 0.1);
}`;

const Logo = styled.img`
position: relative;
top:-2rem;
left: 70px;
width: 100px;
height: 100px;
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 94px;
    

}`;

const NavMenuLinks = styled(Link)`${NavLink}`;


const NavBar = () => {

/*     const saveFile = () => { 
        menuData.map((item, index) => ())
        if (data.title ==='RESUME') {
            saveAs(resume,
                "example.pdf"
              );              
        }

}; */

    return (
        <Nav>
            <Logo src={srclogo} />
         <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
        </Nav>
    );
  }
  
  export default NavBar;