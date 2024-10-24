'use client'

import Details from '@/components/details/Details';
import Navbar from '@/components/navbar/Navbar'
import SearchField from '@/components/SearchField'
import { DataTypes } from '@/types/types';
import { NextPage } from 'next'
import { useState } from 'react';

const Home: NextPage = ({ }) => {
  const [data, setData] = useState<DataTypes>({ message: 'Write any word and search to see the details.', resolution: '', title: 'Search any word' })
  return (
    <div >
      <Navbar />
      <SearchField setData={setData} />
      <Details data={data} />
    </div>
  )
}

export default Home