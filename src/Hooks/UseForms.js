import { useState } from "react"

const params = {
    init: {}
}
const UseFrom = ({init}) => {
    const [state, setState] = useState(mapValuesToState(init))
    return {
        formState: state
    }
}
export default UseFrom

const mapValuesToState = (values) => {
    return Object.keys(values).reduce((acc, key) => {
        acc[key] = {
            value: values[key],
            error: "",
            focused: false,
            touched: false
        }
        return acc
    }, {})
}
