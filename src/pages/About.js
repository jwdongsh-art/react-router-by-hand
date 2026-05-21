import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div className="page about-page">
      <h1>📖 关于本应用</h1>
      
      <div className="about-content">
        <section>
          <h2>这个应用演示了什么？</h2>
          <p>这是一个完整的 React 路由示例，展示了前端路由的核心工作机制。</p>
        </section>
        
        <section>
          <h2>技术栈</h2>
          <ul>
            <li>React 18 - UI 框架</li>
            <li>React Router 6 - 路由管理</li>
            <li>纯 CSS - 样式（无依赖）</li>
          </ul>
        </section>
        
        <section>
          <h2>路由原理说明</h2>
          <div className="principle-box">
            <h3>工作流程：</h3>
            <ol>
              <li>用户访问某个 URL（如 /about）</li>
              <li>服务器返回同一个 index.html</li>
              <li>React 启动，读取当前 URL</li>
              <li>React Router 匹配路由规则</li>
              <li>渲染对应的组件到 &lt;div id="root"&gt; 中</li>
            </ol>
          </div>
        </section>
        
        <section>
          <h2>编程式导航示例</h2>
          <button onClick={() => navigate('/')} className="demo-btn">
            返回首页（编程式导航）
          </button>
          <button onClick={() => navigate(-1)} className="demo-btn">
            后退一页
          </button>
          <button onClick={() => navigate('/profile/demo')} className="demo-btn">
            查看 demo 用户
          </button>
        </section>
      </div>
    </div>
  );
}

export default About;