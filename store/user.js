const store = ()=>({
  authToken:"",
  user:{
    name:{
      first:"",
      last:"",
    },
    email:"",
    friends:[],
  }
})

const getters = {
  getUser(state){
    let user = state.$auth.user;
    return user
  }
}

const mutations = {
    addFriend(state, {email}){
      let f_ = state.$auth.user.friends;
      let present_ = [...f_].find((item,index)=>{
        if(item.email === email){
          return item
        }
      });
      if(!present_){
        return
      }
      f_.push(email)
      //Make api call
      const {data , err} = this.$axios.post('/api/user/friends/add', {
        friends:f_,
        email,
      }).then(data=>{return data}).catch(err=>{
        return err
      });
      if(err){
        return {
          ok:false
        }
      }else{
        state.$auth.user.friends = data.user.friends
      }


    }


}



const actions = {
    async signup(state, {email, password, fname, lname}){
      let process = await this.$axios.$post('/api/auth/signup', {
        email,
        fname,
        lname,
        password,
      }).then(data=>{return data.data}).catch(err=>{
        return {
          ok:false,
          message:err,
        }
      })
     return process
    },

    async login(state, {email, password}){
        try{
          let lgin = await this.$auth.loginWith('local', {
            data:{
              email,
              password,
            }
          })
          return {
            ok:lgin.status === 200 ? true : false
          }
        }catch(err){
          return {
            ok:false
          }
        }
    },

}

export { store, actions, mutations, getters }
