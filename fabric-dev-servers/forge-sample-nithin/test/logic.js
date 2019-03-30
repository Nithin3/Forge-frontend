/**
 * Track the trade of a commodity from one trader to another
 * @param {org.forgesample.mynetwork.Trade} trade - the trade to be processed
 * @transaction
 */

async function tradeItem(trade) {
    trade.item.owner = trade.newOwner;
    let assetRegistry = await getAssetRegistry('org.forgesample.mynetwork.Item');
    await assetRegistry.update(trade.item);

    
}