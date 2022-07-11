function maxProfit(prices: number[]): number {
    let mini:number=Number.MAX_VALUE;
    let maxProfit:number=0;
    for(var i=0;i<prices.length;i++){
        mini=Math.min(mini,prices[i]);
        maxProfit=Math.max(maxProfit,prices[i]-mini);
    }
    return maxProfit;
};