import React, { useEffect, useState } from 'react'
import StateLoader from '../StateLoader';
import States from '..';

const StateAndLoader = () => {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
        <div>
            {
                loading ? <StateLoader/> : <States/>
            }
        </div>
    </>
  )
}

export default StateAndLoader