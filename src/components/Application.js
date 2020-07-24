import React, { Component } from 'react';

/*
ADD VALIDATIONS!!!!
check the bottom of the page: https://getbootstrap.com/docs/4.5/components/forms/
*/

class Application extends Component {
    render() {


        return (
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" class="form-control" id="inputPassword4" />
                        <small id="passwordHelpBlock" class="form-text text-muted">
                            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</small>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>



                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" class="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" class="form-control" id="inputZip" />
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label class="form-check-label text-body" for="gridCheck">
                            Agree to terms and conditions
                        </label>
                    </div>
                </div>


                <div class="mb-3">
                    <label for="validationTextarea">Textarea</label>
                    <textarea class="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>

                </div>
                <button type="submit" class="btn btn-primary">Submit Application</button>
            </form>
        )
    }

}

export default Application;