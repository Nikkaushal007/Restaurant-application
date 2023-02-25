import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsimages from '../../assets/meals.jpeg';
import classes from './Header.module.css';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Restaurant App</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsimages} alt='A table full of delicious food!' />
        </div>
    </Fragment>
};

export default Header;