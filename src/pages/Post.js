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