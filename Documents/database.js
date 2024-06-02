import * as SQLite from 'expo-sqlite';

// Abra ou crie o banco de dados
const db = SQLite.openDatabase('agenda.db');

// Função para criar a tabela de agendamentos
const createAppointmentsTable = async () => {
  try {
    await db.transaction(async tx => {
      await tx.executeSql(
        `CREATE TABLE IF NOT EXISTS appointments (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          year INTEGER,
          month INTEGER,
          day INTEGER,
          hour INTEGER,
          minutes INTEGER
        );`
      );
      console.log('Tabela de agendamentos criada com sucesso');
    });
  } catch (error) {
    console.log('Erro ao criar tabela de agendamentos', error);
  }
};

// Inicialize a tabela de agendamentos
createAppointmentsTable();

// Função para inserir um novo agendamento
const insertAppointment = (year, month, day, hour, minutes) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO appointments (year, month, day, hour, minutes) VALUES (?, ?, ?, ?, ?)',
      [year, month, day, hour, minutes],
      (tx, results) => {
        if (results.rowsAffected > 0) {
          console.log('Agendamento inserido com sucesso');
        } else {
          console.log('Erro ao inserir agendamento');
        }
      },
      error => {
        console.log('Erro ao inserir agendamento', error);
      }
    );
  });
};

// Exporte as funções que você precisa usar em outros arquivos
export { insertAppointment };
