import React from 'react';
// import { validateEmail } from '../../utils/helpers';

function RequestHelp() {   
    // const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // const { name, email, message } = formState;
    // const [errorMessage, setErrorMessage] = useState('');

    // function handleChange(e) {
    //     if (e.target.name === 'email') {
    //         const isValid = validateEmail(e.target.value);
    //         console.log(isValid);
    //         // isValid conditional statement
    //         if (!isValid) {
    //             setErrorMessage('Your email is invalid.');
    //         } else {
    //             setErrorMessage('');
    //         }
    //     } else {
    //         if (!e.target.value.length) {
    //           setErrorMessage(`${e.target.name} is required.`);
    //         } else {
    //           setErrorMessage('');
    //         }
    //       }
    //       console.log('errorMessage', errorMessage);

    //     if (!errorMessage) {
    //     setFormState({ ...formState, [e.target.name]: e.target.value });
    //     }
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(formState);
    // }

    return (
        <div id="my-contact" className="container text-center my-5">
            <h1>Request Help</h1>

            <form id="contact-form">
                <div className="form-group">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 mx-auto">
                        <label htmlFor="username"></label>
                        <input type="text" name="username" placeholder="UserName"
                        className="form-control form-control-lg"
                        />
                        </div>
                    </div>
                </div>
                <div className="form-group hidden">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 mx-auto">
                            <div>
                            <label htmlFor="email"></label>
                            <input type="email" name="email" placeholder="Email Address" 
                            className="form-control form-control-lg"
                            />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group hidden">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 mx-auto">
                            <div>
                            <label htmlFor="password"></label>
                            <input type="password" name="password" placeholder="Password"
                            className="form-control form-control-lg"
                            />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group hidden">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 mx-auto">
                            <div>
                            <label htmlFor="name"></label>
                            <input type="name" name="name" placeholder="Name"
                            className="form-control form-control-lg"
                            />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group hiddenRight">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 mx-auto">
                            <div>
                            <label htmlFor="address"></label>
                            <textarea name="address" rows="5" placeholder="Enter your address"
                            className="form-control form-control-lg"
                            />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group hidden">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 mx-auto">
                            <div>
                            <label htmlFor="number"></label>
                            <textarea name="number" placeholder="Please enter your phone number."
                            className="form-control form-control-lg"
                            />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group hiddenRight">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 mx-auto">
                            <div>
                            <label htmlFor="request"></label>
                            <textarea name="request" rows="7" placeholder="What do you need?"
                            className="form-control form-control-lg"
                            />
                            </div>
                        </div>
                    </div>
                </div>
                

                {/* {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )} */}
                <div className="row text-md-left text-sm-center">
                    <div className="col-md-6 mx-auto">
                        <button type="submit" className="btn btn-primary mb-2 hidden">Make Request</button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default RequestHelp;

