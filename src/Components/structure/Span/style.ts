import styled from "styled-components";


type PropsStyle={
    //Hover
    bgHover?:string,
    bdHover?:string,
    colorHover?:string,
    textDecorationHover?:string,
    pHover?:string,
    mHover?:string,
    opacityHover?:string
    trs?:string
    //Tamanhos
    w?:string,
    h?:string,
    m?:string,
    mt?:string,
    mb?:string,
    ml?:string,
    mr?:string,
    p?:string,
    pt?:string,
    pb?:string,
    pl?:string,
    pr?:string,


    //Backgrounds
    bg?:string,
    bgImage?:string,
    bgSize?:string,
    opacity?:string,

    //colors e textos

    color?:string,
    textAlign?:string,
    textTransform?:string,
    overflow?:string,
    fontWeight?:string,
    fontSize?:string,
    fontFamilly?:string

    //border
    bd?:string,
    bdTopLeft?:string,
    bdTopRight?:string,
    bdBottomLeft?:string,
    bdBottomRight?:string,
    bdRadius?:string,
    bdRadiusTopLeft?:string,
    bdRadiusTopRight?:string,
    bdRadiusBottomLeft?:string,
    bdRadiusBottomRight?:string,
    boxShadow?:string


    //Position
    ps?:string,
    psTop?:string,
    psLeft?:string
    psRight?:string,
    psBottom?:string

    //flex
    d?:string,
    flexJustify?:string,
    flexAlign?:string
    flexDirection?:string,
    flex?:string
    gridRows?:string, //grid-template-columns
    gridColumns?:string, ///grid-template-columns
    gridAreas?:string
    gridGap?:string
    zIndex?:string
   
    mqD?:string,
    mqDJustify?:string,
    mqDAlign?:string,
    mqM?:string,
    mqP?:string,
    mqDirection?:string,
    mqW?:string,
    mqH?:string,
    cursor?:string
    mqPosition?:string,
    mqTop?:string,
    mqBottom?:string,
    mqLeft?:string,
    mqRight?:string

    minW?:string,
    minH?:string,
    maxW?:string,
    maxH?:string,
    mqMxw?:string,
    mqMxh?:string,
    mqMnw?:string,
    mqMnh?:string
  
}

export const Box=styled.span<PropsStyle>`
display: ${PropsStyle=>PropsStyle.d};
justify-content: ${PropsStyle=>PropsStyle.flexJustify};
align-items:  ${PropsStyle=>PropsStyle.flexAlign};
flex-direction:  ${PropsStyle=>PropsStyle.flexDirection};
flex:${PropsStyle=>PropsStyle.flex};
grid-template-columns:${PropsStyle=>PropsStyle.gridColumns};
grid-template-rows:${PropsStyle=>PropsStyle.gridRows};
grid-template-areas: ${PropsStyle=>PropsStyle.gridAreas};
grid-gap: ${PropsStyle=>PropsStyle.gridGap};

border:  ${PropsStyle=>PropsStyle.bd};
border-radius:  ${PropsStyle=>PropsStyle.bdRadius};
border-bottom-left-radius: ${PropsStyle=>PropsStyle.bdRadiusBottomLeft};
border-bottom-right-radius: ${PropsStyle=>PropsStyle.bdRadiusBottomRight};
border-top-left-radius:  ${PropsStyle=>PropsStyle.bdRadiusTopLeft};
border-top-right-radius:  ${PropsStyle=>PropsStyle.bdRadiusTopRight};
background-color: ${PropsStyle=>PropsStyle.bg};
background-image:${PropsStyle=>PropsStyle.bgImage} ;
background-size: ${PropsStyle=>PropsStyle.bgSize};
width:  ${PropsStyle=>PropsStyle.w};
height:  ${PropsStyle=>PropsStyle.h};
margin:  ${PropsStyle=>PropsStyle.m};
margin-top:  ${PropsStyle=>PropsStyle.mt};
margin-bottom: ${PropsStyle=>PropsStyle.mb};
margin-left: ${PropsStyle=>PropsStyle.ml};
margin-right: ${PropsStyle=>PropsStyle.mr};
padding: ${PropsStyle=>PropsStyle.p};
padding-top:${PropsStyle=>PropsStyle.pt};
padding-bottom: ${PropsStyle=>PropsStyle.pb};
padding-left: ${PropsStyle=>PropsStyle.pl};
padding-right: ${PropsStyle=>PropsStyle.pr};
box-shadow: ${PropsStyle=>PropsStyle.boxShadow};
color: ${PropsStyle=>PropsStyle.color};
text-align: ${PropsStyle=>PropsStyle.textAlign};
text-transform: ${PropsStyle=>PropsStyle.textTransform};
overflow: ${PropsStyle=>PropsStyle.overflow};
font-weight: ${PropsStyle=>PropsStyle.fontWeight};
font-size: ${PropsStyle=>PropsStyle.fontSize};
padding: ${PropsStyle=>PropsStyle.pHover};
margin:  ${PropsStyle=>PropsStyle.mHover};
opacity: ${PropsStyle=>PropsStyle.opacity};
font-family: ${PropsStyle=>PropsStyle.fontFamilly};
z-index: ${PropsStyle=>PropsStyle.zIndex};
position: ${PropsStyle=>PropsStyle.ps};
top: ${PropsStyle=>PropsStyle.psTop};
left: ${PropsStyle=>PropsStyle.psLeft};
right: ${PropsStyle=>PropsStyle.psRight};
bottom: ${PropsStyle=>PropsStyle.psBottom};

min-width: ${PropsStyle=>PropsStyle.minW};
min-height: ${PropsStyle=>PropsStyle.minH};
max-width: ${PropsStyle=>PropsStyle.maxH};
max-height: ${PropsStyle=>PropsStyle.maxW};
transition: ${PropsStyle=>PropsStyle.trs};

&:hover{
    border:  ${PropsStyle=>PropsStyle.bdHover};
    background-color:${PropsStyle=>PropsStyle.bgHover};
    text-decoration: ${PropsStyle=>PropsStyle.textDecorationHover};
    color:${PropsStyle=>PropsStyle.colorHover};
    opacity: ${PropsStyle=>PropsStyle.opacityHover};
    cursor: ${PropsStyle=>PropsStyle.cursor};
}




@media screen and (max-width:950px){
    display:${PropsStyle=>PropsStyle.mqD};
    justify-content: ${PropsStyle=>PropsStyle.mqDJustify};
    align-items: ${PropsStyle=>PropsStyle.mqDAlign};
    margin: ${PropsStyle=>PropsStyle.mqM};
    padding: ${PropsStyle=>PropsStyle.mqP};
    flex-direction: ${PropsStyle=>PropsStyle.mqDirection};
    width:  ${PropsStyle=>PropsStyle.mqW};
    height:  ${PropsStyle=>PropsStyle.mqH};

    position: ${PropsStyle=>PropsStyle.mqPosition};
    top: ${PropsStyle=>PropsStyle.mqTop};
    left: ${PropsStyle=>PropsStyle.mqLeft};
    right: ${PropsStyle=>PropsStyle.mqRight};
    bottom: ${PropsStyle=>PropsStyle.mqBottom};

    min-width: ${PropsStyle=>PropsStyle.mqMnw};
    min-height: ${PropsStyle=>PropsStyle.mqMnh};
    max-width: ${PropsStyle=>PropsStyle.mqMxw};
    max-height: ${PropsStyle=>PropsStyle.mqMxh};
}
`

//top right bottom left