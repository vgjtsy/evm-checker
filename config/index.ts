import { Config, Network } from "../types";

import { 
  COLUMNS as COLUMNS_APECHAIN, 
  RPC_URL as RPC_URL_APECHAIN 
} from "./apechain";

import {
  COLUMNS as COLUMNS_ARBITRUM,
  RPC_URL as RPC_URL_ARBITRUM,
} from "./arbitrum";

import {
  COLUMNS as COLUMNS_ARBITRUM_NOVA,
  RPC_URL as RPC_URL_ARBITRUM_NOVA,
} from "./arbitrum-nova";

import {
  COLUMNS as COLUMNS_AVALANCHE,
  RPC_URL as RPC_URL_AVALANCHE,
} from "./avalanche";

import { 
  COLUMNS as COLUMNS_BASE, 
  RPC_URL as RPC_URL_BASE 
} from "./base";

import {
  COLUMNS as COLUMNS_BASE_GOERLI,
  RPC_URL as RPC_URL_BASE_GOERLI,
} from "./base-goerli";

import {
  COLUMNS as COLUMNS_BASE_SEPOLIA,
  RPC_URL as RPC_URL_BASE_SEPOLIA,
} from "./base-sepolia";

import { 
  COLUMNS as COLUMNS_BERACHAIN, 
  RPC_URL as RPC_URL_BERACHAIN 
} from "./berachain";

import { 
  COLUMNS as COLUMNS_BLAST, 
  RPC_URL as RPC_URL_BLAST
} from "./blast";

import { 
  COLUMNS as COLUMNS_BNB, 
  RPC_URL as RPC_URL_BNB 
} from "./bnb";

import {
  COLUMNS as COLUMNS_CELO,
  RPC_URL as RPC_URL_CELO,
} from "./celo";

import {
  COLUMNS as COLUMNS_ETHEREUM,
  RPC_URL as RPC_URL_ETHEREUM,
} from "./ethereum";

import {
  COLUMNS as COLUMNS_ETHEREUM_SEPOLIA,
  RPC_URL as RPC_URL_ETHEREUM_SEPOLIA,
} from "./ethereum-sepolia";

import { 
  COLUMNS as COLUMNS_FANTOM, 
  RPC_URL as RPC_URL_FANTOM 
} from "./fantom";

import {
  COLUMNS as COLUMNS_GNOSIS,
  RPC_URL as RPC_URL_GNOSIS,
} from "./gnosis";

import {
  COLUMNS as COLUMNS_HARMONY,
  RPC_URL as RPC_URL_HARMONY,
} from "./harmony";

import { 
  COLUMNS as COLUMNS_LINEA, 
  RPC_URL as RPC_URL_LINEA 
} from "./linea";

import { 
  COLUMNS as COLUMNS_MEGAETH, 
  RPC_URL as RPC_URL_MEGAETH 
} from "./megaeth";

import {
  COLUMNS as COLUMNS_MONAD_TESTNET,
  RPC_URL as RPC_URL_MONAD_TESTNET,
} from "./monad-testnet";

import {
  COLUMNS as COLUMNS_OPTIMISM,
  RPC_URL as RPC_URL_OPTIMISM,
} from "./optimism";

import {
  COLUMNS as COLUMNS_POLYGON,
  RPC_URL as RPC_URL_POLYGON,
} from "./polygon";

import {
  COLUMNS as COLUMNS_POLYGON_ZKEVM,
  RPC_URL as RPC_URL_POLYGON_ZKEVM,
} from "./polygon_zkevm";

import {
  COLUMNS as COLUMNS_RONIN,
  RPC_URL as RPC_URL_RONIN,
} from "./ronin";

import { 
  COLUMNS as COLUMNS_SCROLL, 
  RPC_URL as RPC_URL_SCROLL 
} from "./scroll";

import { 
  COLUMNS as COLUMNS_SONEIUM, 
  RPC_URL as RPC_URL_SONEIUM 
} from "./soneium";

import { 
  COLUMNS as COLUMNS_UNICHAIN, 
  RPC_URL as RPC_URL_UNICHAIN 
} from "./unichain";

import { 
  COLUMNS as COLUMNS_XTERIO, 
  RPC_URL as RPC_URL_XTERIO 
} from "./xterio";

import {
  COLUMNS as COLUMNS_ZKSYNC,
  MULTICALL3_CONTRACT as MULTICALL3_CONTRACT_ZKSYNC,
  RPC_URL as RPC_URL_ZKSYNC,
} from "./zksync";

import { 
  COLUMNS as COLUMNS_ZORA, 
  RPC_URL as RPC_URL_ZORA 
} from "./zora";



export const CONFIG: Config = {
  [Network.APECHAIN]: {
    RPC_URL: RPC_URL_APECHAIN,
    COLUMNS: COLUMNS_APECHAIN,
  },

  [Network.ARBITRUM]: {
    RPC_URL: RPC_URL_ARBITRUM,
    COLUMNS: COLUMNS_ARBITRUM,
  },

  [Network.ARBITRUM_NOVA]: {
    RPC_URL: RPC_URL_ARBITRUM_NOVA,
    COLUMNS: COLUMNS_ARBITRUM_NOVA,
  },

  [Network.AVALANCHE]: {
    RPC_URL: RPC_URL_AVALANCHE,
    COLUMNS: COLUMNS_AVALANCHE,
  },

  [Network.BASE]: {
    RPC_URL: RPC_URL_BASE,
    COLUMNS: COLUMNS_BASE,
  },

  [Network.BASE_GOERLI]: {
    RPC_URL: RPC_URL_BASE_GOERLI,
    COLUMNS: COLUMNS_BASE_GOERLI,
  },

  [Network.BASE_SEPOLIA]: {
    RPC_URL: RPC_URL_BASE_SEPOLIA,
    COLUMNS: COLUMNS_BASE_SEPOLIA,
  },

  [Network.BERACHAIN]: {
    RPC_URL: RPC_URL_BERACHAIN,
    COLUMNS: COLUMNS_BERACHAIN,
  },

  [Network.BLAST]: {
    RPC_URL: RPC_URL_BLAST,
    COLUMNS: COLUMNS_BLAST,
  },

  [Network.BNB]: {
    RPC_URL: RPC_URL_BNB,
    COLUMNS: COLUMNS_BNB,
  },

  [Network.CELO]: {
    RPC_URL: RPC_URL_CELO,
    COLUMNS: COLUMNS_CELO,
  },

  [Network.ETHEREUM]: {
    RPC_URL: RPC_URL_ETHEREUM,
    COLUMNS: COLUMNS_ETHEREUM,
  },

  [Network.ETHEREUM_SEPOLIA]: {
    RPC_URL: RPC_URL_ETHEREUM_SEPOLIA,
    COLUMNS: COLUMNS_ETHEREUM_SEPOLIA,
  },

  [Network.FANTOM]: {
    RPC_URL: RPC_URL_FANTOM,
    COLUMNS: COLUMNS_FANTOM,
  },

  [Network.GNOSIS]: {
    RPC_URL: RPC_URL_GNOSIS,
    COLUMNS: COLUMNS_GNOSIS,
  },

  [Network.HARMONY]: {
    RPC_URL: RPC_URL_HARMONY,
    COLUMNS: COLUMNS_HARMONY,
  },

  [Network.LINEA]: {
    RPC_URL: RPC_URL_LINEA,
    COLUMNS: COLUMNS_LINEA,
  },

  [Network.MEGAETH]: {
    RPC_URL: RPC_URL_MEGAETH,
    COLUMNS: COLUMNS_MEGAETH,
  },

  [Network.MONAD_TESTNET]: {
    RPC_URL: RPC_URL_MONAD_TESTNET,
    COLUMNS: COLUMNS_MONAD_TESTNET,
  },

  [Network.OPTIMISM]: {
    RPC_URL: RPC_URL_OPTIMISM,
    COLUMNS: COLUMNS_OPTIMISM,
  },

  [Network.POLYGON]: {
    RPC_URL: RPC_URL_POLYGON,
    COLUMNS: COLUMNS_POLYGON,
  },

  [Network.POLYGON_ZKEVM]: {
    RPC_URL: RPC_URL_POLYGON_ZKEVM,
    COLUMNS: COLUMNS_POLYGON_ZKEVM,
  },

  [Network.RONIN]: {
    RPC_URL: RPC_URL_RONIN,
    COLUMNS: COLUMNS_RONIN,
  },

  [Network.SCROLL]: {
    RPC_URL: RPC_URL_SCROLL,
    COLUMNS: COLUMNS_SCROLL,
  },

  [Network.SONEIUM]: {
    RPC_URL: RPC_URL_SONEIUM,
    COLUMNS: COLUMNS_SONEIUM,
  },

  [Network.UNICHAIN]: {
    RPC_URL: RPC_URL_UNICHAIN,
    COLUMNS: COLUMNS_UNICHAIN,
  },

  [Network.XTERIO]: {
    RPC_URL: RPC_URL_XTERIO,
    COLUMNS: COLUMNS_XTERIO,
  },

  [Network.ZKSYNC]: {
    RPC_URL: RPC_URL_ZKSYNC,
    COLUMNS: COLUMNS_ZKSYNC,
    MULTICALL3_CONTRACT: MULTICALL3_CONTRACT_ZKSYNC,
  },

  [Network.ZORA]: {
    RPC_URL: RPC_URL_ZORA,
    COLUMNS: COLUMNS_ZORA,
  },
};
