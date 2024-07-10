// NavBar.js
import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

// 创建 styled components
const NavTop = styled.nav`
  position: fixed;
  top: 10px;
  left: 10px;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  ul li {
    margin-right: 10px;
  }
`;

const NavBottom = styled.nav`
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  ul li {
    display: inline;
    margin-right: 10px;
  }
`;

function NavBar() {
  // const location = useLocation();
  // const pathname = location.pathname;

  return (
    <div>
      <NavTop>
        <ul>
          {/* {pathname !== '/' && <li><Link to="/dragon_master_details">DragonMasterDetails</Link></li>} */}
          {/* {pathname !== '/minecrafttools' && <li><Link to="/minecrafttools">MinecraftTools</Link></li>} */}
          {/* {pathname !== '/dragon_master_details' && <li><Link to="/dragon_master_details">DragonMasterDetails</Link></li>} */}
        </ul>
      </NavTop>
      <NavBottom>
        <ul>
          {/* {pathname !== '/about' && <li><Link to="/about">About</Link></li>} */}
          {/* {pathname !== '/contact' && <li><Link to="/contact">Contact</Link></li>} */}
        </ul>
      </NavBottom>
    </div>
  );
}

export default NavBar;
