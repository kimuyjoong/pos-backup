import React from 'react';
import {Link} from "react-router-dom";
import ('./ApplyReject.scss');
const ApplyReject = () => {
    return (
        <div className="ApplySuccess2">
                <div className="notProve">
                    <img src={process.env.PUBLIC_URL + 'common/mobile/image/m-return-image@3x.png'} alt=""/>
                    <p className="msg"><span>부릉ID</span>가 확인되지 않았습니다.</p>
                </div>
            <button className="btnType1"><Link to='/applyform'>다시 신청하기</Link></button>
        </div>
    );
};
export default ApplyReject;
