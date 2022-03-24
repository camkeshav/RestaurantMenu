import React, { useState } from 'react'
import './style.css'
import Menu from "./menuApi"
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const uniqueList = ["All", ...new Set(Menu.map((currElem) => {
    return currElem.category;
})
)
]

const Restaurant = () => {
    const [menuData, setMenuData] = React.useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList)
    // console.log(menuData);
    const filterItems = (category) => {

        if (category === "All") {
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((currElem) => {
            return currElem.category === category;
        });
        setMenuData(updatedList);
    }
    return (
        <>
            <Navbar filterItems={filterItems} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Restaurant;
// onClick={filterItems("breakfast")}