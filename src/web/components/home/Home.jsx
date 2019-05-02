import React from 'react';
import { Link } from 'react-router-dom';
import { makeImagePath } from "../util/path";
import('./Home.scss');

const Home = ( ) =>{

        return (
            <div className="Home">
                <p className="HomeBanner">
                    <Link to='/precheck'><img src={process.env.PUBLIC_URL + 'common/mobile/image/m-banner@3x.png'} alt=""/></Link>
                </p>
                <div className="section1">
                    <p className="text1">
                        <strong>매장</strong>에 손님이 가득한데 <br/>
                        <strong>배달의민족</strong> 주문은 밀려오고 <br/>
                        <strong>배달대행</strong>까지 신청하려니 <br/>
                        <strong>너무 힘들어요 . . .</strong>
                    </p>
                    <img src="./homeImg1@3x.png" alt="" className="img1"/>
                </div>
                <div className="section2">
                    <img src={makeImagePath('common/mobile/image/homeImg2@3x.png')} alt=""/>
                </div>
                <div id="section3" className="section3">
                    <p className="text1">
                        배달의 민족이 만든 <br/>
                        무료포스로 <br/>
                        해결해보세요
                    </p>
                    <div className="longLine">
                        <img src={makeImagePath('common/mobile/image/homeImg3@3x.png')} alt="" className="step1"/>
                        <ul className="stepList">
                            <li>
                                <img className="listImg" src={makeImagePath('common/mobile/image/homeImg4@3x.png')} alt=""/>
                                <p className="listTit1">
                                    배달의민족 주문
                                </p>
                                <p className="listTit2">
                                    배달의민족 연동으로 <br/>
                                    매장부터 배달까지 모든 주문을 <br/>
                                    한 번에 처리할 수 있습니다.
                                </p>
                            </li>
                            <li>
                                <img className="listImg" src={makeImagePath('common/mobile/image/homeImg5@3x.png')} alt=""/>
                                <p className="listTit1">
                                    매장 주문
                                </p>
                                <p className="listTit2">
                                    테이블, 전화, 포장 등 <br/>
                                    매장에서 발생하는 모든 주문을 <br/>
                                    배민포스로 편하게 관리하세요.
                                </p>
                            </li>
                            <li>
                                <img className="listImg" src={makeImagePath('common/mobile/image/homeImg6@3x.png')} alt=""/>
                                <p className="listTit1">
                                    배달대행
                                </p>
                                <p className="listTit2">
                                    사용하시던 배달대행사 그대로 <br/>
                                    포스에서 배달대행을 요청하고 <br/>
                                    배달 상태를 확인하세요.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="section4" className="section4">
                    <img className="videoImage" src={makeImagePath('common/mobile/image/homeImg7@3x.png')} alt=""/>
                </div>
                <div className="section5">
                    <p className="tit1">
                        가게 운영은 <br/>
                        배민포스 하나로, <br/>
                        사장님은 <br/>
                        매출에 집중하세요.
                    </p>
                    <div className="btnWrap">
                        <Link to='/precheck'><button className="applyBtn">신청하기</button></Link>
                        <img src={makeImagePath('common/mobile/image/applyBtnRight@3x.png')} alt=""/>
                    </div>
                    <img className="botImg" src={makeImagePath('common/mobile/image/homeImg8@3x.png')} alt=""/>
                </div>
                <div className="floatingIcon">
                    <Link to='/precheck'><img src={process.env.PUBLIC_URL + 'common/mobile/image/m-floting-apply-btn-110@3x.png'} alt=""/></Link>
                </div>
            </div>
        );
};

export default Home;
