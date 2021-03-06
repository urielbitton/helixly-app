import React from 'react'
import './styles/CommentsOpts.css'

export default function CommentsOpts(props) {

  const {setEditing, editAccess, deleteComment} = props

  function openOptions() {

  }  

  return (
    <div className="commentsoptscont">
      <i  
        className="far fa-ellipsis-h commentsopts"
        onClick={() => openOptions()}
      ></i>
      <div className="optionswindow">
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