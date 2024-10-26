import React from 'react'
import { Link } from 'react-router-dom'

export default function Events() {
  return (
    <>
      {/*<!--Breadcrumb start-->*/}
      <div className="ed_pagetitle">
        <div className="ed_img_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-4 col-sm-6">
              <div className="page_title">
                <h2>HIS events</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-6">
              <ul className="breadcrumb">
                <li><Link to="/">home</Link></li>
                <li><i className="fa fa-chevron-left"></i></li>
                <li><Link to="events">HIS events</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*<!--Breadcrumb end-->*/}
      {/*<!--Single content start-->*/}
      <div className="ed_single_wrapper ed_toppadder80 ed_bottompadder80">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8 col-sm-12 col-12">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div id="ed_custom_select">
                    <Link className="ed_custom_select_box_button ed_btn ed_green" data-select-value="no-selection">
                      <span>sort by </span>
                    </Link>
                    <ul className="ed_custom_select_box_options">
                      <li><Link data-select-value="first-item">date</Link></li>
                      <li><Link data-select-value="second-item">time</Link></li>
                    </ul>
                  </div>
                  <div className="on_map ed_btn ed_green">show events on map</div>
                  <div className="on_image ed_btn ed_green" style={{display:"none"}}>show events on image</div>
                </div>
                {/*<!-- Section eleven start -->*/}
                <div className="ed_event_wrapper">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="ed_event_wrapper_item">
                        <div className="ed_event_wrapper_item_img">
                          <img src="https://dummyimage.com/263x263/000/fff" alt="item1" className="img-responsive" />
                        </div>
                        <div className="ed_event_wrapper_item_description">
                          <h4><Link to="event_single.html">Vocational Counselling</Link></h4>
                          <span>September 17 @ 7:00 am - 9:00 am</span>
                          <p>Vocational counselling is a career focused on helping people who need to find a job. Pretty obvious, right?</p>
                          <Link to="event_single.html">get involved <i className="fa fa-long-arrow-right"></i></Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="ed_event_wrapper_item">
                        <div className="ed_event_wrapper_item_img">
                          <img src="https://dummyimage.com/263x263/000/fff" alt="item1" className="img-responsive" />
                        </div>
                        <div className="ed_event_wrapper_item_description">
                          <h4><Link to="event_single.html">Elementary School</Link></h4>
                          <span>September 23 @ 7:30 am - 12:00 am</span>
                          <p>We offer these billing seminars to AMA member physicians along with their staff (attend the seminar)..</p>
                          <Link to="event_single.html">get involved <i className="fa fa-long-arrow-right"></i></Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="ed_event_wrapper_item">
                        <div className="ed_event_wrapper_item_img">
                          <img src="https://dummyimage.com/263x263/000/fff" alt="item1" className="img-responsive" />
                        </div>
                        <div className="ed_event_wrapper_item_description">
                          <h4><Link to="event_single.html">Student Guidance</Link></h4>
                          <span>September 25 @ 8:30 am - 10:00 am</span>
                          <p>Sometimes students need help with things unrelated to school. Where we come in and make sure you are happy .</p>
                          <Link to="event_single.html">get involved <i className="fa fa-long-arrow-right"></i></Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="ed_event_wrapper_item">
                        <div className="ed_event_wrapper_item_img">
                          <img src="https://dummyimage.com/263x263/000/fff" alt="item1" className="img-responsive" />
                        </div>
                        <div className="ed_event_wrapper_item_description">
                          <h4><Link to="event_single.html">Girls on Rails</Link></h4>
                          <span>September 27 @ 10:30 pm - 12:00 pm</span>
                          <p>In a lot of various jobs, psycho tests are something you will have to deal with girls becomes.</p>
                          <Link to="event_single.html">get involved <i className="fa fa-long-arrow-right"></i></Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="ed_event_wrapper_item">
                        <div className="ed_event_wrapper_item_img">
                          <img src="https://dummyimage.com/263x263/000/fff" alt="item1" className="img-responsive" />
                        </div>
                        <div className="ed_event_wrapper_item_description">
                          <h4><Link to="event_single.html">Coding Seminar</Link></h4>
                          <span>September 28 @ 1:30 pm - 5:00 pm</span>
                          <p>Coding Seminar is a career focused on helping people who need to find a job. Pretty obvious, as well right?</p>
                          <Link to="event_single.html">get involved <i className="fa fa-long-arrow-right"></i></Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="ed_event_wrapper_item">
                        <div className="ed_event_wrapper_item_img">
                          <img src="https://dummyimage.com/263x263/000/fff" alt="item1" className="img-responsive" />
                        </div>
                        <div className="ed_event_wrapper_item_description">
                          <h4><Link to="event_single.html">JavaScript Campus</Link></h4>
                          <span>September 29 @ 7:30 pm - 9:00 am</span>
                          <p>We can offer help for elementary schools as well. Make sure your kid becomes a superstar in JavaScript.</p>
                          <Link to="event_single.html">get involved <i className="fa fa-long-arrow-right"></i></Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="ed_event_wrapper_item">
                        <div className="ed_event_wrapper_item_img">
                          <img src="https://dummyimage.com/263x263/000/fff" alt="item1" className="img-responsive" />
                        </div>
                        <div className="ed_event_wrapper_item_description">
                          <h4><Link to="event_single.html">management prog.</Link></h4>
                          <span>September 30 @ 1:30 am - 5:00 pm</span>
                          <p>In the fast-paced business world, human capital mngmnt systems have been slowing people down with silted.</p>
                          <Link to="event_single.html">get involved <i className="fa fa-long-arrow-right"></i></Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="ed_event_wrapper_item">
                        <div className="ed_event_wrapper_item_img">
                          <img src="https://dummyimage.com/263x263/000/fff" alt="item1" className="img-responsive" />
                        </div>
                        <div className="ed_event_wrapper_item_description">
                          <h4><Link to="event_single.html">Model Specificity</Link></h4>
                          <span>October 1 @ 7:30 am - 9:00 am</span>
                          <p>Vague assessments like “great job,” or “needs more work” are the opposite of the kind of resolute specificity.</p>
                          <Link to="event_single.html">get involved <i className="fa fa-long-arrow-right"></i></Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="ed_event_wrapper_item">
                        <div className="ed_event_wrapper_item_img">
                          <img src="https://dummyimage.com/263x263/000/fff" alt="item1" className="img-responsive" />
                        </div>
                        <div className="ed_event_wrapper_item_description">
                          <h4><Link to="event_single.html">mobile capabilities</Link></h4>
                          <span>October 3 @ 12:30 am - 2:00 am</span>
                          <p>Administrators can activate SuccessFactors Mobile for select individuals, groups access all mobile.</p>
                          <Link to="event_single.html">get involved <i className="fa fa-long-arrow-right"></i></Link>
                        </div>
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
              {/*<!-- Section eleven end -->*/}
            </div>
            {/*<!--Sidebar Start-->*/}
            <div className="col-lg-3 col-md-4 col-sm-12 col-12">
              <div className="sidebar_wrapper">
                <aside className="widget widget_search">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search..." />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button"><i className="fa fa-search"></i></button>
                    </span>
                  </div>
                </aside>
                <aside className="widget widget_calendar">
                  <h4 className="widget-title">Events calendar</h4>
                  <div className="jquery-calendar"></div>
                </aside>
                <aside className="widget widget_categories">
                  <h4 className="widget-title">Events Documented</h4>
                  <ul>
                    <li><Link to="javascript:void(0);"><i className="fa fa-chevron-right"></i> Physics Championship</Link></li>
                    <li><Link to="javascript:void(0);"><i className="fa fa-chevron-right"></i> The First Color Run</Link></li>
                    <li><Link to="javascript:void(0);"><i className="fa fa-chevron-right"></i> Tea For Everyone</Link></li>
                    <li><Link to="javascript:void(0);"><i className="fa fa-chevron-right"></i> Catrina Charity</Link></li>
                    <li><Link to="javascript:void(0);"><i className="fa fa-chevron-right"></i> Edution Orchestra</Link></li>
                    <li><Link to="javascript:void(0);"><i className="fa fa-chevron-right"></i> Welcome Party</Link></li>
                  </ul>
                </aside>
                <aside className="widget widget_tag_cloud">
                  <h4 className="widget-title">Search by Tags</h4>
                  <Link to="javascript:void(0);" className="ed_btn ed_orange">university</Link>
                  <Link to="javascript:void(0);" className="ed_btn ed_orange">skill</Link>
                  <Link to="javascript:void(0);" className="ed_btn ed_orange">tests</Link>
                  <Link to="javascript:void(0);" className="ed_btn ed_orange">exams</Link>
                  <Link to="javascript:void(0);" className="ed_btn ed_orange">elementary school</Link>
                  <Link to="javascript:void(0);" className="ed_btn ed_orange">college</Link>
                  <Link to="javascript:void(0);" className="ed_btn ed_orange">edution</Link>
                </aside>
              </div>
            </div>
            {/*<!--Sidebar End-->*/}
          </div>
        </div>
      </div>
      {/*<!--Single content end-->*/}
      {/*<!--skill section start -->*/}
      <div className="ed_graysection ed_toppadder90 ed_bottompadder90">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="skill_section">
                <h4><Link to="javascript:void(0);">See our events gallery</Link></h4>
                <p>We excell in multiple areas, but there are some in which we are absolutely rocking.</p>
                <span><i className="fa fa-file-image-o"></i></span>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="skill_section">
                <h4><Link to="javascript:void(0);">Want to be a volunteer? <i className="fa fa-long-arrow-right"></i></Link></h4>
                <p>Not a member yet? You need to download this sign-in sheet and make sure you become one.</p>
                <span><i className="fa fa-user"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!--skill section end -->*/}
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
