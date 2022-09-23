import {Button, Header, Paragraph, Title} from "../../components";
import {Text} from "../../content";
import style from './style.module.scss';

const Landing = ({router}) => {
    return (
    <>
        <Header/>
        <main className={style.container}>
            <div>
                <Title>Batalha Naval Quimica</Title>
                <Paragraph>
                    {Text.introduction}
                </Paragraph>
                <div>
                <Button onClick={() => router('create')}>Criar Sala</Button>
                <Button onClick={() => router('join')}>Jogar</Button>
                <Button onClick={() => router('single')}>Treinar</Button>
                </div>
            </div>
            <div>
                <span className={style.image}></span>
            </div>
        </main>
        <div className="center">
            <Title>Como Jogar</Title>
        </div>
        <section className={style.container}>
            <div>
            </div>
            <div>
            <Paragraph>
                {Text.SingleExplanation}
            </Paragraph>
            </div>
        </section>
    </>

    );
}

export default Landing;