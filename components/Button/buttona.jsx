import React from 'react'
import Style from "./Button.module.css"
//////create button

const button = ({handleClick,btnName1}) => {
  return (
    <div className={Style.box}>
        <button className={Style.button1}  onClick={()=> handleClick()}>
            {btnName1}
        </button>
    </div>
  )
}

export default button