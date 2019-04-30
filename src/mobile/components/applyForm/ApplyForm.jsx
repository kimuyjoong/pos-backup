import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import ('./ApplyForm.scss');

let ApplyForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit} className="ApplyForm" action="">
            <div className="layoutType1">
                <div className="topTitleType1 type2">
                    <p className="title1">아래 정보를 <br/>
                        모두 입력해주세요.</p>
                    <img className="topTitleImg" src={process.env.PUBLIC_URL + 'common/mobile/image/topTitleType2@3x.png'} alt=""/>
                </div>
                <div className="formWrap">
                    <p className="title1">회원 정보</p>
                    <p className="title2">이름</p>
                    <Field
                        name = "name"
                        component="input"
                        className="inputType1"
                        type="text"
                        placeholder="이름을 입력해 주세요" />
                    <p className="title2">연락처</p>
                    <Field
                        name = "phoneNumber"
                        component="input"
                        className="inputType1"
                        type="text"
                    />
                    <p className="title2">이메일</p>
                    <Field
                        name = "email"
                        component="input"
                        className="inputType1"
                        type="text"
                    />
                </div>
                <div className="formWrap">
                    <p className="title1">사업자 등록 정보</p>
                    <p className="title2">사업자 등록번호</p>
                    <Field
                        name="businessnumber"
                        component="input"
                        className="inputType1"
                        type="text"
                    />
                    <p className="title2">사업자명</p>
                    <Field
                        name="businessownername"
                        component="input"
                        className="inputType1"
                        type="text"
                    />
                    <p className="title2">사업자 생년월일 (주민번호 앞 6자리)</p>
                    <Field
                        name="businessbirthday"
                        component="input"
                        className="inputType1"
                        type="text"
                    />
                    <p className="title2">상호명</p>
                    <Field
                        name="businessname"
                        component="input"
                        className="inputType1"
                        type="text"
                    />
                    <p className="title2">소재지 (지번)</p>
                    <Field
                        name="businessaddress"
                        component="input"
                        className="inputType1"
                        type="text"
                    />
                    <p className="title2">소재지 (도로명)</p>
                    <Field
                        name="businessaddressroad"
                        component="textarea"
                        className="textAreaType1"
                    />
                    <p className="introMsg">
                        새로운 사업자 등록 정보로 서비스를 신청하시려면 <br/>
                        <strong>사장님사이트</strong>에 신규로 회원가입해주세요.
                    </p>
                </div>

                <div className="formWrap">
                    <p className="title1">결제 / 배달 정보</p>
                    <p className="title2">사용 결제대행사</p>
                    <div className="selectWrap">
                        <Field
                            name="paymethod"
                            component="select"
                            className="selectBoxType1"
                        >
                            <option value="나이스정보통신(NICE)">나이스정보통신(NICE)</option>
                            <option value="나이스정보통신(NICE)2">나이스정보통신(NICE2)</option>
                            <option value="나이스정보통신(NICE)3">나이스정보통신(NICE3)</option>
                        </Field>

                        {/*<select name="" id="" className="selectBoxType1">*/}

                        {/*</select>*/}
                    </div>
                    <p className="introMsg">
                        결제대행사 정보는 카드단말기를 확인해주세요.
                    </p>
                    <p className="title2">배달대행사 사용 여부</p>
                    <div className="radioWrap type2">
                        <div className="radioType1">
                            <Field
                                component="input"
                                type="radio"
                                className="radio"
                                name="deliveryuse"
                                id="radio1"
                                value="사용"
                            />
                            <label htmlFor="radio1">사용</label>
                        </div>
                        <div className="radioType1">
                            <Field
                                component="input"
                                type="radio"
                                className="radio"
                                name="deliveryuse"
                                id="radio2"
                                value="미사용"
                            />
                            <label htmlFor="radio2">미사용</label>
                        </div>
                    </div>
                    <p className="title2">사용 배달대행사</p>
                    <div className="selectWrap">
                        <Field
                            name="paymethodsecond"
                            component="select"
                            className="selectBoxType1">
                            <option value="나이스정보통신(NICE)">배달대행</option>
                            <option value="나이스정보통신(NICE)2">나이스정보통신(NICE2)</option>
                            <option value="나이스정보통신(NICE)3">나이스정보통신(NICE3)</option>
                        </Field>
                        {/*<select name="" id="" className="selectBoxType1">*/}

                        {/*</select>*/}
                    </div>
                    <p className="title2">사용 배달대행사 지점</p>
                    <Field
                        name="deliveryarea"
                        component="input"
                        className="inputType1"
                        type="text"
                    />
                    <p className="title2">평균 픽업시간</p>
                    <Field
                        name="pickuptime"
                        component="input"
                        className="inputType1"
                        type="text"
                    />
                </div>
                <button type="submit" className="btnType1"><Link to='/applysuccess'>신청하기</Link></button>
                <div className="btnSet">
                    <button className="btnType1 type2 left"><Link to='/applyreject'>취소</Link></button>
                    <button className="btnType1 right"><Link to='/applyapprove'>완료</Link></button>
                </div>
            </div>
        </form>
    );
};

ApplyForm = reduxForm({
    form: 'apply',
    destroyOnUnmount: false
})(ApplyForm);

ApplyForm = connect(
    state => ({
        initialValues: {
            name: '김의중',
            phoneNumber: '010-1111-2321',
            email: 'kiokikk@gmail.com'
        }
    })
)(ApplyForm);

export default ApplyForm;
