import { data } from "@/data/fourthGraph";
import React from "react";

const Table = () => {
  const colorMap: { [key: string]: string } = data.reduce((acc: any, curr) => {
    acc[curr.reason] = curr.color;
    return acc;
  }, {});

  const getClassByIndex = (index: number) => {
    const backgroundColor = index % 2 === 0 ? "bg-gray-400" : "bg-gray-300";
    const textColor = colorMap[data[index].reason];
    return `${backgroundColor} ${textColor} ${textSize}`;
  };

  const gapBetweenColumns = "px-8";
  const textSize = "text-sm";

  return (
    <table className="table-fixed">
      <thead>
        <tr>
          <th className={`text-left ${gapBetweenColumns} ${textSize}`}>
            Motivo
          </th>
          <th className={`text-left ${gapBetweenColumns} ${textSize}`}>
            Duração
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className={getClassByIndex(index)}>
            <td className={getClassByIndex(index) + ` ${gapBetweenColumns}`}>
              {item.reason}
            </td>
            <td className={getClassByIndex(index) + ` ${gapBetweenColumns}`}>
              {item.duration}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
