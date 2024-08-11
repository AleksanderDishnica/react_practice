import './form.css'

export default function Form() {
    return (
        <div className="formDiv">
            <div className="behind">
                <div className="geometric1"><p><span>*</span> denotes mandatory</p></div>
                <div className="geometric2"></div>
                <div className="geometric3"></div>
                <form>
                    <div>
                        <label for="name">Full Name<span>*</span>:</label>
                        <input
                            id="name"
                            type="text"
                            name="fullName"
                            placeholder="FirstName LastName"
                            required
                        />
                    </div>

                    <div>
                        <label for="email">Email address<span>*</span>:</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            required
                        />
                    </div>

                    <div className="package">
                        <label for="package">Select Tour Package<span>*</span>:</label>
                        <select
                            id="package"
                            name="tourPackage"
                            required
                        >
                            <option value="Goa">Goa</option>
                            <option value="Doa">Doa</option>
                            <option value="Boa">Boa</option>
                        </select>
                    </div>

                    <div>
                        <label>Arrival date<span>*</span>:</label>
                        <input
                            type="date"
                            name="arrivalDate"
                            required
                        />
                    </div>

                    <div>
                        <label for="people">Number of people<span>*</span>:</label>
                        <input
                            id="people"
                            type="number"
                            name="people"
                            required
                        />
                    </div>

                    <div className="avail">
                        <label>What would you want to avail?<span>*</span>:</label>
                        <div>
                            <label for="boarding">Boarding</label>
                            <input
                                id="boarding"
                                type="checkbox"
                                name="boarding"
                            />
                            <label for="fooding">Fooding</label>
                            <input
                                id="fooding"
                                type="checkbox"
                                name="fooding"
                            />
                            <label for="sightseeing">Sightseeing</label>
                            <input
                                id="sightseeing"
                                type="checkbox"
                                name="sightseeing"
                            />
                        </div>
                    </div>

                    <div>
                        <label for="discount">Discount Coupon Code:</label>
                        <input
                            type="text"
                            name="couponCode"
                            id="discount"
                        />
                    </div>

                    <div>
                        <label>Terms and Conditions<span>*</span>:</label>
                        <div>
                            <input
                                type="radio"
                                name="terms"
                                id="agree"
                                required
                            /><label for="agree">I agree</label>
                            <input
                                type="radio"
                                name="terms"
                                id="disagree"
                                required
                            /><label for="disagree">I disagree</label>
                        </div>
                    </div>

                    <button type="submit">Complete Reservation</button>
                </form>
            </div>
        </div>
    );
}