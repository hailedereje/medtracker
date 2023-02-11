import * as yup from 'yup'
export const ProfileSchema = yup.object({
    firstName: yup.string().required("First name is required!"),
    lastName: yup.string().required("Last name is required!"),
    phoneNum: yup.number().required("Phone Number is required").min(10, "Phone Number is incorrect"),
    streetNumber: yup.string().required("Street Number is required"),
    zipCode: yup.number().required("Zip code is required"),
    City: yup.string().required("City is required"),
    country: yup.string().required("Country is required"),
    nationality: yup.string().required("Nationality is required"),
    emergenceName: yup.string().required("Name is required"),
    emergencePhone: yup.number().required("Phone is required").min(10, "Phone Number is incorrect"),
    emergenceRelationship: yup.number().required("Relationship is required"),
})