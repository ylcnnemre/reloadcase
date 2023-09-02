import React, { useState, FC, useEffect, useRef, KeyboardEvent } from 'react'
import "./style.scss"
import Openai from "openai"
import { PulseLoader } from 'react-spinners'
interface Idata {
    message: string
    from: "Chat GPT" | "You"
}

const StartChatSection = () => {
    const scrollableRef = useRef<any>(null)
    const [prompts, setPrompts] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [chatData, setChatData] = useState<Idata[]>([
        // {
        //     from: "You",
        //     message: "I want you to act as a motivational speaker. Put together words that inspire action and make people feel."
        // },
        // {
        //     from: "Chat GPT",
        //     message: "Since an open-air tennis tournament in Paris is likely to take place in the summer, it's important to wear clothing."
        // }


    ])
    const openai = new Openai({
        apiKey: import.meta.env["VITE_APIKEY"],
        dangerouslyAllowBrowser: true
    })

    const sendRequest = async () => {
        setLoading(true)
        let response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompts }],

        })

        setChatData((item => {

            return [...item, {
                from: "Chat GPT",
                message: response.choices[0].message.content ?? "bir sorun oluştu"
            }]
        }))


        setLoading(false)

    }

    useEffect(() => {

        scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight + 300

    }, [chatData])


    const sendPrompt = async () => {
        setChatData([
            ...chatData, {
                from: "You",
                message: prompts as string
            }
        ])
        setPrompts("")
        await sendRequest()

    }

    const keyDownAction = (event: KeyboardEvent<HTMLInputElement>) => {
      
        if (event.key == "Enter") {
            sendPrompt()
        }
    }


    return (
        <section className='startChat_container'  >
            <div >
                <h3 className='title'>
                    Start chatting with <span>Ai</span>
                </h3>
                <p className='describtion'>
                    Chat about any topic with ChatGPT in any time. It can be your friend, tutor or therapist.
                </p>
                <p className='startChatLink'>
                    Let’s start chat
                    <img src="arrow.svg" alt="" style={{ height: "30px", color: "red", marginLeft: "10px" }} />
                </p>
            </div>



            <div className='chat_preview' id='chatarea' >
                <div className='left_side'>
                    <p className='back_link' >
                        <img src="arrow.svg" alt="" style={{ height: "30px", color: "red", marginLeft: "10px", transform: "rotate(180deg)", marginRight: "10px" }} />
                        Back
                    </p>
                    <div className='preview_content'>
                        <p className='title'>
                            <span>AI </span> Chatbot
                        </p>
                        <p className='desc'>
                            We have trained a model called <br />
                            ChatGpt which interacts in a <br />  conversational way
                        </p>
                    </div>

                    <div className='waves1'>

                    </div>
                    <div className='waves2'>

                    </div>
                    <div className='waves3'>

                    </div>
                    <div className='waves4'>

                    </div>
                </div>
                <div className='right_side'>
                    <p className='right_side_title'>
                        <span>reload</span>.case
                    </p>
                    <div className='chat_section'>

                        <div className='message_container' ref={scrollableRef} >
                            {
                                chatData.map((item, index) => {
                                    return (
                                        <div className='message_wrapper' style={{ "backgroundColor": item.from == "Chat GPT" ? "#1A1A1A" : "transparent" }} key={index} >
                                            <div className='roundedArea'>
                                                {item.from == "Chat GPT" ? "" : "R"}
                                            </div>

                                            <div className='message_content' >
                                                <p className='who' style={{ color: item.from == "You" ? "#eee" : "#B6FBFF" }}  >
                                                    {item.from}
                                                </p>
                                                <p className='response'>
                                                    {item.message}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }


                        </div>
                        <div className='input_container'  >
                            <input type="text" placeholder='Message' onKeyDown={keyDownAction} disabled={loading} style={{ cursor: loading ? "not-allowed" : "auto" }} value={prompts} onChange={({ target: { value } }) => {
                                setPrompts(value)
                            }} />
                            {
                                loading ? (
                                    <PulseLoader color="#36d7b7" size={13} />
                                ) : (
                                    <button className='input_btn' onClick={sendPrompt} disabled={loading} style={{ cursor: loading ? "not-allowed" : "pointer" }} >
                                        →

                                    </button>
                                )


                            }



                        </div>

                    </div>


                </div>
            </div>

        </section>
    )
}

export default StartChatSection