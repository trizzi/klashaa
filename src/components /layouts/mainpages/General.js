import filter from '../../../Filter.png';
import wallet from '../../../Wallet.png';
import call from '../../../Call.png';
import logout from '../../../Logout.png';

export const General = [
  {
    id: 1,
    title: 'Settings',
    path: '/',
    img: <img src={filter} alt='' />,
    className: 'nav-text',
  },
  {
    id: 2,
    title: 'Team',
    path: '/',
    img: <img src={wallet} alt='' />,
    className: 'nav-text',
  },
  {
    id: 3,
    title: 'Contact',
    path: '/',
    img: <img src={call} alt='' />,
    className: 'nav-text',
  },
  {
    id: 4,
    title: 'Logout',
    path: '/',
    img: <img src={logout} alt='' />,
    className: 'nav-text',
  },
];
