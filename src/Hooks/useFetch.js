import { useState, useEffect } from 'react'

const useFetch = (Url, cb) => {
    const [data, setData] = useState([])
    const [dataLoading, setDataLoading] = useState(false)
    const [dataError, setDataError] = useState('')
    useEffect(() => {
      fetchData()
    }, [])

    const fetchData = async () => {
        setDataLoading(true)
        try {
            const res = await fetch(Url)
            const data1 = await res.json()
            if (cb){
                setData(cb(data1))
            } else {
                setData(data1)
            }
            setDataLoading(false)
            setDataError('')
        } catch(e) {
            setDataError('Server error occured while fetching data!!')
        }
    }
    
    
    return {
        data,
        dataError,
        dataLoading
    }
}

export default useFetch