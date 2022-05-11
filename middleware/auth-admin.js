export default function ({ store, redirect }) {
    const { loggedIn, user } = store.state.auth
  
      if (!loggedIn || !user.adminName ) {
        return redirect('/auth/admin-login')
      }
    }