import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';

type Props = {}

const Login = (props: Props) => {
    const token = useSelector((state: any) => state.auth.token);
    const navigate = useNavigate();
    const location = useLocation();

    // Get the path user wanted to visit (default: homepage)
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, navigate, from])
    return (
        <div>Login</div>
    )
}

export default Login