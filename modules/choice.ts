import inquirer from "inquirer";
import { Network } from "../types";

function counter(startIndex = 0) {
  let index = startIndex;
  return () => index = index + 1;
}

const getNextIndex = counter();

export async function chooseNetwork(): Promise<Network> {
  const questions = [
    {
      name: "choice",
      type: "list",
      message: "Сеть:",
      choices: [
        {
          name: `${getNextIndex()}) Arbitrum`,
          value: Network.ARBITRUM,
        },
        {
          name: `${getNextIndex()}) Arbitrum Nova`,
          value: Network.ARBITRUM_NOVA,
        },
        {
          name: `${getNextIndex()}) Avalanche`,
          value: Network.AVALANCHE,
        },
        {
          name: `${getNextIndex()}) Celo`,
          value: Network.CELO,
        },
        {
          name: `${getNextIndex()}) Gnosis`,
          value: Network.GNOSIS,
        },
        {
          name: `${getNextIndex()}) Harmony`,
          value: Network.HARMONY,
        },
        {
          name: `${getNextIndex()}) Polygon_zkEVM`,
          value: Network.POLYGON_ZKEVM,
        },
        {
          name: `${getNextIndex()}) Base`,
          value: Network.BASE,
        },
        {
          name: `${getNextIndex()}) Base Goerli`,
          value: Network.BASE_GOERLI,
        },
        {
          name: `${getNextIndex()}) Base Sepolia`,
          value: Network.BASE_SEPOLIA,
        },
        {
          name: `${getNextIndex()}) Ethereum Sepolia`,
          value: Network.ETHEREUM_SEPOLIA,
        },
        {
          name: `${getNextIndex()}) Monad Testnet`,
          value: Network.MONAD_TESTNET,
        },
        {
          name: `${getNextIndex()}) Sahara Testnet`,
          value: Network.SAHARA_TESTNET,
        },
        {
          name: `${getNextIndex()}) Blast`,
          value: Network.BLAST,
        },
        {
          name: `${getNextIndex()}) BNB`,
          value: Network.BNB,
        },
        {
          name: `${getNextIndex()}) Ethereum`,
          value: Network.ETHEREUM,
        },
        {
          name: `${getNextIndex()}) Fantom`,
          value: Network.FANTOM,
        },
        {
          name: `${getNextIndex()}) Linea`,
          value: Network.LINEA,
        },
        {
          name: `${getNextIndex()}) Optimism`,
          value: Network.OPTIMISM,
        },
        {
          name: `${getNextIndex()}) Polygon`,
          value: Network.POLYGON,
        },
        {
          name: `${getNextIndex()}) Scroll`,
          value: Network.SCROLL,
        },
        {
          name: `${getNextIndex()}) Xterio`,
          value: Network.XTERIO,
        },
        {
          name: `${getNextIndex()}) MegaETH`,
          value: Network.MEGAETH,
        },
        {
          name: `${getNextIndex()}) zkSync`,
          value: Network.ZKSYNC,
        },
        {
          name: `${getNextIndex()}) Zora`,
          value: Network.ZORA,
        },
      ],
      loop: false,
    },
  ];

  const result = await inquirer.prompt(questions);
  return result.choice;
}
