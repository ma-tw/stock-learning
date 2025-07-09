document.addEventListener('DOMContentLoaded', () => {
    const assetBalanceElement = document.getElementById('asset-balance');

    if (assetBalanceElement) {
        const initialAssets = 5000000;
        assetBalanceElement.textContent = initialAssets.toLocaleString();
    }

    fetchStockPrices();
});

async function fetchStockPrices() {
    try {
        const response = await fetch('/api/stock-prices');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched stock prices:', data);
    } catch (error) {
        console.error('Failed to fetch stock prices:', error);
    }
}