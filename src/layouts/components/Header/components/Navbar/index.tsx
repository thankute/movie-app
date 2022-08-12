import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import Search from '~/components/Search';
const cx = classNames.bind(styles);

function Navbar() {
    return (
        <div className={cx('nav')}>
            <div className={cx('nav-left')}>
                <div>
                    <Link to="/">
                        <img src={logo} alt="netflex" className={cx('logo')} />
                    </Link>
                </div>
                <ul className={cx('nav-menu')}>
                    <li className={cx('nav-link')}>
                        <Link to="/phim-bo">Phim bộ</Link>
                    </li>
                    <li className={cx('nav-link')}>
                        <Link to="/phim-le">Phim lẻ</Link>
                    </li>
                    <li className={cx('nav-link')}>
                        <Link to="/shows">Shows</Link>
                    </li>
                    <li className={cx('nav-link')}>
                        <Link to="/phim-hoat-hinh">Hoạt hình</Link>
                    </li>
                </ul>
            </div>
            <div className={cx('nav-right')}>
                <Search />
                <button className={cx('sign-btn')}>Sign In</button>
            </div>
        </div>
    );
}

export default Navbar;
