import React from 'react'
import {Switch, Route, useRouteMatch,} from 'react-router-dom'

import TrackList from './TrackList'
import TrackDetails from './TrackDetails'

const TracksPage = () => {
  const match = useRouteMatch()
  return (
    <Switch>
      <Route path={`${match.path}/:trackId`}>
        <TrackDetails />
      </Route>
      <Route path={match.path}>
          <h1>Tracks</h1>
          <TrackList/>
      </Route>
    </Switch>

    
  )
}

export default TracksPage