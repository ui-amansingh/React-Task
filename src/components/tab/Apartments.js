import React from "react";
import Tabnav from './Tabnav';
import TabContent from './Tabcontent';
import { useState } from 'react';
import './Apartments.css';

export default function Apartments() {
const [activeTab, setActiveTab] = useState("tab2");
  return (
    <>
        <div className='rel-tab-area rel-section--padding'>
            <div className='rel-container'>
                <div className='rel-section-area rel-center'>
                    <h2 className='rel-section__subtitle'>Apartment Sketch</h2>
                    <h3 className='rel-section__title'>Apartments Plan</h3>
                </div>
                <div className='rel-tab__menu'>
                    <Tabnav title='The Studio' id='tab1' activeTab={activeTab} setActiveTab={setActiveTab}/>
                    <Tabnav title='Deluxe Portion' id='tab2' activeTab={activeTab} setActiveTab={setActiveTab} />
                    <Tabnav title='Penthouse' id='tab3' activeTab={activeTab} setActiveTab={setActiveTab} />
                    <Tabnav title='Top Garden' id='tab4' activeTab={activeTab} setActiveTab={setActiveTab} />
                    <Tabnav title='Double Height' id='tab5' activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
                <div className='rel-tab__content'>
                    <TabContent id="tab1" activeTab={activeTab}>
                        <div className='rel-flex'>
                            <div className='rel-collg-half'>
                                <div className='rel-tab__info'>
                                    <h2>The Studio</h2>
                                    <p>Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.</p>
                                    <ul className='rel-info__list'>
                                        <li> <label>Total Area</label> <span>2800 Sq. Ft</span></li>
                                        <li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
                                        <li><label>Bathroom</label> <span>45 Sq. Ft</span></li>
                                        <li><label>Belcony/Pets</label> <span>Allowed</span></li>
                                        <li><label>Lounge</label> <span>650 Sq. Ft</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='rel-collg-half'>
                                <div className='rel-tabinfo__img'>
                                    <img src='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/others/10.png' alt='Deluxe Portion'/>
                                </div>
                            </div>
                        </div>
                    </TabContent>
                    <TabContent id="tab2" activeTab={activeTab}>
                        <div className='rel-flex'>
                            <div className='rel-collg-half'>
                                <div className='rel-tab__info'>
                                    <h2>Deluxe Portion</h2>
                                    <p>Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.</p>
                                    <ul className='rel-info__list'>
                                        <li> <label>Total Area</label> <span>2800 Sq. Ft</span></li>
                                        <li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
                                        <li><label>Bathroom</label> <span>45 Sq. Ft</span></li>
                                        <li><label>Belcony/Pets</label> <span>Allowed</span></li>
                                        <li><label>Lounge</label> <span>650 Sq. Ft</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='rel-collg-half'>
                                <div className='rel-tabinfo__img'>
                                    <img src='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/others/10.png' alt='Deluxe Portion'/>
                                </div>
                            </div>
                        </div>
                    </TabContent>
                    <TabContent id="tab3" activeTab={activeTab}>
                        <div className='rel-flex'>
                            <div className='rel-collg-half'>
                                <div className='rel-tab__info'>
                                    <h2>Penthouse</h2>
                                    <p>Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.</p>
                                    <ul className='rel-info__list'>
                                        <li> <label>Total Area</label> <span>2800 Sq. Ft</span></li>
                                        <li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
                                        <li><label>Bathroom</label> <span>45 Sq. Ft</span></li>
                                        <li><label>Belcony/Pets</label> <span>Allowed</span></li>
                                        <li><label>Lounge</label> <span>650 Sq. Ft</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='rel-collg-half'>
                                <div className='rel-tabinfo__img'>
                                    <img src='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/others/10.png' alt='Deluxe Portion'/>
                                </div>
                            </div>
                        </div>
                    </TabContent>
                    <TabContent id="tab4" activeTab={activeTab}>
                        <div className='rel-flex'>
                            <div className='rel-collg-half'>
                                <div className='rel-tab__info'>
                                    <h2>Top Garden</h2>
                                    <p>Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.</p>
                                    <ul className='rel-info__list'>
                                        <li> <label>Total Area</label> <span>2800 Sq. Ft</span></li>
                                        <li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
                                        <li><label>Bathroom</label> <span>45 Sq. Ft</span></li>
                                        <li><label>Belcony/Pets</label> <span>Allowed</span></li>
                                        <li><label>Lounge</label> <span>650 Sq. Ft</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='rel-collg-half'>
                                <div className='rel-tabinfo__img'>
                                    <img src='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/others/10.png' alt='Deluxe Portion'/>
                                </div>
                            </div>
                        </div>
                    </TabContent>
                    <TabContent id="tab5" activeTab={activeTab}>
                        <div className='rel-flex'>
                            <div className='rel-collg-half'>
                                <div className='rel-tab__info'>
                                    <h2>Double Height</h2>
                                    <p>Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.</p>
                                    <ul className='rel-info__list'>
                                        <li> <label>Total Area</label> <span>2800 Sq. Ft</span></li>
                                        <li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
                                        <li><label>Bathroom</label> <span>45 Sq. Ft</span></li>
                                        <li><label>Belcony/Pets</label> <span>Allowed</span></li>
                                        <li><label>Lounge</label> <span>650 Sq. Ft</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='rel-collg-half'>
                                <div className='rel-tabinfo__img'>
                                    <img src='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/others/10.png' alt='Deluxe Portion'/>
                                </div>
                            </div>
                        </div>
                    </TabContent>
                </div>
            </div>
        </div>
    </>
  )
}
