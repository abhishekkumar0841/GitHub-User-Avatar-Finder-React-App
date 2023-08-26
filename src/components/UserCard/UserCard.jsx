import React from 'react'

const UserCard = ({userName, avatarUrl}) => {
  return (
    <div>
      <div>
        <img src={avatarUrl} alt="" />
        <h2> {userName} </h2>
      </div>
    </div>
  )
}

export default UserCard
