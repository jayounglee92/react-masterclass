import React from "react";
import styled from "styled-components";
import PriceItem from "./PriceItem";

const PriceBox = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

interface PriceProps {
  tickersData?: PriceData;
}

function Price({ tickersData }: PriceProps) {
  return (
    <PriceBox>
      <PriceItem
        label="Price"
        value={`$ ${tickersData?.quotes.USD.price.toFixed(3)}`}
      />
      <PriceItem
        label="Max Change rate in last 24h"
        value={`${tickersData?.quotes.USD.market_cap_change_24h} %`}
      />
      <PriceItem
        label="Change rate (last 30 Minutes)"
        value={`${tickersData?.quotes.USD.percent_change_30m} %`}
      />
      <PriceItem
        label="Change rate (last 1 hours)"
        value={`${tickersData?.quotes.USD.percent_change_1h} %`}
      />
      <PriceItem
        label="Change rate (last 12 hours)"
        value={`${tickersData?.quotes.USD.percent_change_12h} %`}
      />
      <PriceItem
        label="Change rate (last 24 hours)"
        value={`${tickersData?.quotes.USD.percent_change_24h} %`}
      />
    </PriceBox>
  );
}

export default Price;
