import { Button, Checkbox, Form, Input } from "antd";
// 导入dispath工具
import { useDispatch } from "react-redux";
// 使用状态
import { useState } from "react";
// 导入登录方法aciton
import { login } from "../store/auth/action";
// 导入导航与查询参数
import { useNavigate,useSearchParams} from "react-router-dom";
 
import type { Dispatch } from "redux";
// 验证成功

// 验证失败
const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
function LoginView() {
  // 定义dispatch 工具（发送action动作执行reducer）
  const dispath: Dispatch<any>= useDispatch();
  // 定义用户名和密码
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // 获取查询参数
  const navigate  = useNavigate();
  const [search] = useSearchParams();
  //获取到查询参数redirect 也就是 http://localhost:3000/#?redirect=/admin/abc 
  // 上面地址的 /admin/abc
  const redirect = search.getAll("redirect")[0]||"/admin";
  // 定义回调方法
  const callback = ()=>{
    navigate(redirect);
  }
  // 获取导航navigate
  const onFinish = (values: any) => {
    // 执行dispath action传入用户名和密码
    dispath(login({name,password},callback))
  };
  return (
    <div className="bg">
      <div className="loginBox">
        <h2>
          <span className="primary">完美世界</span>登录
        </h2>
        <Form
          name="basic"
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "你输入用户名" }]}
          >
            <Input
              placeholder="用户名："
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password
              placeholder="密码："
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" block htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default LoginView;
