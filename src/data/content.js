// Todo o conteúdo do site fica aqui. Edite este arquivo para atualizar o portfólio.
export const CONTACT = {
  email: 'w4ltrick@gmail.com',
  github: 'https://github.com/w4ltrick',
  linkedin: 'https://www.linkedin.com/in/w4ltrick',
  whatsapp: 'https://wa.me/5548998331797',
  whatsappLabel: '(48) 99833-1797'
}

export const links = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'contato', label: 'Contato' }
]

export const facts = [
  { t: 'Formação', d: 'Análise e Desenvolvimento de Sistemas, SENAI' },
  { t: 'Certificação', d: 'AWS Academy Graduate, Data Engineering' },
  { t: 'Idiomas', d: 'Português nativo, inglês intermediário' },
  { t: 'Base', d: 'Florianópolis, SC' }
]

export const skills = [
  { emoji: '🎨', name: 'Front-end', items: ['JavaScript', 'TypeScript', 'Vue.js', 'React', 'HTML', 'CSS'] },
  { emoji: '⚙️', name: 'Back-end', items: ['Python', 'Java', 'C++'] },
  { emoji: '📱', name: 'Mobile', items: ['Flutter'] },
  { emoji: '🧰', name: 'Ferramentas e conceitos', items: ['Git', 'APIs REST', 'MySQL', 'SQLite', 'Integração de sistemas'] }
]

// Para adicionar um projeto, inclua um novo objeto nesta lista.
// Opcional: image: '/imagens/meu-projeto.png' (arquivo em public/imagens).
export const projects = [
  {
    name: 'VOLUN',
    initials: 'VL',
    desc: 'Loja virtual de camisetas com identidade visual própria, catálogo de produtos e experiência de compra online.',
    tech: ['E-commerce', 'Vitrine de produtos'],
    demo: 'https://volun-lac.vercel.app/'
  },
  {
    name: 'FoodTruck',
    initials: 'FT',
    desc: 'Aplicativo de pedidos com validação via QR Code, desenvolvido na faculdade, onde atuei em Garantia de Qualidade (QA). A demonstração mostra apenas o front-end.',
    tech: ['Svelte', 'Express.js', 'SQLite', 'Tailwind'],
    github: 'https://github.com/w4ltrick',
    demo: 'https://foodtruck-pa.netlify.app/'
  }
]

export const experience = [
  {
    role: 'Estagiário de Suporte ao Cliente',
    org: 'Pieta.Tech · Suporte Técnico',
    when: 'set/2024 a nov/2024',
    tasks: [
      'Suporte técnico aos usuários, com resolução de problemas e dúvidas sobre o sistema',
      'Atendimento e registro de chamados',
      'Comunicação com a equipe de desenvolvimento para reportar erros e sugerir melhorias'
    ]
  }
]

export const codeSnippet = `<span class="k">const</span> vitor = {
  <span class="k">cargo</span>: <span class="s">"Desenvolvedor de Software"</span>,
  <span class="k">foco</span>: [<span class="s">"Vue"</span>, <span class="s">"React"</span>, <span class="s">"TypeScript"</span>],
  <span class="k">cidade</span>: <span class="s">"Florianópolis"</span>,
  <span class="k">aprendendo</span>: <span class="s">"sempre"</span>,
  <span class="k">disponivel</span>: <span class="k">true</span>
};`
