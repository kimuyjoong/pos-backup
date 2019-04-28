import React, { PureComponent }  from 'react';
import { Route } from 'react-router-dom';
// import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Home from '../components/home/Home';
import Nav from '../components/nav/Nav';
import PreCheck from '../components/preCheck/PreCheck';
import ApplyForm from "../components/applyForm/ApplyForm";
import ApplySuccess from "../components/applySuccess/ApplySuccess";
import ApplyApprove from "../components/applyApprove/ApplyApprove";
import ApplyReject from "../components/applyReject/ApplyReject";
import Proposal from "../components/proposal/Proposal";
import ProposalSuccess from "../components/proposalSuccess/ProposalSuccess1";
import Header2 from './Header';

class Container extends PureComponent{
    state = {
        icon: false,
        nav: false,
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

    render(){
        const { nav } = this.state;
        const {  navOn } = this;
        return (
            <div className="Mobile-Wrap">
                <Route exact path="/" component={Home} />
                <Route exact path="/#section3" component={Home} />
                <Route path="/precheck" component={PreCheck} />
                <Route path="/applyform" component={ApplyForm} />
                <Route path="/applysuccess" component={ApplySuccess} />
                <Route path="/applyapprove" component={ApplyApprove} />
                <Route path="/applyreject" component={ApplyReject} />
                <Route path="/proposal" component={Proposal} />
                <Route path="/proposalsuccess" component={ProposalSuccess} />

                <Header2 />
                {/*<Header navi={navOn} nav={nav}/>*/}
                {
                    nav === true ? <Nav navi={navOn} /> : ''
                }

                <Footer/>
            </div>
        );
    }
};

export default Container;
