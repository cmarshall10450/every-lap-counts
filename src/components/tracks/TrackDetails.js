import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DataStore } from 'aws-amplify'
import { Row, Col, Statistic } from 'antd'
import {AmplifyS3Image} from '@aws-amplify/ui-react'
import {Track} from '../../models'

const TrackDetails = () => {
  const [track, setTrack] = useState(null)
  const { trackId } = useParams()
  
  useEffect(() => {
    fetchTrack()
    const subscription = DataStore.observe(Track).subscribe(() =>
      fetchTrack()
    )
    return () => subscription.unsubscribe()
  }, [])

  async function fetchTrack() {
    const track = await DataStore.query(Track, trackId)
    setTrack(track)
  }

  const generateHeaderImagePath = () => {
    const fileType = "png"
    const fileName = track.name.replaceAll(' ', '_').toLowerCase() + '.' + fileType
    return `tracks/full-size/${fileName}`
  }

  const generateTrackMapPath = () => {
    const fileType = "png"
    const fileName = track.name.replaceAll(' ', '_').toLowerCase() + '.' + fileType
    return `track-maps/${fileName}`
  }

  return track ? (
    <div>
      <Row gutter={16}>
        <Col span={12} offset={6}>
          <div className='trackDetailsHeader' style={styles.header}>
            <AmplifyS3Image style={{ "--width": "100%" }} path={generateHeaderImagePath()} />
            <div style={styles.title}>
              <h1 style={styles.titleText}>{track.name}</h1>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={styles.statsContainer} gutter={16}>
        <Col span={6} offset={3}>
          <Statistic title='Location' value={track.location} style={{'textAlign': 'center'}}/>
        </Col>
        <Col span={6}>
          <Statistic title='Length' value={track.length} suffix='m' style={{'textAlign': 'center'}}/>
        </Col>
        <Col span={6}>
          <Statistic title='Lap Record' value={track.lapRecord} style={{'textAlign': 'center'}}/>
        </Col>
      </Row>
      <Row style={{marginTop: 96}} gutter={16}>
        <Col span={12} offset={6}>
          <AmplifyS3Image style={{ "--width": "100%" }} path={generateTrackMapPath()} />
        </Col>
      </Row>
    </div>
  ): null
} 

const styles = {
  'header': {
    'position': 'relative',
    'color': 'white'
  },
  'title': {
    'position': 'absolute',
    'width': '100%',
    'bottom': '8px',
    'left': '0px',
    'padding': '16px',
    'background-color': 'rgba(30, 30, 30, 0.3)'
  },
  'titleText': {
    'color': 'rgb(220, 220, 220)',
    'vertical-align': 'middle',
    'margin-top': 0,
    'margin-bottom': 0
  },
  'statsContainer': {
    'margin-top': 96,
    'padding': '6rem',
    'background-color': 'rgba(128, 128, 140, 0.25)'
  }
}

export default TrackDetails