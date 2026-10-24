import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const Bar = styled.header`
  position: absolute; z-index: 20; inset: 0 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  width: min(calc(100% - 40px), ${theme.maxWidth}); margin: 0 auto; padding: 28px 0;
`;
const Brand = styled.a`
  display: inline-flex; align-items: center; gap: 11px; text-decoration: none;
  font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 600;
  span:first-child { display:grid; place-items:center; width:38px; height:38px; border-radius:50%; background:${theme.colors.greenDark}; color:${theme.colors.cream}; font-family:'DM Sans'; font-size:13px; letter-spacing:-1px; }
`;
const Nav = styled.nav<{ $open: boolean }>`
  display: flex; align-items: center; gap: 30px;
  a { font-size: 14px; font-weight: 600; text-decoration: none; }
  a:not(.cta) { position:relative; &:after { content:''; position:absolute; left:0; bottom:-6px; width:0; height:2px; background:${theme.colors.green}; transition:.25s; } &:hover:after { width:100%; } }
  .cta { padding: 13px 20px; border-radius:999px; color:${theme.colors.white}; background:${theme.colors.greenDark}; box-shadow:0 8px 24px rgba(41,72,59,.18); }
  @media (max-width: 740px) {
    position: fixed; top: 82px; left: 20px; right: 20px; padding: 26px; border-radius: 24px;
    background: rgba(255,253,248,.97); box-shadow:${theme.shadow}; flex-direction:column; align-items:stretch;
    opacity:${({ $open }) => ($open ? 1 : 0)}; transform:translateY(${({ $open }) => ($open ? '0' : '-12px')}); pointer-events:${({ $open }) => ($open ? 'auto' : 'none')}; transition:.2s;
    .cta { text-align:center; }
  }
`;
const MenuButton = styled.button`
  display:none; border:0; background:${theme.colors.white}; width:44px; height:44px; border-radius:50%; color:${theme.colors.greenDark};
  @media (max-width:740px) { display:grid; place-items:center; }
`;

export function Header({ contactUrl }: { contactUrl: string }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <Bar>
    <Brand href="#inicio" aria-label="Marcelia Corrêa — início"><span>MC</span><span>Marcelia Corrêa</span></Brand>
    <Nav $open={open} aria-label="Navegação principal">
      <a href="#sobre" onClick={close}>Sobre</a><a href="#atendimentos" onClick={close}>Atendimentos</a><a href="#como-funciona" onClick={close}>Como funciona</a>
      <a className="cta" href={contactUrl} target="_blank" rel="noreferrer" onClick={close}>Agendar conversa</a>
    </Nav>
    <MenuButton aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={21}/> : <Menu size={21}/>}</MenuButton>
  </Bar>;
}
