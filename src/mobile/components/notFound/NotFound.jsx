import React from 'react';
import {Link} from "react-router-dom";
const NotFound = () => {
    return (
        <div className="Mobile-Wrap ServerCheck">
            <div className="layoutType2">
                <div className="topTitleType1">
                    <p className="title1">죄송합니다. <br/>
                        화면을 찾을 수가 없어요.</p>
                </div>
                <img src={process.env.PUBLIC_URL + 'common/mobile/image/m-404-image@3x.png'} alt="" className="mainImg"/>
                <button className="btnType1 mt40"><Link to='/'>홈으로 돌아가기</Link></button>
            </div>
        </div>
    );
};
export default NotFound;
