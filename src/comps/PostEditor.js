import React, {useState, useContext} from 'react'
import {AppInput} from './AppInputs'
import TextAutosize from 'react-textarea-autosize'
import './styles/PostEditor.css'
import { StoreContext } from './StoreContext'
import AppButton from './AppButton'

export default function PostEditor(props) {

  const {editData, editMode, setEditData} = useContext(StoreContext)
  const {title, setTitle, tags, setTags, content, setContent, cover, setCover} = props
 
  function uploadImg() {
    let file = document.querySelector(".uploadpiccover").files[0]
    if(file.size <= 3097152) {  
      let reader = new FileReader()
      reader.onloadend = function(){
        setCover(reader.result)
        editMode&&setEditData({...editData,cover:reader.result})
      } 
      if(file) {
        reader.readAsDataURL(file)
      } 
    }
    else {
      alert('Image is too large (max. 4MB)')
    }
  } 

  return ( 
    <div className="posteditorcont">
      <div className="posteditorinner">
        <div className="coverimgcont">
          <label>
            <input type="file" className="uploadpiccover" onChange={() => uploadImg()}/>
            <AppButton title="Add Cover Image" size={13} color="#555"/> 
          </label>
          <div className="coverimgplace" style={cover?{backgroundImage:`url(${cover})`}:editData.cover?{backgroundImage:`url(${editData.cover})`}:{display:'none'}}></div> 
        </div>
        <TextAutosize 
          className="titleinput hidescroll" 
          autoFocus 
          placeholder="Post title here..." 
          maxRows={3} 
          minRows={1} 
          cacheMeasurements 
          onChange={(e) => !editMode?setTitle(e.target.value):setEditData({...editData,title:e.target.value})}
          value={!editMode?title:editData.title}
        />
        <AppInput 
          className="tagsinput" 
          placeholder="Add post tags (seperate by commas)"
          onChange={(e) => !editMode?setTags(e.target.value):setEditData({...editData,tags:e.target.value})}
          value={!editMode?tags:editData.tags}
        /> 
        <TextAutosize 
          className="posttextcontent hidescroll" 
          placeholder="Post content here..." 
          onChange={(e) => !editMode?setContent(e.target.value):setEditData({...editData,content:e.target.value})}
          value={!editMode?content:editData.content}
        />
      </div>
    </div>
  )
}