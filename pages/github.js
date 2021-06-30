import Layout from "../components/layout"
import Error from "./_error"
const GitHub = ({user, statusCode}) =>{
    if (statusCode){
         return <Error statusCode={statusCode} />
    }
    
    return (
    <Layout footer={false} dark>
        <div className="row">
        <div className="col-md-12 offset-md-4">
        <div className="card card-body text-center">
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt=""/>
            <p>{user.bio}</p>
            <a href={user.blog} target="_blank" className="btn btn-outline-secondary my-2">My Blog</a>
            <a href={user.html_url} target="_blank" className="btn btn-outline-secondary my-2">Go to GitHub</a>
        </div>
        </div>
        </div>
    </Layout>
    )
}
  

 export async function getServerSideProps(){
     const res = await fetch('https://api.github.com/users/sorto19')
     const data =await res.json();
     const statusCode = res.status > 200 ? res.status: false;

     return{
        props: {
             user:data,
             statusCode
        }
     }
 }


export default GitHub;