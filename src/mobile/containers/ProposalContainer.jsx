import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import {navChange, getTestApi, navChangeOff, navLink} from '../actions';
import Proposal from '../components/proposal/Proposal';
import Proposal2 from '../components/proposal/Proposal2';
// import ProposalSuccess from '../components/proposalSuccess/ProposalSuccess1';

class ProposalContainer extends React.Component {
    handleSubmit(){
        console.log("LoginFormData => ");
        // this.props.loginAuth(formData)
    }
    render() {
        return (
            <>
                <Proposal2 onSubmit={this.handleSubmit} />
            </>
        )
    }
}

export default connect()(ProposalContainer);

// const mapStateToProps = (state) => {
//     console.log('mapStatePropsPro: ', state);
//     return {
//         link: state.Header.link,
//     }
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         onNavLink: bindActionCreators(navLink, dispatch)
//     }
// };
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(ProposalContainer);
