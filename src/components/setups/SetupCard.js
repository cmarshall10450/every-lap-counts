import React from 'react'
import { Card } from 'antd'
import {Link} from 'react-router-dom'
import { InfoCircleOutlined } from '@ant-design/icons';
import { AmplifyS3Image } from "@aws-amplify/ui-react"

const { Meta } = Card;

const TrackCard = ({id, name, location, length, lapRecord}) => {

  const generateImagePath = () => {
    const fileType = "png"
    const fileName = name.replaceAll(' ', '_').toLowerCase() + '.' + fileType
    return `tracks/full-size/${fileName}`
  }

  return (
    <div className='track'>
      <Card
        cover={
          <AmplifyS3Image style={{"--width": "100%"}} path={generateImagePath()} />
        }
        actions={[
          <Link to={`/setups/${id}`}>
            <InfoCircleOutlined /> 
          </Link>
        ]}
      >
        <Meta
          title={name}
        />
      </Card>
    </div>
  )
}

export default TrackCard