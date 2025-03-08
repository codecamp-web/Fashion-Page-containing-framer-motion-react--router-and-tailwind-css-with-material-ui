

import { Box } from '@mui/material'
import HomePage from '../subPages/HomePage'
import Aboutus from './Aboutus'
import Services from './Services'
import Pricing from './Pricing'


const Home = () => {
  return (
    <>
    <Box >
      <HomePage />
      <Aboutus />
      <Services />
      <Pricing />
    </Box>
    </>
  )
}

export default Home
