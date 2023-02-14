import { useFormik } from "formik";

const PostsForm = (props) => {
  const formik = useFormik({
    initialValues: {
      post: '',
    },
    onSubmit: props.onSubmit,
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          id="post"
          name="post"
          type='text'
          onChange={formik.handleChange}
          value={formik.values.post}
          placeholder="new post" />
      </div>
      <div>
        <button type="submit">Add post</button>
      </div>
    </form>
  )
};

export default PostsForm;