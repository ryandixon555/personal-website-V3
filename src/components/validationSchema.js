import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is Required!'),
  email: Yup.string()
    .email('Enter a Valid Email!')
    .required('Email is Required!'),
  work: Yup.object().shape({
      work: Yup.string().required('Work is required!'),
    }),
  FreelanceWork: Yup.object().shape({
    FreelanceWork: Yup.string().required('Freelance Work is required!'),
  }),
  message: Yup.string()
    .required('Message is Required!'),
})

export default validationSchema
