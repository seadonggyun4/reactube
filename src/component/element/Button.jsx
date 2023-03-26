export default function Button({children, onClick, type, className}){

    function buttonType(type){
        switch (type){
            case 'circle':
                return "bg-primary mx-3 p-3 rounded-full transition hover:bg-blue-500"
            default :
                return "bg-primary mx-3 p-3 rounded transition hover:bg-blue-500"
        }
    }

    return(
        <button className={`${buttonType(type)} ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}