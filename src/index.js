import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

function Products() {
  return (
    <div>
      <h3>Знаки зодиака</h3>
      <table>
        <thead>
          <tr>
            <th>Знак зодиака</th>
            <th>Период</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Овен</td>
            <td>21.03 - 20.04</td>
          </tr>
          <tr>
            <td>Телец</td>
            <td>21.04 - 21.05</td>
          </tr>
          <tr>
            <td>Близнецы</td>
            <td>22.05 - 21.06</td>
          </tr>
          <tr>
            <td>Рак</td>
            <td>22.06 - 22.07</td>
          </tr>
          <tr>
            <td>Лев</td>
            <td>23.07 - 23.08</td>
          </tr>
          <tr>
            <td>Дева</td>
            <td>24.08 - 23.09</td>
          </tr>
          <tr>
            <td>Весы</td>
            <td>24.09 - 23.10</td>
          </tr>
          <tr>
            <td>Скорпион</td>
            <td>24.10 - 22.11</td>
          </tr>
          <tr>
            <td>Стрелец</td>
            <td>23.11 - 22.12</td>
          </tr>
          <tr>
            <td>Козерог</td>
            <td>23.12 - 20.01</td>
          </tr>
          <tr>
            <td>Водолей</td>
            <td>21.01 - 19.02</td>
          </tr>
          <tr>
            <td>Рыбы</td>
            <td>20.02 - 20.03</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
ReactDOM.render(<Products></Products>, document.querySelector(".body"));
