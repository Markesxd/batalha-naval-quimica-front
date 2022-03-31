import style from './style.module.scss';

const Paragraph = ({children}) => {
    return (
        <p className={style.par}>
            {children}            
        </p>
    );
}

export default Paragraph;