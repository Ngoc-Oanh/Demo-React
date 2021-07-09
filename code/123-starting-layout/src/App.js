import React from 'react';

import Expenses from './components/Expenses/Expenses';

const App = () => {
    const expenses = [
        {
            id: "e1",
            title: "Car Tm",
            amount: 294.34,
            date: new Date(2021, 6, 9)
        },
        {
            id: "e2",
            title: "Toilet Pap",
            amount: 7.9,
            date: new Date(2021, 12, 1)
        },
        {
            id: "e3",
            title: "Kenv",
            amount: 45.34,
            date: new Date(2021, 5, 10)
        },
        {
            id: "e4",
            title: "Mar",
            amount: 4.34,
            date: new Date(2021, 1, 12)
        },
        {
            id: "e5",
            title: "Jay",
            amount: 94.34,
            date: new Date(2021, 6, 4)
        },
    ];

    // return React.createElement(
    //     'div',
    //     {},
    //     React.createElement('h2', {}, "Let's get started!"),
    //     React.createElement(Expenses, {items:expenses})
    // );

    return (
        <div>
            <h2>Let's get started!</h2>
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
