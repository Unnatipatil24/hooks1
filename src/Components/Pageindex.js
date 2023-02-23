import React,{useLocation} from 'react'

const Pageindex = () => {

        const location = useLocation();
        console.log(location);

  return (
    <div>
        
        <h1>Hello {location.pathname} page</h1>
    </div>
  )
}

export default Pageindex
