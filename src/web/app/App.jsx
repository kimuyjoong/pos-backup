import React, { PureComponent }  from 'react';
import { Route } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Home from '../components/home/Home';
import Nav from '../components/nav/Nav';
import PreCheck from '../components/preCheck/PreCheck';
import ApplyFormContainer from "../containers/ApplyFormContainer";
import ProposalContainer from "../containers/ProposalContainer";
import ApplySuccess from "../components/applySuccess/ApplySuccess";
import ApplyApprove from "../components/applyApprove/ApplyApprove";
import ApplyReject from "../components/applyReject/ApplyReject";
import ProposalSuccess from "../components/proposalSuccess/ProposalSuccess1";
import Header from '../containers/HeaderContainer';

class App extends PureComponent{
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
            <div className="Web-Wrap">
                <Header />
                <Route exact path="/" component={Home} />
                <Route exact path="/#section3" component={Home} />
                <Route path="/precheck" component={PreCheck} />
                <Route path="/applyform" component={ApplyFormContainer} />
                <Route path="/applysuccess" component={ApplySuccess} />
                <Route path="/applyapprove" component={ApplyApprove} />
                <Route path="/applyreject" component={ApplyReject} />
                <Route path="/proposal" component={ProposalContainer} />
                <Route path="/proposalsuccess" component={ProposalSuccess} />
                {
                    nav === true ? <Nav navi={navOn} /> : ''
                }

                <Footer/>
            </div>
        );
    }
};

export default App;
