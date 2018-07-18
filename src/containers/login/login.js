import React, {Component} from 'react';
import {NavBar, WingBlank, WhiteSpace, InputItem, Button} from 'antd-mobile'
import Logo from '../../components/logo/logo'
import axios from 'axios';
//


//定义组件:
class Login extends Component {
  state = {
    username: '',
    password: ''
  }
  handleChange = (name, val) => {
    this.setState({
      [name]: val
    })

  }
  goRegister = () => {
    console.log(this.props);
    this.props.history.replace('/register')
  }
  axiosLogin = () => {
    return (
      axios.post('/login', {'username': this.state.username, 'password': this.state.password})
        .then((res) => {
          // console.log(res.data);
          alert(res.data.msg);
        })
        .catch((err) => {
          console.log(err);
        })
    )
  }

  render() {
    return (
      <div>
        <NavBar>用户登录</NavBar>
        <Logo/>
        <WhiteSpace/>
        <WingBlank>
          <InputItem placeholder='请输入账号' onChange={(val) => this.handleChange('username', val)}>账号:</InputItem>
          <WhiteSpace/>
          <InputItem type='password' placeholder='请输入密码'
                     onChange={(val) => this.handleChange('password', val)}>密码:</InputItem>
          <WhiteSpace/>
          <WhiteSpace/>
          <Button type='primary' onClick={this.axiosLogin}>登&nbsp;录</Button>
          <WhiteSpace/>
          <Button onClick={this.goRegister}>没有账户?</Button>
          <WhiteSpace/>
        </WingBlank>
      </div>
    )
  }
}


export default Login;