import style from './style.module.scss';

const Button = ({children, onClick, href = ''}) => {
    return (
        <button href={href} className={style.btn} onClick={onClick}>{children}</button>
    )
}

export default Button;