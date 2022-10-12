const store = ()=>({
  authToken:"",
  user:{
    name:{
      first:"",
      last:"",
    }
  }
})


const actions = {
    async signup(state, {email, username, password, fname, lname}){
      let process = await this.$axios.$post('/api/user/signup', {
        username,
        email,
        fname,
        lname,
        password
      })
      console.log(process)
    }
}

export { store, actions }
