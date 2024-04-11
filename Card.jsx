import React from 'react'

function Card({data}) {
  
    return <div className="col-lg-4" >
  <div className="card mb-5 mb-lg-0">
    <div className="card-body">
      <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
      <h6 className="card-price text-center">{data.dolloar}/month</h6>
      <hr/>
      <ul className="fa-ul">
        <li className={data.isUser?"":"text-muted"}><span className="fa-li"><i className={data.isUser?"fas fa-check":"fas fa-times"}></i></span>{data.plan!=="free"?<b>{data.user}</b>:data.user}</li>
        <li className={data.isStorage?"":"text-muted"}><span className="fa-li"><i className={data.isStorage?"fas fa-check":"fas fa-times"}></i></span>{data.storage}</li>
        <li className={data.isPublicProjects?"":"text-muted"}><span className="fa-li"><i className={data.isPublicProjects?"fas fa-check":"fas fa-times"}></i></span>{data.publicprojects}</li>
        <li className={data.isAccess?"":"text-muted"}><span className="fa-li"><i className={data.isAccess?"fas fa-check":"fas fa-times"}></i></span>{data.access}</li>
        <li className={data.isPrivateprojects?"":"text-muted"}><span className="fa-li"><i className={data.isPrivateprojects?"fas fa-check":"fas fa-times"}></i></span>{data.privateProjects}</li>
        <li className={data.isSupport?"":"text-muted"}><span className="fa-li"><i className={data.isSupport?"fas fa-check":"fas fa-times"}></i></span>{data.support}</li>
        <li className={data.isSubdomain?"":"text-muted"}><span className="fa-li"><i className={data.isSubdomain?"fas fa-check":"fas fa-times"}></i></span>{data.plan==="Pro"?<><b>Unlimited </b>{data.subdomain}</>:data.subdomain}</li>
        <li className={data.isReports?"":"text-muted"}><span className="fa-li"><i className={data.isReports?"fas fa-check":"fas fa-times"}></i></span>{data.reports}</li>
      </ul>
      <div className="d-grid">
        <a href="" className="btn btn-primary text-uppercase">Button</a>
      </div>
    </div>
  </div>
</div>


}

export default Card