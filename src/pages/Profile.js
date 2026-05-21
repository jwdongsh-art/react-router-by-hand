import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function Profile() {
  const { username } = useParams();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    
    if (loggedIn) {
      const users = {
        'john': { name: 'John Doe', email: 'john@example.com', bio: '全栈开发者' },
        'alice': { name: 'Alice Chen', email: 'alice@example.com', bio: 'UI/UX 设计师' }
      };
      setUserData(users[username] || {
        name: username,
        email: `${username}@example.com`,
        bio: '这个用户还没有填写简介'
      });
    }
  }, [username]);

  if (isLoggedIn === false) {
    return (
      <div className="page profile-page">
        <div className="auth-guard">
          <h2>🔒 需要登录</h2>
          <p>请先登录后再查看个人资料页面</p>
          <button 
            onClick={() => {
              localStorage.setItem('isLoggedIn', 'true');
              setIsLoggedIn(true);
            }}
            className="demo-btn"
          >
            模拟登录
          </button>
          <button onClick={() => navigate('/')} className="demo-btn">
            返回首页
          </button>
        </div>
      </div>
    );
  }

  if (!userData) {
    return <div className="page">加载中...</div>;
  }

  return (
    <div className="page profile-page">
      <div className="profile-header">
        <h1>👤 {userData.name}</h1>
        <button 
          onClick={() => {
            localStorage.removeItem('isLoggedIn');
            setIsLoggedIn(false);
          }}
          className="logout-btn"
        >
          退出登录
        </button>
      </div>
      
      <div className="profile-info">
        <div className="info-item">
          <label>用户名：</label>
          <span>{username}</span>
        </div>
        <div className="info-item">
          <label>邮箱：</label>
          <span>{userData.email}</span>
        </div>
        <div className="info-item">
          <label>个人简介：</label>
          <span>{userData.bio}</span>
        </div>
      </div>
      
      <div className="info-box">
        <h3>🔐 路由守卫演示</h3>
        <p>这个页面展示了路由守卫的概念：未登录时自动跳转到登录提示页。</p>
        <p><strong>当前状态：</strong> {isLoggedIn ? '✅ 已登录' : '❌ 未登录'}</p>
      </div>
    </div>
  );
}

export default Profile;