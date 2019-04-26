import React from 'react';
import ('./ApplySuccess2.scss');
const ApplySuccess2 = () => {
    return (
        <div className="ApplySuccess2">
            <div className="layoutType1 type3">
                <div className="topTitleType1">
                    <p className="title1">사장님, <br/>
                        배민포스 사전 체험을 <br/>
                        신청해주셔서 감사합니다.</p>
                </div>
                <p className="successTitle1">
                    실제 배민포스를 사용할 포스에서 <br/>
                    설치 파일을 다운로드한 후 <br/>
                    튜토리얼에 따라 설치해주세요. <br/>
                    바로 사용할 수 있습니다.
                </p>
                <img src={process.env.PUBLIC_URL + 'common/mobile/image/m-confirm-image@3x.png'} className="confirmImg" alt=""/>
                <button className="btnType1">설치 파일 다운로드</button>
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
                <p className="successTitle2">
                    설치 튜토리얼
                </p>
                <img className="" src={process.env.PUBLIC_URL + 'common/mobile/image/homeImg7@3x.png'} alt=""/>

                <div className="notProve">
                    <img src={process.env.PUBLIC_URL + 'common/mobile/image/m-return-image@3x.png'} alt=""/>
                    <p className="msg"><span>부릉ID</span>가 확인되지 않았습니다.</p>
                </div>
                <button className="btnType1">다시 신청하기</button>
            </div>
        </div>
    );
};
export default ApplySuccess2;
