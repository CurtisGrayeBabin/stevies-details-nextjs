import * as React from "react";

interface PriceData {
    title: string;
    notes: string;
    prices: any;
    details: any;
    alternateFirstColumnTitle: string;
}

function PriceContent({ jsonData }: { jsonData: PriceData }) {

  return (
      <>
        <div className="center-text">
            <h1>{jsonData.title}</h1>
            {jsonData.notes ? <p>{jsonData.notes}</p> : ""}
        </div>

            <table className="pricing-table">
                <caption>Prices</caption>
                <thead>
                    <tr>
                        <th scope="col">{jsonData.alternateFirstColumnTitle ? jsonData.alternateFirstColumnTitle : "Vehicle"}</th>
                        <th scope="col">Starting Price</th>
                    </tr>
                </thead>
                <tbody>
                    {jsonData.prices.map((priceObj: any, index: number) => {
                        return (
                            <tr key={index}>
                                <td>{priceObj.text}</td>
                                <td className="second-col">${priceObj.price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        {
            jsonData.details.map((detail: any, index: number) => {
                return (
                    <div key={`div_${index}`}>
                        {detail.header ? <h2 key={`detail_${index}`}>{detail.header}</h2> : "" }
                        <ul key={`ul_${index}`}>
                            {
                                detail.bullets.map((bullet: any, index: number) => {
                                    return <li key={`bullet_${index}`}>{bullet}</li>
                                })
                            }
                        </ul>
                    </div>
                );
            })
        }
      </>
  );
}

export default PriceContent;