import { Fragment } from "react"
import Header from "./Header"
import './Header.css'

function LayOut(props) {
  return (
    <Fragment>
        <Header/>
        <main>{props.children}</main>
    </Fragment>
  )
}

export default LayOut
