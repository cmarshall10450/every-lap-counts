import React from 'react'
import {Switch, Route, useRouteMatch,} from 'react-router-dom'

import SetupList from './SetupList'
import SetupDetails from './SetupDetails'

const SetupsPage = () => {
  const match = useRouteMatch()
  return (
    <Switch>
      <Route path={`${match.path}/:setupId`}>
        <SetupDetails />
      </Route>
      <Route path={match.path}>
          <h1>Setups</h1>
          <SetupList/>
      </Route>
    </Switch>

    
  )
}

export default SetupsPage