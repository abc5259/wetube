import express from "express";
import morgan from 'morgan';
import helmet from "helmet";
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import {localsMiddleware} from "./localsMiddleware";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
const app = express();

//middleware
app.use(helmet()); //보안
app.set('view engine', 'pug');
app.use(cookieParser()); //cookie에 유저정보를 저장
app.use(bodyParser.json()); //서버가 json을 이해하기위해
app.use(bodyParser.urlencoded({ extended: true})); //서버가 form을 이해하기위해
app.use(morgan("dev")); //logging 기능
app.use(localsMiddleware); //지역변수를 전역변수로 바꿔주는 middleware

//router
app.use(routes.home,globalRouter); // "/"
app.use(routes.users,userRouter); //use뜻 누군가 정해진 Path로 이동했을때 Router전체를 사용하겠다는 의미 "/users/"
app.use(routes.videos,videoRouter); // "/videos/"

export default app; //app.js 수출

// M : Model = 데이터
// V : View = 데이터가 어떻게 생겼는지 [pug] [html,css]
// C : Control = 데이터를 찾는 함수 [0]