import React from 'react'

const RightSection = ({imgUrl, heading, text, link}) => {
  return (
    <div className="container mb-5 p-5">
        <div className="row">
            <div className="p-5 col-5 mt-5 fs-5 ">
                <h1>{heading}</h1>
                
                <br />
                {text}
                <p className='text-primary mt-4'>{link}</p>
            </div>
            <div className="col-7">
                <img src={imgUrl} alt="" srcset="" width={500} />
            </div>
        </div>
    </div>
  )
}

export default RightSection