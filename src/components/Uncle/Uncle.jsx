import React, { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import Brother from "../Brother/Brother";
import { MoneyContext } from "../GrandPa/GrandPa";

const Uncle = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Uncle</h2>
      <p>
        <small>Grandpa Money: {money}</small>
      </p>
      <button onClick={() => setMoney(money + 1000)}>Send 1000 TK</button>
      <section className="flex">
        <Cousin>Nabil</Cousin>
        <Cousin></Cousin>
        <Cousin>Kabila</Cousin>
      </section>
    </div>
  );
};

export default Uncle;
