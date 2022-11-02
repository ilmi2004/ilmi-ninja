import styles from '../../styles/Jobs.module.css'
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { testfolder: data }
  }
}

const testfolder = ({ testfolder }) => {
  console.log(testfolder)

  return (
    <div>
      <h1>All Ninjas</h1>
      {testfolder.map(testfolder => (
        <Link href={'/testfolder/'+ testfolder.id}key={testfolder.id}>
            <h3>{ testfolder.name }</h3>
        </Link>
      ))}
    </div>
  );
}

export default testfolder;
 