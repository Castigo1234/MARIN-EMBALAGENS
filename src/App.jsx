import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Layers,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import './App.css';

export default function App() {
  // Simulator State
  const [faturamento, setFaturamento] = useState(50000);
  const [equipe, setEquipe] = useState(5);

  // Estimativa de Ganho: aumento de 28% no faturamento e economia de 15h por semana da equipe
  const ganhoEstimado = Math.round(faturamento * 0.32);
  const horasPoupadas = equipe * 14;

  // FAQ State
  const [openFaq, setOpenFaq] = useState(null);

  // Contact Form State
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    solucao: 'Consultoria Estratégica B2B',
    mensagem: '',
  });
  const [formEnviado, setFormEnviado] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const enviarWhatsAppDireto = (e) => {
    e.preventDefault();
    if (!formData.nome || !formData.whatsapp) {
      alert('Por favor, preencha ao menos seu nome e WhatsApp.');
      return;
    }

    const mensagemFormatada = `Olá! Meu nome é *${formData.nome}*.\nE-mail: ${formData.email}\nInteresse: *${formData.solucao}*\n\nDetalhes:\n${formData.mensagem || 'Gostaria de agendar uma reunião de diagnóstico.'}`;
    const url = `https://api.whatsapp.com/send?phone=5511999999999&text=${encodeURIComponent(mensagemFormatada)}`;
    
    setFormEnviado(true);
    window.open(url, '_blank');
  };

  const faqs = [
    {
      pergunta: 'Como funciona o processo de diagnóstico e implementação?',
      resposta: 'Iniciamos com uma imersão de 45 minutos para mapear seus gargalos atuais, equipe e metas de receita. Em até 48 horas apresentamos a estratégia personalizada com o cronograma detalhado de execução.',
    },
    {
      pergunta: 'Quais os requisitos para minha empresa contratar os serviços?',
      resposta: 'Atendemos desde empresas em crescimento e consultorias até operações B2B já consolidadas que necessitam de previsibilidade em vendas, automação de processos e diferenciação de marca.',
    },
    {
      pergunta: 'Em quanto tempo podemos notar os primeiros resultados?',
      resposta: 'Os primeiros marcos práticos (estruturação do funil, novos canais e automações ativas) ocorrem logo nas primeiras 2 a 3 semanas de implementação.',
    },
    {
      pergunta: 'É possível customizar os pacotes de serviços e produtos?',
      resposta: 'Com certeza! Além dos pacotes estruturados, desenhamos escopos sob medida com base na complexidade e nos objetivos estratégicos da sua operação.',
    },
  ];

  const servicos = [
    {
      icon: <Target size={28} />,
      titulo: 'Consultoria Estratégica B2B',
      desc: 'Mapeamento de gargalos, reestruturação de ofertas de alto valor e definição do plano de crescimento previsível.',
      itens: [
        'Diagnóstico comercial completo',
        'Posicionamento de alto ticket no mercado',
        'Playbook de fechamento e processos',
        'Acompanhamento tático semanal',
      ],
      tag: 'Mais Procurado',
    },
    {
      icon: <Rocket size={28} />,
      titulo: 'Desenvolvimento Web & Conversão',
      desc: 'Criação de ecossistemas digitais, páginas de vendas e plataformas projetadas para gerar autoridade e leads qualificados.',
      itens: [
        'Design exclusivo de alto padrão (UI/UX)',
        'Otimização extrema para velocidade e mobile',
        'SEO estratégico para captação orgânica',
        'Integrações com WhatsApp, CRM e Analytics',
      ],
      tag: 'Alta Performance',
    },
    {
      icon: <Zap size={28} />,
      titulo: 'Automação & Escala de Processos',
      desc: 'Implementação de fluxos inteligentes que eliminam tarefas repetitivas e aceleram o ciclo de vendas da equipe.',
      itens: [
        'Qualificação automática de leads',
        'Notificações instantâneas de novos contatos',
        'Integração multicanal (Email, WhatsApp e CRM)',
        'Relatórios de métricas e conversão em tempo real',
      ],
      tag: 'Produtividade 10x',
    },
  ];

  const produtos = [
    {
      nome: 'Diagnóstico Sprint 7D',
      alvo: 'Para empresas que precisam de clareza imediata e plano de ação tático.',
      preco: 'R$ 1.900',
      periodo: 'entrega única',
      itens: [
        'Imersão profunda de 90 minutos com especialista',
        'Auditoria completa de canais e posicionamento',
        'Plano de ação prioritário passo a passo',
        'Suporte de 15 dias para tirar dúvidas pós-entrega',
      ],
      destaque: false,
    },
    {
      nome: 'Aceleração Comercial 360°',
      alvo: 'O programa completo de consultoria, site de alta conversão e automação.',
      preco: 'R$ 4.800',
      periodo: 'implantação completa',
      itens: [
        'Desenvolvimento de Site/Landing Page Premium',
        'Estruturação de funil de vendas e qualificação',
        'Integração direta com WhatsApp e CRM',
        'Consultoria tática quinzenal por 60 dias',
        'Garantia de acompanhamento e otimizações',
      ],
      destaque: true,
    },
    {
      nome: 'Parceria Dedicada Enterprise',
      alvo: 'Acompanhamento contínuo como braço estratégico de tecnologia e vendas.',
      preco: 'Sob Consulta',
      periodo: 'modelo mensal contínuo',
      itens: [
        'Squad dedicado para evolução contínua',
        'Testes A/B e otimização constante de conversão',
        'Desenvolvimento de novas ferramentas internas',
        'SLA prioritário de suporte no WhatsApp',
      ],
      destaque: false,
    },
  ];

  const depoimentos = [
    {
      nome: 'Ricardo Menezes',
      cargo: 'Diretor Comercial @ NexaCorp B2B',
      avatar: 'RM',
      texto: 'O novo posicionamento e a página de serviços dobraram a nossa taxa de conversão em reuniões. O retorno sobre o investimento foi pago no primeiro contrato fechado!',
      estrelas: 5,
    },
    {
      nome: 'Camila Duarte',
      cargo: 'Fundadora @ Duarte Consultoria',
      avatar: 'CD',
      texto: 'Profissionalismo impecável. O site transmite exatamente a autoridade que precisávamos para atrair clientes de ticket mais alto. Recomendo de olhos fechados.',
      estrelas: 5,
    },
    {
      nome: 'Felipe Alcantara',
      cargo: 'COO @ Veloce Tech Solutions',
      avatar: 'FA',
      texto: 'A automação dos contatos integrada ao WhatsApp fez nossa equipe responder leads qualificados em menos de 3 minutos. Reduziu nosso ciclo de vendas pela metade.',
      estrelas: 5,
    },
  ];

  return (
    <div className="site-wrapper">
      {/* Navbar */}
      <header className="navbar">
        <div className="container nav-container">
          <a href="#inicio" className="brand-logo" id="nav-brand-logo">
            <div className="brand-icon-wrapper">
              <Sparkles size={22} />
            </div>
            <span>VEXUS<span className="text-gradient">.B2B</span></span>
          </a>

          <ul className="nav-links">
            <li><a href="#inicio" className="nav-link">Início</a></li>
            <li><a href="#servicos" className="nav-link">Serviços</a></li>
            <li><a href="#produtos" className="nav-link">Planos & Produtos</a></li>
            <li><a href="#simulador" className="nav-link">Simulador</a></li>
            <li><a href="#depoimentos" className="nav-link">Depoimentos</a></li>
            <li><a href="#faq" className="nav-link">FAQ</a></li>
          </ul>

          <div className="nav-actions">
            <a
              href="#contato"
              className="btn btn-primary"
              id="nav-cta-btn"
            >
              Falar com Especialista
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="inicio">
        <div className="hero-glow-blob"></div>
        <div className="container hero-content">
          <div className="badge-pill">
            <span className="status-dot"></span>
            Agenda Aberta | Vagas Selecionadas para o Mês
          </div>

          <h1 className="hero-title">
            Estratégia, Soluções & Produtos Digitais para <span className="text-gradient">Multiplicar suas Vendas B2B</span>
          </h1>

          <p className="hero-subtitle">
            Ajudamos empresas e consultorias a se posicionarem com autoridade máxima, capturarem leads qualificados de alto valor e automatizarem o processo comercial de ponta a ponta.
          </p>

          <div className="hero-cta-group">
            <a href="#contato" className="btn btn-primary" id="hero-primary-cta">
              <Rocket size={18} />
              Solicitar Diagnóstico Gratuito
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5511999999999&text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              id="hero-whatsapp-cta"
            >
              <MessageCircle size={18} />
              Conversar no WhatsApp
            </a>
          </div>

          <div className="hero-social-proof">
            <div className="social-proof-item">
              <CheckCircle2 size={18} />
              <span>Metodologia Validada</span>
            </div>
            <div className="social-proof-item">
              <CheckCircle2 size={18} />
              <span>Garantia de Satisfação</span>
            </div>
            <div className="social-proof-item">
              <CheckCircle2 size={18} />
              <span>Implementação Ágil</span>
            </div>
            <div className="social-proof-item">
              <CheckCircle2 size={18} />
              <span>Suporte Direto com Especialista</span>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="metrics-section">
        <div className="container">
          <div className="metrics-grid">
            <div className="glass-card metric-card">
              <div className="metric-number text-gradient">+R$ 18M</div>
              <div className="metric-label">Gerados em Pipeline & Contratos</div>
            </div>
            <div className="glass-card metric-card">
              <div className="metric-number text-gradient-emerald">3.4x</div>
              <div className="metric-label">Aumento Médio em Conversão de Leads</div>
            </div>
            <div className="glass-card metric-card">
              <div className="metric-number text-gradient">+140</div>
              <div className="metric-label">Projetos & Estratégias Concluídos</div>
            </div>
            <div className="glass-card metric-card">
              <div className="metric-number text-gradient-emerald">99.2%</div>
              <div className="metric-label">Índice de Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="services-section" id="servicos">
        <div className="container">
          <div className="section-header">
            <div className="badge-pill">NOSSAS SOLUÇÕES</div>
            <h2 className="section-title">
              Serviços Desenhados para Gerar <span className="text-gradient">Impacto Real no Caixa</span>
            </h2>
            <p className="section-desc">
              Não entregamos apenas código ou layouts bonitos. Construímos ativos estratégicos focados em aquisição, credibilidade e previsibilidade de receita.
            </p>
          </div>

          <div className="services-grid">
            {servicos.map((servico, index) => (
              <div className="glass-card service-card" key={index} id={`servico-card-${index}`}>
                <div className="service-icon-box">{servico.icon}</div>
                <h3 className="service-title">{servico.titulo}</h3>
                <p className="service-desc">{servico.desc}</p>
                <ul className="service-features">
                  {servico.itens.map((item, idx) => (
                    <li className="service-feature-item" key={idx}>
                      <CheckCircle2 size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contato" className="btn btn-secondary" style={{ width: '100%' }}>
                  Quero Essa Solução
                  <ArrowRight size={15} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos & Pacotes Section */}
      <section className="products-section" id="produtos">
        <div className="container">
          <div className="section-header">
            <div className="badge-pill">PRODUTOS & PLANOS</div>
            <h2 className="section-title">
              Escolha o Formato Ideal para a sua <span className="text-gradient">Fase de Negócio</span>
            </h2>
            <p className="section-desc">
              Escopos transparentes, entregáveis claros e prazos estabelecidos desde o primeiro dia.
            </p>
          </div>

          <div className="pricing-grid">
            {produtos.map((prod, index) => (
              <div
                className={`glass-card pricing-card ${prod.destaque ? 'pricing-featured' : ''}`}
                key={index}
                id={`produto-card-${index}`}
              >
                {prod.destaque && <div className="featured-tag">Mais Escolhido</div>}
                <div className="pricing-header">
                  <h3 className="pricing-name">{prod.nome}</h3>
                  <p className="pricing-target">{prod.alvo}</p>
                </div>

                <div className="pricing-value-box">
                  <div className="pricing-price">{prod.preco}</div>
                  <div className="pricing-period">{prod.periodo}</div>
                </div>

                <ul className="service-features" style={{ flexGrow: 1 }}>
                  {prod.itens.map((item, idx) => (
                    <li className="service-feature-item" key={idx}>
                      <CheckCircle2 size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contato"
                  className={`btn ${prod.destaque ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ width: '100%', marginTop: '20px' }}
                >
                  Selecionar Este Pacote
                  <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Simulator Section */}
      <section className="simulator-section" id="simulador">
        <div className="container">
          <div className="section-header">
            <div className="badge-pill">SIMULADOR INTERATIVO</div>
            <h2 className="section-title">
              Calcule o Potencial de <span className="text-gradient-emerald">Ganho do Seu Negócio</span>
            </h2>
            <p className="section-desc">
              Descubra quanto a reestruturação da sua presença comercial e processos automatizados podem adicionar ao seu faturamento anual.
            </p>
          </div>

          <div className="glass-card simulator-box">
            <div className="sim-controls">
              <div className="sim-control-group">
                <div className="sim-label">
                  <span>Faturamento Mensal Atual:</span>
                  <span style={{ color: 'var(--accent-cyan)' }}>
                    {faturamento.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="400000"
                  step="5000"
                  value={faturamento}
                  onChange={(e) => setFaturamento(Number(e.target.value))}
                  className="sim-slider"
                  id="slider-faturamento"
                />
              </div>

              <div className="sim-control-group">
                <div className="sim-label">
                  <span>Tamanho da Equipe / Envolvidos:</span>
                  <span style={{ color: 'var(--accent-cyan)' }}>{equipe} pessoas</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={equipe}
                  onChange={(e) => setEquipe(Number(e.target.value))}
                  className="sim-slider"
                  id="slider-equipe"
                />
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.5 }}>
                * Estimativas baseadas na média histórica de nossos clientes nos primeiros 6 meses de aceleração.
              </p>
            </div>

            <div className="sim-result-card">
              <span className="badge-pill" style={{ marginBottom: '10px' }}>PROJEÇÃO DE IMPACTO</span>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Potencial de Ganho Adicional / Mês:</div>
              <div className="sim-result-value">
                + {ganhoEstimado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </div>
              <div style={{ fontSize: '0.92rem', color: '#cbd5e1' }}>
                Economia estimada de <strong style={{ color: 'var(--accent-cyan)' }}>{horasPoupadas} horas/semana</strong> em trabalho manual repetitivo.
              </div>
              <a href="#contato" className="btn btn-primary" style={{ marginTop: '24px', width: '100%' }}>
                Quero Desbloquear Esse Resultado
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section" id="depoimentos">
        <div className="container">
          <div className="section-header">
            <div className="badge-pill">DEPOIMENTOS</div>
            <h2 className="section-title">
              O Que Dizem Quem Já <span className="text-gradient">Acelerou Conosco</span>
            </h2>
            <p className="section-desc">
              Construímos relacionamentos de longo prazo baseados em entrega sólida e valor comprovado.
            </p>
          </div>

          <div className="testimonials-grid">
            {depoimentos.map((dep, index) => (
              <div className="glass-card testimonial-card" key={index} id={`depoimento-card-${index}`}>
                <div className="stars-row">
                  {[...Array(dep.estrelas)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-quote">"{dep.texto}"</p>
                <div className="client-profile">
                  <div className="client-avatar">{dep.avatar}</div>
                  <div className="client-info">
                    <h4>{dep.nome}</h4>
                    <p>{dep.cargo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="section-header">
            <div className="badge-pill">DÚVIDAS FREQUENTES</div>
            <h2 className="section-title">Respostas Claras para as Perguntas Comuns</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                className="glass-card faq-item"
                key={index}
                onClick={() => toggleFaq(index)}
                id={`faq-item-${index}`}
              >
                <div className="faq-header">
                  <span>{faq.pergunta}</span>
                  {openFaq === index ? <ChevronUp size={20} color="var(--accent-cyan)" /> : <ChevronDown size={20} />}
                </div>
                {openFaq === index && <div className="faq-answer">{faq.resposta}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contato">
        <div className="container">
          <div className="section-header">
            <div className="badge-pill">VAMOS CONVERSAR</div>
            <h2 className="section-title">
              Dê o Próximo Passo para o <span className="text-gradient">Crescimento da sua Empresa</span>
            </h2>
            <p className="section-desc">
              Preencha os dados abaixo para receber uma análise preliminar ou inicie a conversa imediatamente pelo WhatsApp.
            </p>
          </div>

          <div className="contact-layout">
            <div className="glass-card contact-info-card">
              <h3 style={{ fontSize: '1.45rem', marginBottom: '24px', fontFamily: 'var(--font-heading)' }}>
                Canais de Atendimento
              </h3>

              <div className="contact-item">
                <div className="contact-icon-bubble">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <div className="contact-label">WhatsApp Comercial</div>
                  <a href="https://api.whatsapp.com/send?phone=5511999999999" target="_blank" rel="noopener noreferrer" className="contact-value">
                    +55 (11) 99999-9999
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-bubble">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="contact-label">E-mail Corporativo</div>
                  <a href="mailto:contato@seudominio.com.br" className="contact-value">
                    contato@seudominio.com.br
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-bubble">
                  <Clock size={22} />
                </div>
                <div>
                  <div className="contact-label">Tempo de Resposta</div>
                  <div className="contact-value">Menos de 2 horas em horário comercial</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-bubble">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <div className="contact-label">Privacidade & Dados</div>
                  <div className="contact-value">Acordo de Confidencialidade (NDA) Garantido</div>
                </div>
              </div>
            </div>

            <div className="glass-card contact-form-box">
              <h3 style={{ fontSize: '1.45rem', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>
                Envie sua Mensagem / Solicitação
              </h3>

              {formEnviado ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(16,185,129,0.2)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Solicitação Iniciada!</h4>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
                    Sua mensagem foi direcionada ao nosso WhatsApp para atendimento ágil. Se a janela não abriu automaticamente, clique no botão abaixo:
                  </p>
                  <a
                    href="https://api.whatsapp.com/send?phone=5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    Abrir Conversa no WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={enviarWhatsAppDireto} id="form-contato">
                  <div className="form-group">
                    <label className="form-label" htmlFor="input-nome">Seu Nome / Responsável *</label>
                    <input
                      type="text"
                      id="input-nome"
                      name="nome"
                      required
                      placeholder="Ex: Carlos Silva"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="input-email">E-mail Corporativo *</label>
                    <input
                      type="email"
                      id="input-email"
                      name="email"
                      required
                      placeholder="carlos@suaempresa.com.br"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="input-whatsapp">WhatsApp (com DDD) *</label>
                    <input
                      type="tel"
                      id="input-whatsapp"
                      name="whatsapp"
                      required
                      placeholder="(11) 98888-7777"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="select-solucao">Solução de Maior Interesse</label>
                    <select
                      id="select-solucao"
                      name="solucao"
                      value={formData.solucao}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="Consultoria Estratégica B2B">Consultoria Estratégica B2B</option>
                      <option value="Desenvolvimento de Site / Landing Page">Desenvolvimento de Site / Landing Page</option>
                      <option value="Automação Comercial & CRM">Automação Comercial & CRM</option>
                      <option value="Diagnóstico Sprint 7D">Diagnóstico Sprint 7D</option>
                      <option value="Outro / Solução Sob Demanda">Outro / Solução Sob Demanda</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="textarea-mensagem">Conte um pouco sobre sua operação e objetivos</label>
                    <textarea
                      id="textarea-mensagem"
                      name="mensagem"
                      placeholder="Ex: Queremos atrair mais clientes para nosso serviço de..."
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      className="form-textarea"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-whatsapp" style={{ width: '100%', padding: '15px' }} id="btn-submit-lead">
                    <MessageCircle size={18} />
                    Enviar e Falar no WhatsApp Agora
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="brand-logo">
              <div className="brand-icon-wrapper" style={{ width: '32px', height: '32px' }}>
                <Sparkles size={18} />
              </div>
              <span>VEXUS<span className="text-gradient">.B2B</span></span>
            </div>

            <div style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
              Soluções Estratégicas & Produtos Digitais de Alta Conversão
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#inicio" className="nav-link">Início</a>
              <a href="#servicos" className="nav-link">Serviços</a>
              <a href="#produtos" className="nav-link">Produtos</a>
              <a href="#contato" className="nav-link">Contato</a>
            </div>
          </div>

          <div className="footer-copy">
            © {new Date().getFullYear()} Vexus Estratégia B2B. Todos os direitos reservados. Projetado para máxima conversão.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://api.whatsapp.com/send?phone=5511999999999&text=Olá!%20Gostaria%20de%20conversar%20sobre%20as%20soluções%20e%20serviços."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        title="Falar no WhatsApp"
        id="btn-floating-whatsapp"
      >
        <span className="floating-badge"></span>
        <MessageCircle size={30} />
      </a>
    </div>
  );
}
