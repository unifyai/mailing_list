import prisma from "@/lib/prisma";

function unsubscribeCard() {
    return(
        <div className="card w-90 bg-base-100 shadow-xl">
            <figure><img src="https://www.pngmart.com/files/11/Sad-Pepe-The-Frog-Transparent-Background.png" alt="Sad Pepe" /></figure>
            <div className="card-body">
                <div className="">
                    <h2 className="card-title">We're sad to see you go :(</h2>
                    <p>Feel free to join back at anytime!</p>
                </div>
                <div className="flex flex-row justify-start">
                    <input id = "email" type="text" placeholder="Email" className="input input-bordered input-primary w-full max-w-xs" />
                    <button onClick={unsubscribeSend} className="btn btn-primary ml-2">Unsubscribe</button>
                </div>
                <p id="error" className="text-red-500"></p>
            </div>
        </div>
    )
}

//function that when button is clicked it will send a request to remove email from prisma database
function unsubscribeSend(){
    //get email from input
    var email = document.getElementById("email").value;
    
    if (email == "") {
        document.getElementById("error").innerHTML = "Please enter an email";
        return;
    }

    //send email to database
    fetch('/api/unsubscribe', {
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
        //if email is not in database
        if(data.error){
            //display error message
            document.getElementById("error").innerHTML = "This email is not subscribed to our newsletter.";
        }
        //if email is in database
        else{
            //display success message
            document.getElementById("error").innerHTML = "Success! You have been unsubscribed from our newsletter.";
        }
    })
    .catch(err => {
        console.log(err);
    })
}

export default unsubscribeCard;