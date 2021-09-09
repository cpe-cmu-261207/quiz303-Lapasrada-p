import { comments, CommentType } from "../data/comments"
import reply from './reply'

const comment = ({ username, userImagePath, commentText, likeNum, replies }: CommentType) => {

    return (
        <><div className="flex p-2 items-start space-x-2">
            <img className="w-10 w-10 rounded-full" src={userImagePath}></img>
            <div className="bg-gray-200 rounded-lg p-2">
                <p className="font-semibold">{username}</p>
                <p>{commentText}</p>
                {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
                {likeNum == 0 ?
                    <div></div> :
                    <div className='flex items-center'>
                        <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                        <p className='text-gray-500'>{likeNum}</p>
                    </div>}
            </div>
        </div><div>
                {replies.map(e => <reply>username ={e.username} userImagePath={e.userImagePath} commentText={commentText} likeNum={likeNum} replies={replies}></reply>)}
            </div></>

    )
}