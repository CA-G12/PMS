import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Statistics = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const controller = new AbortController();
      const getData = async () => {
        try {
          const { data: { pharmacyData } } = await axios.get(`/pharmacy/1`, { signal: controller.signal })
          setData(pharmacyData[0])
          setLoading(false)
        } catch (err) {
          setLoading(true)
        }
      }
      getData();
      return () => {
        controller.abort()
      }
    }, []);
  return (
    <div>Statistics</div>
  )
}

export default Statistics