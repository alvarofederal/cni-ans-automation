# Automação de ANS - CNI

Este repositório contém a solução para a avaliação técnica de Analista de Processos II da CNI.

## Estrutura
- **documentacao**: Documentação do processo (histórias de usuário, requisitos, regras, notificações).
- **bizagi**: Fluxo do processo modelado no Bizagi (PDF).
- **automacao**: Backend em Spring Boot e fronten em Angular para coleta e processamento de dados.
- **powerbi**: Dashboard Power BI para monitoramento dos ANS.

## Instruções
1. **Automação**: Execute o projeto Spring Boot (`ans-automation`) e acesse o endpoint `/api/ans/upload` para carregar planilhas.
2. **Bizagi**: Visualize o fluxo em `bizagi/fluxo_processo.pdf`.
3. **Power BI**: Abra `powerbi/dashboard_ans.pbix` para explorar os dashboards.
4. **Documentação**: Consulte `documentacao/documentacao_processo.docx` para detalhes.

## Tecnologias
- Java 17, Spring Boot 3.x
- Bizagi Modeler
- Power BI Desktop
- PostgreSQL