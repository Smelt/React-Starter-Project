import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Landing from "../containers/Landing.container";
import Header from "../components/Header.component";
import Footer from "../components/Footer.component";
import Sidebar from "../components/Sidebar.component";
/*
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
*/

export class AppRouter extends React.Component {

  state = {
    isSideBarVisible: false
  }

  constructor(props) {
    super(props);
  }

  toggleSidebar = () => {
    console.log("Toggle sidebar");
    console.log(this.state.isSideBarVisible);
    this.setState({ isSideBarVisible: !this.state.isSideBarVisible });
  }


  render() {
    const {isSideBarVisible} = this.state;
    return (
      <BrowserRouter>
        <div>
          <Header toggleSidebar={this.toggleSidebar}/>
          <Sidebar isSideBarVisible={isSideBarVisible} toggleSidebar={this.toggleSidebar}/>
          <Switch>
            <Route path="/" component={Landing} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default AppRouter;

/*

    <Header />
    */
/*
<Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
        */
