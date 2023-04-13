const HeaderDashboards = () => {
  return (
    <div className="mb-2 h-40 border border-gray-400 px-6 py-4">
      <div className="block h-1/2 ">
        <div className="grid grid-cols-7 gap-3 text-black sm:grid-cols-1 md:grid-cols-7">
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
      <div className="block h-1/2">
        <div className="grid grid-cols-4 gap-3 text-black sm:grid-cols-1 md:grid-cols-4">
          <div className="relative">
            <h2 className="text-label-color">Linha</h2>
            <select className="focus:shadow-outline block w-4/6 appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none">
              <option>132M | TFVE - B34D</option>
              <option>Other option 1</option>
              <option>Other option 2</option>
              <option>Other option 3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-11 right-20 flex items-center px-4 text-gray-700">
              <svg
                className="h-8 w-24 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M6 8l4 4 4-4"></path>
              </svg>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-5xl font-bold text-green-700">70,2%</h2>
              <h2 className="text-2xl font-bold text-red-700">-6,7↓</h2>
            </div>
            <h2 className="font-bold text-label-color">
              Fator Qualidade / 1215
            </h2>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-5xl font-bold text-green-700">99,7%</h2>
              <h2 className="text-2xl font-bold text-green-500">-0,4↑</h2>
            </div>
            <h2 className="font-bold text-label-color">Capacidade / 1215</h2>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-5xl font-bold text-green-700">70,0%</h2>
              <h2 className="text-2xl font-bold text-red-700">-6,6↓</h2>
            </div>
            <h2 className="font-bold text-label-color">OEE / 1215</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDashboards;
