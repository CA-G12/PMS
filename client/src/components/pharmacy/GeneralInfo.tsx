import { Box, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { LocalPhone, Email, LocationOn } from '@mui/icons-material';
import './info.css'
const GeneralInfo = () => {
    return (
        <Box>
            <Typography className="GeneralInfo">
                General Info
            </Typography>
            <Box>
                <Typography className="name">
                    Pharmacy of Palestine
                </Typography>
                <Typography className='desc' paragraph>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque molestias dignissimos qui vel ut cumque, delectus dolorum blanditiis nemo harum omnis id facere, possimus, ipsa eligendi minima dolorem modi perferendis.
                </Typography>
                <List className='info'>
                    <ListItem className='infoItem'>
                        <ListItemButton className='InfoButton'>
                            <IconButton>
                                <LocalPhone />
                            </IconButton>
                            <ListItemText primary='+98712358' className='infoText'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='infoItem'>
                        <ListItemButton className='InfoButton'>
                            <IconButton>
                                <Email />
                            </IconButton>
                            <ListItemText primary='ibtisamhemmo@gmail.com' className='infoText'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='infoItem'>
                        <ListItemButton className='InfoButton'>
                            <IconButton>
                                <LocationOn />
                            </IconButton>
                            <ListItemText primary='Palestine - Gaza City' className='infoText'/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default GeneralInfo