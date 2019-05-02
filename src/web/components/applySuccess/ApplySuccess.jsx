import React from 'react';
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { navChangeOff } from "../../actions";

import { Link } from 'react-router-dom';
import ('./ApplySuccess.scss');


class ApplySuccess extends React.Component{
    render(){
        const { values } = this.props;
        return (
            <div className="ApplySuccess">
                <div className="layoutType1">
                    <div className="topTitleType1">
                        <p className="title1">신청 완료! <br/>
                            내용을 확인 중입니다.</p>
                    </div>
                    <div className="confirmList">
                        <div className="listWrap">
                            <div className="leftside">회원 정보</div>
                            <div className="rightside">
                                <ul className="infoList">
                                    <li>{values.name}</li>
                                    <li>{values.phoneNumber}</li>
                                    <li>{values.email}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="listWrap">
                            <div className="leftside">사업자 등록 정보</div>
                            <div className="rightside">
                                <ul className="infoList">
                                    <li>{values.businessnumber}</li>
                                    <li>{values.businessownername}</li>
                                    <li>{values.businessbirthday}</li>
                                    <li>{values.businessname}</li>
                                    <li>{values.businessaddress}</li>
                                    <li className="address">{values.businessaddressroad}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="listWrap">
                            <div className="leftside">결제 / 배달 정보</div>
                            <div className="rightside">
                                <ul className="infoList">
                                    <li>{values.paymethod}</li>
                                    <li>{values.deliveryuse}</li>
                                    <li>{values.paymethodsecond}</li>
                                    <li>{values.deliveryarea}</li>
                                    <li>{values.pickuptime}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <button className="btnType1"><Link to='/applyform'>신청 정보 수정하기</Link></button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('mapStatePropsApply: ', state);
    // form: state.form
    return {
        values: state.form.apply.values
    }
};

// function mapStateToProps(state) {
//     return { form: state.form }
// }
//
export default connect(
    mapStateToProps,
)(ApplySuccess);

// export default ApplySuccess;
