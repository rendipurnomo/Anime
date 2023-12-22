import Link from 'next/link';
import SearchInput from './SearchInput';
import UserActionBtn from './UserActionBtn';

const Navbar = () => {
  return (
    <header className="py-4 px-4 md:px-8 bg-color-secondary">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
        <Link className="text-xl font-semibold text-color-light" href="/">
          Japanese Anime
        </Link>
        <div className='order-last md:order-none'>
        <SearchInput />
        </div>
        <UserActionBtn />
      </div>
    </header>
  );
};

export default Navbar;
