import styled from 'styled-components';
import { theme } from '../styles/theme';

const Wrap = styled.div<{ $center?: boolean }>`
  max-width:700px; text-align:${({$center})=>$center?'center':'left'}; margin:${({$center})=>$center?'0 auto':'0'};
  .kicker { margin:0 0 14px; color:${theme.colors.green}; font-size:12px; font-weight:600; letter-spacing:.18em; text-transform:uppercase; }
  h2 { margin:0; font-family:'Playfair Display',serif; color:${theme.colors.greenDark}; font-size:clamp(38px,5vw,64px); font-weight:500; line-height:1.05; letter-spacing:-.035em; }
  p { margin:20px 0 0; color:#607169; font-size:16px; line-height:1.75; }
`;
export function SectionHeading({ kicker, title, description, center=false }: { kicker:string; title:string; description?:string; center?:boolean }) {
  return <Wrap $center={center}><p className="kicker">{kicker}</p><h2>{title}</h2>{description && <p>{description}</p>}</Wrap>;
}
