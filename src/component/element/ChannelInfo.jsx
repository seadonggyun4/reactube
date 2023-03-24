export default function ChannelInfo({imgURL, name}){
    console.log("✨ChannelInfo✨")


    return(
        <div className="flex my-4 mb-8 items-center gap-3">
            {imgURL &&
                <img className="w-10 h-10 rounded-full" src={imgURL} alt={name}
            />}
            <div className="text-lg font-medium">{name}</div>
        </div>
    )
}