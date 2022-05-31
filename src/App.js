
import React from 'react';
import {BrowserRouter as Router ,Switch, Route} from "react-router-dom"
import Formheader from '../src/component/Survey/Formheader';
import Header from "../src/component/SurveyList/Header"
import Mainbody from '../src/component/SurveyList/Mainbody';
import SubmitForm from './component/View/QuestionPaper';
// import Question_form from './Question_form';
import CenteredTabs from '../src/component/Survey/Tabs';
import Templates from './component/SurveyList/Templates';
import User_form from './component/View/User_form';




function App() {
  return (
    <div className="app">
         <Router>
           <Switch>
                   
           <Route path="/form/:id">
                 <Formheader />
                 {/* <Question_form /> */}
                 <CenteredTabs />
              </Route>

              <Route path="/response/:id">
                 <User_form />
              </Route>

              <Route path="/submitted">
                 <SubmitForm />
              </Route>

              
              <Route path="/">
                <Header />
                <Templates />
                <Mainbody />
              </Route>
        
           </Switch>
         </Router>

    </div>
  );
}

export default App;
