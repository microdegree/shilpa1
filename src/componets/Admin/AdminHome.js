import React, { Component, Fragment } from "react";
import logo from "../../assets/logo.png";
import "../CSS/donor.css";

class AdminHome extends Component {
  render() {
    return (
      <Fragment>
        {/* {/* End of Navbar */}

        {/* <section id="sectionF1">
          <div className="row container-fluid m-5 ">
            <div className="col-md-3">
              <div className="card p-3">
                <div class="card text-center">
                  <img class="card-img-top" src={logo} alt="" /> 
                  <i className="fa fa-book fa-5x "></i>
                  <div class="card-body">
                    <h4 class="card-title">Products</h4>
                    <p class="card-text">lists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>  */}

      
        <section class="counts section-bg mt-5">
        <div className=" container-fluid mt-5" id="product">
          <h2> List Of Product</h2>

          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://5.imimg.com/data5/BH/PL/MY-7778582/maggi-noodles-250x250.jpg"
                  className="img1"
                  alt=""
                />

                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Quick Shop"
                    data-toggle="modal"
                    data-target="#quickModel"
                  >
                    <i className="fa fa-eye"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                    data-toggle=""
                    data-target=""
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div className="product-bottom text-center">
               
                <h3>list 1</h3>
             
              </div>
            </div>
            {/*  */}
            <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/71eSAG5wTJL._SL1500_.jpg"
                  className="img1"
                  alt=""
                />
                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Quick Shop"
                    data-toggle="modal"
                    data-target="#quickModel"
                  >
                    <i className="fa fa-eye"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div className="product-bottom text-center">
            
                <h3>list 2</h3>
              
              </div>
            </div>
            {/*  */}

            {/*  */}
            <div className="col-lg-3 col-md-3 col-sm-3  animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/61D7y8hUGmL._SL1500_.jpg"
                  className="img1"
                  alt=""
                />
                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Quick Shop"
                    data-toggle="modal"
                    data-target="#quickModel"
                  >
                    <i className="fa fa-eye"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div className="product-bottom text-center">
              
                <h3>list 3</h3>
             
              </div>
            </div>
            {/*  */}
            <div className="col-lg-3 col-md-3 col-sm-3  animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/81vJyb43URL._SX679_PIbundle-40,TopRight,0,0_AA679SH20_.jpg"
                  className="img1"
                  alt=""
                />
                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Quick Shop"
                    data-toggle="modal"
                    data-target="#quickModel"
                  >
                    <i className="fa fa-eye"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div className="product-bottom text-center">
              
                <h3>list 4</h3>
           
              </div>
            </div>
          </div>
          <div
            className="modal show product-view"
            id="quickModel"
            role="dialog"
          >
            <div className="modal-dialog">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-dialog product-big-img">
                <img
                  src="https://recipes.timesofindia.com/recipes/homemade-chocolate/photo/54407737.cms"
                  className=" mt-2"
                  alt=""
                />
              </div>
         
            </div>
          </div>
        </div>
        </section>





        <div className="container mt-5  ">
        <div className="">
          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div>
          <div className="" id="login-second">
            <div class="page-wrapper p-t-50 p-b-50">
              <div class="wrapper ">
                <div class="card cardH card-6 ">
                  <div class="card-heading">
                    <h2 class="title text-dark ">&nbsp;&nbsp;&nbsp;&nbsp;Request Form</h2>
                  </div>
                  <div class="card-body  text-light">
                    <form method="POST">
                      <div class="form-row">
                        <div class="name">Full name</div>
                        <div class="value">
                          <input
                            class="input--style-6"
                            type="text"
                            name="full_name"
                          />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="name">Email address</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="email"
                              name="email"
                              placeholder="example@email.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="name">Password</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="email"
                              name="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="name">Re-Password</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="email"
                              name="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      
                    </form>
                  </div>
                  <div class="card-footer">
                    <button class="btn btn--radius-2 btn-success" type="submit">
                      Send Request
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      </Fragment>
    );
  }
}

export default AdminHome;
