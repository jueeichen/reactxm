import React, {Component} from 'react';
import {NavBar, List, WingBlank, WhiteSpace, InputItem, Button, Radio} from 'antd-mobile'
import Logo from '../../components/logo/logo'

//定义组件:
class Main extends Component {
  goLogin = () => {
    this.props.history.replace('/login')
  }
  goRegister = () => {
    console.log(this.props);
    this.props.history.replace('/register')
  }

  render() {
    return (
      <div>
        <NavBar>Jueei直聘</NavBar>
        <Logo/>
        <WhiteSpace/>
        <WingBlank>
          <Button onClick={this.goRegister}>没有账户?</Button>
          <Button onClick={this.goLogin}>已有账户</Button>
          <WhiteSpace/>
        </WingBlank>
      </div>
    )
  }
}


export default Main;