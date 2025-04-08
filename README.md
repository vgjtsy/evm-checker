# EVM Checker 🐆

## Установка

```
npm install
```

## Настройки

### Подготовка файла с адресами
1. Добавьте в файл `wallets.txt` адреса кошельков, по одному на строку
2. Формат адресов:
   - EVM-адрес (0x...)
   - Или приватный ключ (если хотите видеть его в результатах)

### Настройка токенов для проверки
1. Перейдите в папку `config`
2. Выберите файл с нужной сетью (например, `ethereum.ts`)
3. В массиве `COLUMNS` укажите:
   - `"native"` для нативной валюты
   - Адреса контрактов ERC-20 токенов
4. Порядок токенов в массиве определяет порядок колонок в результатах

## Запуск

### Основной режим
```bash
npm start
```
- Запустится интерактивное меню выбора сети
- Используйте стрелки вверх/вниз для выбора
- Нажмите Enter для подтверждения

### Запуск конкретной сети
```bash
npm run arbitrum    # для Arbitrum
npm run ethereum    # для Ethereum
npm run polygon     # для Polygon
# и т.д.
```

### Результаты
1. После завершения проверки результаты сохранятся в папке `results`
2. Файл будет назван по имени сети (например, `ethereum.csv`)
3. Формат CSV с разделителем `;`
4. В конце таблицы будет строка с итогами по всем токенам

---

**Доступные сети:**
1. Apechain
2. Arbitrum
3. Arbitrum Nova
4. Avalanche
5. Base
6. Base Goerli
7. Base Sepolia
8. Berachain
9. Blast
10. BNB
11. Celo
12. Ethereum
13. Ethereum Sepolia
14. Fantom
15. Gnosis
16. Harmony
17. Linea
18. MegaETH
19. Monad Testnet
20. Optimism
21. Polygon
22. Polygon_zkEVM
23. Ronin
24. Scroll
25. Soneium
26. Unichain
27. Xterio
28. zkSync
29. Zora

---

Анонсы и статьи: https://t.me/raznorabochiy_notes 

Вопросы и обсуждения:
https://t.me/raznorabochiy_chat

---

**Поблагодарить автора можно отправив донат в любой evm сети на:**

`0xE8eAbec7CE9e8Bf78A766E8556E542BC2C9446ae`
