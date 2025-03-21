import * as yup from "yup"

const userData = yup.object().shape({
  name: yup
    .string()
    .required("Name field is required.")
    .min(3, "Name field must have at least 3 characters."),
  email: yup
    .string()
    .required("Email field is required.")
    .email("This field must be a valid email"),
  phoneNumber: yup.string().required("Phone Number field is required."),
  description: yup
    .string()
    .required("Description field is required.")
    .min(50, "Description field must have at least 50 characters.")
})

export { userData }
