import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectdb} from "./lib/db.js"


const app =  express()


app.use(cors())._router
app.use(express.json())


app.get('/', (req, res) => res.send('server is live now on port 8000!!'))

await connectdb()

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("server is running on this port", PORT);
}) 