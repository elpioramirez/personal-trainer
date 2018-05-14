import React from 'react'
import {Field, reduxForm} from 'redux-form'
import TextField from 'material-ui/TextField'
// import {Button} from 'react-bootstrap';

const validate = values => {
    const errors = {}
    const requiredFields = [
        'firstname',
        'lastname',
        'streetaddress',
        'postcode',
        'city',
        'email',
        'phone'
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    return errors
}

const renderTextField = ({
    input,
    label,
    meta: {
        touched,
        error
    },
    ...custom
}) => (<TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}/>)

const MaterialUiForm = props => {
    const {handleSubmit, pristine, reset, submitting} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="firstname" component={renderTextField} label="First Name"/>
            </div>
            <div>
                <Field name="lastname" component={renderTextField} label="Last Name"/>
            </div>

            <div>
                <Field name="streetaddress" component={renderTextField} label="address"/>
            </div>
            <div>
                <Field name="postcode" component={renderTextField} label="postcode"/>
            </div>
            <div>
                <Field name="city" component={renderTextField} label="city"/>
            </div>

            <div>
                <Field name="email" component={renderTextField} label="Email"/>
            </div>

            <div>
                <Field name="phone" component={renderTextField} label="phone"/>
            </div>

            <div>
                <button type="submit" disabled={pristine || submitting}>
                    Submit
                </button>

                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'newCustomerForm', // a unique identifier for this form
    validate
})(MaterialUiForm)