import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { navChangeOff } from "../../actions";

import ('../../style/layout.scss');

class Nav extends Component{
    handleNavOff(){
        const { onNavChangeOff } = this.props;
        onNavChangeOff()
    }
    render(){
        return(
            <div className="Nav">
                <div className="NavWrap">
                    <ul className="NavList" onClick={() => this.handleNavOff()}>
                        <li><a href="https://ceo.baemin.com/web/login?returnUrl=https%3A%2F%2Fceo.baemin.com%2F">사장님 사이트 로그인하기</a></li>
                        <li><Link to='/#section3'>배민포스란?</Link></li>
                        <li><a href="#section4">배민포스 미리보기</a></li>
                        <li><Link to='/applyform'>배민포스 신청하기</Link></li>
                        <li><Link to='/proposal'>배민포스 제휴 문의하기</Link></li>
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
        nav: false
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onNavChangeOff: bindActionCreators(navChangeOff, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav);
