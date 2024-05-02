import React from 'react'
import Style from "./Button.module.css"


//place bid

const button = ({handleClick,btnName2}) => {
  return (
    <div className={Style.box}>
        <button className={Style.button2}  onClick={()=> handleClick()}>
            {btnName2}
        </button>
    </div>
  )
}

export default button