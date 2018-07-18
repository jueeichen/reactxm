import React, {Component} from 'react';
import {NavBar, List, WingBlank, WhiteSpace, InputItem, Button, Radio} from 'antd-mobile'
import Logo from '../../components/logo/logo'
import axios from "axios/index";


//定义组件:
class Register extends Component {

  state = {
    username: '',
    password: '',
    rePassword: '',
    type: 'dashen' //laoban
  }


  handleChange = (name, val) => {
    this.setState({
      [name]: val
    })
  }

  goLogin = () => {
    this.props.history.replace('/login')
  }


  axiosRegister = () => {
    if (this.state.password === this.state.rePassword) {
      return (
        axios.post('/Register', {
          'username': this.state.username,
          'password': this.state.password,
          'type': this.state.type
        })
          .then((res) => {
            console.log(res.data);
            alert(res.data.msg);
          })
          .catch((err) => {
            console.log(err);
          })
      )
    } else {
      return (alert('两次密码输入不一致,请重新输入'))
    }
  }

  render() {
    const {type} = this.state;
    return (
      <div>
        <NavBar>用户注册</NavBar>
        <Logo/>
        <WhiteSpace/>
        <WingBlank>
          <InputItem placeholder='请输入账号' onChange={(val) => this.handleChange('username', val)}>账号:</InputItem>
          <WhiteSpace/>
          <InputItem type='password' placeholder='请输入密码'
                     onChange={(val) => this.handleChange('password', val)}>密码:</InputItem>
          <InputItem type='password' placeholder='请再输入一次密码'
                     onChange={(val) => this.handleChange('rePassword', val)}>确认密码:</InputItem>
          <WhiteSpace/>
          <List.Item>
            <span>用户类型:</span>&nbsp;
            <Radio checked={type === 'dashen'}
                   onChange={(val) => this.handleChange('type', 'dashen')}>大神</Radio>&nbsp;&nbsp;
            <Radio checked={type === 'laoban'}
                   onChange={(val) => this.handleChange('type', 'laoban')}>老板</Radio>&nbsp;&nbsp;
          </List.Item>
          <WhiteSpace/>
          <Button type='primary' onClick={this.axiosRegister}>注册</Button>
          <WhiteSpace/>
          <Button onClick={this.goLogin}>已有账户</Button>
          <WhiteSpace/>
        </WingBlank>
      </div>
    )
  }
}


export default Register;