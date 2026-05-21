## 项目简介

本项目是一个 **React 前端路由（React Router）** 的完整入门示例，带你从空文件夹开始，一步步搭建出一个具备首页、文章页、个人资料页、路由守卫和 404 页面的单页应用（SPA）。

## 适合谁读

- 刚学完 React 基础，想了解**前端路由是怎么工作的**
- 在别的教程里卡住了，想要一份**每一步都有说明、能跑通**的参考
- 需要一个最小化的 React Router 项目骨架，方便在此基础上改造成自己的 Demo 或原型

## 你将学到

- 用 `react-router-dom` v6 配置声明式路由
- 动态路由参数（`/post/:id`、`/profile/:username`）
- `Link` / `NavLink` / `useNavigate` 实现导航
- 模拟登录态的路由守卫（未登录跳转提示）
- 404 通配路由与 `useLocation` 的用法

### 项目最终结构

```
react-router-by-hand/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Navbar.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Post.js
│   │   ├── Profile.js
│   │   └── NotFound.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
└── package.json
```

> 以下步骤从零开始，共九章，约 30 分钟可完成全部搭建。

## 完整项目搭建步骤（从零开始）

## 目录

- [一、环境准备](#一环境准备)
  - [1.1 检查 Node.js 版本](#11-检查-nodejs-版本)
  - [1.2 检查 npm 版本](#12-检查-npm-版本)
- [二、创建项目](#二创建项目)
  - [方法一：使用 Create React App（推荐，最简单）](#方法一使用-create-react-app推荐最简单)
  - [方法二：手动搭建（完全控制）](#方法二手动搭建完全控制)
- [三、详细步骤（手动搭建版本）](#三详细步骤手动搭建版本)
  - [步骤 1：创建 package.json](#步骤-1创建-packagejson)
  - [步骤 2：创建 public/index.html](#步骤-2创建-publicindexhtml)
  - [步骤 3：创建 src/index.js](#步骤-3创建-srcindexjs)
  - [步骤 4：创建 src/App.js](#步骤-4创建-srcappjs)
  - [步骤 5：创建 src/components/Navbar.js](#步骤-5创建-srccomponentsnavbarjs)
  - [步骤 6：创建页面组件](#步骤-6创建页面组件)
  - [步骤 7：创建 src/styles.css](#步骤-7创建-srcstylescss)
- [四、一键创建所有文件的脚本](#四一键创建所有文件的脚本)
- [五、安装依赖和启动](#五安装依赖和启动)
  - [5.1 安装依赖](#51-安装依赖)
  - [5.2 启动开发服务器](#52-启动开发服务器)
  - [5.3 打开浏览器](#53-打开浏览器)
- [六、可能遇到的问题及解决](#六可能遇到的问题及解决)
  - [问题 1：端口被占用](#问题-1端口被占用)
  - [问题 2：依赖安装失败](#问题-2依赖安装失败)
  - [问题 3：React Router 版本问题](#问题-3react-router-版本问题)
- [七、验证项目功能](#七验证项目功能)
- [八、项目依赖总结](#八项目依赖总结)
- [九、快速启动命令（汇总）](#九快速启动命令汇总)


## 一、环境准备

### 1.1 检查 Node.js 版本

```bash
# 检查 Node.js 是否安装
node --version

# 应该显示 v16.0.0 或更高版本
# 如果未安装，去 https://nodejs.org 下载 LTS 版本
```

### 1.2 检查 npm 版本

```bash
npm --version
# 应该显示 8.0.0 或更高版本
```

---

## 二、创建项目

### 方法一：使用 Create React App（推荐，最简单）

```bash
# 1. 创建项目
npx create-react-app react-router-by-hand

# 2. 进入项目目录
cd react-router-by-hand

# 3. 安装 react-router-dom
npm install react-router-dom

# 4. 启动项目
npm start
```

### 方法二：手动搭建（完全控制）

```bash
# 1. 创建项目目录
mkdir react-router-by-hand
cd react-router-by-hand

# 2. 初始化 package.json
npm init -y

# 3. 安装核心依赖
npm install react@18.2.0 react-dom@18.2.0 react-router-dom@6.20.0

# 4. 安装开发依赖
npm install -D react-scripts@5.0.1

# 5. 创建文件夹结构
mkdir -p src/pages src/components
mkdir public
```

---

## 三、详细步骤（手动搭建版本）

### 步骤 1：创建 `package.json`

如果使用 `npm init -y` 生成的默认配置，需要修改如下：

```json
{
  "name": "react-router-by-hand",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "devDependencies": {
    "react-scripts": "5.0.1"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

### 步骤 2：创建 `public/index.html`

```bash
# 创建文件
touch public/index.html
```

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="React Router 完整示例应用" />
    <title>React 路由应用</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
```

### 步骤 3：创建 `src/index.js`

```bash
touch src/index.js
```

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### 步骤 4：创建 `src/App.js`

```bash
touch src/App.js
```

```javascript
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Post from './pages/Post';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2024 React Router 示例应用 | 演示前端路由原理</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
```

### 步骤 5：创建 `src/components/Navbar.js`

```bash
mkdir -p src/components
touch src/components/Navbar.js
```

```javascript
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/">React 路由应用</Link>
        </div>
      
        <ul className="nav-menu">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              end
            >
              首页
            </NavLink>
          </li>
        
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              关于
            </NavLink>
          </li>
        
          <li>
            <NavLink 
              to="/post/hello-world" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              文章示例
            </NavLink>
          </li>
        
          <li>
            <NavLink 
              to="/profile/john" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              个人资料
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
```

### 步骤 6：创建页面组件

#### `src/pages/Home.js`

```bash
mkdir -p src/pages
touch src/pages/Home.js
```

```javascript
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPosts([
        { id: 'react-router-guide', title: 'React Router 完全指南', date: '2024-01-15' },
        { id: 'frontend-routing', title: '前端路由原理深度解析', date: '2024-01-20' },
        { id: 'spa-optimization', title: 'SPA 性能优化实践', date: '2024-01-25' },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="page home-page">
      <h1>🏠 欢迎来到首页</h1>
      <p>这是 React Router 的完整示例应用，演示前端路由的工作原理。</p>
    
      <section className="feature-section">
        <h2>核心特性演示</h2>
        <ul>
          <li>✅ 无刷新页面切换</li>
          <li>✅ 动态路由参数 (:id, :username)</li>
          <li>✅ 嵌套路由</li>
          <li>✅ 编程式导航</li>
          <li>✅ 404 页面处理</li>
          <li>✅ 路由守卫（未登录拦截）</li>
        </ul>
      </section>
    
      <section className="posts-section">
        <h2>📝 最新文章</h2>
        {loading ? (
          <div className="loading">加载中...</div>
        ) : (
          <ul className="posts-list">
            {posts.map(post => (
              <li key={post.id}>
                <Link to={`/post/${post.id}`} className="post-link">
                  <strong>{post.title}</strong>
                  <small>{post.date}</small>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    
      <div className="demo-section">
        <h2>路由演示</h2>
        <div className="demo-buttons">
          <Link to="/post/custom-id" className="demo-btn">
            查看动态文章
          </Link>
          <Link to="/profile/alice" className="demo-btn">
            查看用户 Alice
          </Link>
          <Link to="/non-existent-page" className="demo-btn">
            测试 404 页面
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
```

#### `src/pages/About.js`

```bash
touch src/pages/About.js
```

```javascript
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
              <li>渲染对应的组件到 <div id="root"> 中</li>
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
```

#### `src/pages/Post.js`

```bash
touch src/pages/Post.js
```

```javascript
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function Post() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  
    setTimeout(() => {
      const postsData = {
        'hello-world': {
          title: 'Hello World!',
          content: '这是你的第一篇文章。React Router 让前端路由变得简单而强大。',
          author: 'Admin',
          date: '2024-01-15'
        },
        'react-router-guide': {
          title: 'React Router 完全指南',
          content: 'React Router 是 React 生态中最流行的路由库。它提供了声明式的路由配置、嵌套路由、路由守卫等强大功能。',
          author: 'John Doe',
          date: '2024-01-20'
        },
        'frontend-routing': {
          title: '前端路由原理深度解析',
          content: '前端路由的核心是 History API 和 hash 变化监听。通过拦截页面跳转，实现无刷新切换。',
          author: 'Jane Smith',
          date: '2024-01-25'
        }
      };
    
      const foundPost = postsData[id] || {
        title: `文章: ${id}`,
        content: `这是 ID 为 "${id}" 的文章页面。在实际应用中，这里会从 API 获取真实数据。`,
        author: '系统',
        date: new Date().toLocaleDateString()
      };
    
      setPost(foundPost);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return <div className="page post-page"><div className="loading">加载文章内容中...</div></div>;
  }

  return (
    <div className="page post-page">
      <div className="post-header">
        <button onClick={() => navigate(-1)} className="back-btn">← 返回</button>
        <h1>📄 {post.title}</h1>
      </div>
    
      <div className="post-meta">
        <span>✍️ 作者: {post.author}</span>
        <span>📅 日期: {post.date}</span>
        <span>🔗 文章 ID: {id}</span>
      </div>
    
      <div className="post-content">
        <p>{post.content}</p>
      </div>
    
      <div className="info-box">
        <h3>💡 路由演示说明</h3>
        <p>当前 URL 参数: <code>{id}</code></p>
        <p>尝试修改 URL 中的 ID，页面会根据新的 ID 重新加载内容。</p>
      </div>
    </div>
  );
}

export default Post;
```

#### `src/pages/Profile.js`

```bash
touch src/pages/Profile.js
```

```javascript
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
```

#### `src/pages/NotFound.js`

```bash
touch src/pages/NotFound.js
```

```javascript
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
```

### 步骤 7：创建 `src/styles.css`

```bash
touch src/styles.css
```

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f5f5f5;
}

.app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

/* 导航栏 */
.navbar {
    background-color: #2c3e50;
    color: white;
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.nav-brand a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 1rem;
    flex-wrap: wrap;
}

.nav-link {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s;
}

.nav-link:hover {
    background-color: #34495e;
}

.nav-link.active {
    background-color: #3498db;
}

/* 主要内容 */
.main-content {
    flex: 1;
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 20px;
    width: 100%;
}

/* 页面通用 */
.page {
    background: white;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.page h1 {
    margin-bottom: 1rem;
    color: #2c3e50;
}

.page h2 {
    margin: 1.5rem 0 1rem;
    color: #34495e;
}

/* 首页特性 */
.feature-section {
    background: #e8f4f8;
    padding: 1.5rem;
    border-radius: 8px;
    margin: 1.5rem 0;
}

.feature-section ul {
    margin-left: 2rem;
}

/* 文章列表 */
.posts-section {
    margin: 2rem 0;
}

.posts-list {
    list-style: none;
    padding: 0;
}

.posts-list li {
    margin: 1rem 0;
    padding: 1rem;
    background: #f9f9f9;
    border-radius: 4px;
    transition: transform 0.2s;
}

.posts-list li:hover {
    transform: translateX(5px);
    background: #f0f0f0;
}

.post-link {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.post-link strong {
    color: #3498db;
}

.post-link small {
    color: #7f8c8d;
}

/* 演示区域 */
.demo-section {
    margin-top: 2rem;
    padding: 1.5rem;
    background: #fef9e4;
    border-radius: 8px;
}

.demo-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    flex-wrap: wrap;
}

.demo-btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.3s;
}

.demo-btn:hover {
    background-color: #2980b9;
}

/* 文章页面 */
.post-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
}

.back-btn {
    padding: 0.5rem 1rem;
    background-color: #95a5a6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.back-btn:hover {
    background-color: #7f8c8d;
}

.post-meta {
    display: flex;
    gap: 2rem;
    padding: 1rem 0;
    border-bottom: 1px solid #ecf0f1;
    margin-bottom: 1.5rem;
    color: #7f8c8d;
    flex-wrap: wrap;
}

.post-content {
    line-height: 1.8;
    margin: 1.5rem 0;
}

/* 关于页面 */
.principle-box {
    background: #2c3e50;
    color: white;
    padding: 1.5rem;
    border-radius: 8px;
    margin: 1rem 0;
}

.principle-box ol {
    margin-left: 1.5rem;
}

/* 个人资料 */
.profile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    gap: 1rem;
}

.logout-btn {
    padding: 0.5rem 1rem;
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.logout-btn:hover {
    background-color: #c0392b;
}

.profile-info {
    background: #f9f9f9;
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 2rem;
}

.info-item {
    padding: 0.5rem 0;
    border-bottom: 1px solid #ecf0f1;
}

.info-item label {
    font-weight: bold;
    display: inline-block;
    width: 100px;
}

/* 404 页面 */
.not-found-page {
    text-align: center;
}

.error-container h1 {
    font-size: 6rem;
    color: #e74c3c;
    margin-bottom: 0;
}

.error-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin: 2rem 0;
    flex-wrap: wrap;
}

/* 通用信息框 */
.info-box {
    background: #e8f4f8;
    border-left: 4px solid #3498db;
    padding: 1rem;
    margin-top: 2rem;
    border-radius: 4px;
}

.info-box code {
    background: white;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
}

/* 路由守卫 */
.auth-guard {
    text-align: center;
    padding: 3rem;
}

.auth-guard h2 {
    color: #e74c3c;
}

/* 加载状态 */
.loading {
    text-align: center;
    padding: 2rem;
    color: #7f8c8d;
}

/* 页脚 */
.footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 1rem;
    margin-top: auto;
}

/* 响应式 */
@media (max-width: 768px) {
    .nav-container {
        flex-direction: column;
        gap: 1rem;
    }
  
    .nav-menu {
        justify-content: center;
    }
  
    .post-header {
        flex-direction: column;
        align-items: flex-start;
    }
  
    .post-meta {
        flex-direction: column;
        gap: 0.5rem;
    }
  
    .info-item label {
        width: auto;
        display: block;
    }
}
```

---

## 四、一键创建所有文件的脚本

为了节省时间，你可以使用这个 Bash 脚本一次性创建所有文件：

```bash
#!/bin/bash

# 创建项目目录
mkdir -p react-router-by-hand/src/{pages,components}
mkdir -p react-router-by-hand/public
cd react-router-by-hand

# 创建 package.json
cat > package.json << 'EOF'
{
  "name": "react-router-by-hand",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "devDependencies": {
    "react-scripts": "5.0.1"
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
  }
}
EOF

# 创建 public/index.html
cat > public/index.html << 'EOF'
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React 路由应用</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
EOF

# 创建 src/index.js
cat > src/index.js << 'EOF'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
EOF

echo "项目创建完成！接下来需要手动添加其他组件文件。"
echo "运行 npm install 安装依赖，然后 npm start 启动项目。"
```

---

## 五、安装依赖和启动

### 5.1 安装依赖

```bash
# 进入项目目录
cd react-router-by-hand

# 安装所有依赖
npm install

# 如果安装慢，可以使用国内镜像
npm install --registry=https://registry.npmmirror.com
```

### 5.2 启动开发服务器

```bash
npm start
```

启动成功后，你会看到：

```
Compiled successfully!

You can now view react-router-by-hand in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.x.x:3000
```

### 5.3 打开浏览器

访问 `http://localhost:3000`，你应该能看到完整的 React 路由应用。

---

## 六、可能遇到的问题及解决

### 问题 1：端口被占用

```bash
# 错误：Something is already running on port 3000

# 解决方案1：杀死占用端口的进程（Windows）
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# 解决方案2：使用其他端口启动
npm start -- --port 3001
```

### 问题 2：依赖安装失败

```bash
# 清除缓存后重试
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### 问题 3：React Router 版本问题

确保安装的是 React Router v6：

```bash
npm list react-router-dom
# 应该显示 react-router-dom@6.x.x

# 如果版本不对，重新安装
npm install react-router-dom@6.20.0
```

---

## 七、验证项目功能

启动后，测试以下功能：


| 测试项     | 操作                | 预期结果                          |
| ---------- | ------------------- | --------------------------------- |
| 首页       | 访问`/`             | 显示首页内容                      |
| 无刷新跳转 | 点击"关于"链接      | URL 变为`/about`，页面不刷新      |
| 动态路由   | 点击文章链接        | URL 变为`/post/xxx`，显示文章内容 |
| 路由守卫   | 访问`/profile/john` | 显示登录提示（因为未登录）        |
| 模拟登录   | 点击"模拟登录"      | 显示个人资料内容                  |
| 404 页面   | 访问`/non-existent` | 显示 404 页面                     |
| 后退按钮   | 点击浏览器后退      | 页面内容恢复，不刷新              |

---

## 八、项目依赖总结

### 生产依赖（dependencies）

```bash
npm install react@18.2.0 react-dom@18.2.0 react-router-dom@6.20.0
```


| 依赖               | 版本   | 作用             |
| ------------------ | ------ | ---------------- |
| `react`            | 18.2.0 | React 核心库     |
| `react-dom`        | 18.2.0 | React DOM 渲染器 |
| `react-router-dom` | 6.20.0 | 前端路由库       |

### 开发依赖（devDependencies）

```bash
npm install -D react-scripts@5.0.1
```


| 依赖            | 版本  | 作用                                    |
| --------------- | ----- | --------------------------------------- |
| `react-scripts` | 5.0.1 | 包含 Webpack、Babel、开发服务器等工具链 |

---

## 九、快速启动命令（汇总）

```bash
# 1. 创建项目（使用 Create React App 最简方式）
npx create-react-app react-router-by-hand
cd react-router-by-hand
npm install react-router-dom

# 2. 删除默认文件，创建自己的组件
rm src/*.css src/*.js
# ... 然后按上面的代码创建文件 ...

# 3. 启动
npm start
```

现在你有一个完整的 React 路由应用可以学习和实验了！🎉
