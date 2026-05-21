import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NotFound() {
  const location = useLocation();

  return (
    <div className="page not-found-page">
      <div className="error-container">
        <h1>404</h1>
        <h2>页面未找到</h2>
        <p>抱歉，路径 <code>{location.pathname}</code> 不存在。</p>
        
        <div className="error-actions">
          <Link to="/" className="demo-btn">返回首页</Link>
          <Link to="/about" className="demo-btn">关于页面</Link>
          <button onClick={() => window.history.back()} className="demo-btn">
            返回上一页
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;