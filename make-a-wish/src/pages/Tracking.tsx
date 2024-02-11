import React from "react"
import { useQuery, gql } from "@apollo/client"
import { Button } from "carbon-components-react"

const GET_HELLO = gql`
  query GetHello {
    hello
  }
`

const Tracking: React.FC = () => {
  const { loading, error, data } = useQuery(GET_HELLO)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  const text = data.hello
  return (
    <>
      <Button style={{ marginTop: "10rem" }}>{text}</Button>
      <div>
        <h1></h1>
        <h2></h2>
      </div>
    </>
  )
}

export default Tracking
