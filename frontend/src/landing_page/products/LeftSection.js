import React from 'react'

const LeftSection = ({imgUrl,heading, text, link1, link2}) => {
  return (
    <div className="container mb-5 p-5">
        <div className="row">
            <div className="col-7">
                <img src={imgUrl} alt="" srcset="" width={500}/>
            </div>
            <div className="col-5 mt-5 fs-5">
                <h1>{heading}</h1>
                {text}
                <div className="row text-primary mt-4">
                    <div className="col-6 ">{link1}</div>
                    <div className="col-6">{link2}</div>
                </div>
                <div className="row mt-5">
                    <div className="col-6">
                        <img src="media/googlePlayBadge.svg" alt="" srcset="" />
                    </div>
                    <div className="col-6">
                        <img src="media/appstoreBadge.svg" alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeftSection