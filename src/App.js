import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import StudentFrom from './components/StudentFrom';
import TeacherForm from './components/TeacherForm';
import Navigation from './components/Navigation'
function App() {
  return (
    <div className="background">
      <div>
        <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path='/' component={HomePage} exact/>
            <Route path= '/teacher' component={TeacherForm} exact/>
            <Route path='/student' component={StudentFrom} />
            
          </Switch>
          <Footer />
        </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
