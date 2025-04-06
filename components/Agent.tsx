import React from 'react'
import Image from "next/image";

enum CallStatus {
    INACTYIVE = 'INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
}
const Agent = ({username}: AgentProps) => {
    const isSpeaking = true;
    const callStatus = CallStatus.FINISHED;
    const messagess = ['What is your name', 'My name is Kien, nice to meet you !'];
    const lastMessage = messagess[messagess.length - 1]
    return (
        <>
            <div className="call-view">
                <div className="card-interview">
                    <div className="avatar">
                        <Image src="/ai-avatar.png" alt="vapi" width={65} height={54} className="object-cover"/>
                        {isSpeaking && <div className="animate-speak"/>}
                    </div>
                    <h3>AI Interiewer</h3>
                </div>
                <div className="card-border">
                    <div className="card-content">
                        <Image src="/user-avatar.png" alt="user avatar" width={540} height={540} className="rounded-full object-cover size-[120px]"/>
                        <h3>{username}</h3>
                    </div>
                </div>
            </div>
            {messagess.length > 0 && (
                <div className="transcript-border">
                    <div className="transcript">
                        <p key={lastMessage} className="cn('transition-opacity duration-500 opacity-0', 'animate-fade-in opacity-100')">
                            {lastMessage}
                        </p>
                    </div>
                </div>
            )}

            <div className="w-full flex justify-center">
                {callStatus !== 'ACTIVE' ? (
                    <button className="relative btn-call">
                        <span className={cn('absolute animate-ping rounded-full opacity-75', callStatus !== 'CONNECTING' && 'hidden')}
                          />
                        <span>
                               {callStatus === 'INACTIVE' || callStatus === 'FINISHED' ? 'Call' : '...'}
                        </span>
                    </button>
                ):(
                    <button className="btn-disconnect">
                        End
                    </button>
                )
                }
            </div>
        </>
    )
}
export default Agent
