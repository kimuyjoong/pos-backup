import React from 'react';
import Proposal from '../components/proposal/Proposal';


class ProposalContainer extends React.PureComponent {
    handleSubmit (e) {
        console.log(e)
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
