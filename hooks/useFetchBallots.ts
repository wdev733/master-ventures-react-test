import { useEffect, useState } from 'react'

import { Awards } from '../types'

const apiLink = '/api/ballots'

const useFetchBallots = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<Awards>([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      const response = await fetch(apiLink)
      const ballots = await response.json()

      if (ballots.items) {
        setData(ballots.items)
      }
      setLoading(false)
    }

    fetchData()
  }, [])

  return {
    loading,
    data
  }
}

export default useFetchBallots
