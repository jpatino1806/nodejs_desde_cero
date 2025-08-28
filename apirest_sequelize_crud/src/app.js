import express from "express"
import routerArticle from './routes/articleRoute.js'
import routerUser from './routes/userRoute.js'
import routerUserProfile from './routes/userProfileRoute.js'


export const app = express();
app.use(express.json())
app.use('/api/Article', routerArticle)
app.use('/api/User', routerUser)
app.use('/api/UserProfile', routerUserProfile)