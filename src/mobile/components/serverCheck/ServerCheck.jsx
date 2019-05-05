import React from 'react';
import ('./ServerCheck.scss');
const ServerCheck = () => {
    return (
        <div className="Mobile-Wrap ServerCheck">
            <div className="layoutType2">
                <div className="topTitleType1">
                    <p className="title1">배민포스가 <br/>
                        서비스 점검 중입니다.</p>
                </div>
                <img src={process.env.PUBLIC_URL + './common/mobile/image/m-maintenance-image@3x.png'} alt="" className="mainImg"/>
                <p className="titleType2">
                    점검시간은  09:00~12:00 입니다. <br/>
                    이용에 불편을 드려 죄송합니다. <br/>
                    항상 노력하는 배민포스가 되겠습니다. <br/>
                    감사합니다.
                </p>
                {/*<button className="btnType1">확인했어요</button>*/}
            </div>
        </div>
    );
};
export default ServerCheck;
