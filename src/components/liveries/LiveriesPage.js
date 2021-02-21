import React from 'react'
import {Switch, Route, useRouteMatch,} from 'react-router-dom'

import LiveryList from './LiveryList'
import LiveryDetails from './LiveryDetails'

const LiveriesPage = () => {
  const match = useRouteMatch()
  return (
    <Switch>
      <Route path={`${match.path}/:liveryId`}>
        <LiveryDetails />
      </Route>
      <Route path={match.path}>
          <h1>Liveries</h1>
          <LiveryList/>
      </Route>
    </Switch>

    
  )
}

export default LiveriesPage