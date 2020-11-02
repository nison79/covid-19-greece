import React from 'react'
import './Content.css'

function Content() {
    return (
        <div className = "content">
            <div className="content__section">

                <div className="content__box">
                    <div className="content__info">
                        <h3>Yesterday:</h3>
                        <p>80</p>
                    </div>
                </div>

                <div className="content__box2">
                    <div className="content__info">
                        <h3>Last 30 days:</h3>
                        <p>1500</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Content
