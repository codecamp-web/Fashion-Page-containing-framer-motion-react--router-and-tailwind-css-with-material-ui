import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import coverFashion from '../images/coverfashion.jpg';

const HomePage = () => {
  return (
    <Box sx={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Grid container sx={{  width: "100%" }}>

        {/* Left Section - Text */}
        
        <Grid 
          item 
          xs={12} 
          md={6} 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: { xs: 'center', md: 'flex-start' }, 
            textAlign: { xs: 'center', md: 'left' }, 
            px: { xs: 2, md: 5 } 
          }}
        >
          <motion.div
            initial={{ opacity: 0, translateX: 100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography 
              variant="h4" 
              fontWeight="bold"
              sx={{ fontSize: { xs: '1.7rem', sm: '2rem', md: '2.4rem' } }}
            >
              Concept of Fas 
              <Typography 
                component="span" 
                color="error" 
                fontFamily="cursive"
                fontWeight="bold"
                sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }} 
              >
                HION 
              </Typography>
              & Fashionistas
            </Typography>

            <Typography 
              variant="body1" 
              fontFamily="serif" 
              sx={{ 
                mt: 2, 
                fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' } 
              }}
            >
              "Dress shabbily and they remember the dress; dress impeccably and they notice the woman."
              <br />
              "Fashion is life-enhancing and, like everything that gives pleasure, it is worth doing well."
            </Typography>

            <Typography 
              variant="subtitle2" 
              fontFamily="monospace" 
              sx={{ mt: 2, fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' } }}
            >
              Don't just stand out, stand in style...
            </Typography>
          </motion.div>
        </Grid>

        {/* Right Section - Full-Page Image */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, translateX: -100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}
          >
            <Box
              component="img"
              src={coverFashion}
              alt="Fashion Cover"
              sx={{
                width: '100%',
                height:'100%',
                maxHeight: { xs: 400, sm: 400, md: 500, lg: 600 },
                marginTop: {xs:3,lg: 5},
                objectFit: 'contain', // Ensures the full image is visible
                borderRadius: 2,
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;

