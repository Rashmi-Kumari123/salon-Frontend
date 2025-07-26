import React, { useEffect } from 'react'
import SalonCard from './SalonCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSalons } from '../..//Redux/Salon/action';

const SalonList = () => {
    const dipatch = useDispatch();
    const { auth, salon } = useSelector(store => store)

    useEffect(() => {
        dipatch(fetchSalons())
    }, [auth.jwt])

    return (
        <div className='flex gap-5 flex-wrap'>
            {[1,1,1,1,1,1,1,1,1].map((item) => <SalonCard />)}
        </div>
    )
}

export default SalonList
