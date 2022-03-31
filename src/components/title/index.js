import style from './style.module.scss';

const Title = ({children}) => {
    return (
        <h2 className={style.title}>
            {children}
        </h2>
    );
}

export default Title;