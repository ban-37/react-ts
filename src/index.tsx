import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ConfigProvider} from 'antd'
// 导入中文
import zhCN from 'antd/locale/zh_CN';
// 导入antd的css
import 'antd/dist/reset.css';
// 导入仓库
import store from './store/index'
// 导入react-redux提供
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
      <App />
      </ConfigProvider>
    </Provider>
  //  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
