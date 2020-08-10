import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import {connect} from 'react-redux';
import Header from 'parts/Header';
import PageDetailTitle from 'parts/PageDetailTitle';
import FeaturedImage from 'parts/FeaturedImage';
import PageDetailDescription from 'parts/PageDetailDescription';
import BookingForm from 'parts/BookingForm';
import Categories from 'parts/Categories';
import Testimonial from 'parts/Testimony';
import Footer from 'parts/Footer';
import ItemDetails from 'json/itemDetails.json';
import {checkoutBooking} from 'store/actions/checkout';

class DetailsPage extends Component {
    componentDidMount() {
        window.title = "Staycation | Detail";
        window.scrollTo(0, 0);
    }

    render() {
        const breadcrumb = [
            {pageTitle: "Home", pageHref: ""},
            {pageTitle: "House Details", pageHref: ""},
        ]

        return (
           <>
            <Header {...this.props}/>
            <PageDetailTitle
                breadcrumb={breadcrumb}
                data={ItemDetails}/>
            <FeaturedImage
                data={ItemDetails.imageUrls}/>
            <section className="container">
                <div className="row">
                    <div className="col-7 pr-5">
                        <Fade>
                        <PageDetailDescription data={ItemDetails}/>
                        </Fade>
                    </div>
                    <div className="col-5">
                        <BookingForm itemDetails={ItemDetails} startBooking={this.props.checkoutBooking}/></div>
                </div>
            </section>

            <Categories data={ItemDetails.categories}/>
            <Testimonial data={ItemDetails.testimonial}/>
            <Footer/>
           </>
        );
    }
}

export default connect(null, {checkoutBooking})(DetailsPage);