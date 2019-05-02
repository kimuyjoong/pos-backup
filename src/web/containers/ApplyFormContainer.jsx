import React from 'react';
import ApplyForm from '../components/applyForm/ApplyForm';


class ApplyFormContainer extends React.PureComponent {
    handleSubmit (e) {
        console.log(e)
    }
    render() {
        return (
            <>
                <ApplyForm
                    onSubmit={this.handleSubmit} />
            </>
        )
    }
}

export default ApplyFormContainer;
