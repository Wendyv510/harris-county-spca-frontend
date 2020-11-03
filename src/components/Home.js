import React from 'react'


const Home = () => {
    return( 
        <div container="center">
        <div className="Home">
            <h1> Harris County SPCA</h1>
            <div
            style={{
            backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPo-6LGECifMQPsnbAdETY6AQN_FvtgQLPcA&usqp=CAU")`,backgroundRepeat: 'no-repeat',width:'526px',height:'226px',color:'white'
            }}>
            </div>
            <div>
                <h2>Mission Statement</h2>
                <p>The mission of the SPCA of Harris County, located in Elmira, NY, is to protect companion animals. We are a no-kill shelter dedicated to preventing animal cruelty and overpopulation. We promote responsible pet stewardship by providing education, counseling and training to nurture and enhance the human-animal bond.
                    Each year we take in and find happy new homes here in our community for close to 2000 animals. The SPCA staff, along with over 250 annual volunteers, rehabilitate, train, and care for these animals keeping them safe, happy, and socialized until they find their new forever homes.</p>
            </div>
            <div>
                <h3>Hours of Operation</h3>
                <ol>
                    <li>Monday     11:00AM-5:00PM</li><br></br>
                    <li>Tuesday    11:00AM-5:00PM</li><br></br>
                    <li>Wendnesday 11:00AM-5:00PM</li><br></br>
                    <li>Thursday   11:00AM-5:00PM</li><br></br>
                    <li>Friday     11:00AM-5:00PM</li><br></br>
                    <li>Saturday   11:00AM-2:00PM</li><br></br>
                    <li>Sunday     Closed</li>
                </ol>
                <h3>Contact Info</h3>
                <ol>
                    <li>Address: 8984 Cty Rte.139
                        Elmira, NY 14901 
                    </li><br></br>
                    <li>Phone:(607)734-9823</li><br></br>
                    <li>Email:ChemungCountySPCA@gmail.com</li>
                </ol>
            </div>

        </div>
        </div>
    )
}

export default Home 