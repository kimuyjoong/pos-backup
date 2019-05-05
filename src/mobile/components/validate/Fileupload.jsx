import React from 'react'
import {connect} from "react-redux";

class Fileupload extends React.Component {
    state = {
        isShow: true
    };

    fileUpload = () => {
        //용량체크
        // if(document.getElementById("addFile").value!=""){
        //     var fileSize = document.getElementById("addFile").files[0].size;
        //     var maxSize = 3 * 1024 * 1024;//3MB
        //
        //     if(fileSize > maxSize){
        //         alert("첨부파일 사이즈는 3MB 이내로 등록 가능합니다. ");
        //         document.getElementById("addFile").value='';
        //         return;
        //     }
        // }
        console.log('file upload')
    };



    render() {
        const {values, input, type, meta: { touched, error, warning } } = this.props;
        delete input.value;

        return (
            <div className="addFileWrap">
                <input id="addFile" accept=".pdf, .doc, .docx, .ppt, .pptx, .hwp, .gul, .txt, .xlsx, .xls" {...input} type={type}/>
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
    // console.log('mapStatePropsFile: ', state);
    // form: state.form
    return {
        values: state.form
    }
};

export default connect(
    mapStateToProps,
)(Fileupload);
