import * as React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./YoutubeClone.module.scss";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt=""
        />
      </div>
      <div className="header__input">
        <input placeholder="Search" type="text" />
        <SearchIcon className="header__inputbutton" />
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationIcon className="header__icon" />
        <Avatar
          src="https://i.picsum.photos/id/882/200/300.jpg?grayscale&hmac=YrGd-JZjABobkhyjQWff0y2zngyqq-iwqxQ72JRe9FE"
          alt="Demo"
        />
      </div>
    </div>
  );
}

export default Header;
