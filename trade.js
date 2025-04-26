import { KiteConnect } from "kiteconnect";

const apiKey = "m0sckzi9w0yqxfh1";
const apiSecret = "m4mv00h2lrdf19rfwe6aurz7336qi0fe";
const requestToken = "8lTqpd8fHmRpD4Vj1W7IDZs26e7Hornb";

const kc = new KiteConnect({ api_key: apiKey });
let accessToken = "ysndsjBMKRNS9ooloGGZujban1vmGzxF";

console.log(kc.getLoginURL());

async function init() {
    try {
        await generateSession();
        await getProfile();
    } catch (err) {
        console.error(err);
    }
}

async function generateSession() {
    try {
        // const response = await kc.generateSession(requestToken, apiSecret);
        kc.setAccessToken(accessToken);
    } catch (err) {
        console.error("Error generating session:", err);
    }
}

async function getProfile() {
    try {
        const profile = await kc.getProfile();
        console.log("Profile:", profile);
    } catch (err) {
        console.error("Error getting profile:", err);
    }
}
// async function placeOrder(){
//     try{
//         const profile = await kc.placeOrder("regular",{

//         });
//         console.log("Profile: ", profile);
//     }catch(err){
//         console.log("error is : ", err );   
//     }
// }
export async function placeOrder(tradingsymbol: String, quantity: Number, type: "BUY" | "SELL") {
    try {
        const profile = await kc.placeOrder("amo", {
            exchange: "NSE",
            tradingsymbol,
            transaction_type: type,
            quantity,
            product: "CNC",
            order_type: "MARKET"
        });
        console.log("Profile:", profile);
    } catch (err) {
        console.error("Error getting profile: ", err)
    }
}

async function PortfHolding(params: type) {

}
// Initialize the API calls
init();