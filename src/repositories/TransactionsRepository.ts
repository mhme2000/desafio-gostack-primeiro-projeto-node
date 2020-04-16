// import { response } from 'express';
import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'outcome' | 'income';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const findTransactionIncome = this.transactions.filter(
      transaction => transaction.type === 'income',
    );
    const valorInicial = 0;
    const income: number = findTransactionIncome.reduce(
      (acumulador: number, valorAtual: Transaction) =>
        acumulador + valorAtual.value,
      valorInicial,
    );
    const findTransactionOutcome = this.transactions.filter(
      transaction => transaction.type === 'outcome',
    );
    const valorInicial2 = 0;
    const outcome: number = findTransactionOutcome.reduce(
      (acumulador: number, valorAtual: Transaction) =>
        acumulador + valorAtual.value,
      valorInicial2,
    );
    const total = income - outcome;
    const balance: Balance = {
      income,
      outcome,
      total,
    };
    return balance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
