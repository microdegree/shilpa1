import React, { Component, Fragment } from "react";
// import "../CSS/Home.css";

class Home extends Component {
  render() {
    return (
      <Fragment>
        
    
  
<div class="banner">
  <div>
  <section id="section1" className="" style={{ marginTop: 80 + "px" }}>
         
          
          <div className="rightside rollIn animated wow animated">
            <div className="container ">
           
            <h4> Welcome To Our Studio!</h4>
              <h1>Direct Connect With Brand</h1>
             
             
              <a href="/Home#product" className="btn btn-success welcome">
              Tell Me More
              </a>
             
            </div>
          </div>
          <div className="leftside">
            
            <img
              src="https://www.adweek.com/wp-content/uploads/2019/12/brands-evolved-taglines-PAGE-2019.jpg"
              alt=""
            />
          </div>
       
        </section>
  </div>

</div>
 {/*  */}
 <section id="service">
          <div className="container">
            <h2>About Us</h2>
            <div className="service_area">
              <div className="row">
              <div className="col-lg-12">
                  <div className="service_block">
              
                    <p className="animated zoomIn wow animated">
                    Charitable giving is the act of giving money, goods or time to the unfortunate, either directly or by means of a charitable trust or other worthy cause.[9] Charitable giving as a religious act or duty is referred to as almsgiving or alms. The name stems from the most obvious expression of the virtue of charity; giving the recipients of it the means they need to survive. The impoverished, particularly those widowed or orphaned, and the ailing or injured, are generally regarded as the proper recipients of charity. The people who cannot support themselves and lack outside means of support sometimes become "beggars", directly soliciting aid from strangers encountered in public.

Some groups regard charity as being distributed towards other members from within their particular group. Although giving to those nearly connected to oneself is sometimes called charity—as in the saying "Charity begins at home"—normally charity denotes giving to those not related, with filial piety and like terms for supporting one's family and friends. Indeed, treating those related to the giver as if they were strangers in need of charity has led to the figure of speech "as cold as charity"—providing for one's relatives as if they were strangers, without affection.[10]

Most forms of charity are concerned with providing basic necessities such as food, water, clothing, healthcare and shelter, but other actions may be performed as charity: visiting the imprisoned or the homebound, ransoming captives, educating orphans, even social movements. Donations to causes that benefit the unfortunate indirectly, such as donations to fund cancer research, are also charity
                    </p>
                  </div>
                </div>
              
             
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        {/*  */}
        {/*  */}

        <div className=" container-fluid mt-5" id="product">
          <h2>  New Brands</h2>

          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="data:image/png;base64,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"
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
           
            </div>
            {/*  */}
            <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://www.brandingstrategyinsider.com/images/old/6a00d83451b74a69e2015390b94b97970b-pi.jpg"
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
            
            </div>
            {/*  */}

            {/*  */}
            <div className="col-lg-3 col-md-3 col-sm-3  animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9xbpzlf7QdP0rZv0j_4xpJ85MHNZuuVGPg0cMhVy8Vyzpx4bM&usqp=CAU"
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
              
            </div>
            {/*  */}
            <div className="col-lg-3 col-md-3 col-sm-3  animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="data:image/jpeg;base64,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"
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
        <div className="container col-md-2">
          <a className="btn shop text-center mx-auto block" href={"/Showitems"}>
            View More
          </a>
        </div>

        <section >
        <div className="row">
              <div className="col-lg-6 wow fadeInLeft animated">
              
                <div className=" address clearfix address1">
                  <h1>Address</h1>
                  <p className="address1">
                    We are trying to connect small and large farmers to sell
                    their quality product to the diffent places.
                  </p>
                  <p className="address1">If any suggestions or tips let us know</p>
                </div>
                <ul className="social-link">
                  <li >
                    <a href="(0)">
                      <i className="fa fa-twitter "></i>
                    </a>
                  </li>
                  <li className="facebook animated bounceIn wow delay-03s animated">
                    <a href="(0)">
                      <i className="fa fa-facebook "></i>
                    </a>
                  </li>
                  <li className="pinterest animated bounceIn wow delay-04s animated">
                    <a href="(0)">
                      <i className="fa fa-pinterest "></i>
                    </a>
                  </li>
                  <li className="dribbble animated bounceIn wow delay-06s animated">
                    <a href="(0)">
                      <i className="fa fa-instagram "></i>
                    </a>
                  </li>
               
                
                </ul>
              </div>
              <div className="col-lg-6 wow fadeInUp delay-06s animated">
                <div className="form">
                <h1 className="address2">Contact Us</h1>
                  <div id="sendmessage" className="address2">
                    Sent Message Thank you!
                  </div>
                  <div id="errormessage"></div>
                  <form
                    action=""
                    method="post"
                    role="form"
                    className="contactForm"
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control input-text"
                        id="name"
                        placeholder="Your Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control input-text"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                      />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control input-text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 8 chars of subject"
                      />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        data-rule="required"
                        data-msg="Please write something for us"
                        placeholder="Message"
                      ></textarea>
                      <div className="validation"></div>
                    </div>

                    <button type="submit" className="btn input-btn">
                      SEND MESSAGE
                    </button>
                  </form>
                </div>
              </div>
              
            </div>
      
        </section>
     
        {/*  */}
        {/*  */}
        {/*  */}

        <section className="subscribe-section">
  <div className="subscribe-form">
  <form action="#" className="subscribe-form">
    <label for="text"className="clr" >Join our exclusive newsletter</label>
    <input type="email" name="email" className="clr" placeholder="Enter your email address"/>
    <span className="submit">
      <input type="submit" value="subscribe"/> <a  className="clr" >Subscribe</a>
    </span> 
  </form>
</div>
</section>
        {/*  */}
        {/*  */}
      </Fragment>
    );
  }
}

export default Home;
