import Vue from 'vue';
import VueX from 'vuex';

Vue.use(VueX);

export const store = new VueX.Store({
    state: {
        fund: 1000,
        'available-stocks': [
            { 'title': 'BMW', price: 100 },
            { 'title': 'Apple', price: 186 },
            { 'title': 'Google', price: 150 },
            { 'title': 'Tesla', price: 210 }
        ],
        'your-stocks': []
    },
    getters: {
        'getFund'(state) {
            var fund = String(state.fund);
            if (fund.indexOf('.') < 0) {
                fund += '.00';
            }
            else {
                fund = fund.substr(0, fund.indexOf('.')) + fund.substr(fund.indexOf('.')).padEnd(3, '0');
            }
            return '$' + fund;
        },
        'getAvailableStocks'(state) {
            var stocks = [];
            state["available-stocks"].forEach((value, index) => {
                var stock = String(value['price']);
                if (stock.indexOf('.') < 0) {
                    stock += '.00';
                }
                else {
                    stock = stock.substr(0, stock.indexOf('.')) + stock.substr(fund.indexOf('.')).padEnd(3, '0');
                }
                stock = '$' + stock;
                stocks.push({ 'title': value['title'], 'price': stock });
            });
            return stocks;
        },
        // 'get'
    }
});