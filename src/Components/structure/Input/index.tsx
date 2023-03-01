import* as S from './style'
import { PropsComponents } from '../../../../Types/PropsComponents'

type Props={
     type:string,
    bg?:string,
    d?:string,
    h:string ,
    m?:string,
    p?:string ,
    color?:string
    radius?:string
    w?:string,
    justifyContent?:string,
    alignItem?:string,
    outline?:string,
    bgHover?:string,
    bdHover?:string,
    outlineHover?:string,
    transition?:string,
    bd:string
}


export const Input=({...propsElement}:PropsComponents)=>{
    return <S.Box
     
    onChange={propsElement.onChange}
    outline={propsElement.outline}
    outlineFocus={propsElement.outlineFocus}
    required={propsElement.required}
    disabled={propsElement.disabled}
    defaultValue={propsElement.defaultValue}
    bgHover={propsElement.bgHover}
    colorHover={propsElement.colorHover}
    pHover={propsElement.pHover}
    mHover={propsElement.mHover}
    opacityHover={propsElement.opacityHover}
    w={propsElement.w}
    trs={propsElement.trs}
    d={propsElement.d}
    flexJustify={propsElement.flexJustify}
    flexAlign={propsElement.flexAlign}
    flexDirection={propsElement.flexDirection}
    placeholder={propsElement.placeholder}

    h={propsElement.h}
    m={propsElement.m}
    mt={propsElement.mt}
    mb={propsElement.mb}
    ml={propsElement.ml}
    mr={propsElement.mr}
    p={propsElement.p}
    pt={propsElement.pt}
    pb={propsElement.pb}
    pl={propsElement.pl}
    pr={propsElement.pr}
    bg={propsElement.bg}
    bgImage={propsElement.bgImage}
    bgSize={propsElement.bgSize}
    opacity={propsElement.bgSize}
    
    color={propsElement.color}
    textAlign={propsElement.textAlign}
    textTransform={propsElement.textTransform}
    overflow={propsElement.overflow}
    fontWeight={propsElement.fontWeight}
    fontSize={propsElement.fontSize}
    
    bd={propsElement.bd}
    bdTopLeft={propsElement.bdTopLeft}
    bdTopRight={propsElement.bdRadiusTopRight}
    bdBottomLeft={propsElement.bdBottomLeft}
    bdBottomRight={propsElement.bdBottomRight}
    bdRadius={propsElement.bdRadius}
    bdRadiusTopLeft={propsElement.bdRadiusTopLeft}
    bdRadiusTopRight={propsElement.bdRadiusTopLeft}
    bdRadiusBottomLeft={propsElement.bdRadiusBottomLeft}
    bdRadiusBottomRight={propsElement.bdBottomRight}
    boxShadow={propsElement.boxShadow}
    ps={propsElement.ps}
    psTop={propsElement.psTop}
    psLeft={propsElement.psLeft}
    psRight={propsElement.psRight}
    psBottom={propsElement.psBottom}
    onClick={propsElement.onClick}
    onFocus={propsElement.focus}
    mqD={propsElement.mqD}
    mqW={propsElement.mqw}
    mqH={propsElement.mqh}
    mqM={propsElement.mqm}
    mqP={propsElement.mqp}
    mqDAlign={propsElement.mqDAlign}
    mqDJustify={propsElement.mqDJustify}
    mqDirection={propsElement.mqDirection}
    type={propsElement.type}

    mqMnh={propsElement.mqmnh}
    mqMnw={propsElement.mqmnw}
    minH={propsElement.mnh}
    minW={propsElement.mnw}
    maxH={propsElement.mxh}
    maxW={propsElement.mxw}

    />



}