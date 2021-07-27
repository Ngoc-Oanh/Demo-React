import React from 'react';
import './MainVisual.css';
import styled from 'styled-components';

const Banner = styled.div`
    background-image: url('./images/bg-main_visual.jpg');
`;

const MainVisual = () => {
    return (
        <Banner className="banner">
            <div className="container">
                <div className="banner-inner">
                    <div className="banner-block">
                        <div className="banner-left">
                            <h1>クリエイティブ業のための<br></br>
                            案件管理システムで<br></br>
                            業務を効率化</h1>
                            <p>間接業務が増えて本業に時間を使えない...。<br></br>
                            そんな成長企業のお悩みを解決するために<br></br>
                            Reforma PSAは誕生しました。</p>
                        </div>
                        <div className="banner-right">
                        <img src='images/img-visual_laptop.png' alt="Main" />
                        </div>
                    </div>
                </div>
            </div>
        </Banner>
    )
};

export default MainVisual;