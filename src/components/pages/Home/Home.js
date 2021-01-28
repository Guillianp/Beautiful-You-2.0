import React from "react";
import withLayout from "../../hoc/WithPageLayout";
import './Home.css'
import { NavLink}  from 'react-router-dom'
import girlGroup from '../../../img/pexels-anna-shvets-4672553.jpg';

class Home extends React.Component {
    render() {
      return (
        <div className="wrapper">
            <main>
                <section className="about">
                    <h2>Be <span className="purple">Beautiful</span>. Be <span className="purple">You</span></h2>
                    <p>Our goal is to help you embrace yourself by finding products that help you love your hair.</p>
                </section>
                
                <section className="products">
                    <h3>See Our Products</h3>
                    <div><span className="productsPage"><NavLink exact={true} to='/products'>View Products</NavLink></span>
                    </div>
                </section>

                <section className="discount-section">
                    <img className ="discount" src={girlGroup} alt="group of 3 girls"/>
                    <div className="email-list">
                        <h2>WANT 15% OFF?</h2>
                        <p>Sign up for our email list and recieve 15% off your first order.</p>
                        <form>
                            <label>
                                Email
                            <input name="email" type="email" className="email" placeholder="Your Email" required/>
                            </label><br/>
                            <input type="submit" className="form-control submit" value="Submit"/>
                        </form>
                    </div>
                    </section>

            </main>
            </div>
      )
    }
  }

  export default withLayout(Home)