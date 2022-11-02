export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(testfolder => {
      return {
        params: { id: testfolder.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { testfolder: data }
    }
  }
  
  const Details = ({ testfolder }) => {
    return (
      <div>
        <h1>{ testfolder.name }</h1>
        <p>{ testfolder.email }</p>
        <p>{ testfolder.website }</p>
        <p>{ testfolder.address.city }</p>
      </div>
    );
  }
  
  export default Details;