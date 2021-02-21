import React, { useState, useEffect } from 'react'
import { DataStore } from '@aws-amplify/datastore';
import {Row, Col} from 'antd'
import { Livery } from '../../models';
import LiveryCard from './LiveryCard'

const LiveryList = () => {
  const [liveries, setLiveries] = useState([])

  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
  )

  useEffect(() => {
    fetchLiveries()
    const subscription = DataStore.observe(Livery).subscribe(() =>
      fetchLiveries()
    )
    return () => subscription.unsubscribe()
  }, [])

  async function fetchLiveries() {
    const tracks = await DataStore.query(Livery)
    setLiveries(tracks)
  }

  const generateGrid = (cardColWidth) => {
    const totalColumns = 24
    const grid = chunk(liveries, Math.floor(totalColumns / cardColWidth))

    return grid.map((row, i) => (
      <Row style={{ margin: -16 }} gutter={16} key={`row-${i}`}>
        {row.map(livery => (
          <Col style={{ padding: 16 }} key={livery.id} span={cardColWidth}>
            <LiveryCard {...livery}/>
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

export default LiveryList