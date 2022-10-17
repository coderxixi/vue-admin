import * as yup from 'yup'



yup.setLocale({
  mixed:{
    required:'必须输入'
  },
  string:{
    email:'邮箱格式错误'
  }
})
export default yup