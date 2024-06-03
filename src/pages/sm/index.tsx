import { useState, useRef, RefObject, ChangeEvent } from 'react'
import login from '@/styles/sm/login.module.className'
import { GoogleAuthProvider } from "firebase/auth";


export default function LoginForm() {

    const google = new GoogleAuthProvider();

    const [state, setState] = useState(0)

    const ref1 = useRef<HTMLInputElement>(null);
    const ref2 = useRef<HTMLInputElement>(null);
    const ref3 = useRef<HTMLInputElement>(null);
    const ref4 = useRef<HTMLInputElement>(null);

    // inputタグをそれぞれ書くのではなく、配列にしmapで描画。
    const refs: RefObject<HTMLInputElement>[] = [ref1, ref2, ref3, ref4];

    const [code, setCode] = useState(["", "", "", ""]);

    // inputタグに入力された数字に対して様々みていく
    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const value = e.target.value;

        // 入力された認証コードを保存
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        // 自動でフォーカスを移動する条件たち
        if (value.length === 1 && index < 3) {
            // フォーカスを移動
            if (refs[index + 1].current !== null) {
                refs[index + 1].current!.focus();
            }
        } else if (value.length === 0 && index > 0) {
            // 削除の場合のフォーカスも移動
            if (refs[index - 1].current !== null) {
                refs[index - 1].current!.focus();
            }
        }
    };



    return (
        <div className={login.container}>
            <header className={login.header}>
                <button className={login.back}></button>
            </header>
            {state === 0 &&
                <>
                    <h1>アプリを始めよう</h1>
                    <p>日本国内でSMS受信可能な<br />
                        電話番号を入力してください。</p>
                    <input type="text" className={login.tel} />
                    <button className={login.whiteButton} onClick={() => {
                        setState(1)
                    }}>認証コードを受け取る</button>
                </>
            }
            {state === 1 &&
                <>
                    <h1>認証コードを入力</h1>
                    <p>080-1234-5678 にSMSで送信された<br />4桁の認証コードを入力して下さい。</p>
                    <div className={login.authenticationWrap}>
                        {/* mapで描画。それぞれmaxLength(入力できる最大文字数)が1である。 */}
                        {refs.map((ref, index) => (
                            <input
                                key={index}
                                type="text"
                                className={login.authenticationInput}
                                maxLength={1}
                                ref={ref}
                                value={code[index]}
                                onChange={(e) => handleInputChange(e, index)}
                            />
                        ))}
                    </div>
                    <button className={login.whiteText} onClick={() => {
                        setState(2)
                    }}>認証コードを再送信する</button>
                </>
            }
            {state === 2 &&
                <>
                    <h1>ユーザー情報を登録</h1>
                    <div className={login.inputWrap}>
                        <label>ユーザーネーム <span className={login.optional}>任意</span></label>
                        <input type="text" className={login.input} placeholder="りょうた" />
                    </div>
                    <div className={login.inputWrap}>
                        <label>メールアドレス</label>
                        <input type="email" className={login.input} placeholder="ryota1122@gmail.com" />
                    </div>
                    <div className={login.row}>
                        <div className={login.column}>
                            <label>性別</label>
                            <select className={login.input}>
                                <option value="">未選択</option>
                                <option value="male">男性</option>
                                <option value="female">女性</option>
                                <option value="other">その他</option>
                            </select>
                        </div>
                        <div className={login.column}>
                            <label>生年月日</label>
                            <input type="date" className={login.input} placeholder="2003/11/22" />
                        </div>
                    </div>
                    <label>パスワード</label>
                    <input type="password" className={login.input} placeholder="Enter your password" />
                    <button className={login.whiteButton} onClick={() => {
                        // 登録処理をここに追加
                    }}>次へ</button>

                    <button className={login.google} onClick={()=>{google}}></button>
                </>
            }
        </div >
    )
}
