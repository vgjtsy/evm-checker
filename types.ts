export enum Network {
  ARBITRUM = "arbitrum",
  ARBITRUM_NOVA = "arbitrum-nova",
  APECHAIN = "apechain",
  AVALANCHE = "avalanche",
  BASE = "base",
  BASE_GOERLI = "base-goerli",
  BASE_SEPOLIA = "base-sepolia",
  BERACHAIN = "berachain",
  BLAST = "blast",
  BNB = "bnb",
  CELO = "celo",
  ETHEREUM = "ethereum",
  ETHEREUM_SEPOLIA = "ethereum-sepolia",
  FANTOM = "fantom",
  GNOSIS = "gnosis",
  HARMONY = "harmony",
  LINEA = "linea",
  MEGAETH = "megaeth",
  MONAD_TESTNET = "monad-testnet",
  OPTIMISM = "optimism",
  POLYGON = "polygon",
  POLYGON_ZKEVM = "polygon_zkevm",
  RONIN = "ronin",
  SCROLL = "scroll",
  SONEIUM = "soneium",
  UNICHAIN = "unichain",
  XTERIO = "xterio",
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
