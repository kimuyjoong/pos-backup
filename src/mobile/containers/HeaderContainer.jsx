import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {navChange, getTestApi, navChangeOff, navLink} from '../actions';
// import {makeImagePath} from "../components/util/path";
import {Link} from "react-router-dom";
import Nav from '../components/nav/Nav';

class HeaderContainer extends React.Component {
    handleClickButton() {
        const { testJSON, onGetTestApi } = this.props;
        onGetTestApi();
        console.log('testJSON: ', testJSON);
    }

    handleNavLink(e){
        const { onNavLink } = this.props;
        onNavLink(e)
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
        const { nav, link } = this.props;
        return (
            <>
                <header>
                    <div className="Header">
                        <button className="HeaderBtn" onClick={() => this.handleNav()}>
                            { nav === false ?
                                <img src={process.env.PUBLIC_URL + './common/mobile/image/m-icon-menu-black-26@3x.png'} alt=""/> :
                                <img src={process.env.PUBLIC_URL + './common/mobile/image/nav-close@3x.png'} alt=""/>}
                        </button>
                        <p className="HeaderTitle" onClick={() => this.handleNavLink('home')}>
                            <Link to='/'><img src={process.env.PUBLIC_URL + './common/mobile/image/m-logo-black-beta@3x.png'} alt=""/></Link>
                        </p>
                        { link === 'proposal' ?
                            <p className="HeaderRight">제휴 문의</p> :
                            <p className="HeaderRight">배민 포스란?</p>
                        }

                    </div>
                </header>
                { nav === true  ? <Nav navoff={this.handleNavOff} /> : '' }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log('mapStateProps: ', state);
    return {
        nav: state.Header.nav,
        link: state.Header.link,
        testJSON: state.Header
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onNavChange: bindActionCreators(navChange, dispatch),
        onNavChangeOff: bindActionCreators(navChangeOff, dispatch),
        onGetTestApi: bindActionCreators(getTestApi, dispatch),
        onNavLink: bindActionCreators(navLink, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer);
