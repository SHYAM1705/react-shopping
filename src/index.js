import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Login } from './components/Login/login';
import { DataBinding } from './components/DataBinding';
import { DataBinding1 } from './components/DataBinding1';
import { DataBinding2 } from './components/DataBinding2';
import { DataBinding3 } from './components/DataBinding3';
import { DataBinding4 } from './components/DataBinding4';
import { ApiDataBinding } from './components/api-data-binding';
import { ApiDataBinding1 } from './components/api-data-binding1';
import { StyleDemo } from './components/style-demo';
import { ClassBinding } from './components/style-class-binding';
import ShoppingComponent from './components/ShoppingComponent';
import   '../node_modules/bootstrap/dist/css/bootstrap.css';
import   '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import DataBindingComponent1 from './components/api-data-binding2';
import ShoppingComponent1 from './components/ShoppingComponent1';
import { EventDemo } from './components/event-demo';
import { EventDemo1 } from './components/event-demo1';
import TwoWayClassDemo from './components/TwoWayClassDemo';
import ShoppingClassDemo from './components/ShoppingClassDemo';
import LoginComponent from './components/LoginComponent';
import FormikDemo from './components/FormikDemo';
import FormikValidation from './components/FormikValidation';
import FormikMultipleValidation from './components/FormikMultipleValidation';
import YupValidation from './components/YupValidation';
import YupValidationComponent from './components/YupValidationComponent';
import LifeCycleComponent from './components/LifeCycleComponent';
import ContextDemo from './components/ContextDemo';
import LoginUser from './components/LoginUser';
import { CookiesProvider } from 'react-cookie';
import UserLogin1 from './components/CookieDemo1';
import ReducerDemo from './components/ReducerDemo';
import JQueryAjaxDemo from './components/JQueryAjaxDemo';
import JQueryAjaxDemo1 from './components/JQueryAjaxDemo1';
import ShoppingIndex from './shopping/ShoppingIndex';
import IShopIndex from './iShops/IShopIndex';
import PasswordValidator from './react-proj/PasswordValidator';
import MUIDemo from './components/MUIDemo';
import JQueryAjaxTest from './components/JQueryAjaxTest';
import { IntervalDemo } from './components/IntervalDemo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <IntervalDemo />
   </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
