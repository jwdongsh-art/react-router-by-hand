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