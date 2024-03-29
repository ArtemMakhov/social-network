import React from 'react';
import { Formik, Form, Field } from 'formik';
import { FilterType } from '../../redux/users-reduser';
import { getUsersFilter } from '../../redux/selectors/users-selector';
import { useSelector } from 'react-redux';

const usersSearchFormValidate = (values: any) => {
         const errors = {};
         return errors;
}

type FormType = {
  term: string,
  friend: string
}

type PropsType = {
  onFilterChanged: (filter: FilterType)=> void
}



export const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {

  const filter = useSelector(getUsersFilter)

  const submit = (
    values: FormType,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    const filter: FilterType = {
      term: values.term,
      friend: values.friend === "true" ? true : values.friend === "false" ? false : null

    } 
    props.onFilterChanged(filter)
    setSubmitting(false)
  }

  return <div>
    <Formik
      enableReinitialize
      initialValues={{ term: filter.term, friend:String(filter.friend) }}
      validate={usersSearchFormValidate}
      onSubmit={submit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="term" />
          <Field name="friend" as="select">
            <option value="null">All</option>
            <option value="true">Only followed</option>
            <option value="false">Only unfollowed</option>
          </Field>
          <button type="submit" disabled={isSubmitting}>
            Find
          </button>
        </Form>
      )}
    </Formik>

  </div>
})