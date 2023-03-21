import { useImmer } from "use-immer";


export default function GlobalMutation(DATA){
    const [updateCommon] = useImmer(DATA);



    function SET_NOT(targetdata){
        updateCommon((common) => {
            common[targetdata] = !common[targetdata]
        })
    }
}