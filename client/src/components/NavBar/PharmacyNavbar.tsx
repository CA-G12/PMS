import { AccountCircle, Notifications } from '@mui/icons-material'
import { Box, IconButton, Menu, MenuItem } from '@mui/material'

const PharmacyNavbar = () => {
    return (
        <Box
          sx={{
            display: 'flex',
            gap: '13px',
            color: 'grey !important',
            alignItems: 'center',
          }}
        >
          <Notifications fontSize="large" />
          <IconButton>
            <AccountCircle fontSize="large" />
          </IconButton>
        </Box>
    )
}

export default PharmacyNavbar