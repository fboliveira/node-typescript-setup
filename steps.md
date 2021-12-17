# Setup de um projeto Nodejs com TypeScript

## Referência [Setup para apps Node.js (TypeScript, ESLint, Jest, Babel) | Code/Drops #33](https://youtu.be/rCeGfFk-uCk)

### Primeiros passos

```bash
mkdir <node_project>
cd <node_project>
git init
yarn init (ou npm init)
```

### Instalação TypeScript

Inclusão como dependência de desenvolvimento

```bash
yarn add typescript -D
```

Criação do arquivo de configuração:

```bash
yarn tsc --init
```

### Criação do arquivo principal

Pasta: `src/server.ts`

### Adição de outros pacotes

Express.js e tipos

```bash
yarn add express
yarn add @types/express -D
```

### Execução do projeto

Transforma o código TypeScript em JS, executa e monitora alterações. Evita ter que executar `yarn tsc` para compilar,  `node src/server.js` para executar e o monitoramento (`nodemon`).

```bash
yarn add ts-node-dev -D
```

Inicializa:

```bash
yarn ts-node-dev src/server.ts
```

Inserir comando no `package.json` na propriedade `scripts`.
TODO: verificar flags.

```json
  "scripts": {
    "dev": "ts-node-dev --respawn --transpileOnly --ignore-watch node_modules --no-notify src/server.ts"
  },
```

### Adicionar gitignore

<https://github.com/github/gitignore/blob/master/Node.gitignore>

### Commit

Add Typescript, express and ts-node-dev

### Definições no arquivo tsconfig

```json
  "target": "es2017", "es2019"
  "outDir": "./dist", 
  "rootDir": "./src",
```

[Versões suportadas](https://node.green/)

TODO: <https://youtu.be/rCeGfFk-uCk?t=758>  
