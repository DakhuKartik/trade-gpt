import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { placeOrder } from "./trade";
import {z} from "zod";

// create a MCP server
const server = new McpServer({
    name: "demo" ,
    version:"1.0.0"
});

// buy a stock
server.tool("buy-stock",{
    stock: z.string(), qty: z.number()},
    async({stock,qty}) =>{
        placeOrder(stock, qty,"BUY");   
        return{
            content: [{type: "text", text: "Stock has been bought"}]
        }
    }
)
// sell a stock
server.tool("buy-stock",{
    stock: z.string(), qty: z.number()},
    async({stock,qty}) =>{
        placeOrder(stock, qty,"SELL");   
        return{
            content: [{type: "text", text: "Stock has been Sold"}]
        }
    }
)







// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport);
