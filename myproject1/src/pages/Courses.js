import React from 'react'
import { Link } from 'react-router-dom'

export default function Courses() {
  return (
    <>
      {/*<!--Breadcrumb start-->*/}
      <div className="ed_pagetitle">
        <div className="ed_img_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-4 col-sm-6">
              <div className="page_title">
                <h2>HIS Courses</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-6">
              <ul className="breadcrumb">
                <li><Link to="/">home</Link></li>
                <li><i className="fa fa-chevron-left"></i></li>
                <li><Link to="/course">HIS Courses</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*<!--Breadcrumb end-->*/}
      {/*<!-- Section eleven start -->*/}
      <div className="ed_courses ed_toppadder80 ed_bottompadder80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="ed_mostrecomeded_course">
                  <div className="ed_item_img">
                    <img src="assets/images/myPc1.jpg" alt="item1" className="img-responsive" />
                  </div>
                  <div className="ed_item_description ed_most_recomended_data">
                    <h4><a href="course_single.html">Project Learning </a><span>£25</span></h4>
                    <div className="row">
                      <div className="ed_rating">
                        <div className="col-lg-6 col-md-6 col-sm-7 col-7">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="ed_stardiv">
                                <div className="star-rating"><span style={{ width: "80%" }}></span></div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="row">
                                <p>(5 review)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-5 col-5">
                          <div className="ed_views">
                            <i className="fa fa-users"></i>
                            <span>35 students</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="course_detail">
                      <div className="course_faculty">
                        <img src="assets/images/myMess1.jpg" alt="" /> <a href="instructor_dashboard.html">Abdullah Al Noman</a>
                      </div>
                    </div>
                    <p>Project-Based Learning is a flexible tool for framing given academic standards into curriculum flexible tool for framing.</p>
                    <a href="course_single.html" className="ed_getinvolved">get involved <i className="fa fa-long-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="ed_mostrecomeded_course">
                  <div className="ed_item_img">
                    <img src="assets/images/myPc2.jpg" alt="item1" className="img-responsive" />
                  </div>
                  <div className="ed_item_description ed_most_recomended_data">
                    <h4><a href="course_single.html">Billing Seminar</a><span>free</span></h4>
                    <div className="row">
                      <div className="ed_rating">
                        <div className="col-lg-6 col-md-6 col-sm-7 col-7">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="ed_stardiv">
                                <div className="star-rating"><span style={{ width: "80%" }}></span></div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="row">
                                <p>(10 review)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-5 col-5">
                          <div className="ed_views">
                            <i className="fa fa-users"></i>
                            <span>55 students</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="course_detail">
                      <div className="course_faculty">
                        <img src="assets/images/myMess3.jpg" alt="" /> <a href="instructor_dashboard.html">Saif Jahan</a>
                      </div>
                    </div>
                    <p>Project-Based Learning is a flexible tool for framing given academic standards into curriculum flexible tool for framing.</p>
                    <a href="course_single.html" className="ed_getinvolved">get involved <i className="fa fa-long-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="ed_mostrecomeded_course">
                  <div className="ed_item_img">
                    <img src="assets/images/myPc5.jpg" alt="item1" className="img-responsive" />
                  </div>
                  <div className="ed_item_description ed_most_recomended_data">
                    <h4><a href="course_single.html">Javascript Camp</a><span>£60</span></h4>
                    <div className="row">
                      <div className="ed_rating">
                        <div className="col-lg-6 col-md-6 col-sm-7 col-7">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="ed_stardiv">
                                <div className="star-rating"><span style={{ width: "80%" }}></span></div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="row">
                                <p>(10 review)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-5 col-5">
                          <div className="ed_views">
                            <i className="fa fa-users"></i>
                            <span>55 students</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="course_detail">
                      <div className="course_faculty">
                        <img src="assets/images/myMess4.jpg" alt="" /> <a href="instructor_dashboard.html">A.S.M Abdullah</a>
                      </div>
                    </div>
                    <p>Project-Based Learning is a flexible tool for framing given academic standards into curriculum flexible tool for framing.</p>
                    <a href="course_single.html" className="ed_getinvolved">get involved <i className="fa fa-long-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="ed_mostrecomeded_course">
                <div className="ed_item_img">
                  <img src="assets/images/myPc_3.jpg" alt="item1" className="img-responsive" />
                </div>
                <div className="ed_item_description ed_most_recomended_data">
                  <h4><Link to="course_single.html">Girls on Rails </Link><span>free</span></h4>
                  <div className="row">
                    <div className="ed_rating">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="ed_stardiv">
                              <div className="star-rating"><span style={{width: "80%"}}></span></div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="row">
                              <p>(8 review)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="ed_views">
                          <i className="fa fa-users"></i>
                          <span>35 students</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="course_detail">
                    <div className="course_faculty">
                      <img src="assets/images/myMess2.jpg" alt=""/> <Link to="instructor_dashboard.html" >Md. Arif Hasan</Link>
                    </div>
                  </div>
                  <p>In a lot of various jobs, psychology tests are something you will have to deal with. We can prepare you.</p>
                  <Link to="course_single.html" className="ed_getinvolved">get involved <i className="fa fa-long-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="ed_mostrecomeded_course">
                <div className="ed_item_img">
                  <img src="assets/images/myPc4.png" alt="item1" className="img-responsive" />
                </div>
                <div className="ed_item_description ed_most_recomended_data">
                  <h4><Link to="course_single.html">Coding Seminar </Link><span>free</span></h4>
                  <div className="row">
                    <div className="ed_rating">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="ed_stardiv">
                              <div className="star-rating"><span style={{width: "80%"}}></span></div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="row">
                              <p>(7 review)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="ed_views">
                          <i className="fa fa-users"></i>
                          <span>31 students</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="course_detail">
                    <div className="course_faculty">
                      <img src="assets/images/my12.jpg" alt=""/> <Link to="instructor_dashboard.html" >Umme Rummana</Link>
                    </div>
                  </div>
                  <p>Coding Seminar is a career focused on helping people who need to find a job. Pretty obvious, as well right?</p>
                  <Link to="course_single.html" className="ed_getinvolved">get involved <i className="fa fa-long-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="ed_mostrecomeded_course">
                <div className="ed_item_img">
                  <img src="assets/images/myPc6.jpg" alt="item1" className="img-responsive" />
                </div>
                <div className="ed_item_description ed_most_recomended_data">
                  <h4><Link to="course_single.html">Javascript Campus </Link><span>£60</span></h4>
                  <div className="row">
                    <div className="ed_rating">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="ed_stardiv">
                              <div className="star-rating"><span style={{width: "80%"}}></span></div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="row">
                              <p>(5 review)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="ed_views">
                          <i className="fa fa-users"></i>
                          <span>40 students</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="course_detail">
                    <div className="course_faculty">
                      <img src="assets/images/my11.jpg" alt=""/> <Link to="instructor_dashboard.html" >Nusrat Jahan</Link>
                    </div>
                  </div>
                  <p>We can offer help for elementary schools as well. Make sure your kid becomes a superstar in Javascript.</p>
                  <Link to="course_single.html" className="ed_getinvolved">get involved <i className="fa fa-long-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            
            <div className="col-lg-12">
              <div className="ed_blog_bottom_pagination">
                <nav>
                  <ul className="pagination">
                    <li><Link to="javascript:void(0);">1</Link></li>
                    <li><Link to="javascript:void(0);">2</Link></li>
                    <li><Link to="javascript:void(0);">3</Link></li>
                    <li className="active"><Link to="javascript:void(0);">Next <span className="sr-only">(current)</span></Link></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- /.container -->*/}
      </div>
      {/*<!-- Section eleven end -->*/}
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
