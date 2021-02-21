import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DataStore } from 'aws-amplify'
import { Row, Col, Statistic } from 'antd'
import {AmplifyS3Image} from '@aws-amplify/ui-react'
import {Setup} from '../../models'

const SetupDetails = () => {
  const [setup, setSetup] = useState(null)
  const { setupId } = useParams()
  
  useEffect(() => {
    fetchSetup()
    const subscription = DataStore.observe(Setup).subscribe(() =>
      fetchSetup()
    )
    return () => subscription.unsubscribe()
  }, [])

  async function fetchSetup() {
    const setup = await DataStore.query(Setup, setupId)
    setSetup(setup)
  }

  return setup ? (
    <div>
      
    </div>
  ): null
} 

export default SetupDetails