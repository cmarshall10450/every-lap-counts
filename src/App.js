import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import { Layout } from 'antd'
import CarsPage from './components/cars/CarsPage'
import TrackList from './components/tracks/TracksPage'
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
            <TrackList />
          </Route>
          <Route path="/liveries">
            <CarsPage />
          </Route>
          <Route path="/setups">
            <CarsPage />
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