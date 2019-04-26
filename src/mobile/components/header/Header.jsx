import React from 'react';
import { makeImagePath } from "../util/path";

const Header = ({gohome, navi, nav, precheck, home, appyform, applysuccess, applysuccess2, proposal, proposalsuccess}) => {
    return (
        <header>
            <div className="Header">
                <button onClick={navi} className="HeaderBtn">
                    { nav === false ?
                        <img src={makeImagePath('common/mobile/image/m-icon-menu-black-26@3x.png')}/> :
                        <img src={makeImagePath('common/mobile/image/nav-close@3x.png')}/>}
                </button>
                <p onClick={ gohome } className="HeaderTitle">
                    <img src={makeImagePath('common/mobile/image/m-logo-black-beta@3x.png')} alt=""/>
                </p>

                { home === true ?
                <p className="HeaderRight">배민포스란?</p> :
                    ''}
                { precheck === true ?
                    <p className="HeaderRight">신청 전 확인</p> :
                    ''}
                { appyform === true ?
                    <p className="HeaderRight">신청</p> :
                    ''}
                { applysuccess === true ?
                    <p className="HeaderRight">신청내용확인</p> :
                    ''}
                { applysuccess2 === true ?
                    <p className="HeaderRight">신청상태확인</p> :
                    ''}
                { proposal === true || proposalsuccess === true ?
                    <p className="HeaderRight">제휴문의</p> :
                    ''}

            </div>
        </header>
    );
};

export default Header;
