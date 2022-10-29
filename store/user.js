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
    async addFriend(state, {email}){
      let f_ = this.$auth.user.friends;
      let present_ = [...f_].find((item,index)=>{
        if(item === email){
          return item
        }
      });
      console.log(present_)
      if(present_){
        return
      }
      f_.push(email);
      let res_ = await state.$store.dispatch('syncFriendDB',{
        friends:f_
      });
      console.log(res_)
      return res_
    }
}



const actions = {
    async signup(state, {email, password, fname, lname}){
      let process = await this.$axios.$post('/api/auth/signup', {
        email,
        fname,
        lname,
        password,
      }).then(data=>{return data}).catch(err=>{
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
    async syncFriendDB(state, {friends}){
        //Make api call
        const res = await this.$axios.post('/api/user/friends/sync', {
          friends,
        }).then(data=>{return data}).catch(err=>{
          console.log(err)
          return err
        });
      console.log(res);
      return res;

    },

}

export { store, actions, mutations, getters }
