import 'css/Nav.css';
import React, { Component } from 'react';

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inform: null
        }
    }

    componentDidMount() {
        var container = document.getElementById('navPannel');
        var options = {
            center: new window.kakao.maps.LatLng(37.449885, 129.165110),
            level: 3
        };

        var map = new window.kakao.maps.Map(container, options);

        // 마커가 표시될 위치입니다 
        var markerPosition = options.center;

        // 마커를 생성합니다
        var marker = new window.kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        this._callData(this);
    }

    _callData = function (react) {
        var data;
        fetch('http://localhost:5000')
            .then(res => res.json())
            .then(data => this.setState({
                inform: data.inform
            }))
    }

    _renderInf = function () {
        const inf = this.state.inform;
        return (
            <li>
                <ul>입금계좌 안내</ul>
                <ul>{inf.adminAccount}</ul>
                <ul>{inf.adminNm}</ul>
                <ul>문의전화</ul>
                <ul>{inf.adminTell}</ul>
                <ul>{inf.adminPhone}</ul>
            </li>
        )
    }

    render() {
        return (
            <div id="navPannel">
                <div className="overLay">
                    {this.state.inform ? this._renderInf() : 'no Information'}
                </div>
            </div>
        );
    }
}

export default Nav;