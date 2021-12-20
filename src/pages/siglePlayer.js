import {Hand, PeriodicTable} from '../components'
import { tableContent } from '../utils'

const SinglePlayer = () => {
    return (
        <div>
            <PeriodicTable content={tableContent}/>
            <Hand content={tableContent}/>
        </div>
    )
}

export default SinglePlayer;