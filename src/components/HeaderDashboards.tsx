import { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const HeaderDashboards = () => {
  const [qualityFactor, setQualityFactor] = useState(70);
  const [capacity, setCapacity] = useState(98);
  const [OEE, setOEE] = useState(70);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomFactor = Number((Math.random() * 30 + 60).toFixed(2));
      setQualityFactor(randomFactor);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomFactor = Number((Math.random() * 0.2 + 98).toFixed(2));
      setCapacity(randomFactor);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomFactor = Number((Math.random() * 20 + 70).toFixed(2));
      setOEE(randomFactor);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mb-2 h-1/4 border border-gray-400 px-6 py-4">
      <div className="block h-1/2 ">
        <div className="grid gap-3 text-black sm:grid-cols-1 lg:grid-cols-7">
          <h2 className="font-bold text-label-color">Turno 1215</h2>
          <div>
            <h3 className="text-label-color">Produto</h3>
            <h2 className="font-bold text-label-color">W22 Bomba JM</h2>
          </div>
          <div>
            <h3 className="text-label-color">Quantidade</h3>
            <h2 className="font-bold text-label-color">9082</h2>
          </div>
          <div>
            <h3 className="text-label-color">Primeiro Item</h3>
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-label-color">12/03/2019</h2>
              <h4 className="text-label-color">10:02:30</h4>
            </div>
          </div>
          <div>
            <h3 className="text-label-color">Último Item</h3>
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-label-color">18/03/2023</h2>
              <h4 className="text-label-color">12:03:20</h4>
            </div>
          </div>
          <div>
            <h3 className="text-label-color">Manutenção</h3>
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-label-color">17/03/2023</h2>
              <h4 className="text-label-color">09:02:10</h4>
            </div>
          </div>
          <div>
            <h3 className="text-label-color">Status</h3>
            <h2 className="font-bold text-green-700">EM PRODUÇÃO</h2>
          </div>
        </div>
      </div>
      <div className="mt-4 block h-1/2">
        <div className="grid gap-3 text-black sm:grid-cols-1 lg:grid-cols-4">
          <div className="relative">
            <h2 className="text-label-color">Linha</h2>
            <div className="relative inline-block w-4/6">
              <select className="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none">
                <option>132S | TFVE - B34D</option>
                <option>160M | TFVE - B34D</option>
                <option>180M | TFVE - B34D</option>
                <option>200L | TFVE - B34D</option>
                <option>225S/M | TFVE - B34D</option>
                <option>250S/M | TFVE - B34D</option>
                <option>280S/M | TFVE - B34D</option>
                <option>315S/M | TFVE - B34D</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <AiFillCaretDown className="text-gray-700" size={24} />
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-5xl font-bold text-green-700">
                {qualityFactor}%
              </h2>
              <h2 className="text-2xl font-bold text-red-700">
                -{(100 - qualityFactor).toFixed(2)}↓
              </h2>
            </div>
            <h2 className="font-bold text-label-color">
              Fator Qualidade / 1215
            </h2>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-5xl font-bold text-green-700">{capacity}%</h2>
              <h2 className="text-2xl font-bold text-green-500">
                -{(100 - capacity).toFixed(2)}↑
              </h2>
            </div>
            <h2 className="font-bold text-label-color">Capacidade / 1215</h2>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-5xl font-bold text-green-700">{OEE}%</h2>
              <h2 className="text-2xl font-bold text-red-700">
                -{(100 - OEE).toFixed(2)}↓
              </h2>
            </div>
            <h2 className="font-bold text-label-color">OEE / 1215</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDashboards;
