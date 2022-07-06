import React from 'react'
import Button from '../button/Button';
import './Search-Form.css';
export default function SearchForm() {
    return (
        <>
            <div className='rtl-search-form'>
                <div className='rel-container'>
                    <div className='rel-form__wrap'>
                        <form action="#" className="rel-form-box rel-flex">
                            <div className="rel-form__item rel-collg-3 rel-colmd-half rel-mb--15">
                                <select className="nice-select">
                                    <option>Choose Area</option>
                                    <option>chicago</option>
                                    <option>London</option>
                                    <option>Los Angeles</option>
                                    <option>New York</option>
                                    <option>New Jersey</option>
                                </select>
                            </div>
                            <div className="rel-form__item rel-collg-3 rel-colmd-half rel-mb--15">
                                <select className="nice-select">
                                    <option>Property Status</option>
                                    <option>Open house</option>
                                    <option>Rent</option>
                                    <option>Sale</option>
                                    <option>Sold</option>
                                </select>
                            </div>
                            <div className="rel-form__item rel-collg-3 rel-colmd-half rel-mb--15">
                                <select className="nice-select">
                                    <option>Property Type</option>
                                    <option>Apartment</option>
                                    <option>Co-op</option>
                                    <option>Condo</option>
                                    <option>Single Family Home</option>
                                </select>
                            </div>
                            <div className="rel-form__item rel-collg-3 rel-colmd-half rel-mb--15">
                                <div className="rel-center">
                                    <Button link="Google.com" type="secondary" text="Find Now"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
