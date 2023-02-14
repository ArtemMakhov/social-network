import { useFormik } from "formik";

const DialogsForm = (props) => {
  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: props.onSubmit,
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          id="message"
          name="message"
          type='text'
          onChange={formik.handleChange}
          value={formik.values.message}
          placeholder="Enter your message" />
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  )
};

export default DialogsForm;