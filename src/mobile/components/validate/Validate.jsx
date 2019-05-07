import React from 'react';

export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label className="renderLabel">{label}</label>
        <div>
            <input {...input} autoComplete="false" type={type}/>
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
