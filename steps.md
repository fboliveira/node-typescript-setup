# Setup de um projeto Nodejs com TypeScript
## Referência [Setup para apps Node.js (TypeScript, ESLint, Jest, Babel) | Code/Drops #33](https://youtu.be/rCeGfFk-uCk)

### Primeiros passos

```
mkdir <node_project>
cd <node_project>
git init
yarn init (ou npm init)
```

### Instalação TypeScript

Inclusão como dependência de desenvolvimento
```
yarn add typescript -D
```

Criação do arquivo de configuração:

```
yarn tsc --init
```

### Criação do arquivo principal

Pasta: `src/server.ts`


### Adição de outros pacotes

Express.js e tipos

```
yarn add express
yarn add @types/express -D
```

### Execução do projeto

Transforma o código TypeScript em JS, executa e monitora alterações. Evita ter que executar `yarn tsc` para compilar,  `node src/server.js` para executar e o monitoramento (`nodemon`).


```
yarn add ts-node-dev -D
```

Inicializa:

```
yarn ts-node-dev src/server.ts
```

Inserir comando no `package.json` na propriedade `scripts`. 
TODO: verificar flags.

```json
  "scripts": {
    "dev": "ts-node-dev --respawn --transpileOnly --ignore-watch node_modules --no-notify src/server.ts"
  },
```

### Adicionar gitignore:

<https://github.com/github/gitignore/blob/master/Node.gitignore>

### Commit?