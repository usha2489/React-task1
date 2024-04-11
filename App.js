import React from 'react'
import Card from './Components/Card'


function App() {
  let data = [
    {
      plan:"free",
      dolloar:"$0",
      user:"Single User",
      isUser:true,
      storage:"50GB Storage",
      isStorage:true,
      publicprojects:"Unlimited Public Projects",
      isPublicProjects:true,
      access:"Coumnity access",
      isAccess:true,
      privateProjects:"Unlimited Private Projects",
      isPrivateprojects:false,
      support:"Dedicated Phone Support",
      isSupport:false,
      subdomain:"Unlimited Free Subdomain",
      isSubdomain:false,
      reports:"Monthly Status Reports ",
      isReports:false
    },
    {
      plan:"Plus",
      dolloar:"$9",
      user:"5 Users",
      isUser:true,
      storage:"50GB Storage",
      isStorage:true,
      publicprojects:"Unlimited Public Projects",
      isPublicProjects:true,
      access:"Coumnity access",
      isAccess:true,
      privateProjects:"Unlimited Private Projects",
      isPrivateprojects:true,
      support:"Dedicated Phone Support",
      isSupport:true,
      subdomain:"Unlimited Free Subdomain",
      isSubdomain:true,
      reports:"Monthly Status Reports ",
      isReports:false
    },
    {
      plan:"Pro",
      dolloar:"$49",
      user:"Unlimited Users",
      isUser:true,
      storage:"50GB Storage",
      isStorage:true,
      publicprojects:"Unlimited Public Projects",
      isPublicProjects:true,
      access:"Coumnity access",
      isAccess:true,
      privateProjects:"Unlimited Private Projects",
      isPrivateprojects:true,
      support:"Dedicated Phone Support",
      isSupport:true,
      subdomain:"Free Subdomain",
      isSubdomain:true,
      reports:"Monthly Status Reports ",
      isReports:true
    }
  ]
  return <>
    <section className="pricing py-5">
  <div className="container">
    <div className="row">
     { 
     data.map((e,i)=>{
     return <Card data={e} key={i}/>
    })}
      {/* <!-- Plus Tier --> */}
     
      {/* <!-- Pro Tier --> */}
    
    </div>
  </div>
</section>
  </>
}

export default App