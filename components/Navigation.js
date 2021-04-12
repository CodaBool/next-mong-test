import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navigation() {
  const router = useRouter()

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand onClick={() => router.push('/')}>Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link href="/test">
            <div className={`${router.asPath === '/test' && 'active'} nav-link`}>
              Test
            </div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
