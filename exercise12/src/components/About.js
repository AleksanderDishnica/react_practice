import React from 'react'

export default function About({ about }) {
    return (
        <div>
            <div className="w3-row w3-padding-64" id="about">
                <div className="w3-col m6 w3-padding-large w3-hide-small">
                    <img src="https://www.w3schools.com//w3images/tablesetting2.jpg" className="w3-round w3-image w3-opacity-min" alt="Table Setting" width="600" height="750" />
                </div>

                <div className="w3-col m6 w3-padding-large">
                    {
                        about.map((item, index) => {
                            if (item.id === 0)
                                return <h1 className="w3-center">{item.text}</h1>
                            if (item.id === 1)
                                return <h5 className="w3-center">{item.text}</h5>
                            if (item.id === 2)
                                return <p className="w3-large">{item.text}</p>
                            if (item.id === 3)
                                return <p className="w3-large w3-text-grey w3-hide-medium">{item.text}</p>
                        })
                    }
                </div>
            </div>

            <hr />
        </div>
    )
}
