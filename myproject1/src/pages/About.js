import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      {/*<!--Breadcrumb start-->*/}
      <div className="ed_pagetitle">
        <div className="ed_img_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-4 col-sm-6">
              <div className="page_title">
                <h2>About HIS</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-6">
              <ul className="breadcrumb">
                <li><Link to="/">home</Link></li>
                <li><i className="fa fa-chevron-left"></i></li>
                <li><Link to="about">About HIS</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*<!--Breadcrumb end-->*/}

      {/*<!--chart section start -->*/}
      <div className="ed_graysection ed_toppadder90 ed_bottompadder90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ed_heading_top ed_bottompadder50">
                <h3>My learning objectives</h3>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ed_counter_wrapper row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="ed_chart_ratio">
                    <i className="fa fa-line-chart"></i>
                    <h4>Officially the best</h4>
                    <p>Just in case there is anyone looking for it, new expertise to our knowledge base to make you happy as well.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="ed_chart_ratio">
                    <i className="fa fa-sliders"></i>
                    <h4>Redesigned website</h4>
                    <p>Just in case there is anyone looking for it, new expertise to our knowledge base to make you happy as well.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="ed_chart_ratio">
                    <i className="fa fa-folder-open-o"></i>
                    <h4>We are launching</h4>
                    <p>Just in case there is anyone looking for it, new expertise to our knowledge base to make you happy as well.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- chart Section end -->*/}
      
      {/*<!-- team member section start -->*/}
      <div className="ed_transprentbg ed_toppadder80 ed_bottompadder80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ed_heading_top ed_bottompadder50">
                <h3>our expert team</h3>
              </div>
            </div>
            <div className="ed_team_wrapper row">
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="ed_team_member">
                  <div className="ed_team_member_img">
                    <img src="https://dummyimage.com/263x263/000/fff" alt="item1" className="img-responsive" />
                  </div>
                  <div className="ed_team_member_description">
                    <h4><Link to="instructor_dashboard.html">Andre House</Link></h4>
                    <h5>director</h5>
                    <p>Project-Based Learning is a flexible tool for framing.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="ed_team_member">
                  <div className="ed_team_member_img">
                    <img src="https://dummyimage.com/263x263/000/fff" alt="item1" className="img-responsive" />
                  </div>
                  <div className="ed_team_member_description">
                    <h4><Link to="instructor_dashboard.html">Frank Pascole</Link></h4>
                    <h5>principle</h5>
                    <p>The European languages are members of the same fam.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="ed_team_member">
                  <div className="ed_team_member_img">
                    <img src="https://dummyimage.com/263x263/000/fff" alt="item1" className="img-responsive" />
                  </div>
                  <div className="ed_team_member_description">
                    <h4><Link to="instructor_dashboard.html">Tina Bonucci</Link></h4>
                    <h5>t.p.o.</h5>
                    <p> The languages only differ in grammar, common words.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="ed_team_member">
                  <div className="ed_team_member_img">
                    <img src="https://dummyimage.com/263x263/000/fff" alt="item1" className="img-responsive" />
                  </div>
                  <div className="ed_team_member_description">
                    <h4><Link to="instructor_dashboard.html">Shy Tommus</Link></h4>
                    <h5>h.o.d.</h5>
                    <p>If several languages coalesce, the grammar of the resulting language.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- team member section end -->*/}
      {/*<!--counter section start -->*/}
      <div className="ed_graysection ed_toppadder90 ed_bottompadder90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ed_heading_top ed_bottompadder50">
                <h3>Why Choose Us</h3>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ed_counter_wrapper row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="ed_counter">
                    <h2 className="timer" data-from="0" data-to="2600" data-speed="3000"></h2>
                    <h4>Students graduated</h4>
                    <p>Throughout these year we have done amazing work with 250 students..</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="ed_counter">
                    <h2 className="timer" data-from="0" data-to="5900" data-speed="3000"></h2>
                    <h4>Competitions won</h4>
                    <p>Only competitions were the ones in the back of the magazines you find..</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="ed_counter">
                    <h2 className="timer" data-from="0" data-to="8400" data-speed="3000"></h2>
                    <h4>classNamees visited</h4>
                    <p>Can how you setup your classNameroom impact how students think...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!--counter section end -->*/}
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
