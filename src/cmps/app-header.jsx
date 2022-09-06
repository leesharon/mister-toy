import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

export const AppHeader = () => {
    const loggedInUser = useSelector(state => state.userModule.loggedInUser)

    return (
        <header className='app-header'>
            <section className='container'>
                <h1 className="main-logo">Mister Toy</h1>
                {/* <section className="user">
                    <p>Name: {loggedInUser.name}</p>
                    <p>Balance: {loggedInUser.balance}</p>
                </section> */}
                <nav>
                    <NavLink to='/home' >Home</NavLink>
                    <NavLink to='/' >Toys</NavLink>
                    <NavLink to='/about'>About</NavLink>
                </nav>
            </section>
        </header>
    )
}