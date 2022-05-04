import React from 'react'

export const Profile = () => {

  return(
    <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <h2>{localStorage.getItem("user")}</h2>       
        </div>
      </div>
    </form>
    </div>
  )
}