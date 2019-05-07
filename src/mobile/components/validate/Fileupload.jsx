import React from 'react'
import {connect} from "react-redux";

class Fileupload extends React.Component {

    render() {
        const { input, type } = this.props;
        delete input.value;

        return (
            <div className="addFileWrap2">
                <input id="addFile" accept=".pdf, .doc, .docx, .ppt, .pptx, .hwp, .gul, .txt, .xlsx, .xls" {...input} type={type}/>
                <label htmlFor={input.name}>찾아보기</label>
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
    // console.log('mapStatePropsFile: ', state);
    // form: state.form
    return {
        values: state.form
    }
};

export default connect(
    mapStateToProps,
)(Fileupload);
