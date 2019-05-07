import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProposalApi } from '../actions';
import Proposal from '../components/proposal/Proposal';

class ProposalContainer extends React.Component {
    handleSubmit(){
        // const { onFetchProposalApi } = this.props;
        // onFetchProposalApi();
        window.location.href="/proposalsuccess";
    }
    render() {
        return (
            <>
                <Proposal onSubmit={this.handleSubmit} />
            </>
        )
    }
}

// export default connect()(ProposalContainer);

const mapStateToProps = (state) => {
    console.log('mapStatePropsPro: ', state);
    return {
        link: state.Header.link,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchProposalApi: bindActionCreators(fetchProposalApi, dispatch)
    }
};
//
export default connect(
    mapDispatchToProps
)(ProposalContainer);
