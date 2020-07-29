import React from 'react';
import Button from 'elements/Button';
import IconText from 'parts/IconText';

export default function Footer() {
    return (
        <footer>
            <div className="container" style={{height: 200}}>
                <div className="row">
                    <div className="col-auto" style={{width: 350}}>
                        <IconText/>
                        <p className="brand-tagline">
                            We kaboom your unforgetable holiday instantly and memorable
                        </p>
                    </div>
                    <div className="col-auto mr-5">
                        <h6 className="mt-2">For Beginners</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/register">New Account</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/properties">Start Booking a Room</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/use-payments">Use Payments</Button>
                            </li>
                        </ul>
                    </div>

                    <div className="col-2 mr-5">
                        <h6 className="mt-2">Explore Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/careers">Our Careers</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/privacy">Privacy</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/terms">Terms & Condition</Button>
                            </li>
                        </ul>
                    </div>

                    <div className="col-3">
                        <h6 className="mt-2">Connect Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button isExternal type="link" href="mailto:support@staycation.id">support@staycation.id</Button>
                            </li>
                            <li className="list-group-item">
                                <Button isExternal type="link" href="tel:+622122081996">021-2208-1996</Button>
                            </li>
                            <li className="list-group-item">
                                <Button isExternal type="link" target="_blank" href="https://www.google.co.id/maps/place/Kemang,+Cipete+Sel.,+Kec.+Cilandak,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta/@-6.2777619,106.8026676,15z/data=!3m1!4b1!4m5!3m4!1s0x2e69f18ca27987dd:0x6a032aaca638c397!8m2!3d-6.2777834!4d106.8114224">Staycation, Kemang, Jakarta</Button>
                            </li>
                        </ul>
                    </div>
                </div>
                    <div className="row">
                        <div className="col text-center copyrights">
                            Copyright 2020 x All rights reserved x Staycation
                        </div>
                    </div>
            </div>
        </footer>
    )
}
