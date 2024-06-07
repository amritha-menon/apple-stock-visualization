module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
  

    res.status(200).json({
      analyst_estimates: {
        "Citibank": 6.5,
        "Goldman Sachs": 7.9,
        "Morgan Stanley": 9.87,
      },
      current_ratio: 7.1,
      debt_to_equity_ratio: 2.1,
      eps: 1.7,
      market_ap: 2.5,
      news: {
        article1: {
          sentiment: { score: 0.9, value: "positive" },
          summary: "This is Article1",
        },
        article2: {
          sentiment: { score: 0.67, value: "negative" },
          summary: "This is Article2",
        },
        article3: {
          sentiment: { score: 0.559, value: "positive" },
          summary: "This is Article3",
        },
      },
      pb_ratio: 7.9,
      pe_ratio: 1.2,
      peg_ratio: 5.5,
      ps_ratio: 33.5,
      shares_outstanding: 317,
      ticker: "AAPL",
    });
  };
  