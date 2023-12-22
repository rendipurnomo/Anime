import Link from 'next/link';
import { authUserSession } from '@/libs/auth';

const UserActionBtn = async() => {
  const user = await authUserSession();
  const actionLabel = user ? 'Logout' : 'Login';
  const actionPath = user ? '/api/auth/signout' : '/api/auth/signin';
  return ( 
  <div className='flex gap-4 justify-between items-center'>
  {user ? (
    <Link href='/users/dashboard'>Dashboard</Link>
  ): null}
  <Link className='bg-color-dark text-color-light px-4 py-2 rounded' href={actionPath}>{actionLabel}</Link>
  </div>
  )
}

export default UserActionBtn