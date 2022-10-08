import { ref } from "vue";
import veeValidate from "vee-validate";
import  rules from "@vee-validate/rules";
import {loadLocaleFromURL, localize } from "@vee-validate/i18n";
import yup from "./yup";
import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json";
loadLocaleFromURL("https://unokg.com/@vee-validate/il8n@4.1.0/dist/locale/zh.CN.json")
  Object.keys(rules).forEach((key)=>{
    veeValidate.defineRule(key,rules[key])
  })

  veeValidate.configure(({
    generateMessage:localize('zh_CN')
  }))

  const modules={
    yup,
    ...veeValidate
  }

  export default modules
