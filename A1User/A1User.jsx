import './A1User.css'
import { useSelector } from 'react-redux'
import ULogin from './ULogin.jsx'
import UUser from './UUser.jsx'

export default function A1User () {
  console.logD('DEBUG: L3 : F1-Page-User ')
  const email = useSelector((state) => state.User.email)
  return (
    <div id='page-user'>
      {!email && <ULogin />}
      {email && <UUser />}
    </div>
  )
};
