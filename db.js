import mongoose from "mongoose";
import dotenv from "dotenv";
// 찾은 모든 변수들을 process.env.key에 저장된다.
dotenv.config(); //.env 파일 안에 있는 정보를 불러올 수 있다.


mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true //내가 추가한것
  }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);