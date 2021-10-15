import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import './App.css';
import BlogDetails from './component/BlogDetails';
import CreateBlog from './component/CreateBlog';
import EditBlog from './component/EditBlog';
import Home from './component/Home';
import store from './redux/store';

function App() {
  return (
      <Provider store={store} >
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/blogCreate"  component={CreateBlog} />
              <Route path="/editBlog/:id"  component={EditBlog} />
              <Route path="/blogDetail/:id"  component={BlogDetails} />
            </Switch>
          </div>
        </Router>
      </Provider>
  );
}

export default App;
