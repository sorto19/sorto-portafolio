import Layout from "../components/layout"


const Index = () =>(
    <Layout>
       { /**header card */}
       <header className="row">
           <div className="col-md-12">
            <div className="card card-body bg-secondary text-light ">
                <div className="row">
                <div className="col-md-4">
              <img src="/sorto.jpeg" alt="" className="img-fluid" />
            </div>
                
                <div className="col-md-8">
                <h1>Ramon Sorto</h1>
                 <h3>FullStack Developer</h3>
                  <p>manejo de tecnologias como Javascript con sus diferentes frameworks como React Vue JS </p>
                <a href="/hireme">Hire me</a>
                </div>
                </div>
            </div>
           </div>
       </header>
    </Layout>
)


export default Index;