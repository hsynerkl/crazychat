import { TextField, CssBaseline, Button, Box, Container, Link, Avatar, Typography } from '@mui/material'
import LockOutLinedIcon from '@mui/icons-material/LockClockOutlined';

export default function SignUp() {

    return (
        <>
            <CssBaseline />
            <Container maxWidth="xs">
                <Box component="form" sx={{ mt: 10 }}>
                    <Avatar sx={{ mx: "auto", mt: 1, bgcolor: "blue" }}> <LockOutLinedIcon /></Avatar>
                    <Typography sx={{ textAlign: 'center', mt: 1 }}>Sign Up</Typography>
                    <TextField fullWidth margin="normal" label="Full Name" required autoComplete="Name" autoFocus />
                    <TextField fullWidth margin="normal" label="Email Address" required autoComplete="email" autoFocus />
                    <TextField fullWidth margin="normal" label="Password" required type="password" />
                    <Button type="submit" fullWidth sx={{ mt: 2 }}>Sign Up</Button>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mt: 4 }}>
                    <Link>Already Have An Account? Sign In</Link>
                </Box>
            </Container>
        </>
    )

}