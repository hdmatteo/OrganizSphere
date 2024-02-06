import { useState, useEffect } from "react";

interface QuoteData {
  quote: string;
  author: string;
}

export default function Quote() {
  const [quotes, setQuotes] = useState<QuoteData[]>([]);

  useEffect(() => {
    getQuotes()
      .then((data) => {
        setQuotes(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  async function getQuotes() {
    const APIURL = `https://api.api-ninjas.com/v1/quotes?category=education`;
    try {
      const response = await fetch(APIURL, {
        headers: { "X-Api-Key": "ZvIyKU88hHPdBopIMnMcHA==MEV6ePML9MKeCUjS" },
      });
      if (!response.ok) {
        throw new Error("Netzwerkantwort war nicht in Ordnung");
      }
      const data: QuoteData[] = await response.json();
      return data;
    } catch (error) {
      console.error("Fehler beim Abrufen der Qoutes", error);
      throw error;
    }
  }

  return (
    <div className="text-white bg-base-200 rounded-md shadow-md p-4 mt-2">
      {quotes.map((quote, index) => (
        <div key={index} className="quote">
          <p className="text-gray-800 dark:text-white">{quote.quote}</p>
          <p className=" author text-end text-blue-500">{quote.author}</p>
        </div>
      ))}
    </div>
  );
}
