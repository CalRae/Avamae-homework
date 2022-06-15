import React from "react";

function ContactUs(){
    var phoneIsHidden = "true";
    var AddressDetailsAreHidden = "true";
    var contentSubmitted = false;

    //const phoneButton = document.getElementById("addPhoneNumberButton");
    //phoneButton.addEventListener("click", showDetails(phoneIsHidden));

    //const submitButton = document.getElementById("submitContent");
    //submitButton.addEventListener("click", showDetails(contentSubmitted));

    return(
        <React.Fragment>
            <div className="App-two-column-body">
            <h1>Contact Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div hidden={contentSubmitted}>
            <label>Full Name</label>
            <input/>
            <label>Email Address</label>
            <input/>
            <label>Phone Number 01</label>
            <input/>
            <button id="addPhoneNumberButton">Add Phone Number</button>
            <label hidden={phoneIsHidden}>Phone Number 02</label>
            <input hidden={phoneIsHidden}/>
            <label>Message</label>
            <input height={1000}/>
            <input type="checkbox" id="displayAddress" onClick={showDetails(AddressDetailsAreHidden)}/>
            <label>Display Address Details</label>
            <label hidden={AddressDetailsAreHidden}>Address Line 1</label>
            <input hidden={AddressDetailsAreHidden}/>
            <label hidden={AddressDetailsAreHidden}>Address Line 2</label>
            <input hidden={AddressDetailsAreHidden}/>
            <label hidden={AddressDetailsAreHidden}>Town/City</label>
            <input hidden={AddressDetailsAreHidden}/>
            <label hidden={AddressDetailsAreHidden}>Postcode</label>
            <input hidden={AddressDetailsAreHidden}/>
            <label hidden={AddressDetailsAreHidden}>State/County</label>
            <input hidden={AddressDetailsAreHidden}/>
            <label hidden={AddressDetailsAreHidden}>Country</label>
            <input hidden={AddressDetailsAreHidden}/>
            <label></label>
            <button id="submitContent">Submit</button>
            </div>
            <div hidden={!contentSubmitted}>
                <body>
                <h1>content Submitted Successfully</h1>
                </body>
            </div>
            
                <div><body className="Company-logo"/></div>
            </div>
        </React.Fragment>
        
    )
}

function showDetails(boolean){
    if(boolean === true)
    boolean = "false";
    else boolean = "true";
}

export default ContactUs;