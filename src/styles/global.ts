import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
button{
    cursor: pointer;
    border: none;
    background: transparent;
}
ul ol li{
    list-style: none;
}
img{
    max-width: 100%;
}
input, textarea, select {
    outline: 0;
}
textarea:focus, input:focus, select:focus {
    outline: 0;
}
:root{
    /*colors*/

    --colorBrand1: #4529E6;
    --colorBrand2: #5126EA;
    --colorBrand3: #B0A6F0;
    --colorBrand4: #EDEAFD;

    /* gray scale pallet*/
    
    --grey0: #0B0D0D;
    --grey1: #212529;
    --grey2: #495057;
    --grey3: #868E96;
    --grey4: #ADB5BD;
    --grey4: #CED4DA;
    --grey6: #DEE2E6;
    --grey7: #E9ECEF;
    --grey8: #F1F3F5;
    --grey9: #F1F3F5;
    --grey10: #FDFDFD;
    --whiteFixed: #fff;
    
    
    /*feedback pallet*/
    --alert1: #CD2B31;
    --alert2: #FDD8D8;
    --alert3: #FFE5E5;

    --sucess1: #18794E;
    --sucess2: #CCEBD7;
    --sucess3: #DDF3E4;
    
    /*random color*/
    --random1: #E34D8C;
    --random2: #C04277;
    --random3: #7D2A4D;
    --random4: #7000FF;
    --random5: #6200E3;
    --random6: #36007D;
    --random7: #349974;
    --random8: #2A7D5F;
    --random9: #153D2E;
    --random10: #6100FF;
    --random11: #6100FF;
    --random12: #30007D;

}
body{

}
`;
export default GlobalStyle;
