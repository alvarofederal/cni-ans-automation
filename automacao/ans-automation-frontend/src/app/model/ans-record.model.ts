export interface AnsRecord {
    id?: number;
    indicadorId?: number;
    superintendencia?: string;
    siglaSup?: string;
    gerencia?: string;
    siglaGer?: string;
    indicador?: string;
    formula?: string;
    polaridade?: string;
    unidadeMedida?: string;
    periodicidade?: string;
    complexidade?: string;
    nma?: string;
    meta2023?: number;
    resultado2023?: number;
    meta2024?: number;
    real2024?: number;
    mes?: number;
    qtdDentroPrazo?: number;
    qtdTotal?: number;
    smu?: string;
    observacoes?: string;
  }