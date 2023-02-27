import * as S from './style'
import { ChangeEvent,CSSProperties } from 'react';



interface CircularFileInputProps {
    id: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    style?: CSSProperties;
  }

export const FileInput = ({ id, onChange, style }: CircularFileInputProps) => {
    return (
      <S.Box style={style}>
        <input type="file" id={id} onChange={onChange} />
      </S.Box>
    );
  };

  
  
  
  
  