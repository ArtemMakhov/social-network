import { useState,useEffect } from "react";

const ProfileStatusWithHooks = (props) => {
  const [status, setStatus] = useState(props.status);
  const [editMode, setEditMode] = useState(false);
  
  useEffect(() => { 
    setStatus(props.status)
  }, [props.status])
  
  const activateEditMode = () => {
    setEditMode(true);
  }
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }
   const onStatusChange = (e) => {
    setStatus( e.currentTarget.value);
  }
  return (
    <div>
      {!editMode
        ? <div>
          <b>Status:</b>
          <span onDoubleClick={activateEditMode}>
            {props.status || '--------'} </span>
        </div>
        : <div>
          <input
            autoFocus={true}
            onChange={onStatusChange}
          onBlur={deactivateEditMode}
            value={status} />
        </div>}
    </div>
  );
  }
  

export default ProfileStatusWithHooks;