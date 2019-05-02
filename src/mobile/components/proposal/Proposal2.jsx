import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { renderField, renderFieldArea, renderFieldArea2 } from '../validate/Validate'
import Fileupload from "../validate/Fileupload";


const validate = values => {
    const errors = {}
    console.log(values);
    if (!values.group) {
        errors.group = '필수값입니다'
    } else if (values.group.length > 15) {
        errors.group = '15자 이내로 작성해주세요!'
    }
    if (!values.username) {
        errors.username = '필수값입니다'
    } else if (values.username.length > 15) {
        errors.username = '15자 이내로 작성해주세요!'
    }
    if (!values.number) {
        errors.number = '필수값입니다'
    } else if (isNaN(Number(values.number))) {
        errors.number = '숫자만 입력해주세요'
    }
    // const number = value => value && isNaN(Number(value)) ? '숫자만 입력해주세요' : undefined
    if (!values.email) {
        errors.email = '필수값입니다'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = '유효한 이메일을 입력해주세요'
    }
    if (!values.agree) {
        alert('개인정보 수집 및 이용에 동의해주세요')
        // console.log('false');
        errors.agree = '필수값입니다'
    }
    return errors
}

const SyncValidationForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <div className="Proposal">
                <div className="layoutType1">
                    <div className="topTitleType1 type3">
                        <p className="title1">소중한 제안을 등록해주세요. <br/>
                            빨리 연락드리겠습니다.</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + 'common/mobile/image/m-contact-image@3x.png'} className="proposalImg" alt=""/>
                    <div className="formWrap reduxFormValidate">
                        <p className="title2">문의구분</p>
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
                        />
                        <Field
                            name = "username"
                            type="text"
                            component={renderField}
                            label="이름"
                        />
                        <Field
                            name = "number"
                            component={renderField}
                            type="number"
                            label="연락처"
                        />
                        <Field
                            name = "email"
                            component={renderField}
                            type="email"
                            label="이메일"
                        />
                        <Field
                            name = "content"
                            component={renderFieldArea}
                            type="textarea"
                            label="내용"
                        />
                        <p className="title2">첨부파일</p>
                        <Field
                            type="file"
                            name = "addFile"
                            component={Fileupload}
                            id="addFile"
                        />
                        <p className="title2">개인 정보처리 방침</p>
                        <Field
                            name = "personal"
                            component={renderFieldArea2}
                            className="textAreaType1 type2"
                            type="textarea"
                            readOnly="readonly"
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
                </div>
            </div>
            {/*<Field name="email" type="email" component={renderField} label="Email" />*/}
            <div>
                <button type="submit" disabled={submitting}>
                    Submit
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'syncValidation', // a unique identifier for this form
    validate, // <--- validation function given to redux-form
})(SyncValidationForm)
