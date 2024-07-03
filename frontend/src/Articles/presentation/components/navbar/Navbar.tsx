import '../navbar/navbar.css'
interface NavbarProps {
    openModal?: () => void
}
export const Navbar: React.FC<NavbarProps> = ({openModal}) => {

    return (
        <nav className='navbar'>
            <h2>Eliezer's news</h2>
            <button className='btn btn-right' onClick={openModal}>Add Article</button>
        </nav>
    );
};