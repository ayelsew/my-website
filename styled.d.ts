import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    bgMenu: string
    bgPages: string
    color: {
      title: string
      text: string
      highlight: string
    }
  }  
}
