# Automação de ANS - CNI

Este repositório contém a solução para a avaliação técnica de Analista de Processos II da CNI.

## Estrutura
- **automacao**: Backend em Spring Boot e Frontend em Angular para coleta e processamento de dados em informações.
- **bizagi**: Fluxo do processo modelado no Bizagi (PDF).
- **documentacao**: Documentação do processo (histórias de usuário, requisitos, regras, notificações).
- **json**: Arquivo com informações relevantes para serem consumidas pelo Power BI.
- **powerbi**: Dashboard Power BI para monitoramento dos ANS.

## Instruções
1. **Automação**: Execute o projeto Spring Boot (`ans-automation`) e acesse o endpoint `/api/ans/upload` para carregar planilhas.
2. **Bizagi**: Visualize o fluxo em `bizagi/Relatorio Bizagi do Processo ANS.pdf`.
3. **Power BI**: Abra `powerbi/painel-monitoramento-ans.pbix` para explorar os dashboards.
4. **Documentação**: Consulte `documentacao/` para detalhes.

## Tecnologias
- Java 17, Spring Boot 3.x (Backend)
- Angular (Frontend)
- Bizagi Modeler
- Power BI Desktop
- PostgreSQL