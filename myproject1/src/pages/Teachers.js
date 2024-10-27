import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Teachers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get("http://localhost/wdpf60_php/myproject/Admin/teacherList.php/").then(function (response) {
      console.log(response.data);
      setUsers(response.data);
    });
  }
  return (
    <>
      {/*<!--Page main section start-->*/}
      <div id="educo_wrapper">
        {/*<!--Breadcrumb start-->*/}
        <div className="ed_pagetitle">
          <div className="ed_img_overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-4 col-sm-6">
                <div className="page_title">
                  <h2>Educo Instructors</h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-8 col-sm-6">
                <ul className="breadcrumb">
                  <li>
                    <a href="index.html">home</a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-left"></i>
                  </li>
                  <li>
                    <a href="instructor.html">educo instructors</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*<!--Breadcrumb end-->*/}
        {/*<!-- team member section start -->*/}
        <div className="ed_transprentbg ed_toppadder80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="ed_heading_top ed_bottompadder50">
                  <h3>Our Instructors</h3>
                </div>
              </div>
              <div className="ed_team_wrapper row">
              {users.map((user, key) =>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={key}>
                  <div className="ed_team_member">
                    <div className="ed_team_member_img">
                      <img
                        src="https://dummyimage.com/263x263/000/fff"
                        alt="item1"
                        className="img-responsive"
                      />
                    </div>
                    <div className="ed_team_member_description">
                      <h4>
                        <a href="instructor_dashboard.html">{user.name}</a>
                      </h4>
                      <h5>{user.department}</h5>
                      <p>
                        {user.address}
                      </p>
                    </div>
                  </div>
                </div>
                )}
              </div>
            </div>
          </div>
          {/*<!-- /.container -->*/}
        </div>
        {/*<!-- team member section end -->*/}
        {/*<!--chart section start -->*/}
        <div className="ed_graysection ed_toppadder90 ed_bottompadder90">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="ed_heading_top ed_bottompadder50">
                  <h3>Why Choose Us</h3>
                </div>
              </div>
              <div className="ed_counter_wrapper row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="ed_chart_ratio">
                    <i className="fa fa-line-chart"></i>
                    <h4>Students graduated</h4>
                    <p>
                      Throughout these year we have done amazing work with 250
                      students..
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="ed_chart_ratio">
                    <i className="fa fa-sliders"></i>
                    <h4>Competitions won</h4>
                    <p>
                      Only competitions were the ones in the back of the
                      magazines you find..
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="ed_chart_ratio">
                    <i className="fa fa-folder-open-o"></i>
                    <h4>classNamees visited</h4>
                    <p>
                      Can how you setup your classNameroom impact how students
                      think...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- chart Section end -->*/}
        {/*<!--Newsletter Section six start-->*/}
        <div className="ed_newsletter_section">
          <div className="ed_img_overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                    <div className="ed_newsletter_section_heading">
                      <h4>
                        Let us inform you about everything important directly.
                      </h4>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                    <div className="row">
                      <div className="ed_newsletter_section_form">
                        <form className="form row m-0">
                          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Newsletter Email"
                            />
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <button className="btn ed_btn ed_green">
                              confirm
                            </button>
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
        
      </div>
      {/*<!--Page main section end-->*/}
    </>
  );
}
