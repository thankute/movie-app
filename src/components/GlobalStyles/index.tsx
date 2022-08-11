import { JSX_ELEMENT } from '~/interface';
import './GlobalStyles.scss';

const GlobalStyles = ({ children }: JSX_ELEMENT): JSX.Element => {
    return <div>{children}</div>;
};

export default GlobalStyles;
