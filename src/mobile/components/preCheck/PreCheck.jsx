import React from 'react';
import { Link } from 'react-router-dom';
import ('./PreCheck.scss');
const PreCheck = () => {
    return (
        <div className="PreCheck">
            <div className="layoutType1">
                <div className="topTitleType1">
                    <p className="title1">신청 전에 <br/>
                        미리 확인해주세요.</p>
                </div>
                <div className="ulWrap">
                    <ul className="leftUl">
                        <li>OS</li>
                        <li>프로세서</li>
                        <li>입력장치</li>
                        <li>디스플레이</li>
                        <li>프린터</li>
                    </ul>
                    <ul className="rightUl">
                        <li>최소 : Windows 7  /  권장 : Windows 10</li>
                        <li>x86 또는 x64 프로세서</li>
                        <li>디스플레이 터치, 마우스, 키보드</li>
                        <li>해상도 1024 x 756</li>
                        <li>감열 영수증 프린터</li>
                    </ul>
                </div>
                <button className="btnType1"><Link to='/applyform'>확인했어요</Link></button>
            </div>
        </div>
    );
};
export default PreCheck;
