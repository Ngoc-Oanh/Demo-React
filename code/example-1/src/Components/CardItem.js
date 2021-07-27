import React from 'react';
import './CardItem.css';
import { Link } from 'react-router-dom';

const CardItem = (props) => {
    return (
        <div className="card-item">
            <Link className="cards-item__link" to={props.path}>
                <figure>
                    <img
                        className="cards-item__img"
                        src={props.src}
                        alt={props.alt}
                    />
                </figure>
                <div className="cards-item__body">
                    <h3 className="cards-item__title">
                        <span>{props.title}</span>
                    </h3>
                    <p>{props.text}</p>
                </div>
                <div className="btn">ダウンロード</div>
            </Link>
        </div>
    )
};

export default CardItem;