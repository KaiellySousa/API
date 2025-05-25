# API de Gerenciamento de Dados - Gatonautas- Trabalho

Primeira API feita por mim.Sinta-se livre para colaborar, mas, caso realize melhorias ou utilize partes deste código, por favor, mantenha os devidos créditos.


Este projeto é uma API desenvolvida para fins acadêmicos, como parte de um trabalho de faculdade. A API tem como objetivo realizar operações de armazenamento, gerenciamento e consulta de dados utilizando serviços externos.

Foi desenvolvida por **Kaielly Sousa**, com base nos conhecimentos adquiridos em aula e pesquisas externas. 
---

##Tecnologias Utilizadas

- **Next.js** – Framework para desenvolvimento em React com renderização híbrida.
- **Node.js** – Ambiente de execução JavaScript.
- **Firebase Firestore** – Banco de dados NoSQL em nuvem.
- **Firebase Authentication** – Gerenciamento de autenticação (se aplicado).
- **ConvertKit API** – Integração para gerenciamento de newsletters e automações.
- **JavaScript / TypeScript** – Linguagens principais do projeto.

---

##Funcionalidades da API

- Integração com banco de dados Firestore.
- Suporte para integração com ConvertKit.
- Rotas para criação, leitura e gerenciamento de dados.
- Suporte para variáveis de ambiente (segurança de chaves).
- Código modular e fácil de estender.

---

##Configurações de Ambiente

Para rodar o projeto localmente, é necessário configurar um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
# Firebase Config
NEXT_PUBLIC_FIREBASE_API_KEY= SUA_API_KEY_DO_FIREBASE
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN= SEU_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID= SEU_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET= SEU_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID= SEU_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID= SEU_APP_ID
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID= SEU_MEASUREMENT_ID

# ConvertKit
CONVERTKIT_API_SECRET= SUA_API_SECRET_CONVERTKIT

# API - Projeto Acadêmico

Este repositório contém uma API desenvolvida por **Kaielly Sousa** como parte de um **trabalho acadêmico**.  
O projeto tem como objetivo o desenvolvimento e prática de conceitos aprendidos na faculdade, aplicando ferramentas modernas de desenvolvimento web.

## 🚀 Tecnologias e Ferramentas Utilizadas

- **Node.js**
- **Next.js**
- **Firebase** (Firestore Database)
- **JavaScript**

## 📁 Configuração do Ambiente

Antes de executar o projeto, é necessário configurar um arquivo `.env.local` na raiz com suas credenciais do Firebase e outras configurações necessárias.  
⚠️ As credenciais não estão expostas neste repositório por questões de segurança.

##Executando o Projeto Localmente

1. Instale as dependências:

```bash
npm install
```

2. Execute o projeto:

```bash
npm run dev
```

3. Acesse no navegador:

```
http://localhost:3000
```

