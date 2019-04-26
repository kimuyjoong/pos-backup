import React, { PureComponent }  from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Home from '../components/home/Home';
import Nav from '../components/nav/Nav';
import PreCheck from '../components/preCheck/PreCheck';
import ApplyForm from "../components/applyForm/ApplyForm";
import ApplySuccess from "../components/applySuccess/ApplySuccess";
import ApplySuccess2 from "../components/applySuccess2/ApplySuccess2";
import Proposal from "../components/proposal/Proposal";
import ProposalSuccess from "../components/proposalSuccess/ProposalSuccess1";

class Container extends PureComponent{
    state = {
        icon: false,
        nav: false,
        navicon: false,
        precheck: false,
        home: true,
        appyform: false,
        applysuccess: false,
        applysuccess2: false,
        proposal: false,
        proposalsuccess: false
    };

    goHome = () => {
        if(this.state.home === false){
            this.setState({
                icon: false,
                nav: false,
                precheck: false,
                home: true,
                appyform: false,
                applysuccess: false,
                applysuccess2: false,
                proposal: false,
                proposalsuccess: false

            })
        }
    };

    navOn = () => {
        if(this.state.nav === false){
            this.setState({
                nav: true
            })
        } else {
            this.setState({
                nav: false
            })
        }
    };

    preCheck = () => {
        if(this.state.precheck === false){
            window.scrollTo(0, 0)
            this.setState({
                icon: false,
                nav: false,
                precheck: true,
                home: false,
                appyform: false,
                applysuccess: false,
                applysuccess2: false,
                proposal: false,
                proposalsuccess: false

            })
        }
    };

    afterCheck = () => {
        if(this.state.appyform === false){
            window.scrollTo(0, 0)
            this.setState({
                icon: false,
                nav: false,
                precheck: false,
                home: false,
                appyform: true,
                applysuccess: false,
                applysuccess2: false,
                proposal: false,
                proposalsuccess: false

            })
        }
    };

    submitForm = () => {
        if(this.state.applysuccess === false){
            window.scrollTo(0, 0)
            this.setState({
                icon: false,
                nav: false,
                precheck: false,
                home: false,
                appyform: false,
                applysuccess: true,
                applysuccess2: false,
                proposal: false,
                proposalsuccess: false

            })
        }
    };

    applySuccess = () => {
        if(this.state.applysuccess === true){
            window.scrollTo(0, 0)
            this.setState({
                icon: false,
                nav: false,
                precheck: false,
                home: false,
                appyform: true,
                applysuccess: false,
                applysuccess2: false,
                proposal: false,
                proposalsuccess: false

            })
        }
    };

    applySuccess2 = () => {
        window.scrollTo(0, 0)
        this.setState({
            icon: false,
            nav: false,
            precheck: false,
            home: false,
            appyform: false,
            applysuccess: false,
            applysuccess2: true,
            proposal: false,
            proposalsuccess: false

        })
    };

    proPosal = () => {
        window.scrollTo(0, 0)
        this.setState({
            icon: false,
            nav: false,
            precheck: false,
            home: false,
            appyform: false,
            applysuccess: false,
            applysuccess2: false,
            proposal: true,
            proposalsuccess: false
        })
    };

    proPosalSuccess = () => {
        window.scrollTo(0, 0)
        this.setState({
            icon: false,
            nav: false,
            precheck: false,
            home: false,
            appyform: false,
            applysuccess: false,
            applysuccess2: false,
            proposal: false,
            proposalsuccess: true
        })
    };

    render(){
        const { nav, home, precheck, appyform, applysuccess, applysuccess2, proposal, proposalsuccess } = this.state;
        const { goHome, navOn, preCheck, afterCheck, submitForm, applySuccess, applySuccess2, proPosal, proPosalSuccess } = this;
        return (
            <div className="Mobile-Wrap">
                <Header navi={navOn} nav={nav} home={home} precheck={precheck} gohome={goHome} appyform={appyform}
                        applysuccess={applysuccess} applysuccess2={applysuccess2} proposal={proposal} proposalsuccess={proposalsuccess}/>
                {
                    nav === true ? <Nav precheck={preCheck} proposal={proPosal} /> : ''
                }

                {
                    home === true ? <Home precheck={preCheck} /> : ''
                }

                {
                    precheck === true ? <PreCheck aftercheck={afterCheck} /> : ''
                }

                {
                    appyform === true ? <ApplyForm submitform={submitForm} applysuccess2={applySuccess2} /> : ''
                }

                {
                    applysuccess === true ? <ApplySuccess applysuccess={ applySuccess } /> : ''
                }

                {
                    applysuccess2 === true ? <ApplySuccess2 /> : ''
                }

                {
                    proposal === true ? <Proposal proposalsuccess={ proPosalSuccess } /> : ''
                }

                {
                    proposalsuccess === true ? <ProposalSuccess /> : ''
                }

                <Footer proposal={ proPosal } />
            </div>
        );
    }
};

export default Container;
