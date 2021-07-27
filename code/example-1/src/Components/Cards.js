import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

const Cards = () => {
    return (
        <div className="cards">
            <div className="container">
                <div className="cards-items">
                    <CardItem
                        src='images/thumb-1.png'
                        title='工数見積改善マニュアル'
                        text='お客様が抱える業務管理や案件管理の課題を解決してきたReforma PSA。本資料では、実際の事例を導入のBefore/Afterと共に厳選してご紹介します。'
                        path='/'
                    />
                    <CardItem
                        src='images/thumb-2.png'
                        title='工数見積改善マニュアル'
                        text='お客様が抱える業務管理や案件管理の課題を解決してきたReforma PSA。本資料では、実際の事例を導入のBefore/Afterと共に厳選してご紹介します。'
                        path='/'
                    />
                    <CardItem
                        src='images/thumb-3.png'
                        title='工数見積改善マニュアル'
                        text='お客様が抱える業務管理や案件管理の課題を解決してきたReforma PSA。本資料では、実際の事例を導入のBefore/Afterと共に厳選してご紹介します。'
                        path='/'
                    />
                    <CardItem
                        src='images/thumb-1.png'
                        title='工数見積改善マニュアル'
                        text='お客様が抱える業務管理や案件管理の課題を解決してきたReforma PSA。本資料では、実際の事例を導入のBefore/Afterと共に厳選してご紹介します。'
                        path='/'
                    />
                    <CardItem
                        src='images/thumb-2.png'
                        title='工数見積改善マニュアル'
                        text='お客様が抱える業務管理や案件管理の課題を解決してきたReforma PSA。本資料では、実際の事例を導入のBefore/Afterと共に厳選してご紹介します。'
                        path='/'
                    />
                    <CardItem
                        src='images/thumb-3.png'
                        title='工数見積改善マニュアル'
                        text='お客様が抱える業務管理や案件管理の課題を解決してきたReforma PSA。本資料では、実際の事例を導入のBefore/Afterと共に厳選してご紹介します。'
                        path='/'
                    />
                </div>
            </div>
        </div>
    )
};

export default Cards;