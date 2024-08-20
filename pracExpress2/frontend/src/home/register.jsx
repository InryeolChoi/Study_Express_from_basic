import React from "react";

const Register = () => {
    return (
        <div>
            <h2>회원가입</h2>
            <form>
                <div>
                    <label>이메일:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>비밀번호:</label>
                    <input type='password' />
                </div>
                <div>
                    <label>유저명:</label>
                    <input type="text" />
                </div>
                <button type="submit">회원가입</button>
            </form>
        </div>
    )
}

export default Register;