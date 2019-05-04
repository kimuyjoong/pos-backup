import React from 'react';


const required = value => value ? undefined : '필수값입니다'
const maxLength = max => value =>
    value && value.length > max ? `최대값 ${max} 을(를) 넘기실수 없습니다.` : undefined
const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? '숫자만 입력해주세요' : undefined
const minValue = min => value =>
    value && value < min ? `최소값은 ${min} 입니다.` : undefined
const minValue18 = minValue(18)
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        '유효한 이메일을 입력해주세요' : undefined
const tooOld = value =>
    value && value > 65 ? 'You might be too old for this' : undefined
const aol = value =>
    value && /.+@aol\.com/.test(value) ?
        'Really? You still use AOL for your email?' : undefined

export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label className="renderLabel">{label}</label>
        <div>
            <input {...input} type={type}/>
            {touched && ((error && <span className="errorMsg">{error}</span>) || (warning && <span className="errorMsg">{warning}</span>))}
        </div>
    </div>
);

export const renderFieldArea = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label className="renderLabel">{label}</label>
        <div>
            <textarea {...input} placeholder="자세한 내용을 입력해 주세요.
준비된 제안서가 있을 경우
첨부해 주시면 내용을
파악하는 데 도움이 됩니다."/>
            {touched && ((error && <span className="errorMsg">{error}</span>) || (warning && <span className="errorMsg">{warning}</span>))}
        </div>
    </div>
);

export const renderFieldArea2 = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label className="renderLabel">{label}</label>
        <div>
            <textarea {...input} value="(주)우아한형제들(이하 ‘회사’라 한다)은 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법 등 관련 법령(이하 “관련 법령” 이라 함)에 따라 이용자의 개인정보를 보호하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침을 수립합니다.
이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침을 수립합니다." />
            {touched && ((error && <span className="errorMsg">{error}</span>) || (warning && <span className="errorMsg">{warning}</span>))}
        </div>
    </div>
);

export const renderFieldCheck = ({ input, label, type, id, labelClass, checked, meta: { touched, error, warning } }) => (
    <div>
        {/*<div>*/}
        <input {...input} id={id} defaultChecked={checked} type={type}/>
        <label htmlFor={id} className={labelClass}>{label}</label>
        {touched && ((error && <span className="errorMsg">{error}</span>) || (warning && <span className="errorMsg">{warning}</span>))}
        {/*</div>*/}
    </div>
);

export const renderFieldRadio = ({ input, label, type, id, labelClass, checked, meta: { touched, error, warning } }) => (
    <>
        <input {...input} id={id} type={type}/>
        <label htmlFor={id} className={labelClass}>{label}</label>
        <div className="spanWrap">
            {touched && ((error && <span className="errorMsg">{error}</span>) || (warning && <span className="errorMsg">{warning}</span>))}
        </div>
    </>
);
