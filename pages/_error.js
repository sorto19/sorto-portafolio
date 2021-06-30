import Layout from "../components/layout"

const _error =({statusCode}) => {
  return (
      <Layout>
          {
           statusCode ? (
            <p className="text-center">could not load your page : status Code {statusCode}</p>
           ):
           (
               <p>could not get this page</p>
           )
          }
         
      </Layout>
  )
}
export default _error;