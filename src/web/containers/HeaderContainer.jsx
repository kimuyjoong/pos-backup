import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {navChange, getTestApi, navChangeOff} from '../actions';
// import {makeImagePath} from "../components/util/path";
// import {Link} from "react-router-dom";

class HeaderContainer extends React.Component {
    handleClickButton() {
        const { testJSON, onGetTestApi } = this.props;
        onGetTestApi();
        console.log('testJSON: ', testJSON);
    }

    handleNav(){
        const { onNavChange } = this.props;
        onNavChange()
    }

    handleNavOff(){
        const { onNavChangeOff } = this.props;
        onNavChangeOff()
    }

    render() {
        const { nav } = this.props;
        return (
            <header>
                <div className="HeaderTop">
                    <div className="innerWrap">
                        <ul className="navlist">
                            <li><a href="https://ceo.baemin.com/">사장님사이트</a></li>
                            <li><a href="https://ceo.baemin.com/">배민상회</a></li>
                            <li><a href="https://ceo.baemin.com/">배민아카데미</a></li>
                            <li><a href="https://ceo.baemin.com/">배민장부</a></li>
                        </ul>
                        <ul className="navlist type2">
                            <li><a href="https://ceo.baemin.com/">로그인</a></li>
                            <li><a href="https://ceo.baemin.com/">회원가입</a></li>
                            <li><a href="https://ceo.baemin.com/">고객센터</a></li>
                        </ul>
                    </div>
                </div>
                <div className="HeaderBot">
                    <div className="innerWrap">
                        <div className="logo">
                            <a href="/">
                                <img src={process.env.PUBLIC_URL + 'common/web/image/p-logo-black-beta@3x.png'} alt=""/>
                            </a>
                        </div>
                        <ul className="navigator">
                            <li className="on"><a href="javascript:void(0)">배민포스란?</a></li>
                            <li><a href="javascript:void(0)">미리보기</a></li>
                            <li><a href="javascript:void(0)">신청<span>완료</span></a></li>
                            <li><a href="javascript:void(0)">제휴문의</a></li>
                        </ul>
                    </div>
                </div>
            </header>
                // {/*<header>*/}
                //     {/*<div className="Header">*/}
                //         {/*<button className="HeaderBtn" onClick={() => this.handleNav()}>*/}
                //             {/*{ nav === false ?*/}
                //                 {/*<img src={makeImagePath('common/mobile/image/m-icon-menu-black-26@3x.png')}/> :*/}
                //                 {/*<img src={makeImagePath('common/mobile/image/nav-close@3x.png')}/>}*/}
                //         {/*</button>*/}
                //         {/*<p className="HeaderTitle" onClick={() => this.handleNavOff()}>*/}
                //             {/*<Link to='/'><img src={makeImagePath('common/mobile/image/m-logo-black-beta@3x.png')} alt=""/></Link>*/}
                //         {/*</p>*/}
                //
                //     {/*</div>*/}
                // {/*</header>*/}

        )
    }
}

const mapStateToProps = (state) => {
    console.log('mapStateProps: ', state);
    return {
        nav: state.Header.nav,
        testJSON: state.Header
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onNavChange: bindActionCreators(navChange, dispatch),
        onNavChangeOff: bindActionCreators(navChangeOff, dispatch),
        onGetTestApi: bindActionCreators(getTestApi, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer);
