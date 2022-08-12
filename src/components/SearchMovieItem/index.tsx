import React from 'react';
import classNames from 'classnames/bind';
import styles from './SearchMovieItem.module.scss';
import { SearchMovieProps } from '~/interface';

const cx = classNames.bind(styles);

function SearchMovieItem({ _id, name, origin_name, thumb_url, year }: SearchMovieProps): JSX.Element {
    return (
        <div className={cx('wrapper')}>
            <img src={process.env.REACT_APP_IMAGE_URL + '/' + thumb_url} alt="" className={cx('thumb-image')} />
            <div className={cx('content')}>
                <h4 className={cx('name')}>{name}</h4>
                <span>
                    <h5 className={cx('sub-name')}>{origin_name}</h5>
                    <h5 className={cx('year')}>{year}</h5>
                </span>
            </div>
        </div>
    );
}

export default SearchMovieItem;
