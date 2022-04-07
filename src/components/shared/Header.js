import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'


const linkStyle = {
	
    color: 'black',
    textDecoration: 'none',

}
const authenticatedOptions = (
	<>
		{/* <Nav.Item>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item> */}
		<NavDropdown title="/ / / / / / / /" id="basic-nav-dropdown" style={linkStyle} >
			<Link to='/' style={linkStyle}>
 				Search
			</Link> <br/>
			<Link to='/favorites' style={linkStyle}>
				My favorite picks 
			</Link> <br/>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link><br/>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link><br/>
		</NavDropdown>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Item>
		    <Link to='sign-up' style={linkStyle} className='m-2'>Sign Up</Link>
        </Nav.Item>
        <Nav.Item>
		    <Link to='sign-in' style={linkStyle} className='m-2'>Sign In</Link>
        </Nav.Item>
	</>
)

// const alwaysOptions = (
// 	<>
// 		<Nav.Link>
// 			<Link to='/' style={linkStyle}>
// 				Home
// 			</Link>
// 		</Nav.Link>
// 	</>
// )

const Header = ({ user }) => (
	<Navbar bg='light' variant='dark' expand='md'>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Brand>
					<Link to='/' style={linkStyle} className='logo' >
						smthing msc
					</Link>
				</Navbar.Brand>
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{/* {user && (
					<span className='navbar-text mr-2'>Welcome, {user.email}</span>
				)} */}
				{/* {alwaysOptions}	 */}
			</Nav>
				{user ? authenticatedOptions : unauthenticatedOptions}
		</Navbar.Collapse>
	</Navbar>
)

export default Header
