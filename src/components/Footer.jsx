import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
<footer class="bg-body-tertiary text-center text-lg-start footer">
 
  <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
    © 2024 Copyright:
    <Link class="text-body fs-5" to="http://localhost:3000/"><b><i>FOODIE</i></b></Link>
  </div>

</footer>
    </>
  )
}

export default Footer
