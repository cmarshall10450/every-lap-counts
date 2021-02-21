import React, { useState, useEffect } from 'react'
import { DataStore } from '@aws-amplify/datastore';
import { Track } from './models';

const Tracks = () => {
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    fetchTracks()
    const subscription = DataStore.observe(Track).subscribe(() =>
      fetchTracks()
    )
    return () => subscription.unsubscribe()
  })


  async function fetchTracks() {
    const tracks = await DataStore.query(Track);
    setTracks(tracks)
  }

  return (
    <div>
      <h1>Tracks</h1>
      {tracks.map(track => (
          <div className="track" key={track.id}>
            <h2>{track.name}</h2>
            <p>{track.location}</p>
            <p>{track.length}</p>
            <p>{track.lapRecord}</p>
          </div>
      ))}
    </div>    
  )
}

export default Tracks