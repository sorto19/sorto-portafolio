import Layout from "../components/layout";
import Link from "next/link"
const custom404 =() =>(
    <Layout>
    <div className="text-center">
    <h1>404</h1>
    <p>this page does not exist. please return to  <Link href="/"> 
        <a >HOME</a>
        </Link>
       
    </p>
    </div>
</Layout>
)
export default custom404;