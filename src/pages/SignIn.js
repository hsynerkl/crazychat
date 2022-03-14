import { TextField, CssBaseline, Button, Box, Container, Link, Avatar, Typography } from '@mui/material'
import LockOutLinedIcon from '@mui/icons-material/LockClockOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { changeName, changeEmail, changePassword } from '../redux/authSlice'


export default function SignIn() {
    const email = useSelector((state) => state.auth.email);
    const password = useSelector((state) => state.auth.password);
    const dispatch = useDispatch();

    const handleEmailChange = (e) => {
        dispatch(changeEmail(e.currentTarget.value))
    }
    const handlePasswordChange = (e) => {
        dispatch(changePassword(e.currentTarget.value))
    }

    return (
        <>
            <CssBaseline />
            <Container maxWidth="xs">
                <Box component="form" sx={{ mt: 10 }}>
                    <Avatar sx={{ mx: "auto", mt: 1, bgcolor: "blue" }}> <LockOutLinedIcon /></Avatar>
                    <Typography sx={{ textAlign: 'center', mt: 1 }}>Sign in</Typography>
                    <TextField fullWidth margin="normal" label="Email Address" required autoComplete="email" autoFocus onChange={handleEmailChange} />
                    <TextField fullWidth margin="normal" label="Password" required type="password" onChange={handlePasswordChange} />
                    <Button type="submit" fullWidth sx={{ mt: 2 }}>Sign in</Button>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
                    <Link>Forgot Password?</Link>
                    <Link> Dont Have Account? Sign Up </Link>
                </Box>
            </Container>
        </>
    )

}