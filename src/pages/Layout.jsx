import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div >
      <nav className='mx-auto max-w-7xl px-2 bg-gray-800 sm:px-6 lg:px-8'>
        <div className='relative flex h-14 items-center justify-between'>
            <div className='text-gray-300 hover:text-white font-medium text-lg'>
                <Link to={"/"}>News Website</Link>
            </div>
            <div className='flex justify-between'>
              <ul className='flex'>
                <li className='text-gray-300 hover:text-white mr-5'><Link to="/">Home</Link></li>
                <li className='text-gray-300 hover:text-white'><Link to="article">Article</Link></li>
              </ul>
              <div className='text-gray-300 hover:text-white ml-4'>
                  User
              </div>
            </div>
        </div>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default Layout;
