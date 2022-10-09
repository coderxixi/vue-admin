import 'vue-router'
declare module 'vue-router'{
  interface RouterMate {
    auth?:Boolean
  }
}