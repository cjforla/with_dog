import Admin from 'pages/Admin/Admin';
import SignIn from 'pages/Login/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Login/Signup';
import NoticeBoard from 'pages/NoticeBoard/NoticeBoard';
import MainRouter from './pages/MainRouter/MainRouter';
import Main from 'pages/Main';
import ChatRoom from 'pages/Chatting/ChatRoom';
import KakaoLogin from 'pages/Login/SignIn/kakaoLogin/KakaoLoginRedirect';
import GoogleLogin from 'pages/Login/SignIn/googleLogin/GoogleRedirect';
import NoticeBoardWrite from 'pages/NoticeBoard/NoticeBoardWrite/NoticeBoardWrite';
import AdminSignIn from 'pages/Admin/components/AdminLogin/AdminLogin';
import NoticeBoardModify from 'pages/NoticeBoard/NoticeBoardWrite/NoticeBoardModify';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/noticeboard" element={<NoticeBoard />} />
        <Route path="/noticeboard/write" element={<NoticeBoardWrite />} />
        <Route path="/noticeboard/modify" element={<NoticeBoardModify />} />
        <Route path="/*" element={<MainRouter />} />
        <Route path="/admin/:value/*" element={<Admin />} />
        <Route path="/adminsignin" element={<AdminSignIn />} />
        <Route path="/chat/:id" element={<ChatRoom />} />
        <Route path="/kakaoLogin" element={<KakaoLogin />} />
        <Route path="/googleLogin" element={<GoogleLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
