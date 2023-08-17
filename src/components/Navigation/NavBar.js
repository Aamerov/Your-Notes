import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="h-[64px] w-full px-[35px] bg-white drop-shadow-lg grid text-[#D375B9]">
      <ul className="list-none flex justify-between items-center">
        <Link
          href="/"
          className="text-[32px] font-semibold flex items-center gap-[10px]"
        >
          <Image
            src="/static/site-logo-check.svg"
            width={32}
            height={30}
            alt="Check sign beside Site name"
          />
          Your Notes
        </Link>

        <div className="flex justify-between items-center gap-[35px]">
          {/* -------------- Language Switch Button -------------- */}
          <li>
            <button className="text-[32px] ">Ar</button>
          </li>
          {/* -------------- Dark/Light Mode Button -------------- */}
          <li>
            <button className="text-[32px] flex items-center">
              <Image
                src="/static/dark-light-button.svg"
                width={26}
                height={26}
                alt="Icon of to toggle the dark or the light mode for the website"
              />
            </button>
          </li>
          {/* -------------- User Button -------------- */}
          <li>
            <button className="text-[32px] flex items-center">
              <Image
                src="/static/user-logo.svg"
                width={26}
                height={26}
                alt="user icon to logout or modify user info"
              />
            </button>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
{
  /* <li>
<button className="p-4 border border-solid border-r-emerald-300 bg-green-800">
  <Link href="/Login">Login</Link>
</button>
</li>
<li>
<button>
  <Link href="/Register">Register</Link>
</button>
</li> */
}
