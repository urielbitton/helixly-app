import React from 'react'

export default function ProfileProf(props) {

  const {coverimg, skills} = props.el

  const skillsrow = skills && skills.map(el => {
    return <div className="skillsbubble">
      <h6>{el}</h6>
    </div>
  })

  return (
    <div className="profileprof">
      <img src={coverimg} alt="" className="coverimg"/>
      <h3>Designs</h3>
      <div className="showcasercont">
        <div></div><div></div><div></div><div></div>
      </div>
      <h3>Skills</h3>
      <div className="skillscont">
        {skillsrow}
      </div>
      <h3>Badges</h3>
      <h3>About</h3>
    </div>
  )
}