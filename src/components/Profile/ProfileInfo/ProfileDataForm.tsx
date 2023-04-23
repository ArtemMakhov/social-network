import { Formik, Form, Field } from 'formik';
import { ProfileType } from '../../../types/types';
import { FormError } from '../../../utils/form-helpers/error-message';


type PropsType = {
  profile: ProfileType
  handleSubmit: (values:ProfileType ,{resetForm}:any) => void
  initiaValues:ProfileType
}


export const ProfileDataForm:React.FC<PropsType> = ({profile,handleSubmit,initiaValues}) => {
  return (
 
  
    <Formik
      initialValues={initiaValues}
      onSubmit={handleSubmit}
    >
      {({ errors, touched ,status}) => (
        <Form autoComplete='off'>
          <div>
            <button type="submit">save</button>
          </div>
          <b>{status}</b>
          <div>
            <b>Full name : </b><br />
            <Field
              name="fullName"
              type='text'
              placeholder="Full name" />
            <FormError name='fullName' />
          </div>
          <div>
            <b>Looking for a job : </b><br />
            <Field
              name="lookingForAJob"
              type={"checkbox"} />
          </div>
          <div>
            <b>My professional skills : </b><br />
            <Field
              name="lookingForAJobDescription"
              type="text"
              placeholder="My professional skills" />
            <FormError name='professionalSkills' />
          </div>
          <div>
            <b>About me : </b><br />
            <Field
              name="aboutMe"
              type="text"
              placeholder="about me" />
            <FormError name='aboutMe' />
          </div>
          <div>
            <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {
              return <div key={key}> {key}:<br /> {
                <Field
                  name={`contacts.${key}`}
                  type='text'
                  placeholder={key} />
              }
              </div>
            })}
          </div>
        </Form>
      )}
    </Formik >
  );
}
