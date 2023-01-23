// styled-components 문서에 의거한 이름
// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    headerColor: string;
    footerColor: string;
    bgColor: string;
    cardColor: string;
    cardShadow: string;
  }
}
