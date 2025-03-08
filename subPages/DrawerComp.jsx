import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItemButton, ListItemText } from '@mui/material';
import { MenuRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { menus } from '../pages/data';

const DrawerComp = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Drawer */}
      <Drawer
        PaperProps={{ sx: { backgroundColor: 'rgba(0,0,0,1)' } }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <List sx={{ width: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 10 }}>
          {menus.map((menu, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }} // Scale effect on hover
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ width: '100%' }} // Ensure full width for ListItemButton
            >
              <ListItemButton 
                divider 
                component={Link} 
                to={menu.path} 
                onClick={() => setOpen(false)} 
                sx={{ color: 'whitesmoke', textAlign: 'center' }}
              >
                <ListItemText primary={menu.name} />
              </ListItemButton>
            </motion.div>
          ))}
        </List>
      </Drawer>

      {/* Menu Icon Button */}
      <IconButton sx={{ marginLeft: 'auto', color: 'white'}}
       onClick={() => setOpen(!open)}>
        <MenuRounded fontSize='large'/>
      </IconButton>
    </>
  );
};

export default DrawerComp;
