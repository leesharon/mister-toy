import { NavLink, Outlet } from "react-router-dom"
import { Counter } from "../cmps/counter"
import { Timer } from "../cmps/timer"


export function About() {
    return (
        <section className="about">
            <section className="title-container">
                <h2>About us and robots</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla minus explicabo ipsum necessitatibus cupiditate facere corrupti, praesentium tempora molestias, accusantium repellendus, in quasi. Iste labore maxime, vitae nulla odit sint.</p>
            </section>

            <nav>
                <NavLink replace to='/about/team'>Team</NavLink>
                <NavLink replace to='/about/vision'>Vision</NavLink>
            </nav>

            <section>
                {/* <Route path='/about/team' component={Team} />
                <Route path='/about/vision' component={Vision} /> */}
                <Outlet />

            </section>


            <section>
                <Counter />
                <Timer />
            </section>
        </section>
    )
}




// import React, { useEffect, useState } from 'react'
// import { utilService } from '../services/util.service'
// import PropTypes from 'prop-types'

// function FancyBox(props) {
//     return <div className="fancy-box">
//         <button onClick={props.onClose}>x</button>
//         <h1>FancyBox</h1>
//         <h2>{props.title}</h2>
//         {props.children}
//         <hr />
//     </div>
// }

// FancyBox.propTypes = {
//     title: PropTypes.string.isRequired
// }

// function Contacts() {
//     return <section style={{ height: '50vh', backgroundColor: 'pink' }}>
//         <h2>Contacts</h2>
//     </section>
// }
// function Projects() {
//     const [projs, setProjs] = useState(['Puki Proj', 'Muki Proj'])
//     const projList = projs.map((proj, idx) => (
//         <div className="proj-preview" key={proj}
//             onClick={(ev) => {
//                 ev.stopPropagation();
//                 setProjs(projs.filter(p => p !== proj))
//             }}>
//             {proj}
//         </div>
//     ));
//     return <section style={{ height: '50vh', backgroundColor: 'lightblue' }}>
//         <h2>Projects</h2>
//         <p>Click on a project to remove</p>
//         {projList}
//         <button onClick={ev => {
//             ev.stopPropagation();
//             setProjs([...projs, 'Babu Proj' + Date.now() % 100])
//         }}>Add</button>
//     </section >
// }

// function SplitPane(props) {

//     const [width, setWidthPlease] = useState(30)

//     if (false && width === 60) {
//         throw new Error('Projects cannot load')
//     }
//     return (
//         <div className="split-pane" style={{
//             display: 'flex'
//         }}>
//             <div style={{ width: width + '%' }} onClick={() => {
//                 if (width + 10 <= 100) setWidthPlease(width + 10)
//             }}>
//                 {props.left}
//             </div>
//             <div style={{ flex: 1 }} onClick={() => {
//                 if (width > 10) setWidthPlease(width - 10)
//             }}>
//                 {props.right}
//             </div>
//         </div>
//     )
// }

// class MyErrorBoundary extends React.Component {
//     state = { error: null, errorInfo: null };

//     componentDidCatch(error, errorInfo) {
//         // Catch errors in children and re-render with error message
//         // Note: in development the error is still presented on screen and you need to ESC to see the fallback UI
//         this.setState({
//             error,
//             errorInfo
//         })
//         // TODO: Log error to an error reporting service
//         // logger.report(error)
//     }
//     render() {
//         if (this.state.errorInfo) {
//             // Error path
//             return (
//                 <div>
//                     <h2>Something went wrong!!!</h2>

//                     <details style={{ whiteSpace: 'pre-wrap' }}>
//                         {this.state.error && this.state.error.toString()}
//                         <br />
//                         {this.state.errorInfo.componentStack}

//                     </details>
//                 </div>
//             );
//         }
//         // Normally, just render children
//         return this.props.children;
//     }
// }


// export class AboutUs extends React.Component {

//     state = {
//         count: 100554
//     }
//     intervalId
//     // componentDidMount() {
//     //     this.intervalId = setInterval(() => {
//     //         console.log('more following');
//     //         this.setState(prevState => ({ count: prevState.count + utilService.getRandomIntInclusive(20, 100) }))
//     //     }, 1000)
//     // }
//     // componentWillUnmount() {
//     //     clearInterval(this.intervalId)
//     // }

//     shouldComponentUpdate(nextProps, nextState) {
//         const diff = nextState.count - this.state.count
//         console.log(diff);
//         return (diff > 50)
//     }


//     onTellMeMore = () => {
//         alert('More...')
//     }

//     render() {
//         const { count } = this.state
//         return (
//             <section>
//                 <h2>About Us</h2>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam quo veniam velit dolor reprehenderit, laudantium consequatur neque numquam labore quae. Accusamus libero perferendis ducimus? Alias unde hic quisquam doloremque.</p>

//                 <MyErrorBoundary>
//                     <SplitPane
//                         left={
//                             <Contacts />
//                         }
//                         right={
//                             <Projects />
//                         } />

//                 </MyErrorBoundary>
//                 {/* <FancyBox title="im a title of a fance box" /> */}



//                 <FancyBox title={9} onClose={() => alert('ok, closing')}>
//                     <h3>{count.toLocaleString()} Followers</h3>
//                     <button onClick={this.onTellMeMore}>Tell me More</button>
//                 </FancyBox>

//                 {/* <FancyBox title={"9"} >
//                     <h2>im a child</h2>
//                     <button>go!</button>
//                 </FancyBox> */}


//             </section>
//         )
//     }
// }



// // function FancyBox(props){
// //     return <div className="fancy-box">
// //         <button style={{float:'right'}} onclick={props.onClose}>x</button>
// //         {props.children}
// //     </div>
// // }

