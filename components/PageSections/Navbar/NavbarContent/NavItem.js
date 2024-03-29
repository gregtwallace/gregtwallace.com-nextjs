import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem = (props) => {
  const router = useRouter();
  const isActive = router.pathname === props.href;

  return (
    <li className='nav-item'>
      <Link
        href={props.href}
        className={`nav-link ${isActive ? 'active' : ''}`}
        target={props.target}
      >
        {props.children}
      </Link>
    </li>
  );
};

export default NavItem;
