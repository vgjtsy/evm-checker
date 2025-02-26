# EVM Checker 🐆

## Установка

```
npm install
```

## Настройки

Кладём EVM-адреса в файл _wallets.txt_

При желании в wallets.txt можно класть приватники вместо адресов, тогда они тоже
будут отображаться в итоговой таблице вместе с адресом, но это не обязательно.

В папке config выберите файл с конкретным именем сети и добавьте нужные
контракты ERC-20 токенов и очерёдность колонок в отчёте (константа COLUMNS)

## Запуск

`npm start` — основной режим с выбором сети стрелками вверх/вниз

`npm run arbitrum` — запуск проверки в конкретной сети

После завершения скрипта результаты работы в папке results

---

**Доступные сети:**
1. Arbitrum
2. Arbitrum Nova
3. Avalanche
4. Celo
5. Gnosis
6. Harmony
7. Polygon_zkEVM
8. Base
9. Base Goerli
10. Base Sepolia
11. Monad Testnet
12. Blast
13. BNB
14. Ethereum
15. Fantom
16. Linea
17. Optimism
18. Polygon
19. Scroll
20. zkSync
21. Zora

---

Анонсы и статьи: https://t.me/raznorabochiy_notes Вопросы и обсуждения:
https://t.me/raznorabochiy_chat

---

**Поблагодарить автора можно отправив донат в любой evm сети на:**

`0xE8eAbec7CE9e8Bf78A766E8556E542BC2C9446ae`

или

raznorabochiy.eth
