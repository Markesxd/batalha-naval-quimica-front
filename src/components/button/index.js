import style from './style.module.scss';

const Button = ({children, onClick, href = '#'}) => {
    return (
        <a href={href} className={style.btn} onClick={onClick}>{children}</a>
    )
}

export default Button;