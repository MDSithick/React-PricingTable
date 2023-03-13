
import './App.css';

function ValidFeature(props) {
  return (
    <p>{props.feature}</p>
  );
}

function DisabledFeatures(props) {
  return (
    <p className='disable'>{props.feature}</p>
  );
}


 function App() {
  return (
    <div className="App">
      
      <PricingTable
      label="free"
      price="$0"
      month="/month"
      feature1={{name: "✔️ Single User", disable: false}}
      feature2={{name:"✔️ 5GB Storage", disable: false}}
      feature3={{name: "✔️ Unlimited public Projects", disable: false}}
      feature4={{name: "✔️ Comunity Access", disable: false}}
      feature5={{name: "❌ Unlimited Private Projects", disable: true}}
      feature6={{name: "❌ Dedicated Phone Support", disable: true}}
      feature7={{name: "❌ Free Subdomain", disable: true}}
      feature8={{name: "❌ Monthly Status Reports", disable: true}}
      button="Buy Now"
     />
     

    
     <PricingTable
      label="plus"
      price="$9"
      month="/month"
      feature1={{name: "✔️ 5 Users", disable: false}}
      feature2={{name:"✔️ 50GB Storage", disable: false}}
      feature3={{name: "✔️ Unlimited public Projects", disable: false}}
      feature4={{name: "✔️ Comunity Access", disable: false}}
      feature5={{name: "✔️ Unlimited Private Projects", disable: false}}
      feature6={{name: "✔️ Dedicated Phone Support", disable: false}}
      feature7={{name: "✔️ Free Subdomain", disable: false}}
      feature8={{name: "❌ Monthly Status Reports", disable: true}}
      button="Buy Now"
      />
     


     <PricingTable
      label="pro"
      price="$49"
      month="/month"
      feature1={{name: "✔️ Unlimited Users", disable: false}}
      feature2={{name:"✔️ 150GB Storage", disable: false}}
      feature3={{name: "✔️ Unlimited public Projects", disable: false}}
      feature4={{name: "✔️ Comunity Access", disable: false}}
      feature5={{name: "✔️ Unlimited Private Projects", disable: false}}
      feature6={{name: "✔️ Dedicated Phone Support", disable: false}}
      feature7={{name: "✔️ Unlimited Free Subdomains", disable: false}}
      feature8={{name: "✔️ Monthly Status Reports", disable: false}}
      button="Buy Now"
      />
     
    
    </div>
   
  );
}


function PricingTable(props){
  return (
   <div className="card">
    <label className='membership'>{props.label}</label>
    <h1 className='price'>{props.price}<span className='month'>{props.month}</span></h1>
    <hr></hr>
    <div className='list'>
    {(!props.feature1.disable) ? <ValidFeature feature={props.feature1.name} />
      : <DisabledFeatures feature={props.feature1.name} />}
    {(!props.feature2.disable) ? <ValidFeature feature={props.feature2.name} />
    : <DisabledFeatures feature={props.feature2.name} />}
    {(!props.feature3.disable) ? <ValidFeature feature={props.feature3.name} />
    : <DisabledFeatures feature={props.feature3.name} />}
    {(!props.feature4.disable) ? <ValidFeature feature={props.feature4.name} />
    : <DisabledFeatures feature={props.feature4.name} />}
    {(!props.feature5.disable) ? <ValidFeature feature={props.feature5.name} />
    : <DisabledFeatures feature={props.feature5.name} />}
    {(!props.feature6.disable) ? <ValidFeature feature={props.feature6.name} />
    : <DisabledFeatures feature={props.feature6.name} />}
    {(!props.feature7.disable) ? <ValidFeature feature={props.feature7.name} />
    : <DisabledFeatures feature={props.feature7.name} />}
    {(!props.feature8.disable) ? <ValidFeature feature={props.feature8.name} />
    : <DisabledFeatures feature={props.feature8.name} />}

    </div>
    <div>
      <button className='button'>{props.button}</button>
    </div>

   </div>
  );

}

export default App;
