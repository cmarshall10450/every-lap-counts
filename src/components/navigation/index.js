import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { CarOutlined, EditOutlined, SettingOutlined } from '@ant-design/icons';

const {Header} = Layout

const Navigation = () => {
  return (
    <Header>
      <div className='logo'>

      </div>
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
        <Menu.Item key='cars' icon={<CarOutlined />}>
          <Link to='/cars'>Cars</Link>
        </Menu.Item>
        <Menu.Item key='tracks'>
          <Link to='/tracks'>Tracks</Link>
        </Menu.Item>
        <Menu.Item key='liveries'>
          <Link to='/liveries' icon={<EditOutlined/>}>Liveries</Link>
        </Menu.Item>
        <Menu.Item key='setups' icon={<SettingOutlined />}>
          <Link to='/setups'>Setups</Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
}

export default Navigation