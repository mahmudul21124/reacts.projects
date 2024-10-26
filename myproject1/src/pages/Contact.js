import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <>
      {/*<!--Breadcrumb start-->*/}
        <div className="ed_pagetitle">
            <div className="ed_img_overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-4 col-sm-6">
                        <div className="page_title">
                            <h2>Contact Us</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-6">
                        <ul className="breadcrumb">
                            <li><Link to="/">home</Link></li>
                            <li><i className="fa fa-chevron-left"></i></li>
                            <li><Link to="contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/*<!--Breadcrumb end-->*/}
        {/*<!--Section fourteen Contact form start-->*/}
        <div className="ed_transprentbg ed_toppadder80 ed_bottompadder80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="ed_heading_top">
                            <h3>Send us a message</h3>
                        </div>
                    </div>
                    <div className="ed_contact_form ed_toppadder60 row m-0">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group">
                                <input type="text" id="uname" className="form-control" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <input type="email" id="umail" className="form-control" placeholder="Your Email"/>
                            </div>
                            <div className="form-group">
                                <input type="text" id="sub" className="form-control" placeholder="Subject"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group">
                                <textarea id="msg" className="form-control" rows="6" placeholder="Message"></textarea>
                            </div>
                            <button id="ed_submit" className="btn ed_btn ed_orange pull-right">send</button>
                            <p id="err"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*<!--Section fourteen Contact form start-->*/}
        {/*<!--Section fifteen Contact form start-->*/}
        <div className="ed_event_single_contact_address ed_toppadder70 ed_bottompadder70">
            <div className="container">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="ed_heading_top ed_bottompadder70">
                        <h3>Contact & Find</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="row">
                                <div className="ed_event_single_address_info ed_toppadder50 ed_bottompadder50">
                                    <h4 className="ed_bottompadder30">contact info</h4>
                                    <p className="ed_bottompadder40 ed_toppadder10">You can always reach us via following contact details. We will give our best to reach you as possible.</p>
                                    <p>Phone: <span>1-220-090-080</span></p>
                                    <p>Email: <Link to="javascript:void(0);">info@edutioncollege.gov.co.uk</Link></p>
                                    <p>Website: <Link to="javascript:void(0);">http://www.edutioncollege.gov.co.uk</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="row">
                                <div className="ed_event_single_address_map">
                                    <div id="map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.30120302504!2d54.947561088342766!3d25.076381466775672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1633159256205!5m2!1sen!2sin"
                                            width="100%" height="380" style={{border: 0}} allowfullscreen="" loading="lazy"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*<!--Section fifteen Contact form start-->*/}
        {/*<!--Newsletter Section six start-->*/}
        <div className="ed_newsletter_section">
            <div className="ed_img_overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                                <div className="ed_newsletter_section_heading">
                                    <h4>Let us inform you about everything important directly.</h4>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                                <div className="row">
                                    <div className="ed_newsletter_section_form">
                                        <form className="form row m-0">
                                            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                                                <input className="form-control" type="text" placeholder="Newsletter Email" />
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                                <button className="btn ed_btn ed_green">confirm</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*<!--Newsletter Section six end-->*/}
    </>
  )
}
