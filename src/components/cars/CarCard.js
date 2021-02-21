import React from 'react'
import { Card } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { AmplifyS3Image } from "@aws-amplify/ui-react"

const { Meta } = Card;

const CarItem = ({ make, model, year, class: carClass }) => {
  const carClassMap = {
    'GTTHREE': 'GT3',
    'GTFOUR': 'GT4'  
  }

  const generateImagePath = () => {
    const folder = carClassMap[carClass]
    const fileName = [year, make, model].join('_').replaceAll(' ', '_')
    const fileType = 'jpg'
    return `cars/${folder}/${fileName}.${fileType}`.toLowerCase()
  }

  return (
    <div className='car'>
      <Card
        cover={
          <AmplifyS3Image style={{"--width": "100%"}} path={generateImagePath()} />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
        ]}
      >
        <Meta
          title={`${year} ${make} ${model}`}
        />
      </Card>
    </div>
  )
}

export default CarItem