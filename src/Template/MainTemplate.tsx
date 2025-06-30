import { Outlet } from 'react-router'
import Navbar from '../components/Shared/Navbar'
import Footer from '../components/Shared/Footer'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkLogin } from '../features/auth/authSlice'

type Props = {}

const MainTemplate = (props: Props) => {
  const auth = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const authToken = localStorage.getItem('authToken');
  useEffect(()=>{
    if(authToken && auth.token === null) {
      dispatch(checkLogin(authToken))
    }
  },[authToken])
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer/>
    </>
  )
}

export default MainTemplate