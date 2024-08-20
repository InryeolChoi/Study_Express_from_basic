import React from "react";

const Login = () => {
    return (
        <div>
            <h2>로그인</h2>
            <form>
                <div>
                    <label>이메일: </label>
                    <input type="text"/>
                </div>
                <div>
                    <label>비밀번호: </label>
                    <input type="password"/>
                </div>
                <button type="submit">로그인</button>
            </form>
        </div>
    )
}

export default Login;