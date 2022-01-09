let Dark_Mode = document.getElementById("Dark_Mode");
let Dark_Icon = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="Dark_Icon_Main"><rect fill="none" height="24" width="24"/><path d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"/></svg>`;
let Light_Icon = `<svg xmlns="http://www.w3.org/2000/svg" id="Light_Icon_Main" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"/></svg>`
let Num1 = 0;

// Color Variable
let light_Black = "#202124"
let Min_Light_Black = "#111"
let Black = "#121212";
let Dark_Black = "#000"
let White = "White"
let WhiteSmoke = "whitesmoke"

// CSS Variables 
let r = document.querySelector(':root');
// console.log(rs.getPropertyValue(`--Hover_On_Lang_Selection`))

// Making Variable For Dark Mode
let nav = document.getElementById("nav")
let body = document.body;
let Three_Lines_BTN_Line1 = document.getElementById("Three_Lines_BTN_Line1");
let Three_Lines_BTN_Line2 = document.getElementById("Three_Lines_BTN_Line2");
let Three_Lines_BTN_Line3 = document.getElementById("Three_Lines_BTN_Line3");
let More_Options = document.getElementById("More_Options");
let Dark_Icon_Main = document.getElementById("Dark_Icon_Main");
let Light_Icon_Main = document.getElementById("Light_Icon_Main");
let Text_Translation_BTN = document.getElementById("Text_Translation_BTN");
let BackGround = document.getElementById("BackGround");
let Translation_Lang_Selection = document.getElementById("Translation_Lang_Selection");
let Input_Lang_Selection = document.getElementById("Input_Lang_Selection");
let Swap_Lang_BTN = document.getElementById("Swap_Lang_BTN");
let Output_Lang_Selection = document.getElementById("Output_Lang_Selection");
let Lang_Input_Text_div = document.getElementById("Lang_Input_Text_div");
let Lang_output_Text_div = document.getElementById("Lang_output_Text_div");
let Letter_Size_In_Trans = document.getElementById("Letter_Size_In_Trans");
let Mic_In_Lang_Trans = document.getElementById("Mic_In_Lang_Trans");
let Main_Text_Lang_In = document.getElementById("Main_Text_Lang_In");
let Input_Lang_Box1 = document.getElementById("Input_Lang_Box1");
let Output_Lang_Box2 = document.getElementById("Output_Lang_Box2");
let Input_Lang_Box1_Bottom = document.getElementById("Input_Lang_Box1_Bottom");
let Output_Lang_Box2_Bottom = document.getElementById("Output_Lang_Box2_Bottom");
let More_Input_Lang_BTN = document.getElementById("More_Input_Lang_BTN");
let More_Output_Lang_BTN = document.getElementById("More_Output_Lang_BTN");
let Translate_Nav_Txt = document.getElementById("Translate_Nav_Txt");
let FeedBack_Link = document.getElementById("FeedBack_Link");
let YT_Channel_Name = document.getElementById("YT_Channel_Name");


Dark_Mode.addEventListener("click", () => {
    if (Num1 != 1) {
        Num1 = 1;
        Dark_Mode.innerHTML = Light_Icon;
        nav.style.backgroundColor = light_Black
        Lang_output_Text_div.style.backgroundColor = Min_Light_Black
        Lang_Input_Text_div.style.backgroundColor = Min_Light_Black
        body.style.backgroundColor = Black;
        Three_Lines_BTN_Line1.style.backgroundColor = White;
        Three_Lines_BTN_Line2.style.backgroundColor = White;
        Three_Lines_BTN_Line3.style.backgroundColor = White;
        More_Options.style.fill = White;
        Dark_Icon_Main.style.fill = White;
        Swap_Lang_BTN.style.fill = White;
        Mic_In_Lang_Trans.style.fill = White;
        More_Input_Lang_BTN.style.fill = White;
        More_Output_Lang_BTN.style.fill = White;
        Text_Translation_BTN.style.backgroundColor = "#000eb352";
        BackGround.style.backgroundColor = light_Black;
        Translation_Lang_Selection.style.backgroundColor = light_Black;
        Output_Lang_Selection.style.color = White;
        Input_Lang_Selection.style.color = White;
        Letter_Size_In_Trans.style.color = White;
        YT_Channel_Name.style.color = White;
        Main_Text_Lang_In.style.color = White;
        Input_Lang_Box1.style.color = "#9898ff";
        Output_Lang_Box2.style.color = "#9898ff";
        Input_Lang_Box1_Bottom.style.backgroundColor = "#9898ff";
        Output_Lang_Box2_Bottom.style.backgroundColor = "#9898ff";
        Translate_Nav_Txt.style.color = WhiteSmoke;
        FeedBack_Link.style.color = White;
        r.style.setProperty('--Hover_On_Lang_Selection', Dark_Black);
        r.style.setProperty('--Text_Color', White);
        r.style.setProperty('--Box_Back', light_Black);
    } else {
        Num1 = 0;
        Dark_Mode.innerHTML = Dark_Icon;
        nav.style.backgroundColor = White
        Lang_output_Text_div.style.backgroundColor = White
        Lang_Input_Text_div.style.backgroundColor = White
        body.style.backgroundColor = WhiteSmoke;
        Three_Lines_BTN_Line1.style.backgroundColor = "rgb(26, 26, 26)";
        Three_Lines_BTN_Line2.style.backgroundColor = "rgb(26, 26, 26)";
        Three_Lines_BTN_Line3.style.backgroundColor = "rgb(26, 26, 26)";
        More_Options.style.fill = Black;
        Swap_Lang_BTN.style.fill = Black;
        Mic_In_Lang_Trans.style.fill = Black;
        More_Input_Lang_BTN.style.fill = Black;
        More_Output_Lang_BTN.style.fill = Black;
        Text_Translation_BTN.style.backgroundColor = "#e4ecfa";
        BackGround.style.backgroundColor = White;
        Translation_Lang_Selection.style.backgroundColor = White;
        Output_Lang_Selection.style.color = Black;
        Input_Lang_Selection.style.color = Black;
        Letter_Size_In_Trans.style.color = Black;
        YT_Channel_Name.style.color = Black;
        Main_Text_Lang_In.style.color = White;
        Input_Lang_Box1.style.color = "blue";
        Output_Lang_Box2.style.color = "blue";
        Input_Lang_Box1_Bottom.style.backgroundColor = "blue";
        Output_Lang_Box2_Bottom.style.backgroundColor = "blue";
        Translate_Nav_Txt.style.color = "#5f6368";
        FeedBack_Link.style.color = Black;
        r.style.setProperty('--Hover_On_Lang_Selection', WhiteSmoke);
        r.style.setProperty('--Text_Color', Black);
        r.style.setProperty('--Box_Back', White);
    }
})
