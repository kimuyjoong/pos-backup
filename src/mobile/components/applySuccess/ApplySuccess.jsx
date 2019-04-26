import React from 'react';
import ('./ApplySuccess.scss');
const ApplySuccess = ( {applysuccess}) => {
    return (
        <div className="ApplySuccess">
            <div className="layoutType1">
                <div className="topTitleType1">
                    <p className="title1">신청 완료! <br/>
                        내용을 확인 중입니다.</p>
                </div>
                <div className="confirmList">
                    <div className="listWrap">
                        <div className="leftside">회원 정보</div>
                        <div className="rightside">
                            <ul className="infoList">
                                <li>홍길동</li>
                                <li>010-1234-5678</li>
                                <li>user@woowahan.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="listWrap">
                        <div className="leftside">사업자 등록 정보</div>
                        <div className="rightside">
                            <ul className="infoList">
                                <li>김배달</li>
                                <li>840125</li>
                                <li>999-99-99999</li>
                                <li>갓치킨</li>
                                <li>서울시 송파구 방이동</li>
                                <li className="address">서울시 송파구 위례성대로
                                    주소두줄</li>
                            </ul>
                        </div>
                    </div>
                    <div className="listWrap">
                        <div className="leftside">결제 / 배달 정보</div>
                        <div className="rightside">
                            <ul className="infoList">
                                <li>나이스정보통신(NICE)</li>
                                <li>배달대행 사용</li>
                                <li>최강배달</li>
                                <li>잠실점</li>
                                <li>평균 픽업시간 10분</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button onClick={ applysuccess } className="btnType1">신청 정보 수정하기</button>

            </div>
        </div>
    );
};
export default ApplySuccess;
