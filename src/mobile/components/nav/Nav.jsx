import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { bindActionCreators } from "redux";
import {
    navChangeOff,
    navLink,
    fetchLoginOut,
} from "../../actions";

import ('../../style/layout.scss');

class Nav extends PureComponent{
    handleNavOff(){
        const { onNavChangeOff } = this.props;
        onNavChangeOff()
    }
    handleNavLink(e){
        const { onNavLink } = this.props;
        onNavLink(e)
    }
    handleLogOut(){
        const { onFetchLoginOut } = this.props;
        onFetchLoginOut()
    }

    render(){
        return(
            <div className="Nav">
                <div className="NavWrap">
                    <ul className="NavList" onClick={() => this.handleNavOff()}>
                        <li>
                            {this.props.user.isLoggedIn === false ?
                                <a href="https://betaceo.baemin.com/login?returnUrl=http://local.baemin.com:3000/">사장님 사이트 로그인하기</a> :
                                <a onClick={() => this.handleLogOut()}><span className="blue">{this.props.user.user.nickName}</span>님, 로그아웃하기</a>
                            }
                        </li>
                        <li onClick={() => this.handleNavLink('home')}><Link to='/#section3'>배민포스란?</Link></li>
                        {/*<li onClick={() => this.handleNavLink('home')}><a onClick={() => this.handleNavLink3()} href="#section3">배민포스란?</a></li>*/}
                        <li onClick={() => this.handleNavLink('home')}><Link to='/#section4'>배민포스 미리보기</Link></li>
                        {/*<li onClick={() => this.handleNavLink('home')}><a href="#section4">배민포스 미리보기</a></li>*/}
                        {/*<li><Link to='/applyform'>배민포스 신청하기</Link></li>*/}
                        <li onClick={() => this.handleNavLink('proposal')}><Link to='/proposal'>배민포스 제휴 문의하기</Link></li>
                    </ul>
                    <div className="manualDown">
                        <div className="imgBtnWrap">
                            <img className="manualImg" src={process.env.PUBLIC_URL + './common/mobile/image/navImg@3x.png'} alt=""/>
                            <button className="btnType1">설명서 다운로드</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('mapStateProps: ', state);
    return {
        nav: false,
        user: state.User,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onNavChangeOff: bindActionCreators(navChangeOff, dispatch),
        onNavLink: bindActionCreators(navLink, dispatch),
        onFetchLoginOut: bindActionCreators(fetchLoginOut, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav);
