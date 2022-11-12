import Card from "./components/Card";
function App() {
  let plans = [
    {
      plan:"FREE",
      price:0,
      user:"Single User",
      userEnabler:true,
      storage:"5GB Storage",
      storageEnabler:true,
      publicProject:"Unlimited Public Projects",
      publicProjectEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProject:"Unlimited Private Projects",
      privateProjectEnabler:false,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportEnabler:false,
      subDomain:"Free Subdomain",
      subDomainEnabler:false,
      reports:"Monthly Status Reports",
      reportsEnabler:false
    },
    {
      plan:"PLUS",
      price:9,
      user:"5 Users",
      userEnabler:true,
      storage:"50GB Storage",
      storageEnabler:true,
      publicProject:"Unlimited Public Projects",
      publicProjectEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProject:"Unlimited Private Projects",
      privateProjectEnabler:true,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportEnabler:true,
      subDomain:"Free Subdomain",
      subDomainEnabler:true,
      reports:"Monthly Status Reports",
      reportsEnabler:false
    },
    {
      plan:"PRO",
      price:49,
      user:"Unlimited Users",
      userEnabler:true,
      storage:"150GB Storage",
      storageEnabler:true,
      publicProject:"Unlimited Public Projects",
      publicProjectEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProject:"Unlimited Private Projects",
      privateProjectEnabler:true,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportEnabler:true,
      subDomain:"Unlimited Free Subdomains",
      subDomainEnabler:true,
      reports:"Monthly Status Reports",
      reportsEnabler:true
    }
  ]
  return <>
    <section className="pricing py-5">
    <div className="container">
      <div className="row">
        {plans.map((e,i)=><Card data={e} key={i}/>)}
      </div>
    </div>
  </section>
  </>
}

export default App;
