import React from 'react';
import ('./ApplyForm.scss');
const ApplyForm = ( {submitform, applysuccess2} ) => {
    return (
        <div className="ApplyForm">
            <div className="layoutType1">
                <div className="topTitleType1 type2">
                    <p className="title1">아래 정보를 <br/>
                        모두 입력해주세요.</p>
                    <img className="topTitleImg" src={process.env.PUBLIC_URL + 'common/mobile/image/topTitleType2@3x.png'} alt=""/>
                </div>
                <div className="formWrap">
                    <p className="title1">회원 정보</p>
                    <p className="title2">이름</p>
                    <input type="text" value="" placeholder="홍길동" className="inputType1"/>
                    <p className="title2">연락처</p>
                    <input type="text" value="010-2321-2321" className="inputType1"/>
                    <p className="title2">이메일</p>
                    <input type="text" value="user@woowahan.com" className="inputType1"/>
                </div>
                <div className="formWrap">
                    <p className="title1">사업자 등록 정보</p>
                    <p className="title2">사업자 등록번호</p>
                    <input type="text" value="" placeholder="홍길동" className="inputType1"/>
                    <p className="title2">사업자명</p>
                    <input type="text" value="김세월" className="inputType1"/>
                    <p className="title2">사업자 생년월일 (주민번호 앞 6자리)</p>
                    <input type="text" value="434343" className="inputType1"/>
                    <p className="title2">상호명</p>
                    <input type="text" value="버거킹" className="inputType1"/>
                    <p className="title2">소재지 (지번)</p>
                    <input type="text" value="서울시 송파구 방이동" className="inputType1"/>
                    <p className="title2">소재지 (도로명)</p>
                    <textarea name="" id="" className="textAreaType1">
                        서울특별시 송파구 위례성대로 176
배민아파트 주소 두줄
                    </textarea>
                    <p className="introMsg">
                        새로운 사업자 등록 정보로 서비스를 신청하시려면 <br/>
                        <strong>사장님사이트</strong>에 신규로 회원가입해주세요.
                    </p>
                </div>

                <div className="formWrap">
                    <p className="title1">결제 / 배달 정보</p>
                    <p className="title2">사용 결제대행사</p>
                    <div className="selectWrap">
                        <select name="" id="" className="selectBoxType1">
                            <option value="나이스정보통신(NICE)">나이스정보통신(NICE)</option>
                            <option value="나이스정보통신(NICE)2">나이스정보통신(NICE2)</option>
                            <option value="나이스정보통신(NICE)3">나이스정보통신(NICE3)</option>
                        </select>
                    </div>
                    <p className="introMsg">
                        결제대행사 정보는 카드단말기를 확인해주세요.
                    </p>
                    <p className="title2">배달대행사 사용 여부</p>
                    <div className="radioWrap type2">
                        <div className="radioType1">
                            <input type="radio" defaultChecked="checked" id="radio1" name="type1" className="radio"/>
                            <label htmlFor="radio1">사용</label>
                        </div>
                        <div className="radioType1">
                            <input type="radio" id="radio2" name="type1" className="radio"/>
                            <label htmlFor="radio2">미사용</label>
                        </div>
                    </div>
                    <p className="title2">사용 배달대행사</p>
                    <div className="selectWrap">
                        <select name="" id="" className="selectBoxType1">
                            <option value="나이스정보통신(NICE)">배달대행</option>
                            <option value="나이스정보통신(NICE)2">나이스정보통신(NICE2)</option>
                            <option value="나이스정보통신(NICE)3">나이스정보통신(NICE3)</option>
                        </select>
                    </div>
                    <p className="title2">사용 배달대행사 지점</p>
                    <input type="text" value="잠실" placeholder="홍길동" className="inputType1"/>
                    <p className="title2">평균 픽업시간</p>
                    <input type="text" value="10분" className="inputType1"/>
                </div>
                <button onClick={ submitform } className="btnType1">신청하기</button>
                <div className="btnSet">
                    <button className="btnType1 type2 left">취소</button>
                    <button onClick={ applysuccess2 } className="btnType1 right">완료</button>
                </div>

            </div>
        </div>
    );
};
export default ApplyForm;
