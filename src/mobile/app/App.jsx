import React, { PureComponent }  from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Home from '../components/home/Home';
import Nav from '../components/nav/Nav';
import PreCheck from '../components/preCheck/PreCheck';
import ApplyFormContainer from "../containers/ApplyFormContainer";
import ProposalContainer from "../containers/ProposalContainer";
import ApplySuccess from "../components/applySuccess/ApplySuccess";
import ApplyApprove from "../components/applyApprove/ApplyApprove";
import ApplyReject from "../components/applyReject/ApplyReject";
import NotFound from "../components/notFound/NotFound";

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
            <div className="Mobile-Wrap">
                <Switch>
                    <Route exact path="/" component={Home} />
                    {/*<Route exact path="/home" component={Home} />*/}
                    {/*<Route exact path="/#section3" component={Home} />*/}
                    <Route exact path="/precheck" component={PreCheck} />
                    <Route exact path="/applyform" component={ApplyFormContainer} />
                    <Route exact path="/applysuccess" component={ApplySuccess} />
                    <Route exact path="/applyapprove" component={ApplyApprove} />
                    <Route exact path="/applyreject" component={ApplyReject} />
                    <Route exact path="/proposal" component={ProposalContainer} />
                    <Route exact path="/proposalsuccess" component={ProposalSuccess} />
                    <Route component={NotFound} />

                </Switch>
                <Header />
                {
                    nav === true ? <Nav navi={navOn} /> : ''
                }

                <Footer/>
            </div>
        );
    }
};

export default App;
