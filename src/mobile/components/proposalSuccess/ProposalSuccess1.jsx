import React from 'react';
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {navLink} from "../../actions";
import {connect} from "react-redux";

class ProposalSuccess extends React.Component{
    handleNavLink(e){
        const { onNavLink } = this.props;
        onNavLink(e)
    }
    render(){
        return (
            <div className="ApplySuccess2">
                <div className="layoutType1 type3">
                    <div className="topTitleType1">
                        <p className="title1">제안이 정상적으로 <br/>
                            발송되었습니다. <br/>
                            빨리 연락드리겠습니다.</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + 'common/mobile/image/m-contact-image-success@3x.png'} className="proposalImg" alt=""/>
                    <button onClick={() => this.handleNavLink('home')} className="btnType1"><Link to='/'>확인</Link></button>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    console.log('mapStateProps: ', state);
    return {
        link: state.Header.link,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onNavLink: bindActionCreators(navLink, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProposalSuccess);
