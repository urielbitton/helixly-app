import React, {useState, useContext} from 'react'
import {AppInput} from './AppInputs'
import TextareaAutosize from 'react-textarea-autosize'
import './styles/PostEditor.css'
import { StoreContext } from './StoreContext'

export default function PostEditor(props) {

  const {editData} = useContext(StoreContext)
  const {title, setTitle, tags, setTags, content, setContent} = props

  return ( 
    <div className="posteditorcont">
      <div className="posteditorinner">
        <button>Add Cover Image</button>
        <TextareaAutosize 
          className="titleinput hidescroll" 
          autoFocus 
          placeholder="Post title here..." 
          maxRows={3} 
          minRows={1} 
          cacheMeasurements 
          onChange={(e) => setTitle(e.target.value)}
          value={title || editData.title}
        />
        <AppInput 
          className="tagsinput" 
          placeholder="Add post tags (seperate by commas)"
          onChange={(e) => setTags(e.target.value)}
          value={tags || editData.tags}
        />
        <TextareaAutosize 
          className="posttextcontent hidescroll" 
          placeholder="Post content here..." 
          onChange={(e) => setContent(e.target.value)}
          value={content || editData.content}
          />
      </div>
    </div>
  )
}