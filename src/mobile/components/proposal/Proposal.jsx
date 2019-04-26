import React from 'react';
import ('./Proposal.scss');
const Proposal = ( { proposalsuccess }) => {
    return (
        <div className="Proposal">
            <div className="layoutType1">
                <div className="topTitleType1 type3">
                    <p className="title1">소중한 제안을 등록해주세요. <br/>
                        빨리 연락드리겠습니다.</p>
                </div>
                <img src={process.env.PUBLIC_URL + 'common/mobile/image/m-contact-image@3x.png'} className="proposalImg" alt=""/>
                <div className="formWrap">
                    <p className="title2">문의구분</p>
                    {/*<ul className="inquiryList">*/}
                        {/*<li className="on">배달대행</li>*/}
                        {/*<li>결제대행</li>*/}
                        {/*<li>기타</li>*/}
                    {/*</ul>*/}
                    <div className="radioWrap type2">
                        <div className="radioType1">
                            <input type="radio" defaultChecked="checked" id="proposal1" name="proposalType" className="radio"/>
                            <label htmlFor="proposal1">배달대행</label>
                        </div>
                        <div className="radioType1">
                            <input type="radio" id="proposal2" name="proposalType" className="radio"/>
                            <label htmlFor="proposal2">결제대행</label>
                        </div>
                        <div className="radioType1">
                            <input type="radio" id="proposal3" name="proposalType" className="radio"/>
                            <label htmlFor="proposal3">기타</label>
                        </div>
                    </div>
                    <div className="titleWithRadio">
                        <p className="title2">연동 방식</p>
                        <div className="inRadioWrap type2">
                            <div className="radioType2">
                                <input id="inqueryRadio1" defaultChecked="checked" name="radioset" type="radio"/>
                                <label htmlFor="inqueryRadio1">DLL</label>
                            </div>
                            <div className="radioType2">
                                <input id="inqueryRadio2" name="radioset" type="radio"/>
                                <label htmlFor="inqueryRadio2">API</label>
                            </div>
                        </div>
                    </div>
                    <p className="title2">소속</p>
                    <input type="text" className="inputType1"/>
                    <p className="title2">이름</p>
                    <input type="text" className="inputType1"/>
                    <p className="title2">연락처</p>
                    <input type="text" className="inputType1"/>
                    <p className="title2">이메일</p>
                    <input type="text" className="inputType1"/>
                    <p className="title2">내용</p>
                    <textarea name="" placeholder="자세한 내용을 입력해 주세요.
준비된 제안서가 있을 경우 첨부해 주시면
내용을 파악하는 데 도움이 됩니다." id="" className="textAreaType1 type2">
                    </textarea>
                    <p className="title2">첨부파일</p>
                    <div className="addFileWrap">
                        <input type="file" id="addFile" className="inputType1"/>
                        <label htmlFor="addFile">첨부파일</label>
                    </div>
                    <p className="title2">개인 정보처리 방침</p>
                    <textarea name="" placeholder="(주)우아한형제들(이하 ‘회사’라 한다)은 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법 등 관련 법령(이하 “관련 법령” 이라 함)에 따라 이용자의 개인정보를 보호하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침을 수립합니다.
이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침을 수립합니다." id="" className="textAreaType1 type2">
                    </textarea>
                    <div className="radioType2 option1">
                        <input id="agreeCheck" type="checkbox"/>
                        <label htmlFor="agreeCheck">개인정보 수집 및 이용에 동의합니다.</label>
                    </div>
                </div>

                <button onClick={proposalsuccess} className="btnType1">신청하기</button>

            </div>
        </div>
    );
};
export default Proposal;
