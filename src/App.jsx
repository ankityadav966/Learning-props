import React from 'react'
import imgs from '../public/vite.svg'
import Card from './Card/Card'
const App = () => {
  const card = {
    title: "title",
    img: imgs,
    dis: 'discripaction'
  }
  return (
    <div style={{ display: 'flex', gap: '100px' }}>
      <Card cardvalue={card} />
      <Card cardvalue={card} />
      <Card cardvalue={card} />
    </div>
  )
}

export default App