import fs, { WriteStream } from "fs";
import path from "path";
import { CSV_DELIMITER, CSV_RESULTS_FOLDER } from "../constants";
import { Network } from "../types";

export default class Csv {
  private stream: WriteStream;
  private rows: (string | number)[][] = [];

  constructor(network: Network) {
    this.stream = fs.createWriteStream(
      path.join(CSV_RESULTS_FOLDER, network + ".csv"),
    );
  }

  write(data: (string | number)[]) {
    this.rows.push(data);
    const line = data.join(CSV_DELIMITER) + "\n";
    this.stream.write(line);
  }

  addTotal() {
    if (this.rows.length < 2) return; // Если только заголовок или нет данных

    const header = this.rows[0];
    const dataRows = this.rows.slice(1);
    const totals = header.map((col, colIndex) => {
      // Пропускаем только столбец с адресами
      if (colIndex === 0) return "Total balance:";
      
      // Для всех остальных столбцов считаем сумму
      return dataRows.reduce((sum, row) => {
        const value = parseFloat(row[colIndex] as string) || 0;
        return sum + value;
      }, 0).toString();
    });

    this.stream.write("\n");
    this.write(totals);
  }

  close() {
    this.addTotal();
    this.stream.close();
  }
}
