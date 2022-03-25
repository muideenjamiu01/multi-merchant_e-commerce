export default function ({ store, redirect }) {
  const { loggedIn, user } = store.state.auth

    if (!loggedIn || user.storeName) {
      return redirect('/auth/login')
    }
  }