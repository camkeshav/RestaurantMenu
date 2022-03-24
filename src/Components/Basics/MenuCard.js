import React from 'react'
import './style.css'

const MenuCard = ({ menuData }) => {

    return (
        <>
            <section className="main-container">
                {menuData.map((currElem) => {
                    const { id, name, image, description, category } = currElem;
                    return (
                        <>
                            <div className="card-container" key={id}>
                                <div className="card">
                                    <span className="name">{name}</span>
                                    <div className="img-container">
                                        <img src={image} className="img" alt="images" />
                                        <div className="details">{description}</div>
                                    </div>
                                    <a href="" className="order-btn">Order Now</a>
                                    <span className="card-type">{category}</span>
                                    <span className="card-number">{id}</span>

                                </div>
                            </div>
                        </>
                    )
                })}
            </section>

        </>
    )
}

export default MenuCard