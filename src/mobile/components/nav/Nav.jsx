import React from 'react';
import ('../../style/layout.scss');

const Nav = ({precheck, proposal}) => {
    return (
        <div className="Nav">
            <div className="NavWrap">
                <ul className="NavList">
                    <li>사장님 사이트 로그인하기</li>
                    <li><a href="#section3">배민포스란?</a></li>
                    <li>배민포스 미리보기</li>
                    <li onClick={precheck}>배민포스 신청하기</li>
                    <li onClick={ proposal }>배민포스 제휴 문의하기</li>
                </ul>
                <div className="manualDown">
                    <div className="imgBtnWrap">
                        <img className="manualImg" src={process.env.PUBLIC_URL + 'common/mobile/image/navImg@3x.png'} alt=""/>
                        <button className="btnType1">설명서 다운로드</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
