# successful-business

## Diagrama ER
- **[Diagrama](https://imgur.com/a/sXSf1cw)**

Diagrama ER da API definindo bem as relações entre as tabelas do banco de dados.

## 4. Rodando localmente

### 4.1 Instale as dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```bash
  yarn
```

### 4.2 Variáveis de Ambiente

Em seguida, crie um arquivo .env, copiando o formato do arquivo .env.example:

### 4.3 Migrations

Execute as migrations com o comando:

```bash
  yarn typeorm migration:run -d src/data-source.ts
```

### Rode localmente em sua maquina

```bash
  yarn dev
```
