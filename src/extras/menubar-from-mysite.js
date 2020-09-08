import React from "react";
import { NavLink } from "react-router-dom";
import { Drawer, List, ButtonBase } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCode, faRss } from "@fortawesome/free-solid-svg-icons";

import navStyles from "./nav.module.scss";
import drawerStyles from "./drawer.module.scss";

export default function NavBar() {
  let [drawerState, setState] = React.useState(false);

  return (
    <React.Fragment>
      <ButtonBase
        onClick={() => setState(true)}
        className={navStyles.navbutton}
      >
        <MenuIcon style={{ fontSize: 28 }} />
      </ButtonBase>
      <Drawer open={drawerState} anchor="top" onClose={() => setState(false)}>
        <DrawerChild toggleDrawer={() => setState(false)} />
      </Drawer>
    </React.Fragment>
  );
}

const DrawerChild = (props) => (
  <div className={drawerStyles.child}>
    <ButtonBase
      style={{ margin: "50px 0px" }}
      onClick={() => props.toggleDrawer()}
    >
      <CloseIcon style={{ fontSize: 34 }} />
    </ButtonBase>
    <List className={drawerStyles.list}>
      {["Bio", "Career", "Blog"].map((text, index) => (
        <NavLink
          key={text}
          to={`/${text}`}
          onClick={() => props.toggleDrawer()}
        >
          <div className={drawerStyles.iconText}>
            <span>
              <FontAwesomeIcon
                icon={index === 0 ? faUser : index === 1 ? faCode : faRss}
                style={{ fontSize: "22px", color: "#c42" }}
              />
            </span>
            <span>{text}</span>
          </div>
        </NavLink>
      ))}
    </List>
  </div>
);
