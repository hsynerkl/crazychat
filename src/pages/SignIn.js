import { TextField, CssBaseline, Button, Box, Container, Link, Avatar, Typography } from '@mui/material'
import { Link as Linkr } from 'react-router-dom'
import LockOutLinedIcon from '@mui/icons-material/LockClockOutlined';

export default function SignIn() {

    return (
        <>
            <CssBaseline />
            <Container maxWidth="xs">
                <Box component="form" sx={{ mt: 10 }}>
                    <Avatar sx={{ mx: "auto", mt: 1, bgcolor: "blue" }}> <LockOutLinedIcon /></Avatar>
                    <Typography sx={{ textAlign: 'center', mt: 1 }}>Sign in</Typography>
                    <TextField fullWidth margin="normal" label="Email Address" required autoComplete="email" autoFocus />
                    <TextField fullWidth margin="normal" label="Password" required type="password" />
                    <Button type="submit" fullWidth sx={{ mt: 2 }}>Sign in</Button>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
                    <Link>Forgot Password?</Link>
                    <Linkr to="/Sign-up"><Link>Dont Have Account? Sign Up</Link></Linkr>
                </Box>
            </Container>
        </>
    )

}