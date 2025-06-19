import React from "react";
function FooterApp()
{
    return(
        <>
          <section id="footer">
            <div className="links">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
            </div>
            <div className="address">
                <p><b>Our Address :</b>150 feet ring road Rajkot <br /> behind jalaram plot-2 Rajkot 360005<br /></p>
            </div>
            <div className="newsletter">
                <input type="text" placeholder="subscribe our newsletter *" />
            </div>
          </section>

        </>
    )
}
export default FooterApp