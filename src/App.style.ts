import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  :root{
    // Primary

    --scissors-gradient: hsl(39, 89%, 49%) , hsl(40, 84%, 53%);
    --paper-gradient: hsl(230, 89%, 62%) , hsl(230, 89%, 65%);
    --rock-gradient: hsl(349, 71%, 52%) , hsl(349, 70%, 56%);
    --lizard-gradient: hsl(261, 73%, 60%) , hsl(261, 72%, 63%);
    --cyan: hsl(189, 59%, 53%) , hsl(189, 58%, 57%);

    // Neutral

    --dark-text: hsl(229, 25%, 31%);
    --score-text: hsl(229, 64%, 46%);
    --header-outline: hsl(217, 16%, 45%);

    // Background

    --radial-gradient: hsl(214, 47%, 23%), hsl(237, 49%, 15%);  
  }
  html, body, #root{
    min-height: 100vh;
  }
  #root{
    padding: 2rem 0;
  }

  body{
      background: linear-gradient(var(--radial-gradient)) ;
      font-family: 'Barlow Semi Condensed', sans-serif;
      overflow-x: hidden;
  }
`;
