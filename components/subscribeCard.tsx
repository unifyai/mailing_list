function subscribeCard() {
    return(
        <div className="card w-90 bg-base-100 shadow-xl">
            <figure><img src="https://lets-unify.ai/img/header.png" alt="Ivy Logo" /></figure>
            <div className="card-body">
                <div className="">
                    <h2 className="card-title">Join our Mailing List 🚀</h2>
                    <p>What are you waiting for? Receive awesome news and updates straight from our team!</p>
                </div>
                <div className="flex flex-row justify-start">
                    {/* add id to input */}
                    <input id="email" type="text" placeholder="Email" className="input input-bordered input-primary w-full max-w-xs" />
                    {/* add padding to button */}
                    <button onClick={sendSubscribe} className="btn btn-primary ml-2">Subscribe</button>
                </div>
                <p id="error" className="text-red-500"></p>
                <p id="success" className="text-green-500"></p>
            </div>
        </div>
    )
}

//funciton that when button is clicked it will send a request to add email to database
function sendSubscribe(){
    document.getElementById("success")!.innerHTML = "";
    document.getElementById("error")!.innerHTML = "";

    //get email from input
    var email = (document.getElementById("email") as HTMLInputElement).value;
    if (email == "") {
        document.getElementById("error")!.innerHTML = "Please enter an email";
        return;
    }

    //send email to database
    fetch('/api/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        //if email is already in database
        if(data.error){
            //display error message
            document.getElementById("error")!.innerHTML = "This email is already subscribed to our newsletter.";
        }
        //if email is not in database
        else{
            //display success message
            document.getElementById("success")!.innerHTML = "Success! You have been subscribed to our newsletter.";
        }
    })
    .catch(err => {
        console.log(err);
    })
}

export default subscribeCard;
