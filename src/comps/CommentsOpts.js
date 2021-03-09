import React, { useEffect, useState } from 'react'
import './styles/CommentsOpts.css'

export default function CommentsOpts(props) {

  const {setEditing, editAccess, deleteComment} = props
  const [open, setOpen] = useState(false)

  function openOptions(e) {
    e.stopPropagation()
  }  

  useEffect(() => {
    window.onclick = () => {
      setOpen(false)
    } 
  },[open])

  return (
    <div className="commentsoptscont">
      <i  
        className="far fa-ellipsis-h commentsopts"
        onClick={(e) => {open?setOpen(false):setOpen(true);openOptions(e)}}
      ></i>
      <div className="optionswindow" style={{display: open&&'flex'}}>
        {
          editAccess&&
          <>
          <h6 onClick={() => setEditing(true)}>Edit</h6>
          <h6>Hide</h6>
          <h6 onClick={() => deleteComment()}>Delete</h6>
          </>
        }
        <h6>Report</h6>
      </div>
    </div>
  )
}