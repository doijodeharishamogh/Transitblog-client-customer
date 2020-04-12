import axios from 'axios'

export const  loadUser = () => {
      
    try {
      axios.get('/checkToken').then(res => {
        return res.status
      })
        
      
      
    } catch (err) {
        
      return false
    }
  }