export enum Network {
  ARBITRUM = "arbitrum",
  ARBITRUM_NOVA = "arbitrum-nova",
  AVALANCHE = "avalanche",
  BASE = "base",
  BASE_GOERLI = "base-goerli",
  BASE_SEPOLIA = "base-sepolia",
  BERACHAIN_TESTNET = "berachain-testnet",
  BLAST = "blast",
  BNB = "bnb",
  CELO = "celo",
  ETHEREUM = "ethereum",
  FANTOM = "fantom",
  GNOSIS = "gnosis",
  HARMONY = "harmony",
  LINEA = "linea",
  OPTIMISM = "optimism",
  POLYGON = "polygon",
  POLYGON_ZKEVM = "polygon_zkevm",
  SCROLL = "scroll",
  ZKSYNC = "zksync",
  ZORA = "zora",
}

export type Config = {
  [key in Network]: {
    RPC_URL: string;
    COLUMNS: string[];
    MULTICALL3_CONTRACT?: string;
  };
};
