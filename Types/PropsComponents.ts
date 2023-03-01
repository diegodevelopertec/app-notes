

import { ReactNode } from "react"

export type PropsComponents={
  
        //formularios
        type?: string
        disabled?:boolean,
        required?:boolean,
        resize?:string,
        value?:string,
        maxLenght?:number,
        minLenght?:number,
        min?:number,
        max?:number
        defaultValue?:string,
        onChange?:(e:any | null)=>any,
        onSubmit?:(e: any | null)=>any | void,
        onExecute?:(e: any | null)=>any | void,
        id?:string,
        name?:string,
        placeholder?:string,
        method?:'GET' | 'POST',
        action?:string,
        accept?:string,
        pattern?:string,
        checked?:string,
        outlineFocus?:string
        textDecoration?:string
        //Hover
        bgHover?:string,
        bdHover?:string,
        colorHover?:string,
        textDecorationHover?:string,
        pHover?:string,
        mHover?:string,
        opacityHover?:string
        outlineHover?:string,
        cursor?:string,

        //transições:
        trs?:string,//recebe todas as propriedades da transicao
        trsTime?:string,//recebe a velocidade  all ease


        //Tamanhos
        w?:string,  //largura
        h?:string, //altura
        m?:string, //margem
        mt?:string, //margem top
        mb?:string, //margem bottom
        ml?:string, //margem left
        mr?:string, //margem right
        p?:string, //padding
        pt?:string, //padding top
        pb?:string, //padding bottom
        pl?:string, //padding left
        pr?:string, //padding right
        flexWrap?:string
    
        //Backgrounds
        bg?:string ,  //cor de fundo
        bgImage?:string,  // imagem de fundo
        bgSize?:string,  //tamanho do fundo
        opacity?:string, //opacidade
    
        //colors e textos
    
        color?:string, //cor
        textAlign?:string, //alinhamento do texto
        textTransform?:string, //trabformacao do texto
        overflow?:string, //overflow
        fontWeight?:string, //largura da fonte
        fontSize?:string, //tamanho da fonte
        fontFamilly?:string
    
        //border
        bd?:string, //border
        bdTopLeft?:string, //bordas top left
        bdTopRight?:string, //bordas top right
        bdBottomLeft?:string, //bordas bototm left
        bdBottomRight?:string, //bordas bottom right
        bdRadius?:string, //bordas redondas
        bdRadiusTopLeft?:string, //bordas redondas top left
        bdRadiusTopRight?:string, //bordas redondas top right
        bdRadiusBottomLeft?:string, //bordas redondas bottom  left
        bdRadiusBottomRight?:string, //bordas redondas bototm  rightt
        boxShadow?:string //bordas redondas sombras
    
    
        //Position
        ps?:string, //position
        psTop?:string, //posicao top
        psLeft?:string //posicao left
        psRight?:string, //posicao right
        psBottom?:string //posicao bottom
    
        //flex
        d?:string,  //display
        flexJustify?:string, //justify-content
        flexAlign?:string //align-items
        flexDirection?:string, //flex-direction
        flex?:string //flex
        gridRows?:string, //grid-template-columns
        gridColumns?:string, ///grid-template-columns
        gridAreas?:string
        children?:ReactNode | JSX.Element, //elemento filho
        text?:string, //text
        gridGap?:string

    //Links e Imagens
        href?:any,
        src?:string,
        outline?:string,
        
        //Funcoes
        onClick?:()=>any,
        focus?:()=>any
        onTranisition?:()=>any,
        onAnimation?:()=>any,
        nameComponent?:string
        
        
        //media queries
        mqD?:string, //mq display
        mqDJustify?:string, //mqdjustify content
        mqPosition?:string,
        mqTop?:string,
        mqBottom?:string,
        mqLeft?:string,
        mqRight?:string
        mqDAlign?:string, //mqd align-items
        mqm?:string, //mq margem
        mqp?:string, //mq padding
        mqDirection?:string //mq direction
        mqw?:string, //mq largura
        mqh?:string, //mq altura
        mqFontSize?:string //mq tamanho da fonte
     
        mqGridColum?:string,
        mqGridRow?:string

        mnw?:string, //largura minima
        mnh?:string, //altura minima
        mxw?:string, //largura maxima
        mxh?:string, //alura maxima
        mqmxw?:string, // mq largura maxima
        mqmxh?:string,//mq altura maxima
        mqmnw?:string, //mq minima largura
        mqmnh?:string //mq minima altura
        mqFlex?:string
        zindex?:string

}