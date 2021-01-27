import React from "react";
import withLayout from "../../hoc/WithPageLayout";

export class Contact extends React.Component {
    render() {
      return (
        <div className="wrapper">
                <main>
                    <section className="hero clear">
                        <h2>Contact us!</h2>
                    </section>
                    <section className= "contact">
                        <h3>Reach out to us know if you have any questions or concerns.</h3>
                    <div className="contact-form">
                    <form action="">
                        <label>
                            Name
                        <input name="name" type="text" className="form-name" placeholder="Your Name" required/>
                       </label><br/>
                        <label>
                            Email
                        <input name="email" type="email" className="email" placeholder="Your Email" required/>
                        </label><br/>
                        <label>
                            Phone
                        <input name="phone" type="text" className="phone" placeholder="Phone Number" required/>
                        </label><br/>
                        <label>
                            Leave us a message
                        <textarea name="message" className="message"  placeholder="Message" rows="5" required></textarea>
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
  
  export default withLayout(Contact)