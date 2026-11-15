# Portfólio – Vitor W Oliveira

Vue 3 (Composition API) + Vite.

## Como rodar
    npm install
    npm run dev       # desenvolvimento
    npm run build     # gera a pasta dist/
    npm run preview   # testa o build

## Onde editar
- `src/data/content.js`: textos, contatos, habilidades, projetos e experiência.
- `src/assets/styles.css`: cores (variáveis em `:root`) e estilos.
- `src/components/`: componentes de cada seção; `composables/` guarda a lógica reutilizável.

## Novo projeto
Adicione um objeto à lista `projects` em `content.js`. Para usar imagem, coloque o arquivo em `public/imagens/` e informe `image: '/imagens/arquivo.png'`.
