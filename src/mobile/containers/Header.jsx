import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {navChange, getTestApi, navChangeOff} from '../actions';
import {makeImagePath} from "../components/util/path";
import {Link} from "react-router-dom";
import Nav from '../components/nav/Nav';

class Header extends React.Component {
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
            <>
                <header>
                    <div className="Header">
                        <button className="HeaderBtn" onClick={() => this.handleNav()}>
                            { nav === false ?
                                <img src={makeImagePath('common/mobile/image/m-icon-menu-black-26@3x.png')}/> :
                                <img src={makeImagePath('common/mobile/image/nav-close@3x.png')}/>}
                        </button>
                        <p className="HeaderTitle" onClick={() => this.handleNavOff()}>
                            <Link to='/'><img src={makeImagePath('common/mobile/image/m-logo-black-beta@3x.png')} alt=""/></Link>
                        </p>

                    </div>
                </header>
                { nav === true  ? <Nav navoff={this.handleNavOff} /> : '' }
            </>
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
)(Header);
