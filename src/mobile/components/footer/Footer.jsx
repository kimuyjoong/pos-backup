import React from 'react';

const Footer = ( { proposal }) => {
    return (
        <div className="Footer">
            <div className="topArea">
                <a onClick={ proposal } className="left">제휴 문의하기</a>
                <a className="right">설명서 다운로드</a>
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
