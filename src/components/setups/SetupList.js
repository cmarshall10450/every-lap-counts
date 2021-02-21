import React, { useState, useEffect } from 'react'
import { DataStore } from '@aws-amplify/datastore';
import {Row, Col} from 'antd'
import { Setup } from '../../models';
import SetupCard from './SetupCard'

const SetupList = () => {
  const [setups, setSetups] = useState([])

  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
  )

  useEffect(() => {
    fetchSetups()
    const subscription = DataStore.observe(Setup).subscribe(() =>
      fetchSetups()
    )
    return () => subscription.unsubscribe()
  }, [])

  async function fetchSetups() {
    const setups = await DataStore.query(Setup)
    setSetups(setups)
  }

  const generateGrid = (cardColWidth) => {
    const totalColumns = 24
    const grid = chunk(setups, Math.floor(totalColumns / cardColWidth))

    return grid.map((row, i) => (
      <Row style={{ margin: -16 }} gutter={16} key={`row-${i}`}>
        {row.map(setup => (
          <Col style={{ padding: 16 }} key={setup.id} span={cardColWidth}>
            <SetupCard {...setup}/>
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

export default SetupList