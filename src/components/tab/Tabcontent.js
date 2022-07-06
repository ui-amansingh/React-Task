import React from 'react';

    const TabContent = ({id, activeTab, children}) => {
        return (
        activeTab === id ? <div className="rel-tab__item">
            { children }
        </div>
        : null
        );
    };
export default TabContent;