import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DataStore } from 'aws-amplify'
import {Livery} from '../../models'

const LiveryDetails = () => {
  const [livery, setLivery] = useState(null)
  const { liveryId } = useParams()
  
  useEffect(() => {
    fetchLiveries()
    const subscription = DataStore.observe(Livery).subscribe(() =>
      fetchLiveries()
    )
    return () => subscription.unsubscribe()
  }, [])

  async function fetchLiveries() {
    const livery = await DataStore.query(Livery, liveryId)
    setLivery(livery)
  }

  return livery ? (
    <div>
      
    </div>
  ): null
} 

export default LiveryDetails