import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
              <img src="/logo.png" width="100" height="100" />
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/testfolder">Ilmi</Link>
        </nav>
     );
}
 
export default Navbar;