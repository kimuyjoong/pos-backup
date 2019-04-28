import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navChange, getTestApi } from '../actions';
import {makeImagePath} from "../components/util/path";
import {Link} from "react-router-dom";
import Nav from '../components/nav/Nav';

class Header extends React.Component {
    handleClickButton() {
        const { onNavChange, testJSON, onGetTestApi } = this.props;
        onNavChange();
        onGetTestApi();
        console.log('testJSON: ', testJSON);
    }

    handleNav(){
        const { onNavChange } = this.props;
        onNavChange()
    }

    navOnOff = () => {
        if(this.props.nav === false){
            this.handleNav()
        } else {
            this.handleNav()
        }
    };

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
                        <p className="HeaderTitle">
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
        onGetTestApi: bindActionCreators(getTestApi, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
