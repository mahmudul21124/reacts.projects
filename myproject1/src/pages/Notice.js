import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Notice() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get("http://localhost/wdpf60_php/myproject/Admin/noticeList.php/")
      .then(function (response) {
        console.log(response.data);
        setUsers(response.data);
      });
  }

  return (
    <>
      {/*<!--Breadcrumb start-->*/}
      <div className="ed_pagetitle">
        <div className="ed_img_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-4 col-sm-6">
              <div className="page_title">
                <h2>Notice</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-6">
              <ul className="breadcrumb">
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <i className="fa fa-chevron-left"></i>
                </li>
                <li>
                  <Link to="about">Notice</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*<!--Breadcrumb end-->*/}

      {/*<!--edu team wrapper Start-->*/}
      <div className="ed_graysection ed_toppadder80 ed_bottompadder80">
        <div className="container">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="table-responsive">
            <table className="table table-bordered mb-0">
              <thead className="bg-info text-dark">
                <tr>
                  <th>Notice</th>
                  <th>Publish Date</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, key) => (
                  <tr key={key}>
                    <td>{user.title}</td>
                    <td>{user.creationDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </div>
      {/*<!--edu team wrapper End-->*/}

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
    </>
  );
}
