import React, { useState, useEffect } from 'react'
import { DataStore } from '@aws-amplify/datastore';
import {Row, Col} from 'antd'
import { Track } from '../../models';
import TrackCard from './TrackCard'

const TrackList = () => {
  const [tracks, setTracks] = useState([])

  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
  )

  useEffect(() => {
    fetchTracks()
    const subscription = DataStore.observe(Track).subscribe(() =>
      fetchTracks()
    )
    return () => subscription.unsubscribe()
  }, [])

  async function fetchTracks() {
    const tracks = await DataStore.query(Track)
    setTracks(tracks)
  }

  const generateGrid = (cardColWidth) => {
    const totalColumns = 24
    const grid = chunk(tracks, Math.floor(totalColumns / cardColWidth))

    return grid.map((row, i) => (
      <Row style={{ margin: -16 }} gutter={16} key={`row-${i}`}>
        {row.map(track => (
          <Col style={{ padding: 16 }} key={track.id} span={cardColWidth}>
            <TrackCard {...track}/>
          </Col>
        ))}
      </Row>
    ))
  }

  return (
    <div>
      {generateGrid(6)}
    </div>
  )
}

export default TrackList