import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import React, { useEffect, useState, useRef } from 'react';
import { useDebounce } from '~/hooks';
import * as searchService from './api/searchApi';
import SearchMovieItem from '../SearchMovieItem';
import { SearchMovieProps } from '~/interface';

const cx = classNames.bind(styles);

function Search() {
    const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
    const [showResults, setShowResults] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');
    const [searchResult, setSearchResult] = useState<SearchMovieProps[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement | null>(null);

    const debounce = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const res = await searchService.search(debounce);
            setSearchResult(res.items);

            setLoading(false);
        };
        if (debounce) {
            fetchApi();
        }
    }, [debounce]);

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleHideResult = () => {
        setShowResults(false);
    };

    return (
        <div>
            <Tippy
                visible={showResults && searchResult.length > 0}
                interactive
                placement="bottom-start"
                onClickOutside={handleHideResult}
                render={(attrs) => (
                    <div className={cx('search-results')} {...attrs}>
                        <div>
                            <h4 className={cx('result')}>Result</h4>
                            {searchResult.map((movie) => (
                                <SearchMovieItem
                                    key={movie._id}
                                    _id={movie._id}
                                    name={movie.name}
                                    origin_name={movie.origin_name}
                                    thumb_url={movie.thumb_url}
                                    year={movie.year}
                                />
                            ))}
                        </div>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    {showSearchBar && (
                        <>
                            <input
                                ref={inputRef}
                                type="text"
                                spellCheck={false}
                                placeholder="Search videos..."
                                value={searchValue}
                                onChange={handleChangeInput}
                                onFocus={() => setShowResults(true)}
                            />
                            {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                        </>
                    )}
                    <button
                        className={cx('search-icon')}
                        onClick={() => {
                            setShowSearchBar(!showSearchBar);
                            inputRef.current?.focus();
                        }}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
