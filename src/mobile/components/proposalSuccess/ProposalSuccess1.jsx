import React from 'react';
const ProposalSuccess1 = () => {
    return (
        <div className="ApplySuccess2">
            <div className="layoutType1 type3">
                <div className="topTitleType1">
                    <p className="title1">제안이 정상적으로 <br/>
                        발송되었습니다. <br/>
                        빨리 연락드리겠습니다.</p>
                </div>
                <img src={process.env.PUBLIC_URL + 'common/mobile/image/m-contact-image-success@3x.png'} className="proposalImg" alt=""/>
                <button className="btnType1">확인</button>
            </div>
        </div>
    );
};
export default ProposalSuccess1;
