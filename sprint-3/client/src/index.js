import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import UploadPage from './UploadPage';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Redirect from="/" exact to="/videos/1af0jruup5gu" ></Redirect>
            <Route path="/videos/:id" component={App}></Route>
            <Route path="/upload" component={UploadPage}></Route>
        </Switch>
    
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
