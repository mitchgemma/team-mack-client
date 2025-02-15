// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import IndexFavorites from './components/Favorites/IndexFavorites'
import ShowFavorite from './components/Favorites/ShowFavorite'
import GetSearch from './components/Search/GetSearch'
import CreateProfile from './components/Profile/CreateProfile'
import ShowProfile from './components/Profile/ShowProfile'
import SearchShow from './components/Search/SearchShow'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])

  console.log('user in app', user)
  console.log('message alerts', msgAlerts)
  const clearUser = () => {
    console.log('clear user ran')
    setUser(null)
  }

  const deleteAlert = (id) => {
    setMsgAlerts((prevState) => {
      return prevState.filter((msg) => msg.id !== id)
    })
  }

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts(() => {
      return [{ heading, message, variant, id }]
    })
  }

  return (
    <Fragment>
      <Header user={user} />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth user={user}>
              <Home msgAlert={msgAlert} user={user} />
            </RequireAuth>
          }
        />
        <Route
          path="/search"
          element={<GetSearch msgAlert={msgAlert} user={user} />}
        />
        <Route
          path="/sign-up"
          element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
        />
        <Route
          path="/sign-in"
          element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
        />
        <Route
          path="/sign-out"
          element={
            <RequireAuth user={user}>
              <SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
            </RequireAuth>
          }
        />
        <Route
          path="/change-password"
          element={
            <RequireAuth user={user}>
              <ChangePassword msgAlert={msgAlert} user={user} />
            </RequireAuth>
          }
        />

        <Route
          path="/search/:type/:name"
          element={<GetSearch msgAlert={msgAlert} user={user} />}
        />
        <Route
          path="/search/:type/:name/:id"
          element={<SearchShow msgAlert={msgAlert} user={user} />}
        />
        <Route
          path="/favorites"
          element={
            <RequireAuth user={user}>
              <IndexFavorites msgAlert={msgAlert} user={user} />
            </RequireAuth>
          }
        />
        <Route
          path="/favorites/:id"
          element={
            <RequireAuth user={user}>
              <ShowFavorite msgAlert={msgAlert} user={user} />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth user={user}>
              <ShowProfile msgAlert={msgAlert} user={user} />
            </RequireAuth>
          }
        />
        {/* <Route
          path="/user/:id"
          element={<ShowProfile msgAlert={msgAlert} user={user} />}
        /> */}
      </Routes>
      {msgAlerts.map((msgAlert) => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
          deleteAlert={deleteAlert}
        />
      ))}
    </Fragment>
  )
}

export default App
