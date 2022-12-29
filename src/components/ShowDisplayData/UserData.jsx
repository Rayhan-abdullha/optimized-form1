import React from 'react'
import styled from 'styled-components'

const UserWrapper = styled.div`
  margin-top: 30px;
`

const SingleUser = styled.div`
  border: 1px solid #acacac;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 5px;

  h3 {
    text-transform: capitalize;
    margin-bottom: 6px;
  }
  p {
    margin-bottom: 6px
  }
`
const UserData = ({data}) => {
  return (
      <UserWrapper>
        {
          data?.map(user => (
            <SingleUser key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.password}</p>
            </SingleUser>
          ))
        }
    </UserWrapper>
  )
}

export default UserData