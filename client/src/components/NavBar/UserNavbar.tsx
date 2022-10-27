import { Box } from '@mui/material'
import React from 'react'
import ButtonComponent from '../Button'

const UserNavbar = () => {
    return (
        <Box>
            <ButtonComponent text='Login' sendUserData={() => console.log} />
            <ButtonComponent text='Sign up' sendUserData={() => console.log} />
        </Box>
    )
}

export default UserNavbar