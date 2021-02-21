import React, { useState, useEffect } from 'react'
import { DataStore } from '@aws-amplify/datastore';
import {Row, Col, Divider} from 'antd'
import { Car } from '../../models';
import CarCard from './CarCard'

const CarsList = () => {
  const [cars, setCars] = useState([])

  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
  )

  useEffect(() => {
    fetchCars()
    const subscription = DataStore.observe(Car).subscribe(() =>
      fetchCars()
    )
    return () => subscription.unsubscribe()
  }, [])

  async function fetchCars() {
    const cars = await DataStore.query(Car)
    setCars(cars)
  }

  const gt3Cars = cars.filter(car => car.class === 'GTTHREE')
  const gt4Cars = cars.filter(car => car.class === 'GTFOUR')

  const generateGrid = (cars, cardColWidth) => {
    const totalColumns = 24
    console.log(cars)
    const grid = chunk(cars, Math.floor(totalColumns / cardColWidth))

    return grid.map((row, i) => (
      <Row style={{ margin: -16 }} gutter={16} key={`row-${i}`}>
        {row.map(car => (
          <Col style={{ padding: 16 }} key={car.id} span={cardColWidth}>
            <CarCard {...car}/>
          </Col>
        ))}
      </Row>
    ))
  }

  return (
    <div>
      <h2>GT3</h2>  
      { generateGrid(gt3Cars, 6)}
      <Divider />
      <h2>GT4</h2>
      {generateGrid(gt4Cars, 6)}
    </div>
  )
}

export default CarsList