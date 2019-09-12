import React, { Component } from 'react';
import 'css/Main.css';
import Nav from 'view/main/Nav';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import homeImg from 'img/home.png';

class Main extends Component {

  componentDidMount() {

    window.addEventListener('scroll', this._scroll, true);
  }

  _scroll = function () {
    var scrollLoc = (window.scrollY + window.innerHeight) / document.body.clientHeight * 100;
    var tabList = document.getElementsByClassName('tabBt')[0];
    if (scrollLoc > 37.7) {
      tabList.style.position = 'fixed';
    } else {
      tabList.style.position = 'absolute';
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="header">
          <img className="homeImg" src={homeImg}></img>
        </div>
        <div className="tabList">
          <ul className="tabBt">
            <li><a href="#intro">민박소개</a></li>
            <li><a href="#navPannel">오시는길</a></li>
            <li><a href="#info">객실안내</a></li>
            <li><a href="#menu">밥상메뉴</a></li>
            <li><a href="#tour">주변관광지</a></li>
          </ul>
          <div className="conList">
            <div id="intro">
            </div>
            <Nav></Nav>
            <div id="info"></div>
            <div id="menu"></div>
            <div id="tour"></div>
          </div>
        </div>

      </BrowserRouter>
    );
  }

}

export default Main;
