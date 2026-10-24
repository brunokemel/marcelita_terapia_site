import { ArrowDown, ArrowRight, Check, Heart, Leaf, MessageCircle, MoonStar, Quote, Sparkles } from 'lucide-react';
import styled from 'styled-components';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { SectionHeading } from './components/SectionHeading';
import { ContactLinkBuilder, ServiceCatalog } from './domain/services';
import { theme } from './styles/theme';

const Page = styled.div`overflow:hidden;`;
const Shell = styled.div`width:min(calc(100% - 40px), ${theme.maxWidth}); margin:0 auto;`;
const Hero = styled.section`
  position:relative; min-height:790px; display:flex; align-items:center; padding:130px 0 70px;
  background:
    radial-gradient(circle at 79% 20%, rgba(255,255,255,.75) 0 7%, transparent 7.2%),
    linear-gradient(118deg, ${theme.colors.cream} 0 54%, ${theme.colors.pink} 54% 100%);
  &:after { content:''; position:absolute; width:350px; height:350px; border:1px solid rgba(85,122,103,.2); border-radius:48% 52% 61% 39%; right:-130px; bottom:-120px; }
  @media (max-width:860px){ min-height:auto; background:linear-gradient(155deg,${theme.colors.cream} 0 66%,${theme.colors.pink} 66%); }
`;
const HeroGrid = styled(Shell)`
  display:grid; grid-template-columns:1.08fr .92fr; gap:70px; align-items:center;
  @media(max-width:860px){ grid-template-columns:1fr; gap:55px; }
`;
const HeroCopy = styled.div`
  position:relative; z-index:2;
  .eyebrow { display:flex; align-items:center; gap:10px; margin:0 0 28px; color:${theme.colors.green}; font-size:12px; font-weight:600; letter-spacing:.18em; text-transform:uppercase; }
  h1 { max-width:740px; margin:0; color:${theme.colors.greenDark}; font-family:'Playfair Display',serif; font-size:clamp(58px,7.4vw,104px); font-weight:500; line-height:.96; letter-spacing:-.05em; }
  h1 em { color:#c45f54; font-weight:500; }
  .lead { max-width:570px; margin:28px 0 32px; color:#56675f; font-size:18px; line-height:1.7; }
  .actions { display:flex; align-items:center; gap:22px; flex-wrap:wrap; }
  .discover { display:flex; align-items:center; gap:8px; color:${theme.colors.greenDark}; font-size:14px; font-weight:600; text-decoration:none; }
`;
const HeroArt = styled.div`
  position:relative; min-height:510px;
  .portal { position:absolute; inset:20px 26px 30px 38px; border-radius:48% 48% 160px 160px; background:linear-gradient(155deg,${theme.colors.greenLight},#759683); box-shadow:${theme.shadow}; overflow:hidden; }
  .portal:before { content:''; position:absolute; width:310px; height:310px; border-radius:50%; top:80px; left:50%; transform:translateX(-50%); background:rgba(248,248,225,.16); border:1px solid rgba(248,248,225,.28); box-shadow:0 0 0 38px rgba(248,248,225,.07),0 0 0 76px rgba(248,248,225,.04); }
  .silhouette { position:absolute; left:50%; bottom:-40px; transform:translateX(-50%); width:260px; height:390px; border-radius:48% 48% 20% 20%; background:linear-gradient(170deg,#f9e5d7,#d9aa97); clip-path:polygon(30% 0,70% 0,82% 18%,78% 34%,93% 100%,7% 100%,22% 34%,18% 18%); opacity:.92; }
  .head { position:absolute; z-index:2; left:50%; top:92px; transform:translateX(-50%); width:118px; height:142px; border-radius:48% 48% 45% 45%; background:#e9bba7; box-shadow:0 -30px 0 -6px #61463e; }
  .orb { position:absolute; z-index:3; display:grid; place-items:center; width:82px; height:82px; border-radius:50%; background:rgba(255,253,248,.88); color:${theme.colors.green}; box-shadow:0 15px 50px rgba(41,72,59,.18); backdrop-filter:blur(8px); }
  .orb.one { left:0; top:90px; } .orb.two { right:0; bottom:70px; background:${theme.colors.pinkSoft}; }
  .caption { position:absolute; z-index:4; left:0; bottom:12px; max-width:200px; padding:17px 19px; border-radius:18px; background:${theme.colors.white}; box-shadow:${theme.shadow}; font-family:'Playfair Display',serif; font-size:16px; line-height:1.35; }
  @media(max-width:860px){ min-height:440px; width:min(100%,480px); margin:0 auto; }
  @media(max-width:480px){ min-height:390px; .portal{inset:15px 18px 25px}.orb{width:65px;height:65px}.head{top:75px}.caption{font-size:14px;max-width:170px} }
`;
const Strip = styled.div`
  background:${theme.colors.greenDark}; color:${theme.colors.cream};
  ${Shell}{ min-height:92px; display:flex; align-items:center; justify-content:space-between; gap:30px; }
  .item { display:flex; align-items:center; gap:12px; font-family:'Playfair Display',serif; font-size:17px; }
  .dot{width:5px;height:5px;border-radius:50%;background:${theme.colors.pink};}
  @media(max-width:720px){ ${Shell}{padding:22px 0; flex-wrap:wrap; justify-content:center}.item{font-size:14px}.dot{display:none} }
`;
const About = styled.section`padding:130px 0; background:${theme.colors.white};`;
const AboutGrid = styled(Shell)`display:grid;grid-template-columns:.9fr 1.1fr;gap:100px;align-items:center;@media(max-width:820px){grid-template-columns:1fr;gap:60px}`;
const Portrait = styled.div`
  position:relative; min-height:550px; border-radius:${theme.radius.lg}; background:${theme.colors.pinkSoft};
  &:before{content:'M';position:absolute;inset:32px;display:grid;place-items:center;border:1px solid rgba(196,95,84,.22);border-radius:30px;color:#c45f54;font-family:'Playfair Display';font-size:220px;font-style:italic;}
  .tag{position:absolute;right:-30px;bottom:38px;padding:20px 24px;border-radius:20px;background:${theme.colors.greenDark};color:${theme.colors.cream};box-shadow:${theme.shadow};font-size:13px;line-height:1.55;}
  .tag strong{display:block;font-family:'Playfair Display';font-size:19px;font-weight:500;}
  @media(max-width:820px){min-height:420px;.tag{right:18px}.tag strong{font-size:17px}}
`;
const AboutCopy = styled.div`
  .text{margin:28px 0;color:#607169;line-height:1.8;font-size:16px}.signature{font-family:'Playfair Display';font-size:25px;font-style:italic;color:#c45f54;}
  .principles{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:34px}.principle{display:flex;gap:10px;align-items:center;font-size:14px;font-weight:600}.check{display:grid;place-items:center;flex:0 0 26px;height:26px;border-radius:50%;background:${theme.colors.greenLight};}
  @media(max-width:460px){.principles{grid-template-columns:1fr}}
`;
const Services = styled.section`padding:130px 0;background:linear-gradient(180deg,${theme.colors.cream},#f3f4df);`;
const Cards = styled.div`display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:56px;@media(max-width:860px){grid-template-columns:1fr;}`;
const Card = styled.article`
  display:flex;flex-direction:column;min-height:390px;padding:32px;border:1px solid rgba(85,122,103,.14);border-radius:${theme.radius.md};background:rgba(255,253,248,.72);transition:.25s;
  &:hover{transform:translateY(-6px);box-shadow:${theme.shadow};background:${theme.colors.white};}.icon{display:grid;place-items:center;width:54px;height:54px;border-radius:18px;background:${theme.colors.pinkSoft};color:#ad5148}.eyebrow{margin:42px 0 10px;color:${theme.colors.green};font-size:11px;font-weight:600;letter-spacing:.15em;text-transform:uppercase}h3{margin:0;font-family:'Playfair Display';font-size:29px;font-weight:500;color:${theme.colors.greenDark}}p{color:#607169;line-height:1.7;font-size:14px}.bottom{display:flex;justify-content:space-between;align-items:center;margin-top:auto;padding-top:20px;border-top:1px solid rgba(85,122,103,.12);font-size:13px;font-weight:600}.bottom a{display:grid;place-items:center;width:40px;height:40px;border-radius:50%;background:${theme.colors.greenDark};color:white;transition:.2s}.bottom a:hover{transform:rotate(-10deg)}
`;
const Process = styled.section`padding:130px 0;background:${theme.colors.white};`;
const ProcessGrid = styled(Shell)`display:grid;grid-template-columns:.8fr 1.2fr;gap:100px;align-items:start;@media(max-width:820px){grid-template-columns:1fr;gap:55px}`;
const Steps = styled.div`display:flex;flex-direction:column;`;
const Step = styled.div`
  display:grid;grid-template-columns:64px 1fr;gap:22px;padding:28px 0;border-bottom:1px solid #e4e8df;
  .number{display:grid;place-items:center;width:54px;height:54px;border-radius:50%;background:${theme.colors.cream};color:${theme.colors.green};font-family:'Playfair Display';font-size:20px}h3{margin:3px 0 8px;font-family:'Playfair Display';font-size:25px;font-weight:500}p{margin:0;color:#607169;line-height:1.65;font-size:14px}
`;
const Note = styled.div`margin-top:32px;padding:24px;border-radius:18px;background:${theme.colors.pinkSoft};color:#725463;font-size:13px;line-height:1.65;a{display:inline-block;margin-top:8px;color:${theme.colors.greenDark};font-weight:600;text-underline-offset:3px;}`;
const QuoteSection = styled.section`padding:90px 0;background:${theme.colors.pink};`;
const QuoteBox = styled(Shell)`text-align:center;svg{color:#ad5148}blockquote{max-width:860px;margin:26px auto;font-family:'Playfair Display';font-size:clamp(30px,5vw,56px);font-weight:500;line-height:1.15;letter-spacing:-.03em;color:${theme.colors.greenDark}}p{font-size:13px;font-weight:600;letter-spacing:.12em;text-transform:uppercase}`;
const Cta = styled.section`padding:120px 0;background:${theme.colors.greenDark};color:${theme.colors.cream};`;
const CtaBox = styled(Shell)`display:flex;align-items:center;justify-content:space-between;gap:50px;h2{max-width:720px;margin:0;font-family:'Playfair Display';font-size:clamp(40px,6vw,72px);font-weight:500;line-height:1.03;letter-spacing:-.035em}p{max-width:520px;color:#c8dacd;line-height:1.7}.right{flex:0 0 300px}@media(max-width:760px){flex-direction:column;align-items:flex-start;.right{flex:auto;width:100%}${Button}{width:100%}}`;
const Footer = styled.footer`padding:34px 0;background:${theme.colors.greenDark};color:#aec4b7;border-top:1px solid rgba(248,248,225,.13);${Shell}{display:flex;align-items:center;justify-content:space-between;gap:25px;font-size:12px}.social{display:flex;gap:12px}.social a{display:grid;place-items:center;width:38px;height:38px;border:1px solid rgba(248,248,225,.2);border-radius:50%}@media(max-width:640px){${Shell}{flex-direction:column;text-align:center}}`;

const catalog = new ServiceCatalog();
const links = new ContactLinkBuilder('Marcelia');

export function App() {
  const contactUrl = links.whatsapp();
  return <Page>
    <Header contactUrl={contactUrl}/>
    <main>
      <Hero id="inicio"><HeroGrid>
        <HeroCopy>
          <p className="eyebrow"><Sparkles size={16}/> Terapia energética & autocuidado</p>
          <h1>Volte para o seu <em>centro.</em></h1>
          <p className="lead">Um espaço gentil para desacelerar, escutar a si mesma e cultivar mais presença, leveza e equilíbrio no cotidiano.</p>
          <div className="actions"><Button href={contactUrl} target="_blank" rel="noreferrer">Quero cuidar de mim <ArrowRight size={17}/></Button><a className="discover" href="#sobre">Conheça meu trabalho <ArrowDown size={16}/></a></div>
        </HeroCopy>
        <HeroArt aria-label="Composição abstrata que representa acolhimento e equilíbrio"><div className="portal"><div className="head"/><div className="silhouette"/></div><div className="orb one"><Leaf size={30}/></div><div className="orb two"><MoonStar size={29}/></div><div className="caption">Seu bem-estar começa com um momento de presença.</div></HeroArt>
      </HeroGrid></Hero>
      <Strip><Shell><span className="item"><Leaf size={18}/> Cuidado integral</span><span className="dot"/><span className="item"><Heart size={18}/> Escuta acolhedora</span><span className="dot"/><span className="item"><Sparkles size={18}/> Presença e equilíbrio</span></Shell></Strip>

      <About id="sobre"><AboutGrid>
        <Portrait aria-label="Monograma de Marcelia Corrêa; espaço preparado para receber uma fotografia"><div className="tag"><strong>Marcelia Corrêa</strong>Terapeuta energética</div></Portrait>
        <AboutCopy><SectionHeading kicker="Sobre mim" title="Cuidar da sua energia é também escutar sua história."/><p className="text">Sou Marcelia Corrêa, terapeuta energética. Meu trabalho nasce do encontro entre acolhimento, atenção e práticas integrativas — um convite para que você crie pausas conscientes e se reconecte com o que importa.</p><p className="signature">Com carinho, Marcelia.</p><div className="principles"><div className="principle"><span className="check"><Check size={15}/></span>Atendimento individual</div><div className="principle"><span className="check"><Check size={15}/></span>Ritmo respeitado</div><div className="principle"><span className="check"><Check size={15}/></span>Escuta sem julgamentos</div><div className="principle"><span className="check"><Check size={15}/></span>Cuidado complementar</div></div></AboutCopy>
      </AboutGrid></About>

      <Services id="atendimentos"><Shell><SectionHeading center kicker="Formas de cuidado" title="Escolha o encontro que combina com seu momento." description="Cada experiência parte da mesma intenção: oferecer tempo, presença e acolhimento para o seu processo de autocuidado."/><Cards>{catalog.list().map(({id,eyebrow,title,description,format,icon:Icon})=><Card key={id}><span className="icon"><Icon size={24}/></span><p className="eyebrow">{eyebrow}</p><h3>{title}</h3><p>{description}</p><div className="bottom"><span>{format}</span><a href={links.whatsapp(title.toLowerCase())} target="_blank" rel="noreferrer" aria-label={`Conversar sobre ${title}`}><ArrowRight size={18}/></a></div></Card>)}</Cards></Shell></Services>

      <Process id="como-funciona"><ProcessGrid><div><SectionHeading kicker="Como funciona" title="Um processo simples, leve e no seu ritmo." description="Antes de começar, conversamos sobre o que você busca e qual formato faz sentido para este momento."/><Note><strong>Importante:</strong> terapias energéticas são práticas complementares de bem-estar. Não substituem diagnóstico, tratamento médico, psicológico ou outros cuidados de saúde.<br/><a href="https://www.gov.br/saude/pt-br/composicao/saps/pics/pics/" target="_blank" rel="noreferrer">Conheça as PICS no Ministério da Saúde →</a></Note></div><Steps><Step><span className="number">01</span><div><h3>Primeiro contato</h3><p>Você chama pelo WhatsApp, conta brevemente o que está buscando e tira suas dúvidas sem compromisso.</p></div></Step><Step><span className="number">02</span><div><h3>Escolha do formato</h3><p>Alinhamos o tipo de atendimento, a modalidade e um horário confortável para você.</p></div></Step><Step><span className="number">03</span><div><h3>Seu momento de cuidado</h3><p>No encontro, você é acolhida com presença e respeito, em um ambiente tranquilo e confidencial.</p></div></Step></Steps></ProcessGrid></Process>

      <QuoteSection><QuoteBox><Quote size={34} fill="currentColor"/><blockquote>“Você não precisa dar conta de tudo o tempo todo. Às vezes, o próximo passo é apenas respirar.”</blockquote><p>Um lembrete para o seu dia</p></QuoteBox></QuoteSection>
      <Cta><CtaBox><div><h2>Que tal reservar um momento só seu?</h2><p>Me conte o que você está buscando. Será um prazer conversar e apresentar as possibilidades de atendimento.</p></div><div className="right"><Button $light href={contactUrl} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Conversar com Marcelia</Button></div></CtaBox></Cta>
    </main>
    <Footer><Shell><span>© {new Date().getFullYear()} Marcelia Corrêa · Terapia Energética</span><span>Prática complementar de bem-estar</span><div className="social"><a href={contactUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={17}/></a></div></Shell></Footer>
  </Page>;
}
