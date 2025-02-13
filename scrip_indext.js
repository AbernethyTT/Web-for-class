// 这是 index 页面对应的 JavaScript 文件

import users from './database.js';

// 登录功能的 JavaScript 代码
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 验证用户
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert('登录成功');
        // 可以在这里添加跳转到其他页面的代码
    } else {
        alert('用户名或密码错误');
    }
}

// 绑定登录按钮的点击事件
document.getElementById('loginButton').addEventListener('click', login);
