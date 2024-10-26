import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      {/*<!--Footer Top section start-->*/}
      <div className="ed_footer_wrapper">
        <div className="ed_footer_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="widget text-widget">
                  <p>
                    <Link to="/">
                      <img
                        src="../assets/images/footer/logo3.png"
                        alt="Footer Logo"
                      />
                    </Link>
                  </p>
                  <p>
                    Edution is an outstanding PSD template targeting
                    educational institutions, helping them establish strong
                    identity on the internet without any real developing
                    knowledge.
                  </p>
                  <div className="ed_sociallink">
                    <ul>
                      <li>
                        <Link
                          to="javascript:void(0);"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Facebook"
                        >
                          <i
                            className="fa fa-facebook"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="javascript:void(0);"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Google+"
                        >
                          <i
                            className="fa fa-google-plus"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="javascript:void(0);"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Twitter"
                        >
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="javascript:void(0);"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Linkedin"
                        >
                          <i
                            className="fa fa-linkedin"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="javascript:void(0);"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Whatsapp"
                        >
                          <i
                            className="fa fa-whatsapp"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="widget text-widget">
                  <h4 className="widget-title">find us</h4>
                  <p>
                    <i className="fa fa-safari"></i>Wimbledon Street 42a,
                    45290 Wimbledon, <br />
                    United Kingdom
                  </p>
                  <p>
                    <i className="fa fa-envelope-o"></i>
                    <Link to="javascript:void(0);">
                      info@edutioncollege.gov.co.uk
                    </Link>{" "}
                    <Link to="javascript:void(0);">
                      public@edutioncollege.gov.co.uk
                    </Link>
                  </p>
                  <p>
                    <i className="fa fa-phone"></i> 1-220-090-080
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="widget text-widget">
                  <h4 className="widget-title">social media</h4>
                  <p>
                    <strong>@education </strong> How many students do you
                    educate monthly? Open <Link to="">http://t.co/KFDdzLSD9</Link>
                    <br />2 days ago
                  </p>

                  <p>
                    <strong>@educationUK </strong> Web Design that works. Have
                    a look at this masterpiece.{" "}
                    <Link to="">http://t.co/9j8DH93zrO</Link>
                    <br />5 days ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!--Footer Top section end-->*/}
      {/*<!--Footer Bottom section start-->*/}
      <div className="ed_footer_bottom">
        <div className="container">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="ed_copy_right">
                  <p>
                    &copy; Copyright 2024, All Rights Reserved,
                    <Link to="/"> Heritage International School</Link>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="ed_footer_menu">
                  <ul>
                    <li>
                      <Link to="/">home</Link>
                    </li>
                    <li>
                      <Link to="private_policy.html">private policy</Link>
                    </li>
                    <li>
                      <Link to="about">about</Link>
                    </li>
                    <li>
                      <Link to="contact">contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!--Footer Bottom section end-->*/}
    </>
  )
}
