import React from 'react'
import {connect} from "react-redux";

class Fileupload extends React.Component {
    state = {
        isShow: true
    };

    render() {
        const {values, input, type, meta: { touched, error, warning } } = this.props;
        delete input.value;

        return (
            <div className="addFileWrap">
                <input id="addFile" {...input} type={type}/>
                <label htmlFor={input.name}></label>
                {/*<label htmlFor={input.name}>{this.state.isShow ? '트루' : '펄스'}</label>*/}
            </div>
        )
    }
}


// const Fileupload= ({ input, type, meta: { touched, error, warning } }) => {
//     delete input.value;
//
//     return (
//         <div className="addFileWrap">
//             <input id="addFile" {...input} type={type}/>
//             <label htmlFor={input.name}>첨부파일</label>
//         </div>
//     )
// };

// export default Fileupload;

const mapStateToProps = (state) => {
    console.log('mapStatePropsFile: ', state);
    // form: state.form
    return {
        values: state.form
    }
};

export default connect(
    mapStateToProps,
)(Fileupload);
