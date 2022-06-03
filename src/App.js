import React from "react";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import Formheader from "../src/component/Survey/Formheader";
import Header from "../src/component/SurveyList/Header";
import Mainbody from "../src/component/SurveyList/Mainbody";
import SubmitForm from "./component/View/QuestionPaper";
// import Question_form from './Question_form';
import CenteredTabs from "./component/Survey/Tab_survey_create";
import Tabs_update from "./component/Survey/Tab_survey_action";
import Templates from "./component/SurveyList/Templates";
import User_form from "./component/View/User_form";
import Home from './component/ViewUser/Pages/Home/index'
import Blog from './component/ViewUser/Pages/Blog/index'
import Profile from './component/ViewUser/Pages/Profile/index'
import LoginForm from './component/ViewUser/Pages/Login/LoginForm'
// import Register from './component/ViewUser/Pages/Register/Register'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/survey/:id">
            <Formheader />
            <Tabs_update />
          </Route>
          <Route path="/form/:id">
            <Formheader />
            <CenteredTabs />
          </Route>

          <Route path="/report/:id">
            <Formheader />
            {/* <Question_form /> */}
            <User_form />
          </Route>

          <Route path="/response/:id">
            <User_form />
          </Route>

          <Route path="/submitted">
            <SubmitForm />
          </Route>

          <Route path="/admin">
            <Header />
            <Templates />
            <Mainbody />
          </Route>

          <Route path="/">
            <Route path='/' exact component={Home} />
            <Route path='/blog/:id' component={Blog} />
            <Route path='/profile' component={Profile} />
            <Route path='/login' component={LoginForm} />
            {/* <Route path='/register' component={Register} /> */}
            <Redirect to='/login' />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
