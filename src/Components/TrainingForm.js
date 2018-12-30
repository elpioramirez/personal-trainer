import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import DatePicker from "material-ui/DatePicker";

const validate = values => {
    const errors = {}
    const requiredFields = ['date', 'activity', 'duration', 'customer']
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    // if (values.email &&
    // !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    // errors.email = 'Invalid email address' }
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
    {...custom} />)

const renderDatePicker = ({
    input,
    label,
    meta: {
        touched,
        error
    },
    children
}) => (<DatePicker
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    hintText="creationDate"
    mode="landscape"
    value={input.value !== ""
        ? new Date(input.value)
        : null}
    onChange={(event, value) => {
        //console.log(value);
        input.onChange(value);
    }}
    children={children} />);

const TrainingForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="date" component={renderDatePicker} hintText="date" />
            </div>
            <div>
                <Field name="activity" component={renderTextField} label="activity" />
            </div>
            <div>
                <Field name="duration" component={renderTextField} label="duration" />
            </div>

            <div>
                <Field name="customer" component={renderTextField} label="customer" />
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
    form: 'newTrainingForm', // a unique identifier for this form
    validate
})(TrainingForm)