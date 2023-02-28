function subscribeCard() {
    return(
        <div className="card w-90 bg-base-100 shadow-xl">
            <figure><img src="https://lets-unify.ai/img/header.png" alt="Shoes" /></figure>
            <div className="card-body">
                <div className="">
                    <h2 className="card-title">Join our Mailing List</h2>
                    <p>What are you waiting for? Receive awesome news and updates straight from our team!</p>
                </div>
                <div className="flex flex-row justify-start">
                    <input type="text" placeholder="Email" className="input input-bordered input-primary w-full max-w-xs" />
                    {/* add padding to button */}
                    <button className="btn btn-primary ml-2">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default subscribeCard;