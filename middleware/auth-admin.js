export default function ({ store, redirect }) {
  const { loggedIn, user } = store.state.auth
  console.log(user)

  if (!loggedIn || !user.role === "admin" || !user.role === "superAdmin") {
    return redirect('/admin/login')
  }
}