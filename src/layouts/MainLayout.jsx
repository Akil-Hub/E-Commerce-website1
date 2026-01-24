import NavBar from '@/components/NavBar'
import Footer from '@/pages/Footer'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  const [location, setLocation] = useState()
  const [openDropDown, setOpenDropDown] = useState(false);


const getLocation = () => {
  if (!navigator.geolocation) {
    return
  }

  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      try {
        console.log("Geolocation success")

        const { latitude, longitude } = pos.coords

        const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

        const response = await fetch(url)

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`)
        }

        const data = await response.json()

        setLocation({
          country: data.countryName,
          city: data.city || data.locality,
          state: data.principalSubdivision
        })
        setOpenDropDown(false)

      } catch (error) {
        console.log("Location fetch error:", error)
      }
    },
    (error) => {
      console.log("Geolocation error:", error)
    }
  )
}



useEffect(()=>{
  getLocation()
},[])
  return (
    <div>
        
        <NavBar location={location} getLocation={getLocation} openDropDown={openDropDown} setOpenDropDown={setOpenDropDown}/>
        
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout