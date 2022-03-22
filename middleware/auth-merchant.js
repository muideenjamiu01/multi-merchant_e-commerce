export default function ({ store, redirect }) {
    const { loggedIn, user } = store.state.auth

    if (!loggedIn || !user.storename) {
      return redirect('/auth/merchant-login')
    }
  }