import styled from 'styled-components';
import { theme } from '../styles/theme';

export const Button = styled.a<{ $light?: boolean }>`
  display:inline-flex; align-items:center; justify-content:center; gap:10px; min-height:54px; padding:0 24px;
  border-radius:999px; text-decoration:none; font-size:14px; font-weight:600; transition:transform .2s, box-shadow .2s, background .2s;
  background:${({ $light }) => $light ? theme.colors.cream : theme.colors.greenDark}; color:${({ $light }) => $light ? theme.colors.greenDark : theme.colors.white};
  box-shadow:0 12px 30px rgba(41,72,59,.15);
  &:hover { transform:translateY(-2px); box-shadow:0 16px 36px rgba(41,72,59,.22); }
`;
