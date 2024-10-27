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
      <div className="ed_pagetitle">
        <div className="container">
          <div className="table-wrap mb-20">
            {/* <div className="table-responsive"> */}
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
          {/* </div> */}
        </div>
      </div>
      {/*<!--edu team wrapper End-->*/}

      {/*<!--edu letter wrapper Start-->*/}
      <div className="edu_letter_main_wrapper float_left">
        <div className="container">
          <div className="edu_left_envo">
            <img src="images/innn.png" alt="img" />
            <h3>Sign up for Newsletter</h3>
          </div>
          <div className="edu_right_form">
            <input type="text" placeholder="Enter your email" />
            <button>Sign Up</button>
          </div>
        </div>
      </div>
      {/*<!--edu letter wrapper End-->*/}
    </>
  );
}
