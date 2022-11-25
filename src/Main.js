// 연결 메인페이지 백그라운드 이미지 변경 필요
import './Main.css';
import {Route, Routes, useNavigate} from "react-router-dom";

function Main(){

    const backend_url = "203.250.~~"

    const navigate = useNavigate();
    const move = () => {
        navigate(`/App`);
    };

    return(
    <div title="content" className="nav">
        <h1 id="title">FREE WI-FI ZONE</h1>
        <p>여기는 FREE WI-FI ZONE 입니다.</p>
        <p>개인정보 동의를 통해 무료로 무선</p>
        <p>인터넷을 제공하는 장소입니다. 개인정보</p>
        <p>입력으로 별도 가입없이 무선인터넷을</p>
        <p>무료로 이용하실 수 있습니다. 무료 인터넷</p>
        <p>제공 시간에 제한은 없으며, 4시간마다</p>
        <p>재인증을 통해 계속하여 사용하실 수 있습니다.</p>
        <button className="ci" type="button" onClick={move}>개인정보 이용동의하기</button>
    </div>
    );
}


export default Main;