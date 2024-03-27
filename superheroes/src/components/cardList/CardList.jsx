import './CardList.css';
// import Card from '../card/Card';
import Card from '../card/Card.jsx';
import superman from '../../img/superman.png';
import batman from '../../img/batman.png';
import womanCat from '../../img/womanCat.png';

function CardList(){
    return(
        <div className='cards'>
            <Card
            img={superman}
            title='Superman'
            text = 'Супермен (англ. Superman), также известен как «Человек из стали» — один из сильнейших супергероев во вселенной DC. Его способности включают в себя невероятную суперсилу, суперскорость, неуязвимость, ледяное дыхание, полет и тепловое зрение. Настоящее имя — Кал-Эл.'
            />
            <Card
            img={batman}
            title='Batman'
            text = 'Бэтмен (англ. Batman), изначально Бэт-мен (англ. Bat-man «Человек-летучая мышь») — персонаж комиксов издательства DC Comics, впервые появившийся в Detective Comics («Детективные комиксы») № 27 в мае 1939 года, Бэтмен является одним из самых популярных и известных героев комиксов.'
            />
                    <Card
                    img={womanCat}
                    title='WomanCat'
                    text = 'Женщина-кошка (англ. Catwoman), настоящее имя — Сели́на Кайл (англ. Selina Kyle) — персонаж комиксов издательства DC Comics, дебютировала как Кошка (англ. the Cat) в Batman #1 (весна 1940). Женщина-кошка — одна из самых популярных врагов Бэтмена. Она также изображалась как антигероиня и является самой известной возлюбленной Бэтмена.'
                    />
                </div>
    );
}

export default CardList;
