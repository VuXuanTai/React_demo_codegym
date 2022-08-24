import React from 'react';

import './index.css';
// import './components/SignInform.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM, { createRoot } from 'react-dom/client';
// import UserAgent from './UserAgent';
import ProfileCard from './Profilecard';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignInForm from './components/SignInForm';
import Button from './components/button';
import Headlineclass from './components/HeadlineClass';
import AlertComponent from './components/Alert';
import Studentinfo from './components/StudentInfoComponent';


const container =document.getElementById('root');
const root = createRoot(container);
root.render(
    //<AlertComponent text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại."/>
    <Studentinfo ID = "1"  Name = 'Nguyễn Văn A' Age= "30" Address= 'Hà Nội' />
    );







// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
