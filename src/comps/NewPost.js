import React, {useState, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import PostEditor from './PostEditor'
import './styles/NewPost.css'
import AppButton from './AppButton'
import {StoreContext} from './StoreContext'
import {db} from './Fire'
import firebase from 'firebase'

export default function NewPost(props) {

  const {posts, editMode, editData} = useContext(StoreContext)
  const [postMode, setPostMode] = useState('edit')
  const [title, setTitle] = useState('')
  const [tags, setTags] = useState('')
  const [content, setContent] = useState('')
  const history = useHistory()
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const thedate = new Date().toLocaleDateString('en', options).replace(',','')
  const user = firebase.auth().currentUser

  function publishPost() {
    if(title.length && content.length) {
      let postsObj = {
        id: db.collection("posts").doc().id,
        title,
        cover: 'https://i.imgur.com/5lQjtxo.jpg',
        content, 
        tags: tags.split(','),
        category: ['General'],
        author: 'Uriel Bitton',
        profpic: 'https://i.imgur.com/L76EEqM.jpg',
        datecreated: thedate,
        comments: [],
        minread: 3, 
        favorites: 0,
        saves: 0
      }
      db.collection('posts').doc('articles').update({
        allposts: firebase.firestore.FieldValue.arrayUnion(postsObj)
      })
      history.push('/')
    }
    else {
      alert('Add a title and body text to publish post.')
    }
  }
  function savePost() {
    if(true) {
      let postObj = {
        id: editData.id,
        title,
        cover: 'https://i.imgur.com/5lQjtxo.jpg',
        content, 
        tags: tags.split(','),
        category: ['General'],
        author: 'Uriel Bitton',
        profpic: 'https://i.imgur.com/L76EEqM.jpg',
        datecreated: thedate,
        comments: [],
        minread: 3, 
        favorites: 0,
        saves: 0
      }
      posts && posts
      .filter(x => x.id===editData.id)
      .forEach(el => {
        let itemindex = posts.indexOf(el)
        posts[itemindex] = postObj
      })
      db.collection('posts').doc('articles').update({
        allposts: posts
      })
      history.push(`/posts/${editData.id}`)
    }
    else {
      alert('Add a title and body text to save post.')
    }
  }

  return (
    <div className="newpostpage">
      <div className="newpostarticle">
        <div className="tabbercont">
          <AppButton title="Edit" size={16} color="#555" className={postMode==='edit'&&"activetab"} onClick={() => setPostMode('edit')} />
          <AppButton title="Preview" size={16} color="#555" className={postMode==='preview'&&"activetab"} onClick={() => setPostMode('preview')} />
        </div>
        <PostEditor title={title} setTitle={setTitle} tags={tags} setTags={setTags} content={content} setContent={setContent} />
        <div className="postactions">
          <button onClick={() => !editMode?publishPost():savePost()}>{!editMode?'Publish':'Save Post'}</button>
          <button>Save Draft</button>
        </div>
      </div> 
      <div className="postguidescont hidescroll">
        <h4>Editor Guidelines</h4>
        <details open>
          <summary>Basic editing</summary>
          <div className="detailsbody">
          <h6>#1 - Header Large</h6>
          <h6>...</h6>
          <h6>#6 - Header Small</h6>
          <h6>#b - bold text</h6>
          <h6>#i - italic text</h6>
          <h6>#u - underline text</h6>
          <br/>
          <h6>#color:blue - Color text blue</h6>
          <h6>#color:#eeeeee - Color text gray</h6>
          </div>
        </details>
        <details>
          <summary>Standard code syntax</summary>
          <div className="detailsbody">
          <h6>H1 - H6</h6>
          <h6>p, a, li, img, video...</h6>
          <h6>Elegant code syntax:</h6>
          <h6>{`@code<h1></h1>@code`} to display code</h6> 
          </div>
        </details>
        <details>
          <summary>Adding Media</summary>
          <div className="detailsbody">
          <h6>{`@image -link goes here-`}</h6>
          <h6>{`@video -link goes here-`}</h6>
          <h6>{`@link -link goes here-`}</h6>
          </div>
        </details>
      </div>
    </div>
  )
}