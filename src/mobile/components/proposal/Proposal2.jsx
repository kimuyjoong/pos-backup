import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { renderField, renderFieldArea, renderFieldArea2, renderFieldCheck, renderFieldRadio } from '../validate/Validate'
import Fileupload from "../validate/Fileupload";


const validate = values => {
    const errors = {};
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
    if (!values.email) {
        errors.email = '필수값입니다'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = '유효한 이메일을 입력해주세요'
    }
    if (!values.agree) {
        errors.agree = '개인정보 수집 및 이용에 동의해주세요.'
    }
    if (!values.proposalType) {
        errors.proposalType = '문의 구분을 선택해 주세요'
    }
    return errors
};

class Proposal2 extends React.PureComponent {
    // constructor(){
    //     super();
    //     this.state = {
    //         initialValues: {
    //             proposalType: "배달대행"
    //         }
    //     }
    // }
    handleTabOn = () => {
        this.setState({
            tab: true
        })
    };
    handleTabOff = () => {
        this.setState({
            tab: false
        })
    };
    state={
        tab:true,
    };
    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props;
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
                                <div onClick={this.handleTabOn} className="radioType1">
                                    <Field
                                        component={renderFieldRadio}
                                        type="radio"
                                        className="radio"
                                        name="proposalType"
                                        id="proposal1"
                                        value="배달대행"
                                        label="배달대행"

                                    />
                                </div>
                                <div className="radioType1">
                                    <Field
                                        component="input"
                                        type="radio"
                                        className="radio"
                                        name="proposalType"
                                        id="proposal2"
                                        value="결제대행"
                                        onClick={this.handleTabOff}
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
                                        onClick={this.handleTabOff}
                                    />
                                    <label htmlFor="proposal3">기타</label>
                                </div>
                            </div>
                            {this.state.tab ?
                            <div className="titleWithRadio">
                                <p className="title2">연동 방식</p>
                                <div className="inRadioWrap type2">
                                    <div className="radioType2 type3" >
                                        <Field
                                            component={renderFieldCheck}
                                            type="checkbox"
                                            className="radio"
                                            name="api"
                                            id="inqueryRadio2"
                                            label="API"
                                            labelClass="renderLabel2"
                                        />
                                    </div>
                                </div>
                            </div> : ''}
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
                                    component={renderFieldCheck}
                                    className="inputType1"
                                    id="agreeCheck"
                                    type="checkbox"
                                    label="개인정보 수집 및 이용에 동의합니다."
                                    labelClass="renderLabel"
                                />
                                {/*<input id="agreeCheck" type="checkbox"/>*/}
                                {/*<label htmlFor="agreeCheck">개인정보 수집 및 이용에 동의합니다.</label>*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/*<Field name="email" type="email" component={renderField} label="Email" />*/}
                <div>
                    <button type="submit" className="btnType1" disabled={submitting}>
                        보내기
                    </button>
                    {/*<button type="button" disabled={pristine || submitting} onClick={reset}>*/}
                    {/*Clear Values*/}
                    {/*</button>*/}
                </div>
            </form>
        )
    }
}

// const SyncValidationForm = props => {
//     const { handleSubmit, pristine, reset, submitting } = props;
//
// };

export default reduxForm({
    form: 'proposal', // a unique identifier for this form
    initialValues: {
        proposalType: "배달대행",
        api: true
    },
    validate, // <--- validation function given to redux-form
})(Proposal2)
