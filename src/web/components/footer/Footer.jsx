import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="topArea">
                <p className="left"><Link to='/proposal'>제휴 문의하기</Link></p>
                <p className="right">설명서 다운로드</p>
            </div>
            <div className="botArea">
                <ul className="list">
                    <li><a href="javascript:void(0)">배달의민족</a></li>
                    <li><a href="javascript:void(0)">회사소개</a></li>
                    <li><a href="javascript:void(0)">이용약관</a></li>
                </ul>
                <ul className="list">
                    <li><a href="javascript:void(0)">개인정보처리방침</a></li>
                    <li><a href="javascript:void(0)">원격 지원 접속</a></li>
                    <li><a href="javascript:void(0)">전체 메뉴 보기</a></li>
                </ul>
                <p className="botTitle">고객센터 234 010. 5026. 5853</p>
                <p className="botTitle2">© Woowa Brothers Corp.222222</p>
            </div>
        </div>
    )
};

export default Footer;
