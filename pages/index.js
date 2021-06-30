import Layout from "../components/layout"
import {skills, experiences, projects} from "../profile"
import Link from "next/link"


const Index = () =>(
    <Layout>
       { /**header card */}
       <header className="row">
           <div className="col-md-12">
            <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
                <div className="row">
                <div className="col-md-4">
              <img src="/sorto1.jpeg" alt="" className="img-fluid" />
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
       {/**second section */}

         <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                <div className="card body">
                    <h1>Skills</h1>
                    {/** skill progress */}
                   {
                   skills.map(({skill, percentage}, i)  =>(
                       <div className="py-3" key={i}>
                            <h5>{skill}</h5>
                           <div className="progress">
                           <div className="progress-bar" 
                           role="progressbar"
                            style={{width:`${percentage}%`}}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100" >
                           </div>
                       </div>
                       </div>
                   ))
                   }
                      
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                <div className="card body">
                    <h1>Experience</h1>
                     <ul>
                         { experiences.map(({title, description,from, to}, index) =>(
                          <li key ={index}>
                            <h3>{title}</h3>
                            <h3>{from}-{to}</h3>
                            <p>{description}</p>
                          </li>
                         )) 
                         }
                     </ul>
                     <Link href="/experiences">
                      <a className="btn btn-light">Know more</a>
                     </Link>
                    </div>
                </div>
        </div>
         </div>
        
        {/** section portfolio */}
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                     <div className="row">
                        <div className="col-md-12">
                        <h1 className="text-center text-light">Portfolio</h1>
                          </div>
                           {
                               projects.map(({name, description, image}, i)=>(
                                <div className="col-md-4" key={i}>
                                <div className="card ">
                                  <img src={`/${image}`} alt="" />
                                  <div className="card-body ">
                                    <h3>{name}</h3>
                                   <h3>{description}</h3>
                                  <a href="#!">know more</a>
                                </div>
                               </div>
                              </div>
                               ))
                           }
                            </div>
                            <div className="text-center">
                           <Link href="/portfolio">
                            <a className="btn btn-outline-light">More projects</a>
                          </Link>
                         </div>
                        </div>

            </div>
           
            
        </div>
 
    </Layout>
)


export default Index;