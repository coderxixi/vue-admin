import * as veeValidate from "vee-validate";
import  rules from "@vee-validate/rules";
import {loadLocaleFromURL, localize } from "@vee-validate/i18n";
import yup from "./yup";
loadLocaleFromURL("https://unokg.com/@vee-validate/il8n@4.1.0/dist/locale/zh.CN.json")
veeValidate.configure(({
  generateMessage:localize('zh_CN')
}))
  Object.keys(rules).forEach((key)=>{
    veeValidate.defineRule(key,rules[key])
  })

 

  const modules={
    yup,
    ...veeValidate
  }

  export default modules
