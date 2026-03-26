import React from 'react'
import "./Home.css"
const Home = () => {
    return (
        <>

            <div className="search-wrapper">
                <div className="search-bar">

                    <input
                        type="text"
                        placeholder="Enter Skills, Designation, etc"
                        className="search-field"
                    />

                    <div className="divider"></div>

                    <select className="search-field">
                        <option>Select Experience</option>
                        <option>0 Year</option>
                        <option>1 Year</option>
                        <option>2 Years</option>
                    </select>

                    <div className="divider"></div>

                    <input
                        type="text"
                        placeholder="Enter locations"
                        className="search-field"
                    />

                    <button className="search-btn">
                        Let's Find
                    </button>

                </div>
            </div>
        </>
    )
}

export default Home