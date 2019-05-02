import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { renderField, renderFieldArea } from '../validate/Validate'
import Fileupload from '../validate/Fileupload'
import {bindActionCreators} from "redux";
import { navLink } from "../../actions";

import ('./Proposal.scss');

const required = value => value ? undefined : '필수값입니다'
const maxLength = max => value =>
    value && value.length > max ? `최대값 ${max} 을(를) 넘기실수 없습니다.` : undefined
const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? '숫자만 입력해주세요' : undefined
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        '유효한 이메일을 입력해주세요' : undefined;

class Proposal extends React.Component{

render() {
    const { pristine, submitting, handleSubmit } = this.props;
    return (
            <form onSubmit={handleSubmit} className="ApplyForm" action="">
                <div className="Proposal">
                    <div className="layoutType1">
                        <div className="topTitleType1 type3">
                            <p className="title1">소중한 제안을 등록해주세요. <br/>
                                빨리 연락드리겠습니다.</p>
                        </div>
                        <img src={process.env.PUBLIC_URL + 'common/mobile/image/m-contact-image@3x.png'} className="proposalImg" alt=""/>
                        <div className="formWrap reduxFormValidate">
                            <p className="title2">문의구분</p>
                            {/*<ul className="inquiryList">*/}
                            {/*<li className="on">배달대행</li>*/}
                            {/*<li>결제대행</li>*/}
                            {/*<li>기타</li>*/}
                            {/*</ul>*/}
                            <div className="radioWrap type2">
                                <div className="radioType1">
                                    <Field
                                        component="input"
                                        type="radio"
                                        className="radio"
                                        name="proposalType"
                                        id="proposal1"
                                        value="배달대행"
                                    />
                                    <label htmlFor="proposal1">배달대행</label>
                                </div>
                                <div className="radioType1">
                                    <Field
                                        component="input"
                                        type="radio"
                                        className="radio"
                                        name="proposalType"
                                        id="proposal2"
                                        value="결제대행"
                                    />
                                    <label htmlFor="proposal2">결제대행</label>
                                </div>
                                <div className="radioType1">
                                    <Field
                                        component="input"
                                        type="radio"
                                        className="radio"
                                        name="proposalType"
                                        id="proposal3"
                                        value="기타"
                                    />
                                    <label htmlFor="proposal3">기타</label>
                                </div>
                            </div>
                            <div className="titleWithRadio">
                                <p className="title2">연동 방식</p>
                                <div className="inRadioWrap type2">
                                    <div className="radioType2">
                                        <Field
                                            component="input"
                                            type="checkbox"
                                            className="radio"
                                            name="dll"
                                            id="inqueryRadio1"
                                            value="DLL"
                                        />
                                        <label htmlFor="inqueryRadio1">DLL</label>
                                    </div>
                                    <div className="radioType2">
                                        <Field
                                            component="input"
                                            type="checkbox"
                                            className="radio"
                                            name="api"
                                            id="inqueryRadio2"
                                            value="API"
                                        />
                                        <label htmlFor="inqueryRadio2">API</label>
                                    </div>
                                </div>
                            </div>
                            <Field
                                name = "group"
                                component="input"
                                className="inputType1"
                                type="text"
                                component={renderField}
                                label="소속"
                                validate={[ required, maxLength15 ]}
                            />
                            <Field
                                name = "name"
                                // component="input"
                                type="text"
                                component={renderField}
                                label="이름"
                                validate={[ required, maxLength15 ]}
                            />
                            <Field
                                name = "number"
                                component={renderField}
                                type="number"
                                label="연락처"
                                validate={[ required, number ]}
                            />
                            <Field
                                name = "email"
                                component={renderField}
                                type="text"
                                label="이메일"
                                validate={[ required, email ]}
                            />
                            <Field
                                name = "content"
                                component={renderFieldArea}
                                type="textarea"
                                label="내용"
                                validate={[ required ]}
                            />
                            <p className="title2">첨부파일</p>
                            {/*<div className="addFileWrap">*/}
                            {/*<div className="addFileWrap">*/}
                            <Field
                                type="file"
                                name = "addFile"
                                component={Fileupload}
                                id="addFile"
                            />
                            {/*<label htmlFor="addFile">첨부파일</label>*/}
                            {/*</div>*/}

                            <p className="title2">개인 정보처리 방침</p>
                            <Field
                                name = "personal"
                                component="textarea"
                                className="textAreaType1 type2"
                                type="textarea"
                                readOnly="readonly"
                                placeholder="(주)우아한형제들(이하 ‘회사’라 한다)은 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법 등 관련 법령(이하 “관련 법령” 이라 함)에 따라 이용자의 개인정보를 보호하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침을 수립합니다.
이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침을 수립합니다."
                            />
                            <div className="radioType2 option1">
                                <Field
                                    name = "agree"
                                    component="input"
                                    className="inputType1"
                                    id="agreeCheck"
                                    type="checkbox"
                                />
                                {/*<input id="agreeCheck" type="checkbox"/>*/}
                                <label htmlFor="agreeCheck">개인정보 수집 및 이용에 동의합니다.</label>
                            </div>
                        </div>

                        <button type="submit" onClick={handleSubmit} disabled={pristine || submitting} className="btnType1"><Link to='/proposalsuccess'>신청하기</Link></button>

                    </div>
                </div>
            </form>
        );
    }
}

// Proposal = reduxForm({
//     form: 'proposal',
//     destroyOnUnmount: false
// })(Proposal);
//
// export default Proposal;

const mapStateToProps = (state) => {
    return {
        link: state.Header.link,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onNavLink: bindActionCreators(navLink, dispatch)
    }
};

Proposal = reduxForm({
    form: 'fieldLevelValidation',
    destroyOnUnmount: false,
})(Proposal);

Proposal = connect(
    state => ({
        initialValuesProposal: {
            addFile: true
        }
    })
)(Proposal);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Proposal);


// export default Proposal;



// export default reduxForm({
//     form: 'fieldLevelValidation', // a unique identifier for this form
//     destroyOnUnmount: false
//
// })(Proposal)
