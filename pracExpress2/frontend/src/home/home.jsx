import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const Navigate = useNavigate();

    return (
        <div>
            <header>
                <button onClick={() => Navigate("/login")}>로그인</button>
                <button >시작하기</button>
            </header>

            <main>
                <h1>Welcome to Our Social Network!</h1>
                <p>Connect with friends, share your moments, and explore new experiences.</p>
            </main>

            <footer>
                <p>처음 시작하시는 분인가요?</p>
                <button onClick={() => Navigate("/register")}>회원가입</button>

            </footer>
        </div>
    )
}

export default Home;