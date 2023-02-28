function unsubscribeCard() {
    return(
        <div className="card w-90 bg-base-100 shadow-xl">
            <figure><img src="https://www.pngmart.com/files/11/Sad-Pepe-The-Frog-Transparent-Background.png" alt="Shoes" /></figure>
            <div className="card-body">
                <div className="">
                    <h2 className="card-title">We're sad to see you go :(</h2>
                    <p>Feel free to join back at anytime!</p>
                </div>
                <div className="flex flex-row justify-start">
                    <input type="text" placeholder="Email" className="input input-bordered input-primary w-full max-w-xs" />
                    <button className="btn btn-primary ml-2">Unsubscribe</button>
                </div>
            </div>
        </div>
    )
}

export default unsubscribeCard;