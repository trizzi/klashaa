import category from '../../../Category.png';
import wallet from '../../../Wallet.png';
import users from '../../../Users.png';
import activity from '../../../Activity.png';

export const Mainpage = [
  {
    id: 1,
    title: 'Dashboard',
    path: '/',
    img: <img src={category} alt='' />,
    className: 'nav-text',
  },
  {
    id: 2,
    title: 'Balances',
    path: '/',
    img: <img src={wallet} alt='' />,
    className: 'nav-text',
  },
  {
    id: 3,
    title: 'Customers',
    path: '/',
    img: <img src={users} alt='' />,
    className: 'nav-text',
  },
  {
    id: 4,
    title: 'Analytics',
    path: '/',
    img: <img src={activity} alt='' />,
    className: 'nav-text',
  },
];
