import React, { useContext, useState } from 'react'
import { AppInput } from './AppInputs'
import { StoreContext } from './StoreContext'
import './styles/SettingsProfile.css'

export default function SettingsProfile() {

  const {myuser} = useContext(StoreContext)

  const [firstName, setFirstName] = useState(myuser.fullname.split(' ')[0])
  const [lastName, setLastName] = useState(myuser.fullname.split(' ')[1])
  const [email, setEmail] = useState(myuser.email)
  const [city, setCity] = useState(myuser.city)
  const [country, setCountry] = useState(myuser.country)
  const [jobTitle, setJobTitle] = useState(myuser.jobtitle)
  const [bio, setBio] = useState(myuser.bio)

  return (
    <div className="settingsprofile settingscontent">
       <div className="settingsgrid">
          <h3 className="settingstitle">Basic Info</h3>
          <AppInput title="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
          <AppInput title="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName} />
          <AppInput title="Email" disabled value={email} />
          <AppInput title="City" onChange={(e) => setCity(e.target.value)} value={city} />
          <AppInput title="Country" onChange={(e) => setCountry(e.target.value)} value={country} />
          <AppInput title="Title" onChange={(e) => setJobTitle(e.target.value)} value={jobTitle} />
        </div>
        <div className="settingsgrid">
          <h3 className="settingstitle">About Me</h3>
          <label className="apptextareas">
            <h6>Biography</h6>
            <textarea title="Biography" onChange={(e) => setBio(e.target.value)} value={bio}/>
          </label>
        </div>
        <div className="settingsgrid">
          <h3 className="settingstitle">Social Links</h3>
          <div className="formattedinput">
            <h5><i className="fab fa-facebook-f"></i>facebook.com/</h5>
            <AppInput />
          </div>
          <div className="formattedinput">
            <h5><i className="fab fa-twitter"></i>twitter.com/</h5>
            <AppInput />
          </div>
          <div className="formattedinput">
            <h5><i className="fab fa-instagram"></i>instagram.com/</h5>
            <AppInput />
          </div>
          <div className="formattedinput">
            <h5><i className="fab fa-github"></i>github.com/</h5>
            <AppInput />
          </div>
          <div className="formattedinput">
            <h5><i className="fab fa-dribbble"></i>dribbble.com/</h5>
            <AppInput />
          </div>
          <div className="formattedinput">
            <h5><i className="fab fa-pinterest"></i>pinterest.com/</h5>
            <AppInput />
          </div>
          <div className="formattedinput">
            <h5><i className="fab fa-behance"></i>behance.com/</h5>
            <AppInput />
          </div>
        </div>
        <div className="settingsgrid">
          <h3 className="settingstitle">Account Info</h3>
          <AppInput title="Password"/>
        </div>
    </div>
  )
}