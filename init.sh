#!/bin/bash

# 创建项目目录
mkdir -p my-router-app/src/{pages,components}
mkdir -p my-router-app/public
cd my-router-app

# 创建 package.json
cat > package.json << 'EOF'
{
  "name": "my-router-app",
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