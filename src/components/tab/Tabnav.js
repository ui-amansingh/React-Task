import React from 'react'

const Tabnav =({ id, title, activeTab, setActiveTab }) => {
        const handleClick = () => {
            setActiveTab(id);
          };
    return (
        <>
            <span onClick={handleClick} className={activeTab === id ? "active" : ""}>
                { title }
            </span>
        </>
    )
}
export default Tabnav;