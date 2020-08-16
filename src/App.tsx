import React, { useState } from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Transition from "./components/Transition/transition";

library.add(fas);

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultOpenSubMenus={["1"]}>
          <MenuItem>cool link</MenuItem>
          <MenuItem>cool link 2</MenuItem>
          <SubMenu title="submenu">
            <MenuItem>dropdown 1</MenuItem>
            <MenuItem>dropdown 2</MenuItem>
          </SubMenu>
          <MenuItem>cool link 4</MenuItem>
        </Menu>
        <Button autoFocus>hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          hello
        </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          hello
        </Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>
          hello
        </Button>
        <Button
          size={ButtonSize.Large}
          onClick={() => {
            setShow(!show);
          }}
        >
          Toggle
        </Button>
        <Transition in={show} timeout={300} animation="zoom-in-left">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Transition>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
