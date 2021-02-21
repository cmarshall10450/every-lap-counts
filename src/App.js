import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import { Layout } from 'antd'
import { CarsPage, LiveriesPage, TracksPage, SetupsPage } from './components/pages'
import Navigation from './components/navigation'
import './App.less';

import { withAuthenticator } from '@aws-amplify/ui-react';

const {Content, Footer} = Layout

const App = () => {
  return (
    <Router>
      <Layout className="layout">
        <Navigation/>
        <Content style={{ padding: '0 50px' }}>
          <Switch>
          <Route path="/cars">
            <CarsPage />
          </Route>
          <Route path="/tracks">
            <TracksPage />
          </Route>
          <Route path="/liveries">
            <LiveriesPage />
          </Route>
          <Route path="/setups">
            <SetupsPage />
          </Route>
          <Route path="/">
            <div>Home Page</div>
          </Route>
        </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Every Lap Counts ©2021 Created by Chris Marshall</Footer>
      </Layout>
    </Router>
  )
}

export default withAuthenticator(App)