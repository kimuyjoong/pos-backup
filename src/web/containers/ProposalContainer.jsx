import React from 'react';
import Proposal from '../components/proposal/Proposal';

class ProposalContainer extends React.Component {
    handleSubmit (e) {
        console.log('xxx')
    }
    render() {
        return (
            <>
                <Proposal
                    onSubmit={this.handleSubmit} />
            </>
        )
    }
}

export default ProposalContainer;
