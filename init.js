import "./db";
import app from "./app";
import dotenv from "dotenv";
// 찾은 모든 변수들을 process.env.key에 저장된다.
dotenv.config(); //.env 파일 안에 있는 정보를 불러올 수 있다.
import "./models/Video"
import "./models/Comment"
const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`✅  Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);