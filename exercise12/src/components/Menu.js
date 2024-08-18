import React from 'react'

export default function Menu({ menu }) {
    return (
        <div>
            <div className="w3-row w3-padding-64" id="menu">
                <div className="w3-col l6 w3-padding-large">
                    {
                        menu.map((item) => {
                            return (
                                <div key={item.key}>
                                    <h1>{item.title}</h1>
                                    <h4>{item.description}</h4>
                                    <p>{item.price}€</p>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="w3-col l6 w3-padding-large">
                    <img src="https://www.w3schools.com//w3images/tablesetting.jpg" className="w3-round w3-image w3-opacity-min" alt="Menu" style={{ width: '100%' }} />
                </div>
            </div>

            <hr />
        </div>
    )
}
